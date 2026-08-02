import Link from "next/link";
import SiteHead from "../components/SiteHead";
import styles from "../styles/Site.module.scss";

const Home = () => {
  return (
    <>
      <SiteHead
        description="Created Revolution provides contractor website design, local SEO, Local Services Ads, social media, and Facebook Ads for HVAC, plumbing, and roofing companies."
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
              Created Revolution brings your website, local visibility, and
              focused campaigns into one clear plan—so homeowners can find,
              trust, and contact your company.
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
              Founder-led · Clear scope · Practical contractor-focused work
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
                  <strong>Lead tracking and contact setup</strong>
                  <small>See where inquiries come from</small>
                </div>
                <span>Lead source</span>
              </div>
            </div>
            <div className={styles.pipelineFooter}>
              <p>
                Primary action
                <strong>Calls and estimates</strong>
              </p>
              <span aria-hidden="true">→</span>
              <p>
                Useful insight
                <strong>Clearer lead sources</strong>
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
            <h2>Five focused services built around the same customer journey.</h2>
            <p>
              Start with the website and local-search foundation. Add paid or
              social campaigns when they match your market and goals.
            </p>
          </div>
          <div className={styles.systemGrid}>
            <article className={styles.systemCard}>
              <span>01 / Build</span>
              <h3>Website design and development</h3>
              <p>
                Create fast, professional service pages that explain the work,
                establish trust, and make contacting you easy.
              </p>
            </article>
            <article className={styles.systemCard}>
              <span>02 / Get found</span>
              <h3>SEO for contractors</h3>
              <p>
                Improve site structure, local relevance, Google Business
                Profile alignment, and search measurement.
              </p>
            </article>
            <article className={styles.systemCard}>
              <span>03 / Reach searchers</span>
              <h3>Google Local Services Ads</h3>
              <p>
                Set up and support eligible accounts around the right services,
                service areas, schedule, budget, and inquiry path.
              </p>
            </article>
            <article className={styles.systemCard}>
              <span>04 / Stay recognizable</span>
              <h3>Social media content</h3>
              <p>
                Turn real projects, reviews, team updates, and helpful advice
                into a more consistent local presence.
              </p>
            </article>
            <article className={styles.systemCard}>
              <span>05 / Promote</span>
              <h3>Facebook and Instagram ads</h3>
              <p>
                Build focused local campaigns with a defined offer, response
                path, tracking setup, and practical reporting.
              </p>
            </article>
          </div>
          <div className={styles.buttonRow} style={{ marginTop: "34px" }}>
            <Link href="/services" className="button button-light">
              Explore Every Service
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className={styles.offer}>
            <div className={styles.offerCopy}>
              <span className="eyebrow">Example project focus</span>
              <h2>HVAC Website and Local Visibility Foundation</h2>
              <p>
                A focused starting point for HVAC companies that need clearer
                service pages, stronger local presentation, and basic inquiry
                tracking.
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
              <p>Built around your priorities</p>
              <h3>Custom Project Scope</h3>
              <div className={styles.offerPriceCopy}>
                After reviewing your current website, services, and goals, we
                provide a clear project plan and fixed proposal. Founding-client
                pricing may be available for select contractor businesses.
              </div>
              <Link
                href="/free-website-review"
                className="button button-secondary"
              >
                Request a Free Website Review
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
              <h3>Build the essentials</h3>
              <p>
                Create the priority pages, tracking, and local-search setup.
              </p>
            </article>
            <article className={styles.processItem}>
              <h3>Improve what works</h3>
              <p>
                Use website, search, and inquiry data to decide what to update
                next.
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
