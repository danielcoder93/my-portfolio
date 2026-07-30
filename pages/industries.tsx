import Link from "next/link";
import SiteHead from "../components/SiteHead";
import styles from "../styles/Site.module.scss";

const Industries = () => {
  return (
    <>
      <SiteHead
        title="HVAC, Plumbing & Roofing Marketing"
        description="Industry-specific websites and local marketing systems for HVAC, plumbing, and roofing contractors."
        path="/industries"
      />

      <header className={styles.pageHero}>
        <div className="site-container">
          <span className="eyebrow">Industries</span>
          <h1>Your trade should shape the website—not fill in a template.</h1>
          <p>
            Urgency, job value, seasonality, financing, homeowner trust, and
            service-area demand work differently across HVAC, plumbing, and
            roofing. The strategy should reflect those differences.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="site-container">
          <article className={styles.industrySection}>
            <div className={styles.industryLabel}>
              <span aria-hidden="true">AC</span>
              <div>
                <p className="eyebrow">Priority vertical</p>
                <h2>HVAC</h2>
              </div>
            </div>
            <div className={styles.industryContent}>
              <p>
                Capture urgent repair demand without ignoring the
                higher-consideration replacement, maintenance, financing, and
                indoor-air-quality opportunities that grow lifetime value.
              </p>
              <h3>Priority page map</h3>
              <ul className={styles.pageList}>
                <li>AC Repair</li>
                <li>Emergency AC Repair</li>
                <li>AC Installation</li>
                <li>AC Replacement</li>
                <li>Heating Repair</li>
                <li>Maintenance Plans</li>
                <li>Indoor Air Quality</li>
                <li>Financing</li>
                <li>Service Areas</li>
              </ul>
              <ul className={styles.checkList}>
                <li>
                  Strong click-to-call experience for heat-of-the-moment searches
                </li>
                <li>
                  Clear financing and replacement education for bigger decisions
                </li>
                <li>
                  Seasonal Google profile, review, photo, and page-content rhythm
                </li>
              </ul>
            </div>
          </article>

          <article className={styles.industrySection}>
            <div className={styles.industryLabel}>
              <span aria-hidden="true">PL</span>
              <div>
                <p className="eyebrow">Urgent local demand</p>
                <h2>Plumbing</h2>
              </div>
            </div>
            <div className={styles.industryContent}>
              <p>
                Organize emergency and planned plumbing services so homeowners
                can quickly confirm that you handle their problem, serve their
                location, and are ready for the call.
              </p>
              <h3>Priority page map</h3>
              <ul className={styles.pageList}>
                <li>Emergency Plumbing</li>
                <li>Drain Cleaning</li>
                <li>Sewer Line Services</li>
                <li>Water Heater Repair</li>
                <li>Water Heater Installation</li>
                <li>Leak Detection</li>
                <li>Repiping</li>
                <li>Fixture Installation</li>
                <li>Service Areas</li>
              </ul>
              <ul className={styles.checkList}>
                <li>Problem-first navigation for homeowners under pressure</li>
                <li>Visible licensing, review, guarantee, and response details</li>
                <li>Service-area coverage without thin, duplicated city pages</li>
              </ul>
            </div>
          </article>

          <article className={styles.industrySection}>
            <div className={styles.industryLabel}>
              <span aria-hidden="true">RF</span>
              <div>
                <p className="eyebrow">High-value jobs</p>
                <h2>Roofing</h2>
              </div>
            </div>
            <div className={styles.industryContent}>
              <p>
                Build confidence through a longer estimate journey with clear
                repair and replacement options, project proof, financing
                information, and direct scheduling paths.
              </p>
              <h3>Priority page map</h3>
              <ul className={styles.pageList}>
                <li>Roof Repair</li>
                <li>Roof Replacement</li>
                <li>Storm Damage</li>
                <li>Roof Inspection</li>
                <li>Residential Roofing</li>
                <li>Commercial Roofing</li>
                <li>Roofing Materials</li>
                <li>Financing</li>
                <li>Service Areas</li>
              </ul>
              <ul className={styles.checkList}>
                <li>Estimate-focused calls to action and expectation setting</li>
                <li>Real project galleries and manufacturer credentials</li>
                <li>Educational pages that reduce fear around a major purchase</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-dark">
        <div className="site-container">
          <div className="section-heading">
            <span className="eyebrow">The common foundation</span>
            <h2>What every contractor site still needs.</h2>
          </div>
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <span className={styles.cardIcon}>01</span>
              <h3>Fast mobile answers</h3>
              <p>
                Service, location, availability, proof, and a clear way to call
                should never be buried.
              </p>
            </article>
            <article className={styles.card}>
              <span className={styles.cardIcon}>02</span>
              <h3>Real trust signals</h3>
              <p>
                Use genuine reviews, licenses, warranties, photos, processes,
                and team details—never empty claims.
              </p>
            </article>
            <article className={styles.card}>
              <span className={styles.cardIcon}>03</span>
              <h3>Useful measurement</h3>
              <p>
                Track qualified calls and forms by page and source so priorities
                come from evidence.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-compact">
        <div className={`site-container ${styles.finalCta}`}>
          <div>
            <span className="eyebrow">Your market is specific too</span>
            <h2>Get the page priorities for your trade and service area.</h2>
            <p>
              The free review identifies the clearest opportunities in your
              current site and local presence.
            </p>
          </div>
          <Link
            href="/free-website-review"
            className="button button-light"
          >
            Request a Free Review
          </Link>
        </div>
      </section>
    </>
  );
};

export default Industries;
