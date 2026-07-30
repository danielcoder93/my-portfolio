import Link from "next/link";
import SiteHead from "../components/SiteHead";
import styles from "../styles/Site.module.scss";

const Services = () => {
  return (
    <>
      <SiteHead
        title="Contractor Marketing Services"
        description="Conversion websites, local SEO, Google Business Profile optimization, tracking, and lead recovery for HVAC, plumbing, and roofing companies."
        path="/services"
      />

      <header className={styles.pageHero}>
        <div className="site-container">
          <span className="eyebrow">Services</span>
          <h1>
            A Better Website, Stronger Local Visibility, and Clearer Lead
            Tracking
          </h1>
          <p>
            Created Revolution helps HVAC, plumbing, and roofing companies
            improve how they appear online, explain their services, and turn
            more website visitors into calls and estimate requests.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="site-container">
          <article className={styles.serviceBlock}>
            <span>01 / CONVERT</span>
            <div>
              <h2>Conversion-focused contractor websites</h2>
              <p>
                We build fast, mobile-friendly contractor websites that clearly
                explain your services, establish trust, and make calling or
                requesting an estimate the obvious next step.
              </p>
              <ul className={styles.bulletColumns}>
                <li>Clear homepage positioning</li>
                <li>Individual service pages</li>
                <li>Service-area page structure</li>
                <li>Mobile click-to-call buttons</li>
                <li>Reviews, FAQs, and trust elements</li>
                <li>Accessible forms and navigation</li>
              </ul>
            </div>
          </article>

          <article className={styles.serviceBlock}>
            <span>02 / GET FOUND</span>
            <div>
              <h2>Local SEO and Google Business Profile alignment</h2>
              <p>
                Your website and Google Business Profile should clearly
                communicate what you do, where you work, and why local
                homeowners should choose your company.
              </p>
              <ul className={styles.bulletColumns}>
                <li>Category and service review</li>
                <li>Service-area and business-detail cleanup</li>
                <li>Website titles and local page structure</li>
                <li>Review request and response workflow</li>
                <li>Internal linking</li>
                <li>Search Console setup</li>
              </ul>
            </div>
          </article>

          <article className={styles.serviceBlock}>
            <span>03 / TRACK</span>
            <div>
              <h2>Lead tracking and contact setup</h2>
              <p>
                We help connect forms, phone calls, analytics, and your existing
                customer-management tools so you can better understand where
                inquiries are coming from.
              </p>
              <ul className={styles.bulletColumns}>
                <li>GA4 and basic conversion tracking</li>
                <li>Google Search Console</li>
                <li>Contact-form routing</li>
                <li>Confirmation and error messages</li>
                <li>Call-tracking installation when appropriate</li>
                <li>Existing CRM or booking-system integration</li>
              </ul>
            </div>
          </article>

          <article className={styles.serviceBlock}>
            <span>04 / IMPROVE</span>
            <div>
              <h2>Ongoing website and local visibility support</h2>
              <p>
                Ongoing support can include website updates, new service or
                location pages, Google Business Profile maintenance, technical
                fixes, and simple reporting.
              </p>
              <ul className={styles.bulletColumns}>
                <li>Website content updates</li>
                <li>New service and location pages</li>
                <li>Google Business Profile upkeep</li>
                <li>Technical website monitoring</li>
                <li>Review and photo workflow support</li>
                <li>Simple monthly reporting</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <span className="eyebrow">Fit and expectations</span>
            <h2>A strong fit for growing local contractors.</h2>
          </div>
          <div className={styles.fitGrid}>
            <div className={styles.fitCard}>
              <h3>This is a strong fit when you…</h3>
              <ul>
                <li>Want a more professional contractor website</li>
                <li>Care about calls and estimate requests</li>
                <li>Know which services are most valuable</li>
                <li>Can provide real reviews, photos, and business information</li>
                <li>Want clear communication and a defined project scope</li>
              </ul>
            </div>
            <div className={styles.fitCard}>
              <h3>This may not be the right fit when you…</h3>
              <ul>
                <li>Need guaranteed Google rankings</li>
                <li>Expect instant lead volume</li>
                <li>Cannot respond to customer inquiries</li>
                <li>Only need a temporary one-page website</li>
                <li>Are unwilling to provide accurate business information</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--cream)" }}
      >
        <div className="narrow-container">
          <div className="section-heading">
            <span className="eyebrow">Common questions</span>
            <h2>What to expect</h2>
          </div>
          <div className={styles.faq}>
            <details>
              <summary>How much does a typical engagement cost?</summary>
              <p>
                Every project is different. After reviewing your current
                website, services, service areas, and goals, we provide a clear
                project scope and fixed proposal. Founding-client pricing may
                be available for select contractor businesses.
              </p>
            </details>
            <details>
              <summary>How long does a website build take?</summary>
              <p>
                A focused contractor website typically takes four to eight
                weeks when content, approvals, and access arrive on schedule.
              </p>
            </details>
            <details>
              <summary>Do you guarantee Google rankings or a lead count?</summary>
              <p>
                No. Search results and homeowner demand are not fully
                controllable. The commitment is to sound strategy, transparent
                work, accurate tracking, and continuous improvement—not a claim
                no honest agency can guarantee.
              </p>
            </details>
            <details>
              <summary>Do you work outside Florida?</summary>
              <p>
                Yes. Created Revolution is Florida-based and can work with HVAC,
                plumbing, and roofing companies across the United States.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="section-compact">
        <div className={`site-container ${styles.finalCta}`}>
          <div>
            <span className="eyebrow">Not sure where to start?</span>
            <h2>Start with the free website review.</h2>
            <p>
              Get a practical review of your website, local presence, and
              contact path.
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

export default Services;
