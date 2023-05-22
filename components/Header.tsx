import React, { useEffect, useState, FC } from "react";
import black from "../public/black.png";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import clsx from "clsx";
import classes from "../styles/Header.module.scss";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [isSticky, setSticky] = useState(false);

  const setIsSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop > 0 ? setSticky(true) : setSticky(false);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", setIsSticky);
    return () => {
      window.removeEventListener("scroll", setIsSticky);
    };
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    if (width > 768) {
      setMenuOpen(true);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuToggleHandler = () => {
    setMenuOpen(false);
  };

  let navStyle = "";
  if (width < 768 && menuOpen) {
    navStyle = classes.isMenuOpen;
  }
  if (width < 768 && !menuOpen) {
    navStyle = classes.isMenuNotOpen;
  }

  return (
    <header
      className={clsx(
        classes.header,
        isSticky ? classes.sticky : classes.notSticky
      )}
    >
      <div className={classes.header__content}>
        <Link href="/" className={classes.header__content__logo}>
          <div>
            <Image src={black} alt="" width="50" height="50" />
          </div>
        </Link>

        <NavComponent
          menuToggleHandler={menuToggleHandler}
          extraClasses={navStyle}
        />
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <MenuIcon onClick={() => setMenuOpen(true)} />
          ) : (
            <CloseIcon onClick={() => setMenuOpen(false)} />
          )}
        </div>
      </div>
    </header>
  );
};

const NavComponent: FC<{
  menuToggleHandler: () => void;
  extraClasses?: string;
}> = ({ menuToggleHandler, extraClasses }) => {
  return (
    <nav className={clsx(classes.header__content__nav, extraClasses)}>
      <ul className={classes.header}>
        <li>
          <Link href="/allprojects" onClick={menuToggleHandler}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/aboutus" onClick={menuToggleHandler}>
            About us
          </Link>
        </li>
        <li>
          <Link href="/contact-us" onClick={menuToggleHandler}>
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
