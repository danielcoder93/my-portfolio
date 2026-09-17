import Link from "next/link";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`site-container ${styles.grid}`}>
        <div className={styles.brandColumn}>
          <Link href="/" className={styles.brand}>
            <span aria-hidden="true">CR</span>
            <strong>Created Revolution</strong>
          </Link>
          <p>
            Websites, local visibility, and inquiry tracking for HVAC,
            plumbing, and roofing companies.
          </p>
          <a href="mailto:dan@createdrevolution.com">
            dan@createdrevolution.com
          </a>
        </div>

        <div>
          <h2>Explore</h2>
          <nav className={styles.links} aria-label="Footer navigation">
            <Link href="/services">Services</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/our-work">Our Work</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>

        <div>
          <h2>Ready for a clearer plan?</h2>
          <p>
            Get a practical review of your website, local visibility, and
            strongest next opportunity.
          </p>
          <Link href="/free-website-review" className="button button-light">
            Request a Free Review
          </Link>
        </div>
      </div>

      <div className={`site-container ${styles.bottom}`}>
        <p>
          © {new Date().getFullYear()} Created Revolution. All rights reserved.
        </p>
        <div>
          <span>Florida-based · Serving contractors nationwide</span>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
