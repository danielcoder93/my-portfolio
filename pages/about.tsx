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
              Created Revolution is a family-run agency built by Daniel and
              Camila Coder. Daniel handles website strategy, design,
              development, and technical implementation. Camila helps guide
              client communication, project organization, and the overall
              customer experience, drawing on her professional background at
              Walmart and her current work at Memorial Sloan Kettering Cancer
              Center.
            </p>
            <p>
              Before becoming a web developer, Daniel spent years as a
              stationary engineer. That experience taught him to solve problems
              practically: understand what is not working, build something
              dependable, and focus on results the business can see.
            </p>
            <p>
              Today, Created Revolution focuses on HVAC, plumbing, and roofing
              companies. The goal is simple: build a professional website,
              improve local visibility, and make it easier for homeowners to
              call or request an estimate—with direct access to the people
              doing the work.
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
