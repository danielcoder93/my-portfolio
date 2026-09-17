import { randomUUID } from "node:crypto";
import type { NextApiRequest, NextApiResponse } from "next";
import { cleanText, Lead, parseLead } from "./leads";
type Dependencies = {
  deliver: (lead: Lead, requestId: string) => Promise<void>;
  log?: (event: Record<string, string>) => void;
};
export function createLeadHandler({ deliver, log = (event) => console.info(JSON.stringify(event)) }: Dependencies) {
  return async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader("Cache-Control", "no-store");
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return res.status(405).json({ ok: false, message: "Method not allowed." });
    }
    if (!/^application\/json(?:;|$)/i.test(req.headers["content-type"] || "")) return res.status(415).json({ ok: false, message: "Send a JSON request." });
    // Same-origin browser submissions only; this is not a distributed rate limiter.
    const origin = req.headers.origin;
    if (origin) {
      try { if (new URL(origin).host !== req.headers.host) throw new Error("ORIGIN"); }
      catch { return res.status(403).json({ ok: false, message: "Please submit the form from this website." }); }
    }
    if (req.body && cleanText(req.body.companyFax)) return res.status(400).json({ ok: false, message: "Please clear the company fax field and try again." });
    const parsed = parseLead(req.body);
    if (!parsed.ok) return res.status(400).json({ ok: false, message: parsed.message });
    const requestId = randomUUID();
    try { await deliver(parsed.lead, requestId); }
    catch (error) {
      // No provider error text, credentials, or lead details in logs.
      log({ event: "lead_delivery_failed", requestId, reason: error instanceof Error && error.message === "MAIL_NOT_CONFIGURED" ? "not_configured" : "provider_error" });
      return res.status(503).json({ ok: false, requestId, message: "Your request could not be sent. Your details are still here. Please try again, or email Daniel directly." });
    }
    // Record conversion only after mail-provider acceptance. Campaign labels stay in email.
    log({ event: "lead_submitted", requestId, offer: parsed.lead.offer });
    return res.status(200).json({ ok: true, requestId, message: "Request received." });
  };
}
