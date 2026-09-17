export const offers = {
  "website-review": "Free website review",
  "founding-build": "Founding website build application",
} as const;
export type Offer = keyof typeof offers;
export const trades = ["HVAC", "Plumbing", "Roofing", "Other home service"];
export const responseWindow = "within two business days";
export type Attribution = { source: string; medium: string; campaign: string; landingPage: string; referrerHost: string };
export type Lead = {
  name: string; company: string; trade: string; serviceArea: string;
  website: string; phone: string; email: string; challenge: string;
  offer: Offer; attribution: Attribution;
};
const record = (value: unknown): Record<string, unknown> =>
  value && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : {};
export const cleanText = (value: unknown, max = 160) => typeof value === "string"
  ? value.trim().replace(/[\u0000-\u001f\u007f]/g, " ").slice(0, max) : "";
export const validEmail = (value: string) => value.length <= 254 && /^[^\s@<>(),;:\\"]+@[^\s@<>(),;:\\"]+\.[^\s@<>(),;:\\"]+$/.test(value);
export function normalizeWebsite(value: unknown): string {
  const text = cleanText(value, 500);
  if (!text) return "";
  try {
    const url = new URL(text.includes("://") ? text : `https://${text}`);
    if (!["https:", "http:"].includes(url.protocol) || !url.hostname.includes(".") || url.username || url.password) return "";
    return url.origin + url.pathname;
  } catch { return ""; }
}
// Campaign labels only: no full URLs, query strings, or advertising click IDs.
export function cleanAttribution(value: unknown): Attribution {
  const input = record(value);
  const label = (v: unknown) => {
    const text = cleanText(v, 100);
    return /^[a-zA-Z0-9_. -]*$/.test(text) ? text : "";
  };
  const landing = cleanText(input.landingPage, 160).split(/[?#]/)[0];
  const host = cleanText(input.referrerHost, 160);
  return {
    source: label(input.source), medium: label(input.medium), campaign: label(input.campaign),
    landingPage: /^\/(?!\/)[a-zA-Z0-9/_-]*$/.test(landing) ? landing : "/",
    referrerHost: /^[a-zA-Z0-9.-]+$/.test(host) ? host : "",
  };
}
export function parseLead(value: unknown): { ok: true; lead: Lead } | { ok: false; message: string } {
  const body = record(value);
  const rawWebsite = cleanText(body.website, 500);
  const lead: Lead = {
    name: cleanText(body.name), company: cleanText(body.company), trade: cleanText(body.trade),
    serviceArea: cleanText(body.serviceArea), website: normalizeWebsite(body.website),
    phone: cleanText(body.phone, 40), email: cleanText(body.email, 255), challenge: cleanText(body.challenge, 2000),
    offer: body.offer === "founding-build" ? "founding-build" : "website-review",
    attribution: cleanAttribution(body.attribution),
  };
  if (!lead.name || !lead.company || !lead.serviceArea || !trades.includes(lead.trade)) return { ok: false, message: "Please add your name, company, trade, and service area." };
  if (!validEmail(lead.email)) return { ok: false, message: "Please enter a valid email address." };
  if (rawWebsite && !lead.website) return { ok: false, message: "Enter a website such as yourcompany.com, or leave it blank." };
  if (lead.phone && !/^[+()\d\s.\-]{7,40}$/.test(lead.phone)) return { ok: false, message: "Please check your phone number, or leave it blank." };
  return { ok: true, lead };
}
