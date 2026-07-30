import Link from "next/link";
import SiteHead from "../components/SiteHead";
import styles from "../styles/Site.module.scss";

const NotFound = () => {
  return (
    <>
      <SiteHead
        title="Page Not Found"
        description="The requested Created Revolution page could not be found."
        path="/404"
      />
      <section className="section">
        <div className="narrow-container">
          <span className="eyebrow">404</span>
          <h1 style={{ marginBottom: "24px" }}>This page is off the map.</h1>
          <p style={{ marginBottom: "30px", fontSize: "1.1rem" }}>
            The page may have moved during the Created Revolution rebuild. Head
            home or request a free website review.
          </p>
          <div className={styles.buttonRow}>
            <Link href="/" className="button button-secondary">
              Go Home
            </Link>
            <Link
              href="/free-website-review"
              className="button button-primary"
            >
              Request a Free Review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
