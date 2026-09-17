import Link from "next/link";
import SiteHead from "../components/SiteHead";
import styles from "../styles/Site.module.scss";

const serviceOverview = [
  {
    number: "01",
    title: "Website Design & Development",
    description: "A fast, credible home base built to turn visits into action.",
    href: "#website-design",
  },
  {
    number: "02",
    title: "SEO for Contractors",
    description: "A stronger technical and local-search foundation.",
    href: "#contractor-seo",
  },
  { number: "03", title: "Inquiry Tracking & Contact Setup", description: "A tested path from a website visit to your inbox.", href: "#inquiry-tracking" },
];

const serviceDetails = [
  {
    id: "website-design",
    number: "01",
    label: "Build the foundation",
    title: "Contractor website design and development",
    description:
      "Your website should quickly explain what you do, where you work, and why a homeowner should trust your company. We design and develop fast, mobile-friendly websites that make calling or requesting an estimate the obvious next step.",
    items: [
      "Custom mobile-first design",
      "Clear service and service-area structure",
      "Click-to-call buttons and estimate forms",
      "Reviews, FAQs, licenses, and trust elements",
      "Fast pages and accessible navigation",
      "GA4 and Search Console launch setup",
    ],
    note: "This is usually the best starting point when an outdated website is making every other marketing channel work harder.",
  },
  {
    id: "contractor-seo",
    number: "02",
    label: "Improve local visibility",
    title: "SEO for HVAC, plumbing, and roofing contractors",
    description:
      "Contractor SEO starts with a website that search engines and homeowners can understand. We improve site structure, local relevance, and business information so your company has a stronger foundation for appearing in the searches that matter.",
    items: [
      "Technical and on-page SEO review",
      "Service and search-intent research",
      "Page titles, headings, and internal links",
      "Service and location content planning",
      "Google Business Profile alignment",
      "Search Console monitoring and simple reporting",
    ],
    note: "No honest agency can guarantee a specific Google ranking. The work focuses on clear best practices, useful content, and measurable progress.",
  },
  {
    id: "inquiry-tracking", number: "03", label: "Know where inquiries come from",
    title: "Inquiry tracking and contact setup",
    description: "Make sure a homeowner can reach you, the request arrives in the right place, and your team knows what prompted it. We connect the contact path and verify it before launch.",
    items: ["Working estimate forms and email routing", "Mobile click-to-call and text links", "Campaign source captured with form inquiries", "Contact-action and conversion measurement", "Success and error handling", "A practical lead follow-up process"],
    note: "A click is not a booked job. Call-tracking numbers and other paid tools are agreed separately if needed; your team confirms which inquiries become customers.",
  },
];

const Services = () => {
  return (
    <>
      <SiteHead
        title="Contractor Marketing Services"
        description="Website design, local SEO foundations, and inquiry tracking for HVAC, plumbing, and roofing companies."
        path="/services"
      />

      <header className={styles.servicesHero}>
        <div className={`site-container ${styles.servicesHeroGrid}`}>
          <div className={styles.servicesHeroCopy}>
            <span className="eyebrow">Contractor Marketing Services</span>
            <h1>
              Make it easier to find you, trust you, and contact you.
            </h1>
            <p>
              Created Revolution helps HVAC, plumbing, and roofing companies
              build a useful website, improve local visibility, and connect
              a reliable path from a visit to an inquiry.
            </p>
            <div className={styles.buttonRow}>
              <Link
                href="/free-website-review"
                className="button button-primary"
              >
                Request a Free Website Review
              </Link>
              <a href="#service-options" className="button button-light">
                Explore the Services
              </a>
            </div>
            <p className={styles.servicesHeroProof}>
              Founder-led · Clear project scopes · Tested before launch
            </p>
          </div>

          <div
            className={styles.servicesBoard}
            aria-label="Contractor marketing service stack"
          >
            <div className={styles.servicesBoardHeader}>
              <span>Three core services</span>
            </div>
            <div className={styles.servicesBoardRows}>
              {serviceOverview.map((service) => (
                <div className={styles.servicesBoardRow} key={service.number}>
                  <span>{service.number}</span>
                  <div>
                    <strong>{service.title}</strong>
                    <small>{service.description}</small>
                  </div>
                  <span aria-hidden="true">→</span>
                </div>
              ))}
            </div>
            <div className={styles.servicesBoardFooter}>
              Website. Local visibility. A contact path that works.
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="service-options">
        <div className="site-container">
          <div className="section-heading">
            <span className="eyebrow">Choose your starting point</span>
            <h2>Three essentials. One practical starting point.</h2>
            <p>
              Each service can solve a specific problem. The best plan starts
              with the weakest part of your current online presence.
            </p>
          </div>
          <nav className={styles.serviceNav} aria-label="Services on this page">
            {serviceOverview.map((service) => (
              <a href={service.href} className={styles.serviceNavCard} key={service.number}>
                <span>{service.number}</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <strong>See what is included →</strong>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section" style={{ background: "var(--cream)" }}>
        <div className={`site-container ${styles.servicesIntro}`}>
          <div>
            <span className="eyebrow">Built around how homeowners choose</span>
            <h2>Your marketing should answer three questions quickly.</h2>
          </div>
          <div className={styles.servicePrinciples}>
            <article>
              <span>01</span>
              <h3>Can they find you?</h3>
              <p>
                Search visibility and focused advertising put your company in
                front of the right local audience.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Can they trust you?</h3>
              <p>
                A professional website, real reviews, and current project proof
                make your business easier to evaluate.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Can they contact you?</h3>
              <p>
                Clear calls to action, working forms, and sensible routing make
                the next step obvious.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <span className="eyebrow">What we can build and support</span>
            <h2>What your project can include.</h2>
            <p>
              Every scope is based on your current website, service area,
              priorities, available content, and ability to respond to leads.
            </p>
          </div>
          <div className={styles.servicesList}>
            {serviceDetails.map((service) => (
              <article
                id={service.id}
                className={styles.serviceFeature}
                key={service.id}
              >
                <div className={styles.serviceFeatureAside}>
                  <span>{service.number}</span>
                  <p>{service.label}</p>
                </div>
                <div className={styles.serviceFeatureContent}>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <h3>What can be included</h3>
                  <ul className={styles.bulletColumns}>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className={styles.serviceNote}>{service.note}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="site-container">
          <div className="section-heading">
            <span className="eyebrow">How projects move forward</span>
            <h2>A practical process from review to improvement.</h2>
            <p>
              No channel gets added just because it sounds impressive. We set
              priorities, build the essentials, and measure what happens next.
            </p>
          </div>
          <div className={styles.process}>
            <article className={styles.processItem}>
              <h3>Review</h3>
              <p>
                Look at the website, search presence, campaigns, tracking, and
                contact path.
              </p>
            </article>
            <article className={styles.processItem}>
              <h3>Prioritize</h3>
              <p>
                Choose the service, market, offer, and channel that deserve the
                first push.
              </p>
            </article>
            <article className={styles.processItem}>
              <h3>Build</h3>
              <p>
                Create the agreed pages, profiles, campaigns, forms, and basic
                measurement.
              </p>
            </article>
            <article className={styles.processItem}>
              <h3>Improve</h3>
              <p>
                Review useful signals, fix clear gaps, and decide what should
                happen next.
              </p>
            </article>
          </div>
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

      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="narrow-container">
          <div className="section-heading">
            <span className="eyebrow">Common questions</span>
            <h2>What contractors should know before starting</h2>
          </div>
          <div className={styles.faq}>
            <details>
              <summary>Which service should we start with?</summary>
              <p>
                Most contractors should begin with the website and local-search
                foundation. Paid ads work better when homeowners land on a
                credible page and inquiries reach someone who can respond.
              </p>
            </details>
            <details>
              <summary>How much does a typical engagement cost?</summary>
              <p>
                Every project is different. After reviewing your website,
                services, service areas, and goals, we provide a clear scope
                and fixed proposal. Founding-client pricing may be available
                for select contractor businesses.
              </p>
            </details>
            <details>
              <summary>Can you help if we already run ads?</summary>
              <p>Yes. We can review your landing pages, forms, and inquiry tracking
                and coordinate with your advertising provider. Paid campaign
                management is scoped separately when delivery support is in place.</p>
            </details>
            <details>
              <summary>How long does a website build take?</summary>
              <p>
                A focused contractor website typically takes four to eight
                weeks when content, approvals, and access arrive on schedule.
              </p>
            </details>
            <details>
              <summary>Do you guarantee rankings, leads, or booked jobs?</summary>
              <p>
                No. Search platforms, ad auctions, competition, budgets, and
                homeowner demand are not fully controllable. The commitment is
                to clear work, honest reporting, and practical improvement.
              </p>
            </details>
            <details>
              <summary>Do you work outside Florida?</summary>
              <p>
                Yes. Created Revolution is Florida-based and can work with
                HVAC, plumbing, and roofing companies across the United States.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="section-compact">
        <div className={`site-container ${styles.finalCta}`}>
          <div>
            <span className="eyebrow">Start with the biggest opportunity</span>
            <h2>Get a contractor-focused review before adding more marketing.</h2>
            <p>
              We will look at your website, local visibility, trust signals,
              and contact path, then recommend a sensible first step.
            </p>
          </div>
          <Link href="/free-website-review" className="button button-light">
            Request My Free Review
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
