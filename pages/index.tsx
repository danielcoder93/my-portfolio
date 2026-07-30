import Link from "next/link";
import SiteHead from "../components/SiteHead";
import styles from "../styles/Site.module.scss";

const Home = () => {
  return (
    <>
      <SiteHead
        description="Created Revolution builds conversion-focused websites and local growth systems for HVAC, plumbing, and roofing companies."
        path="/"
      />

      <section className={styles.hero}>
        <div className={`site-container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className="eyebrow">
              HVAC · Plumbing · Roofing growth partner
            </span>
            <h1>
              Websites built to help home-service contractors{" "}
              <em>win more jobs.</em>
            </h1>
            <p>
              Created Revolution turns your website, Google presence, and lead
              follow-up into one focused system—so more local homeowners call,
              book, and choose your company.
            </p>
            <div className={styles.buttonRow}>
              <Link
                href="/free-website-review"
                className="button button-primary"
              >
                Request a Free Website Review
              </Link>
              <Link href="/services" className="button button-secondary">
                See the System
              </Link>
            </div>
            <div className={styles.microProof}>
              <span aria-hidden="true" />
              Founder-led · Built around calls and booked work—not vanity
              metrics
            </div>
          </div>

          <div className={styles.pipeline} aria-label="Lead pipeline example">
            <div className={styles.pipelineTop}>
              <p>Local job pipeline</p>
              <span className={styles.liveTag}>Working together</span>
            </div>
            <div className={styles.pipelineSteps}>
              <div className={styles.pipelineStep}>
                <span>01</span>
                <div>
                  <strong>Local search</strong>
                  <small>Be found for high-intent services</small>
                </div>
                <span>Visibility</span>
              </div>
              <div className={styles.pipelineStep}>
                <span>02</span>
                <div>
                  <strong>Conversion-ready website</strong>
                  <small>Make calling the obvious next step</small>
                </div>
                <span>Trust</span>
              </div>
              <div className={styles.pipelineStep}>
                <span>03</span>
                <div>
                  <strong>Lead tracking and recovery</strong>
                  <small>Know what rang and what booked</small>
                </div>
                <span>Booked jobs</span>
              </div>
            </div>
            <div className={styles.pipelineFooter}>
              <p>
                North-star metric
                <strong>Qualified calls</strong>
              </p>
              <span aria-hidden="true">→</span>
              <p>
                Business outcome
                <strong>More booked work</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.tradeBar}>
        <div className={`site-container ${styles.tradeBarInner}`}>
          <p>Built specifically for local operators</p>
          <div className={styles.trade}>
            <span aria-hidden="true">AC</span>
            HVAC
          </div>
          <div className={styles.trade}>
            <span aria-hidden="true">PL</span>
            Plumbing
          </div>
          <div className={styles.trade}>
            <span aria-hidden="true">RF</span>
            Roofing
          </div>
        </div>
      </div>

      <section className="section">
        <div className={`site-container ${styles.splitIntro}`}>
          <div>
            <span className="eyebrow">The real problem</span>
            <p>
              Most contractor sites act like digital brochures. They list
              services, show a phone number, and hope a homeowner figures out
              why to choose the company.
            </p>
          </div>
          <div>
            <h2>
              You do not need prettier marketing. You need a clearer path to the
              next booked job.
            </h2>
            <p>
              Your best prospects are already searching. The opportunity is to
              show up for the right services, earn trust quickly, make the call
              easy, and close the loop when a lead comes in.
            </p>
            <ul className={styles.checkList}>
              <li>Service and city pages matched to real local demand</li>
              <li>Mobile-first calls to action for urgent homeowners</li>
              <li>Google Business Profile and website working in sync</li>
              <li>Tracking that connects marketing activity to real leads</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="site-container">
          <div className="section-heading">
            <span className="eyebrow">The Created Revolution system</span>
            <h2>Four parts. One job-winning machine.</h2>
            <p>
              Each piece is useful on its own. The real advantage comes when
              your website, local visibility, lead handling, and reporting are
              designed to support the same outcome.
            </p>
          </div>
          <div className={styles.systemGrid}>
            <article className={styles.systemCard}>
              <span>01 / Position</span>
              <h3>Offer and market strategy</h3>
              <p>
                Clarify the most valuable jobs, strongest service areas, and
                reasons homeowners should call you instead of the next listing.
              </p>
            </article>
            <article className={styles.systemCard}>
              <span>02 / Convert</span>
              <h3>Website and service pages</h3>
              <p>
                Build fast, focused pages around emergency calls, replacements,
                financing, maintenance plans, and the services that drive
                revenue.
              </p>
            </article>
            <article className={styles.systemCard}>
              <span>03 / Get found</span>
              <h3>Local search foundation</h3>
              <p>
                Align Google Business Profile details, on-page SEO, service
                areas, reviews, and local signals around how people actually
                search.
              </p>
            </article>
            <article className={styles.systemCard}>
              <span>04 / Recover</span>
              <h3>Tracking and lead follow-up</h3>
              <p>
                Connect forms, calls, analytics, Search Console, and your lead
                process so good opportunities do not disappear after the click.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className={styles.offer}>
            <div className={styles.offerCopy}>
              <span className="eyebrow">Flagship offer</span>
              <h2>The HVAC Lead Recovery System</h2>
              <p>
                A practical foundation for HVAC companies that want more repair,
                replacement, and maintenance-plan opportunities from the demand
                already in their market.
              </p>
              <ul className={styles.offerList}>
                <li>Conversion-focused core website</li>
                <li>Emergency AC repair page</li>
                <li>AC replacement and financing pages</li>
                <li>Maintenance-plan landing page</li>
                <li>Google Business Profile alignment</li>
                <li>Call, form, and search tracking setup</li>
              </ul>
            </div>
            <div className={styles.offerPrice}>
              <p>Typical engagement</p>
              <strong>$4k–$8k</strong>
              <span>initial build and setup</span>
              <strong>$750–$1.5k</strong>
              <span>monthly growth support</span>
              <Link href="/services" className="button button-secondary">
                Explore What Is Included
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="site-container">
          <div className="section-heading">
            <span className="eyebrow">Industry-specific by design</span>
            <h2>Different trades. Different calls. Different pages.</h2>
            <p>
              A homeowner with a broken AC is not thinking like someone planning
              a roof replacement. Your website should respect that.
            </p>
          </div>
          <div className={styles.industryGrid}>
            <article className={styles.industryCard}>
              <span>Priority vertical</span>
              <h3>HVAC</h3>
              <p>
                Emergency repair, replacement, financing, maintenance plans,
                heating, and indoor-air-quality demand.
              </p>
            </article>
            <article className={styles.industryCard}>
              <span>High-intent local demand</span>
              <h3>Plumbing</h3>
              <p>
                Emergency calls, drain and sewer work, water heaters, repipes,
                leaks, and location-specific service pages.
              </p>
            </article>
            <article className={styles.industryCard}>
              <span>High-value considered jobs</span>
              <h3>Roofing</h3>
              <p>
                Repairs, replacements, storm-related demand, financing, and a
                trust-heavy estimate journey.
              </p>
            </article>
          </div>
          <div className={styles.buttonRow} style={{ marginTop: "34px" }}>
            <Link href="/industries" className="button button-secondary">
              See Every Industry Page
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <span className="eyebrow">How we work</span>
            <h2>Clear priorities before more marketing activity.</h2>
          </div>
          <div className={styles.process}>
            <article className={styles.processItem}>
              <h3>Review the leaks</h3>
              <p>
                Audit your website, local presence, pages, offers, and lead path.
              </p>
            </article>
            <article className={styles.processItem}>
              <h3>Set the job targets</h3>
              <p>
                Decide which services and service areas deserve the first push.
              </p>
            </article>
            <article className={styles.processItem}>
              <h3>Build the system</h3>
              <p>
                Create the pages, tracking, and local-search foundation around
                those priorities.
              </p>
            </article>
            <article className={styles.processItem}>
              <h3>Improve what works</h3>
              <p>
                Use real search and lead data to guide the next monthly action.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-compact">
        <div className={`site-container ${styles.finalCta}`}>
          <div>
            <span className="eyebrow">Start with clarity</span>
            <h2>Find out what is costing your company calls.</h2>
            <p>
              Request a free review and get a direct, contractor-focused look at
              your website, local visibility, and conversion path.
            </p>
          </div>
          <Link
            href="/free-website-review"
            className="button button-light"
          >
            Request My Free Review
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
