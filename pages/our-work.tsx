import Link from "next/link";
import SiteHead from "../components/SiteHead";
import styles from "../styles/Site.module.scss";

const OurWork = () => {
  return (
    <>
      <SiteHead
        title="Our Work"
        description="See Created Revolution's prior web development capabilities and its transparent path toward home-service contractor case studies."
        path="/our-work"
      />

      <header className={styles.pageHero}>
        <div className="site-container">
          <span className="eyebrow">Our work</span>
          <h1>Real capabilities. Honest proof. No borrowed contractor wins.</h1>
          <p>
            Created Revolution is repositioning around HVAC, plumbing, and
            roofing. Until the first home-service case studies are complete,
            this page separates verified past development work from the proof we
            are actively building.
          </p>
        </div>
      </header>

      <section className="section">
        <div className={`site-container ${styles.proofIntro}`}>
          <h2>We will not pretend unrelated projects are contractor results.</h2>
          <div>
            <p>
              Past work shows the ability to design, develop, integrate, and
              launch working digital products. It does not prove a roofing
              company ranked first or an HVAC company added a certain amount of
              revenue.
            </p>
            <p>
              The home-service portfolio will be built in public with clear
              before-and-after evidence: site quality, page coverage, local
              visibility, tracked calls, and client-approved outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="site-container">
          <div className="section-heading">
            <span className="eyebrow">Selected prior capabilities</span>
            <h2>Web systems built before the contractor focus.</h2>
          </div>
          <div className={styles.workGrid}>
            <article className={styles.workCard}>
              <span>Archived prior project · Shopify · Node.js</span>
              <h3>Value Lock Sports</h3>
              <p>
                Prior Shopify theme migration with custom storefront features,
                scheduled membership-status automation, and newsletter
                functionality. This project is archived and is not presented
                as a currently active website.
              </p>
            </article>
            <article className={styles.workCard}>
              <span>Verified live project · React · WordPress</span>
              <h3>Dusk RE</h3>
              <p>
                Responsive real-estate website using a React-based front end and
                WordPress content management, deployed across Vercel and
                SiteGround.
              </p>
              <a
                href="https://www.duskre.com/"
                target="_blank"
                rel="noreferrer"
                className={styles.workLink}
              >
                Visit Dusk RE
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className={styles.foundingOffer}>
            <div>
              <span className="eyebrow">Founding partner project</span>
              <h2>One Sarasota-area plumbing build.</h2>
              <p>
                Created Revolution is selecting one qualified plumbing company
                for a complimentary founding website project. No company is
                presented as a client until both sides agree to work together.
              </p>
            </div>
            <div>
              <h3>What the selected company receives</h3>
              <ul>
                <li>Strategy and conversion-focused website build</li>
                <li>Core plumbing service-page structure</li>
                <li>Local search and Google profile review</li>
                <li>Basic calls-and-forms measurement setup</li>
              </ul>
              <h3>What Created Revolution asks in return</h3>
              <ul>
                <li>Timely access, content, and direct feedback</li>
                <li>Permission to document the real process</li>
                <li>An honest testimonial only if the work earns one</li>
              </ul>
              <Link
                href="/free-website-review"
                className="button button-secondary"
              >
                Apply for the Founding Build
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-compact">
        <div className={`site-container ${styles.finalCta}`}>
          <div>
            <span className="eyebrow">Not applying for the free build?</span>
            <h2>Your website can still get a direct review.</h2>
            <p>
              Request an honest assessment of the clearest conversion and local
              visibility gaps.
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

export default OurWork;
