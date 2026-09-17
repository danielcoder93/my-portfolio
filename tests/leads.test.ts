import test from "node:test";
import assert from "node:assert/strict";
import type { NextApiRequest, NextApiResponse } from "next";
import { cleanAttribution, normalizeWebsite, parseLead, Lead } from "../lib/leads";
import { buildLeadMessage, getMailConfig } from "../lib/lead-email";
import { createLeadHandler } from "../lib/lead-handler";

const prospect = { name: "Sample Owner", company: "Example HVAC", trade: "HVAC", serviceArea: "Sarasota", email: "owner@example.com" };
function lead(overrides = {}): Lead {
  const parsed = parseLead({ ...prospect, ...overrides });
  assert.equal(parsed.ok, true);
  if (!parsed.ok) throw new Error("Invalid fixture");
  return parsed.lead;
}
async function request(body: unknown, deliver: (value: Lead, id: string) => Promise<void>, options: { method?: string; origin?: string; contentType?: string } = {}) {
  const logs: Record<string, string>[] = [];
  let status = 200;
  let result: Record<string, unknown> = {};
  const headers: Record<string, unknown> = {};
  const res = { setHeader: (key: string, value: unknown) => { headers[key] = value; }, status: (code: number) => { status = code; return res; }, json: (value: Record<string, unknown>) => { result = value; return res; } };
  await createLeadHandler({ deliver, log: (event) => logs.push(event) })({ method: options.method || "POST", headers: { host: "www.createdrevolution.com", "content-type": options.contentType || "application/json", origin: options.origin }, body } as NextApiRequest, res as unknown as NextApiResponse);
  return { status, result, logs, headers };
}
test("a minimal real inquiry does not require a phone, challenge, or website", () => {
  const value = lead();
  assert.equal(value.phone, ""); assert.equal(value.challenge, ""); assert.equal(value.website, "");
});
test("bare domains normalize while unsafe website values are rejected", () => {
  assert.equal(normalizeWebsite("example.com/services?token=private#form"), "https://example.com/services");
  for (const value of ["javascript:alert(1)", "ftp://example.com", "https://user:pass@example.com", "not-a-domain"]) assert.equal(parseLead({ ...prospect, website: value }).ok, false);
});
test("required fields, invalid email, and malformed bodies are rejected", () => {
  for (const body of [null, [], "hello", { ...prospect, name: " " }, { ...prospect, email: "a@b" }, { ...prospect, trade: "Injected" }, { ...prospect, email: "x@example.com\r\nBcc: x@evil.com" }]) assert.equal(parseLead(body).ok, false);
});
test("attribution strips query data and rejects email addresses in campaign labels", () => {
  assert.deepEqual(cleanAttribution({ source: "outreach", medium: "email", campaign: "sarasota-hvac", landingPage: "/our-work?email=private@example.com", referrerHost: "example.com" }), { source: "outreach", medium: "email", campaign: "sarasota-hvac", landingPage: "/our-work", referrerHost: "example.com" });
  assert.equal(cleanAttribution({ campaign: "private@example.com" }).campaign, "");
  assert.equal(cleanAttribution({ landingPage: "//evil.com" }).landingPage, "/");
});
test("founding offer, optional fields, and campaign context reach the notification", () => {
  const message = buildLeadMessage(lead({ offer: "founding-build", challenge: "<script>alert('x')</script>", attribution: { source: "outreach", campaign: "sarasota-hvac" } }), "test-reference", "dan@example.com", "forms@example.com");
  assert.match(message.subject, /Founding website build application/);
  assert.match(message.text, /Campaign name: sarasota-hvac/);
  assert.match(message.text, /Phone \(optional\): Not provided/);
  assert.equal(message.replyTo.address, prospect.email);
  assert.equal(message.to, "dan@example.com");
  assert.doesNotMatch(message.html, /<script>/);
  assert.match(message.html, /&lt;script&gt;/);
});
test("missing mail config and legacy personal-password variables fail closed", () => {
  assert.throws(() => getMailConfig({}), /MAIL_NOT_CONFIGURED/);
  assert.throws(() => getMailConfig({ EMAIL_USER: "x@example.com", EMAIL_PASSWORD: "old-test-value", EMAIL_SERVICE: "hotmail" }), /MAIL_NOT_CONFIGURED/);
});
test("mail recipient and verified sender are separate from the SMTP login", () => {
  const config = getMailConfig({ SMTP_HOST: "smtp.example.com", SMTP_PORT: "465", SMTP_USER: "apikey", SMTP_PASSWORD: "test-only", CONTACT_TO_EMAIL: "owner@example.com", CONTACT_FROM_EMAIL: "forms@example.com" });
  assert.equal(config.to, "owner@example.com"); assert.equal(config.from, "forms@example.com");
  assert.equal(config.transport.secure, true); assert.equal(config.transport.requireTLS, true);
});
test("accepted submission records one conversion and does not log lead details", async () => {
  let deliveries = 0;
  const response = await request({ ...prospect, offer: "founding-build" }, async (value, id) => { deliveries++; assert.equal(value.offer, "founding-build"); assert.ok(id); });
  assert.equal(deliveries, 1); assert.equal(response.status, 200); assert.equal(response.result.ok, true);
  assert.equal(response.logs[0].event, "lead_submitted");
  assert.doesNotMatch(JSON.stringify(response.logs), /owner@example.com|Sample Owner/);
});
test("provider failure returns an error, preserves failure reference, and emits no conversion", async () => {
  const response = await request(prospect, async () => { throw new Error("SECRET provider details"); });
  assert.equal(response.status, 503); assert.equal(response.result.ok, false); assert.ok(response.result.requestId);
  assert.equal(response.logs[0].event, "lead_delivery_failed");
  assert.doesNotMatch(JSON.stringify(response), /SECRET|lead_submitted/);
});
test("invalid, cross-origin, and bot submissions never invoke email delivery", async () => {
  let calls = 0;
  const deliver = async () => { calls++; };
  assert.equal((await request({}, deliver)).status, 400);
  assert.equal((await request({ ...prospect, companyFax: "spam" }, deliver)).status, 400);
  assert.equal((await request(prospect, deliver, { origin: "https://evil.example.com" })).status, 403);
  assert.equal((await request(prospect, deliver, { contentType: "text/plain" })).status, 415);
  assert.equal((await request(prospect, deliver, { method: "GET" })).status, 405);
  assert.equal(calls, 0);
});
