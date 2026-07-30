import LeadForm from "../components/LeadForm";
import SiteHead from "../components/SiteHead";
import styles from "../styles/Site.module.scss";

const FreeWebsiteReview = () => {
  return (
    <>
      <SiteHead
        title="Free Website Review"
        description="Request a free contractor website and local visibility review from Created Revolution."
        path="/free-website-review"
      />

      <header className={styles.pageHero}>
        <div className="site-container">
          <span className="eyebrow">Free website review</span>
          <h1>Find the leaks before you spend more on traffic.</h1>
          <p>
            Get a practical, founder-led look at how your website and local
            presence handle the homeowners already searching for your services.
          </p>
        </div>
      </header>

      <section className="section">
        <div className={`site-container ${styles.reviewGrid}`}>
          <aside className={styles.reviewAside}>
            <span className="eyebrow">What gets reviewed</span>
            <h2>A direct look at the path from search to call.</h2>
            <p>
              This is not an automated 40-page report. The review focuses on the
              few issues most likely to affect trust, visibility, and
              conversion.
            </p>
            <ul className={styles.reviewPoints}>
              <li>Mobile clarity and click-to-call experience</li>
              <li>Core service and service-area page coverage</li>
              <li>Trust, offer, and financing communication</li>
              <li>Google Business Profile consistency</li>
              <li>Forms, calls, analytics, and follow-up gaps</li>
            </ul>
          </aside>
          <LeadForm />
        </div>
      </section>
    </>
  );
};

export default FreeWebsiteReview;
