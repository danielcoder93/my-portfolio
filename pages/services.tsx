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
  {
    number: "03",
    title: "Local Services Ads",
    description: "Setup and support for high-intent Google inquiries.",
    href: "#local-services-ads",
  },
  {
    number: "04",
    title: "Social Media",
    description: "Consistent proof that keeps your company recognizable.",
    href: "#social-media",
  },
  {
    number: "05",
    title: "Facebook Ads",
    description: "Focused local campaigns with clear tracking and reporting.",
    href: "#facebook-ads",
  },
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
    id: "local-services-ads",
    number: "03",
    label: "Reach active searchers",
    title: "Google Local Services Ads setup and support",
    description:
      "Local Services Ads can place eligible contractors in a prominent part of Google when nearby homeowners search for help. We can guide setup, organize account details, and help manage the settings that affect which inquiries you receive.",
    items: [
      "Eligibility and account review",
      "Verification-document guidance",
      "Service area and job-type setup",
      "Budget, schedule, and profile settings",
      "Call and message routing review",
      "Lead-status tracking and performance reporting",
    ],
    note: "Eligibility, verification, ad placement, and lead volume are controlled by Google and vary by business category, location, budget, and competition.",
  },
  {
    id: "social-media",
    number: "04",
    label: "Stay recognizable",
    title: "Contractor social media content support",
    description:
      "Homeowners often check a contractor’s recent work before making contact. We help turn your real projects, team, reviews, and useful advice into a consistent social presence that supports trust.",
    items: [
      "Monthly content planning",
      "Branded post templates",
      "Project, review, and team spotlights",
      "Caption writing and scheduling support",
      "Facebook and Instagram profile cleanup",
      "Simple engagement and content reporting",
    ],
    note: "The strongest content comes from real jobsite photos, customer-approved stories, and accurate updates supplied by your company.",
  },
  {
    id: "facebook-ads",
    number: "05",
    label: "Create targeted demand",
    title: "Facebook and Instagram ads for contractors",
    description:
      "Meta ads can help contractors promote a clear service, seasonal offer, or estimate opportunity to homeowners in selected areas. We build focused campaigns and connect the response path so inquiries reach the right place.",
    items: [
      "Offer and campaign planning",
      "Campaign and audience setup",
      "Ad copy and creative direction",
      "Landing page or instant-form setup",
      "Basic tracking and inquiry routing",
      "Performance reporting and practical adjustments",
    ],
    note: "Advertising spend is paid directly to Meta and is separate from management fees. Results vary, so campaigns begin with a defined test and budget rather than a lead guarantee.",
  },
];

const Services = () => {
  return (
    <>
      <SiteHead
        title="Contractor Marketing Services"
        description="Contractor website design, local SEO, Local Services Ads, social media, and Facebook Ads for HVAC, plumbing, and roofing companies."
        path="/services"
      />

      <header className={styles.servicesHero}>
        <div className={`site-container ${styles.servicesHeroGrid}`}>
          <div className={styles.servicesHeroCopy}>
            <span className="eyebrow">Contractor Marketing Services</span>
            <h1>
              Show up clearly wherever local homeowners are looking.
            </h1>
            <p>
              Created Revolution helps HVAC, plumbing, and roofing companies
              build a stronger website, improve local visibility, and run
              focused campaigns with a clear path from attention to inquiry.
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
              Founder-led · Clear project scopes · No ranking or lead guarantees
            </p>
          </div>

          <div className={styles.servicesBoard} aria-label="Contractor marketing service stack">
            <div className={styles.servicesBoardHeader}>
              <p>Your contractor marketing foundation</p>
              <span>Five focused services</span>
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
              Start with the website. Add the channels that fit your goals.
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="service-options">
        <div className="site-container">
          <div className="section-heading">
            <span className="eyebrow">Choose your starting point</span>
            <h2>Five services. One clear customer journey.</h2>
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
            <h2>Contractor-focused services without oversized promises.</h2>
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
              <summary>Can every contractor use Local Services Ads?</summary>
              <p>
                No. Availability and verification requirements vary by service
                category and location. Google makes the final eligibility and
                approval decisions.
              </p>
            </details>
            <details>
              <summary>What is the difference between social media and Facebook Ads?</summary>
              <p>
                Social media support keeps your public profiles active with
                real company content. Facebook and Instagram ads use a separate
                paid budget to promote a specific offer to selected audiences.
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
