import SiteHead from "../components/SiteHead";
import styles from "../styles/Site.module.scss";

const Privacy = () => {
  return (
    <>
      <SiteHead
        title="Privacy Policy"
        description="Created Revolution privacy policy."
        path="/privacy"
      />

      <header className={styles.pageHero}>
        <div className="narrow-container">
          <span className="eyebrow">Privacy policy</span>
          <h1>How website-review information is handled.</h1>
          <p>Effective July 30, 2026</p>
        </div>
      </header>

      <section className="section">
        <div className={`narrow-container ${styles.privacy}`}>
          <p>
            Created Revolution collects only the information reasonably needed
            to respond to inquiries, provide requested services, operate this
            website, and improve its performance.
          </p>

          <h2>Information you provide</h2>
          <p>
            When you submit a form, information may include your name, company,
            trade, service area, website, email address, phone number, and the
            marketing challenge you describe.
          </p>

          <h2>How information is used</h2>
          <ul>
            <li>To respond to your website-review or service request</li>
            <li>To evaluate whether Created Revolution is a fit</li>
            <li>To communicate about work you ask us to consider</li>
            <li>To maintain website security and diagnose technical issues</li>
          </ul>

          <h2>Analytics and service providers</h2>
          <p>
            This website may use hosting, analytics, email, form, and
            measurement providers. Those providers may process technical data
            such as IP address, device details, pages viewed, and referral
            source under their own terms.
          </p>

          <h2>Sharing and sales</h2>
          <p>
            Created Revolution does not sell personal information. Information
            may be shared with service providers when needed to operate the
            website or deliver requested work, or when required by law.
          </p>

          <h2>Retention and security</h2>
          <p>
            Information is retained only as long as reasonably necessary for the
            purpose collected. Reasonable safeguards are used, but no online
            system can be guaranteed completely secure.
          </p>

          <h2>Your choices</h2>
          <p>
            You may ask to access, correct, or delete information you submitted
            by emailing{" "}
            <a href="mailto:dan@createdrevolution.com">
              dan@createdrevolution.com
            </a>
            . Legal obligations may require limited information to be retained.
          </p>

          <h2>Policy updates</h2>
          <p>
            This policy may be updated as the website and services change. The
            effective date above will be revised when material updates are made.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href="mailto:dan@createdrevolution.com">
              dan@createdrevolution.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
};

export default Privacy;
