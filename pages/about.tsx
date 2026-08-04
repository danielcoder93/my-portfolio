import Image from "next/image";
import Link from "next/link";
import SiteHead from "../components/SiteHead";
import styles from "../styles/Site.module.scss";

const About = () => {
  return (
    <>
      <SiteHead
        title="About"
        description="Meet Daniel and Camila Coder, the family behind Created Revolution's website and marketing services for HVAC, plumbing, and roofing contractors."
        path="/about"
      />

      <header className={styles.pageHero}>
        <div className="site-container">
          <span className="eyebrow">About Created Revolution</span>
          <h1>
            A family-led agency for contractors who care about what happens
            after the click.
          </h1>
          <p>
            Created Revolution helps home-service companies build a stronger
            website, improve local visibility, and run focused campaigns with
            clear expectations and direct communication.
          </p>
        </div>
      </header>

      <section className="section">
        <div className={`site-container ${styles.aboutGrid}`}>
          <figure className={styles.familyPortrait}>
            <Image
              src="/dancamila.png"
              alt="Daniel and Camila Coder, the family behind Created Revolution"
              width={1080}
              height={1080}
              sizes="(max-width: 980px) 100vw, 38vw"
              className={styles.familyPortraitImage}
            />
            <figcaption className={styles.familyPortraitCaption}>
              <strong>Daniel &amp; Camila Coder</strong>
              <span>The family behind Created Revolution</span>
            </figcaption>
          </figure>
          <div className={styles.aboutCopy}>
            <span className="eyebrow">The people behind the work</span>
            <h2>Real people, practical work, and direct communication.</h2>
            <p>
              Daniel and Camila Coder are the family behind Created Revolution.
              Daniel leads each client engagement, including website strategy,
              development, and technical execution.
              Camila&apos;s professional background includes employment with
              Walmart and, currently, Memorial Sloan Kettering Cancer Center.
              She brings that experience to clear communication, careful
              coordination, and customer experience.
            </p>
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
              Together, they keep projects personal and accountable. Clients
              know who they are working with, what is being built, and why each
              priority matters.
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
            <span className="eyebrow">Work with the people behind the agency</span>
            <h2>Start with a practical look at your current site.</h2>
            <p>
              Every request stays close to the people doing the work, with
              Daniel leading the website and technical review.
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
