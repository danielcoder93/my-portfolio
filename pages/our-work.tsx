import Image from "next/image";
import Link from "next/link";
import SiteHead from "../components/SiteHead";
import styles from "../styles/Site.module.scss";
export default function OurWork() {
  return <>
    <SiteHead title="Our Work" description="Explore Created Revolution’s residential-service website work for Raisa Pugliese Cleaning Services in Sarasota and its founding contractor website offer." path="/our-work" />
    <header className={styles.pageHero}><div className="site-container">
      <span className="eyebrow">Selected work</span>
      <h1>Useful websites for real businesses.</h1>
      <p>See how clear services, real project examples, and a simple contact path come together. Daniel handles the website strategy, design, and development.</p>
    </div></header>
    <section className="section" id="raisa"><div className="site-container">
      <div className={styles.featuredWork}>
        <a href="https://www.raisapugliesecleaningservices.com/" target="_blank" rel="noreferrer" className={styles.projectPreview}>
          <Image src="/raisa-website.jpg" alt="Live homepage of Raisa Pugliese Cleaning Services, featuring service details and an interactive cleaning comparison" width={1348} height={926} sizes="(max-width: 760px) 100vw, 50vw" />
        </a>
        <div><span className="eyebrow">Residential cleaning · Sarasota, FL</span>
          <h2>Raisa Pugliese Cleaning Services</h2>
          <p>A website focused on recurring residential cleaning, with a clear
            explanation of each service and direct access to the owner.</p>
          <ul className={styles.checkList}>
            <li>Separate recurring, deep, and move-in/out service pages</li>
            <li>Service-area information for Sarasota-area homeowners</li>
            <li>Real before-and-after cleaning examples</li>
            <li>Quote requests, call links, and text options</li>
            <li>Page titles, canonical URLs, sitemap, and business markup</li>
          </ul>
          <a href="https://www.raisapugliesecleaningservices.com/" target="_blank" rel="noreferrer" className="button button-secondary">Visit Raisa’s Website ↗</a>
        </div>
      </div>
      <div className={styles.projectNotes}>
        <article><h3>The business goal</h3><p>Help homeowners understand the cleaning options and inquire about recurring service.</p></article>
        <article><h3>The website work</h3><p>Service structure, local information, owner-led presentation, project examples, and clearer contact choices.</p></article>
        <article><h3>What this demonstrates</h3><p>A live residential-service website you can inspect. Lead and revenue outcomes are still being measured.</p></article>
      </div>
    </div></section>
    <section className="section" style={{ background: "var(--cream)" }}><div className="site-container">
      <div className="section-heading"><span className="eyebrow">Additional development work</span><h2>Experience beyond home services.</h2></div>
      <article className={styles.workCard}>
        <span>Real estate · React · WordPress</span><h3>Dusk RE</h3>
        <p>Responsive real-estate website development with a React front end and WordPress content management.</p>
        <a href="https://www.duskre.com/" target="_blank" rel="noreferrer" className={styles.workLink}>Visit Dusk RE ↗</a>
      </article>
    </div></section>
    <section className="section" id="founding-build"><div className="site-container"><div className={styles.foundingOffer}>
      <div><span className="eyebrow">Founding partner project</span>
        <h2>One complimentary contractor website build.</h2>
        <p>For one selected Sarasota-area HVAC, plumbing, or roofing company.
          The design and development fee is waived in exchange for timely
          content, feedback, and permission to document the work.</p>
        <p>Applying starts a conversation. Selection, page scope, and any separate
          costs are agreed before work begins. Any testimonial or published
          performance results require the client’s approval.</p>
        <p>Plan for four to eight weeks after the agreed content and account
          access are ready.</p>
      </div>
      <div className={styles.foundingOfferDetails}>
        <div className={styles.foundingOfferGroup}><h3>Included in the selected build</h3><ul>
          <li>Up to five agreed pages and two revision rounds</li>
          <li>Mobile layout, inquiry form, and contact links</li>
          <li>Page titles, sitemap, and local profile review</li>
          <li>Basic contact measurement and a launch handoff</li>
        </ul></div>
        <div className={styles.foundingOfferGroup}><h3>Separate costs, agreed in advance</h3><ul>
          <li>Domain registration and hosting</li>
          <li>Any paid email, call-tracking, or other third-party tools</li>
          <li>Optional maintenance, extra pages, SEO, or advertising</li>
        </ul><p className={styles.offerFinePrint}>The build does not enroll you in a recurring service. You keep ownership of your domain and receive your website source files at handoff.</p></div>
        <Link href="/free-website-review?offer=founding-build" className="button button-secondary">Apply for the Founding Build</Link>
      </div>
    </div></div></section>
    <section className="section-compact"><div className={`site-container ${styles.finalCta}`}>
      <div><span className="eyebrow">A useful first step</span><h2>Get three priorities for your own website.</h2><p>Daniel will email a practical review within two business days.</p></div>
      <Link href="/free-website-review" className="button button-light">Request a Free Review</Link>
    </div></section>
  </>;
}
