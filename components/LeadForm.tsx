import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { captureAttribution } from "../lib/attribution";
import { Offer, offers, parseLead, responseWindow, trades } from "../lib/leads";
import styles from "../styles/LeadForm.module.scss";

const initialForm = { name: "", company: "", trade: "", serviceArea: "", website: "", phone: "", email: "", challenge: "", companyFax: "" };
export default function LeadForm({ initialOffer = "website-review" }: { initialOffer?: Offer }) {
  const [form, setForm] = useState(initialForm);
  const [offer, setOffer] = useState<Offer>(initialOffer);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [requestId, setRequestId] = useState("");
  const sending = useRef(false);
  const feedback = useRef<HTMLDivElement>(null);
  const updateField = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending.current) return;
    const payload = { ...form, offer, attribution: captureAttribution() };
    const parsed = parseLead(payload);
    if (!parsed.ok) { setMessage(parsed.message); setStatus("error"); return; }
    sending.current = true;
    setStatus("submitting");
    setMessage("");
    setRequestId("");
    try {
      const response = await fetch("/api/contact-form", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...parsed.lead, companyFax: form.companyFax }) });
      const result = await response.json();
      if (!response.ok || result.ok !== true || typeof result.requestId !== "string") {
        throw new Error(result.message || "Your request could not be sent. Please try again or email Daniel directly.");
      }
      setRequestId(result.requestId);
      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Your request could not be sent. Please try again or email Daniel directly.");
      setStatus("error");
    } finally {
      sending.current = false;
      requestAnimationFrame(() => feedback.current?.focus());
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-busy={status === "submitting"}>
      {status !== "success" && <>
        <div>
          <h2 className={styles.formTitle}>Tell Daniel about your business.</h2>
          <p className={styles.disclaimer}>About a minute to complete. Phone and project details are optional.</p>
        </div>
        <fieldset disabled={status === "submitting"} className={styles.fields}>
          <legend className="sr-only">Your request and business details</legend>
          <label>I’m interested in
            <select name="offer" value={offer} onChange={(event) => setOffer(event.target.value as Offer)}>
              {Object.entries(offers).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
          </label>
          {offer === "founding-build" && <p className={styles.offerNote}>For one selected Sarasota-area HVAC, plumbing, or roofing company. <Link href="/our-work#founding-build">See the scope and separate costs.</Link> Applying does not commit you to a purchase.</p>}
          <div className={styles.grid}>
            <label>Your name<input name="name" autoComplete="name" maxLength={160} value={form.name} onChange={updateField} required /></label>
            <label>Company name<input name="company" autoComplete="organization" maxLength={160} value={form.company} onChange={updateField} required /></label>
            <label>Trade<select name="trade" value={form.trade} onChange={updateField} required>
              <option value="">Select your trade</option>{trades.map((trade) => <option key={trade}>{trade}</option>)}
            </select></label>
            <label>Primary service area<input name="serviceArea" placeholder="City or region" maxLength={160} value={form.serviceArea} onChange={updateField} required /></label>
          </div>
          <label>Email<input name="email" type="email" autoComplete="email" maxLength={254} value={form.email} onChange={updateField} required /></label>
          <label>Website (optional)<input name="website" type="text" inputMode="url" autoCapitalize="none" autoCorrect="off" placeholder="yourcompany.com" maxLength={500} value={form.website} onChange={updateField} /></label>
          <details className={styles.optional}>
            <summary>Add a phone number or project details (optional)</summary>
            <div className={styles.fields}>
              <label>Phone (optional)<input name="phone" type="tel" autoComplete="tel" maxLength={40} value={form.phone} onChange={updateField} /></label>
              <label>What would you like help with? (optional)<textarea name="challenge" rows={3} maxLength={2000} value={form.challenge} onChange={updateField} /></label>
            </div>
          </details>
          <label className={styles.honeypot} aria-hidden="true">Company fax<input name="companyFax" tabIndex={-1} autoComplete="off" value={form.companyFax} onChange={updateField} /></label>
          <button className="button button-primary" type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : offer === "founding-build" ? "Apply for the Founding Build" : "Request My Free Website Review"}
          </button>
        </fieldset>
        <p className={styles.disclaimer}>Daniel will email you {responseWindow}. Your details are used to respond to this request. <Link href="/privacy">Privacy policy</Link>.</p>
      </>}
      <div ref={feedback} tabIndex={-1} aria-live="polite" className={styles.feedback}>
        {status === "success" && <div className={styles.success}>
          <h2 className={styles.formTitle}>{offer === "founding-build" ? "Your application is in." : "Your review request is in."}</h2>
          <p>{offer === "founding-build" ? `Daniel will email you ${responseWindow} to discuss fit, scope, and next steps.` : `Daniel will email your three priority fixes and a recommended next step ${responseWindow}.`}</p>
          <p className={styles.disclaimer}>Reference: {requestId}</p>
        </div>}
        {status === "error" && <p className={styles.error}>{message} <a href="mailto:dan@createdrevolution.com?subject=Website%20inquiry">Email dan@createdrevolution.com</a>.</p>}
      </div>
      <p className={styles.disclaimer}>Prefer email? <a href="mailto:dan@createdrevolution.com?subject=Website%20inquiry">Contact Daniel directly</a>.</p>
      <noscript>Please email <a href="mailto:dan@createdrevolution.com">dan@createdrevolution.com</a> to request a review.</noscript>
    </form>
  );
}
