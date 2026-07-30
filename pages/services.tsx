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
          <h1>A complete local growth foundation—not a pile of deliverables.</h1>
          <p>
            Created Revolution connects the pieces that help a contractor get
            found, earn trust, generate a call, and understand which marketing
            activity is producing real opportunities.
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
                Fast, mobile-first websites structured around the questions and
                decisions a local homeowner makes before calling. Every page has
                a job: make your company easier to trust and easier to contact.
              </p>
              <ul className={styles.bulletColumns}>
                <li>Clear homepage positioning</li>
                <li>Individual service pages</li>
                <li>Service-area page framework</li>
                <li>Emergency click-to-call paths</li>
                <li>Reviews, FAQs, and trust elements</li>
                <li>Financing and maintenance-plan pages</li>
                <li>Fast mobile performance</li>
                <li>Accessible forms and navigation</li>
              </ul>
            </div>
          </article>

          <article className={styles.serviceBlock}>
            <span>02 / GET FOUND</span>
            <div>
              <h2>Local SEO and Google Business Profile alignment</h2>
              <p>
                Your profile and your website should tell Google and homeowners
                the same clear story: what you do, where you do it, and why your
                business is a credible local choice.
              </p>
              <ul className={styles.bulletColumns}>
                <li>Primary and secondary category review</li>
                <li>Services and service-area cleanup</li>
                <li>Hours, links, photos, and business details</li>
                <li>Review request and response workflow</li>
                <li>On-page titles and local relevance</li>
                <li>Internal linking and page hierarchy</li>
                <li>Local business structured data</li>
                <li>Search Console configuration</li>
              </ul>
            </div>
          </article>

          <article className={styles.serviceBlock}>
            <span>03 / RECOVER</span>
            <div>
              <h2>Lead tracking and follow-up foundation</h2>
              <p>
                A form submission or phone call is only valuable when someone
                sees it, handles it, and can trace it back to a source. We set up
                the basic visibility needed to stop guessing.
              </p>
              <ul className={styles.bulletColumns}>
                <li>GA4 and conversion-event setup</li>
                <li>Google Search Console</li>
                <li>Call-tracking plan and installation</li>
                <li>Form routing and confirmation states</li>
                <li>CRM handoff planning</li>
                <li>Missed-call follow-up workflow</li>
                <li>Source and campaign visibility</li>
                <li>Lead-quality review cadence</li>
              </ul>
            </div>
          </article>

          <article className={styles.serviceBlock}>
            <span>04 / IMPROVE</span>
            <div>
              <h2>Ongoing contractor growth support</h2>
              <p>
                Monthly work should respond to real evidence. Support can
                include page improvements, new service or city content, profile
                updates, technical fixes, review workflows, and clear reporting.
              </p>
              <ul className={styles.bulletColumns}>
                <li>Priority-page improvements</li>
                <li>New service and city pages</li>
                <li>Google profile upkeep</li>
                <li>Technical SEO monitoring</li>
                <li>Review and photo cadence</li>
                <li>Monthly call and form review</li>
                <li>Simple reporting tied to leads</li>
                <li>Quarterly priority reset</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-dark">
        <div className="site-container">
          <div className="section-heading">
            <span className="eyebrow">Engagement options</span>
            <h2>Start with the bottleneck, then build the full system.</h2>
          </div>
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <span className={styles.cardNumber}>01</span>
              <h3>Website foundation</h3>
              <p>
                For contractors whose current site is slow, generic, difficult
                to update, or unclear about why a homeowner should call.
              </p>
            </article>
            <article className={styles.card}>
              <span className={styles.cardNumber}>02</span>
              <h3>Local visibility foundation</h3>
              <p>
                For companies with a solid operation but weak service-page
                coverage, inconsistent profile details, or unclear local focus.
              </p>
            </article>
            <article className={styles.card}>
              <span className={styles.cardNumber}>03</span>
              <h3>Full growth system</h3>
              <p>
                Website, priority service pages, Google alignment, tracking, and
                monthly improvement managed around qualified calls.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <span className="eyebrow">Fit and expectations</span>
            <h2>Built for serious local operators.</h2>
          </div>
          <div className={styles.fitGrid}>
            <div className={styles.fitCard}>
              <h3>This is a strong fit when you…</h3>
              <ul>
                <li>Answer the phone and care about lead quality</li>
                <li>Know which jobs are most valuable to the business</li>
                <li>Can deliver a good customer experience after the lead</li>
                <li>Want a focused partner, not another dashboard</li>
              </ul>
            </div>
            <div className={styles.fitCard}>
              <h3>This is not the right fit when you…</h3>
              <ul>
                <li>Want guaranteed rankings or instant lead volume</li>
                <li>Are unwilling to collect real reviews and project photos</li>
                <li>Cannot respond to calls or estimate requests promptly</li>
                <li>Only want the cheapest possible brochure website</li>
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
                A focused initial build usually falls between $4,000 and $8,000.
                Ongoing growth support typically ranges from $750 to $1,500 per
                month, depending on the market, number of locations, and pace of
                work.
              </p>
            </details>
            <details>
              <summary>How long does a website build take?</summary>
              <p>
                A focused contractor website can typically move from strategy
                to launch in four to eight weeks when content, approvals, and
                access are supplied on schedule.
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
              Get a practical look at your current website, local presence, and
              lead path before deciding what to build.
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
