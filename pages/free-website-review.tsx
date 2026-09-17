import type { GetServerSideProps } from "next";
import EmailRequest from "../components/EmailRequest";
import { getMailConfig } from "../lib/lead-email";
import { useRouter } from "next/router";
import LeadForm from "../components/LeadForm";
import SiteHead from "../components/SiteHead";
import { responseWindow } from "../lib/leads";
import styles from "../styles/Site.module.scss";
type Props = { emailFormEnabled: boolean };

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    getMailConfig();
    return { props: { emailFormEnabled: true } };
  } catch {
    return { props: { emailFormEnabled: false } };
  }
};

export default function FreeWebsiteReview({ emailFormEnabled }: Props) {
  const router = useRouter();
  const offer = router.query.offer === "founding-build" ? "founding-build" : "website-review";
  const founding = offer === "founding-build";
  return <>
    <SiteHead title={founding ? "Founding Website Build Application" : "Free Contractor Website Review"} description="Get three practical website and local visibility fixes from Daniel Coder, delivered by email within two business days." path="/free-website-review" />
    <header className={styles.pageHero}><div className="site-container">
      <span className="eyebrow">{founding ? "Founding partner project" : "Free website review"}</span>
      <h1>{founding ? "Let’s see if your company is a fit." : "Three clear fixes for your contractor website."}</h1>
      <p>{founding ? "Apply for one complimentary website build for a Sarasota-area HVAC, plumbing, or roofing company. Daniel will reply with the next steps." : "Daniel will personally review your website and local presence, then email the three changes he would prioritize and a practical next step."}</p>
    </div></header>
    <section className="section"><div className={`site-container ${styles.reviewGrid}`}>
      <aside className={styles.reviewAside}>
        <span className="eyebrow">{founding ? "What happens next" : "What you receive"}</span>
        <h2>{founding ? "A conversation about the right starting point." : "A short, useful plan you can act on."}</h2>
        <p>{founding ? `Expect an email ${responseWindow}. We’ll check your location, services, current website, and readiness to supply content. Selection and scope are confirmed before work begins.` : `Expect a concise email with annotated screenshots where helpful, delivered ${responseWindow}. You can use the recommendations yourself or ask Daniel to help implement them.`}</p>
        <ul className={styles.reviewPoints}>
          <li>{founding ? "Up to five agreed pages and two revision rounds" : "Three prioritized fixes, with an explanation of each"}</li>
          <li>{founding ? "Mobile layout, inquiry form, and search basics" : "Mobile contact path, service coverage, and trust signals"}</li>
          <li>{founding ? "Hosting, domain, and optional ongoing work quoted separately" : "A check of your public Google Business Profile"}</li>
          <li>{founding ? "No purchase commitment when applying" : "A recommended first step, with no purchase required"}</li>
        </ul>
      </aside>
      {emailFormEnabled ? <LeadForm key={offer} initialOffer={offer} /> : <EmailRequest offer={offer} />}
    </div></section>
  </>;
}
