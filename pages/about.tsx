import Link from "next/link";
import SiteHead from "../components/SiteHead";
import styles from "../styles/Site.module.scss";

const About = () => {
  return (
    <>
      <SiteHead
        title="About"
        description="Created Revolution is a founder-led web and local growth agency for HVAC, plumbing, and roofing contractors."
        path="/about"
      />

      <header className={styles.pageHero}>
        <div className="site-container">
          <span className="eyebrow">About Created Revolution</span>
          <h1>Built for operators who care about the work after the click.</h1>
          <p>
            Created Revolution is a founder-led agency focused on helping
            home-service companies turn a stronger digital foundation into more
            qualified calls and better visibility.
          </p>
        </div>
      </header>

      <section className="section">
        <div className={`site-container ${styles.aboutGrid}`}>
          <aside className={styles.portrait} aria-label="Daniel Coder">
            <div>
              <strong>Daniel Coder</strong>
              <span>Founder · Created Revolution</span>
            </div>
          </aside>
          <div className={styles.aboutCopy}>
            <span className="eyebrow">Why this agency exists</span>
            <h2>Technical ability is useful. Business focus is what makes it pay.</h2>
            <p>
              Before web development, Daniel spent years working as a stationary
              engineer. That operator background shaped a direct view of
              marketing: systems should be understandable, dependable, and
              connected to a real outcome.
            </p>
            <p>
              Created Revolution has built across custom React applications,
              WordPress, Shopify, payments, membership workflows, booking
              experiences, and integrations. The next chapter focuses that
              experience on HVAC, plumbing, and roofing companies.
            </p>
            <p>
              The goal is not to sound like the biggest agency in the room. It
              is to stay close to the work, communicate clearly, and build the
              pages and measurement a local operator can actually use.
            </p>

            <div className={styles.principles}>
              <article className={styles.principle}>
                <span>01</span>
                <h3>Calls over vanity metrics</h3>
                <p>
                  Traffic and rankings are useful signals. Qualified
                  conversations and booked work are the business outcome.
                </p>
              </article>
              <article className={styles.principle}>
                <span>02</span>
                <h3>Original work over borrowed authority</h3>
                <p>
                  No copied graphics, fake testimonials, invented revenue, or
                  contractor case studies that do not exist.
                </p>
              </article>
              <article className={styles.principle}>
                <span>03</span>
                <h3>Clear priorities over busywork</h3>
                <p>
                  The most valuable service pages and conversion leaks come
                  first. Work expands after the foundation earns it.
                </p>
              </article>
              <article className={styles.principle}>
                <span>04</span>
                <h3>Direct communication</h3>
                <p>
                  Clients should know what is being worked on, why it matters,
                  and what the available evidence says.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-compact">
        <div className={`site-container ${styles.finalCta}`}>
          <div>
            <span className="eyebrow">Talk directly with the founder</span>
            <h2>Start with a practical look at the current site.</h2>
            <p>
              Daniel reviews each request and identifies the clearest
              conversion, page, and local-presence opportunities.
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

export default About;
