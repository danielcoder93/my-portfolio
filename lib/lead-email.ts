import nodemailer from "nodemailer";
import { Lead, offers, validEmail } from "./leads";
type Env = Record<string, string | undefined>;
export function getMailConfig(env: Env = process.env) {
  const port = Number(env.SMTP_PORT || "587");
  const to = env.CONTACT_TO_EMAIL?.trim();
  const from = env.CONTACT_FROM_EMAIL?.trim();
  if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASSWORD || !to || !validEmail(to) || !from || !validEmail(from) || ![465, 587, 2525].includes(port)) throw new Error("MAIL_NOT_CONFIGURED");
  // Explicit SMTP credentials replace the old personal Hotmail password path.
  return { to, from, transport: {
    host: env.SMTP_HOST, port, secure: port === 465, requireTLS: true,
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASSWORD },
    connectionTimeout: 8000, greetingTimeout: 8000, socketTimeout: 12000, dnsTimeout: 5000,
    disableFileAccess: true, disableUrlAccess: true,
  } };
}
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c] as string));
export function buildLeadMessage(lead: Lead, requestId: string, to: string, from: string) {
  const rows = [
    ["Request ID", requestId], ["Requested offer", offers[lead.offer]], ["Name", lead.name],
    ["Company", lead.company], ["Trade", lead.trade], ["Service area", lead.serviceArea],
    ["Website", lead.website || "Not provided"], ["Email", lead.email],
    ["Phone (optional)", lead.phone || "Not provided"], ["Challenge (optional)", lead.challenge || "Not provided"],
    ["Campaign source", lead.attribution.source || "Direct / unattributed"],
    ["Campaign medium", lead.attribution.medium || "Not supplied"],
    ["Campaign name", lead.attribution.campaign || "Not supplied"],
    ["Landing page", lead.attribution.landingPage], ["Referring website", lead.attribution.referrerHost || "Not supplied"],
  ];
  return { from: { name: "Created Revolution", address: from }, to,
    replyTo: { name: lead.name, address: lead.email }, subject: `${offers[lead.offer]} — ${lead.company}`,
    text: rows.map(([key, value]) => `${key}: ${value}`).join("\n\n"),
    html: `<h1>${escapeHtml(offers[lead.offer])}</h1><table>${rows.map(([key, value]) => `<tr><th align="left" valign="top">${escapeHtml(key)}</th><td>${escapeHtml(value)}</td></tr>`).join("")}</table>`,
  };
}
export async function deliverLead(lead: Lead, requestId: string) {
  const config = getMailConfig();
  const transporter = nodemailer.createTransport(config.transport);
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    const result = await Promise.race([
      transporter.sendMail(buildLeadMessage(lead, requestId, config.to, config.from)),
      new Promise<never>((_, reject) => {
        timer = setTimeout(() => reject(new Error("MAIL_TIMEOUT")), 20000);
      }),
    ]);
    if (!result.accepted.some((address) => String(address).toLowerCase() === config.to.toLowerCase())) throw new Error("RECIPIENT_REJECTED");
  } finally {
    if (timer) clearTimeout(timer);
    transporter.close();
  }
}
