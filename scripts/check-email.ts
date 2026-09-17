import { loadEnvConfig } from "@next/env";
import nodemailer from "nodemailer";
import { getMailConfig, deliverLead } from "../lib/lead-email";
import { parseLead } from "../lib/leads";
import { randomUUID } from "node:crypto";

async function main() {
  loadEnvConfig(process.cwd());
  const config = getMailConfig();
  const transport = nodemailer.createTransport(config.transport);
  try { await transport.verify(); }
  finally { transport.close(); }
  console.log("SMTP connection and authentication verified; inbox receipt is not yet verified.");
  if (process.argv.includes("--send-test")) {
    const parsed = parseLead({ name: "Daniel — launch test", company: "Created Revolution — TEST, not a prospect", email: config.to, trade: "Other home service", serviceArea: "Sarasota", offer: "website-review", attribution: { source: "launch-check", medium: "test", campaign: "pr17" } });
    if (!parsed.ok) throw new Error("TEST_CONFIG_INVALID");
    await deliverLead(parsed.lead, randomUUID());
    console.log("Test accepted by SMTP provider. Confirm receipt in the configured inbox and verify Reply addresses that inbox.");
  }
}
main().catch(() => { console.error("Email verification failed. Check the required SMTP settings, provider authentication, and verified sender. No credential values have been printed."); process.exitCode = 1; });
