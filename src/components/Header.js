import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import clsx from "clsx";
import img1 from "../assets/black.png";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
  const [isSticky, setSticky] = useState(false);

  const setIsSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop > 0 ? setSticky(true) : setSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", setIsSticky);
    return () => {
      window.removeEventListener("scroll", setIsSticky);
    };
  });

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  console.log(size);

  return (
    <header
      className={clsx(
        classes.header,
        isSticky ? classes.sticky : classes.notSticky
      )}
    >
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
          <div>
            <img src={img1} alt="" />
          </div>
        </Link>

        {size >= 768 && <NavComponent />}
        {size < 768 && menuOpen && (
          <NavComponent
            menuToggleHandler={menuToggleHandler}
            extraClasses={classes.isMenuOpen}
          />
        )}
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

const NavComponent = ({ menuToggleHandler, extraClasses }) => {
  return (
    <nav
      className={clsx(
        classes.header__content__nav,
        extraClasses && extraClasses
      )}
    >
      <ul>
        <li>
          <Link to="/projects" onClick={menuToggleHandler}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/page-two" onClick={menuToggleHandler}>
            PageTwo
          </Link>
        </li>
        <li>
          <Link to="/page-three" onClick={menuToggleHandler}>
            PageThree
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
