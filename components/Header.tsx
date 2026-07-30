import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Header.module.scss";

const Header = () => {
  const router = useRouter();
  const [menuState, setMenuState] = useState({ path: router.asPath, open: false });
  const menuOpen = menuState.path === router.asPath && menuState.open;

  return (
    <header className={styles.header}>
      <div className={`site-container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="Created Revolution home">
          <span className={styles.brandMark} aria-hidden="true">
            CR
          </span>
          <span className={styles.brandText}>
            Created
            <strong>Revolution</strong>
          </span>
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() =>
            setMenuState((current) => ({
              path: router.asPath,
              open: current.path === router.asPath ? !current.open : true,
            }))
          }
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          aria-label="Primary navigation"
        >
          <Link href="/services">Services</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/our-work">Our Work</Link>
          <Link href="/about">About</Link>
          <Link href="/free-website-review" className={styles.navCta}>
            Free Website Review
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
