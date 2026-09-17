import Link from "next/link";
import { captureAttribution } from "../lib/attribution";
import { Attribution, Offer, offers, responseWindow } from "../lib/leads";
import styles from "../styles/LeadForm.module.scss";

function draftUrl(offer: Offer, attribution?: Attribution) {
  const lines = [
    `Hi Daniel, I’m interested in the ${offers[offer].toLowerCase()}.`,
    "", "Company:", "Website (if you have one):", "Trade:", "Service area:",
    "", "What I would like help with (optional):", "",
  ];
  if (attribution) {
    lines.push(`Request source: ${attribution.source || "direct / unattributed"}`,
      `Medium: ${attribution.medium || "not supplied"}`,
      `Campaign: ${attribution.campaign || "not supplied"}`,
      `Landing page: ${attribution.landingPage}`);
  }
  return `mailto:dan@createdrevolution.com?subject=${encodeURIComponent(offers[offer])}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export default function EmailRequest({ offer }: { offer: Offer }) {
  return <div className={styles.form}>
    <span className="eyebrow">Contact Daniel directly</span>
    <h2 className={styles.formTitle}>{offer === "founding-build" ? "Email your founding-build application." : "Request your review by email."}</h2>
    <p>Tell Daniel your company name, website, trade, and service area. He’ll reply {responseWindow}.</p>
    {offer === "founding-build" && <p className={styles.offerNote}>For one selected Sarasota-area HVAC, plumbing, or roofing company. <Link href="/our-work#founding-build">Review the scope and separate costs.</Link></p>}
    <a className="button button-primary" href={draftUrl(offer)} onClick={(event) => {
      event.preventDefault();
      window.location.assign(draftUrl(offer, captureAttribution()));
    }}>Open My Email Draft</a>
    <p className={styles.disclaimer}>This opens your email app with a draft. Fill in your details and send the email to complete your request.</p>
    <p>Prefer webmail? Write to <a href="mailto:dan@createdrevolution.com">dan@createdrevolution.com</a>.</p>
    <p className={styles.disclaimer}>Your details are used to respond to your inquiry. <Link href="/privacy">Privacy policy</Link>.</p>
  </div>;
}
