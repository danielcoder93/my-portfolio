import { FormEvent, useState } from "react";
import styles from "../styles/LeadForm.module.scss";

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  company: "",
  trade: "",
  serviceArea: "",
  website: "",
  phone: "",
  email: "",
  challenge: "",
  companyFax: "",
};

const LeadForm = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");

  const updateField = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setForm(initialForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.grid}>
        <label>
          Your name
          <input
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={updateField}
            required
          />
        </label>
        <label>
          Company name
          <input
            name="company"
            autoComplete="organization"
            value={form.company}
            onChange={updateField}
            required
          />
        </label>
        <label>
          Trade
          <select
            name="trade"
            value={form.trade}
            onChange={updateField}
            required
          >
            <option value="">Select your trade</option>
            <option value="HVAC">HVAC</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Roofing">Roofing</option>
            <option value="Other home service">Other home service</option>
          </select>
        </label>
        <label>
          Primary service area
          <input
            name="serviceArea"
            placeholder="City or region"
            value={form.serviceArea}
            onChange={updateField}
            required
          />
        </label>
        <label>
          Website
          <input
            name="website"
            type="url"
            inputMode="url"
            placeholder="https://"
            value={form.website}
            onChange={updateField}
          />
        </label>
        <label>
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={updateField}
            required
          />
        </label>
      </div>

      <label>
        Email
        <input
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={updateField}
          required
        />
      </label>

      <label>
        What is the biggest marketing problem you want to solve?
        <textarea
          name="challenge"
          rows={5}
          value={form.challenge}
          onChange={updateField}
          required
        />
      </label>

      <label className={styles.honeypot} aria-hidden="true">
        Company fax
        <input
          name="companyFax"
          tabIndex={-1}
          autoComplete="off"
          value={form.companyFax}
          onChange={updateField}
        />
      </label>

      <button
        className="button button-primary"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting"
          ? "Sending…"
          : "Request My Free Website Review"}
      </button>

      <p className={styles.disclaimer}>
        No pressure and no generic scorecard. You will get a practical review
        focused on calls, local visibility, and conversion gaps.
      </p>

      <div aria-live="polite">
        {status === "success" && (
          <p className={styles.success}>
            Your request is in. Daniel will review your details and follow up
            directly.
          </p>
        )}
        {status === "error" && (
          <p className={styles.error}>
            The form could not be sent. Email dan@createdrevolution.com and we
            will take care of it.
          </p>
        )}
      </div>
    </form>
  );
};

export default LeadForm;
