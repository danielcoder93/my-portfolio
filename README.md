# Created Revolution

Agency website for HVAC, plumbing, and roofing companies, built with Next.js
Pages Router, React, TypeScript, Sass, and Nodemailer.

## Local development

Use Node.js 22 (the version pinned in `package.json` and CI).

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Without email credentials, the review page offers an explicit email draft addressed
to Daniel. Visitors must send it in their own email app; opening the draft is not
counted as a submitted lead. Once the six SMTP settings validate, the page presents
the direct submission form. Runtime delivery failures retain the email fallback.

## Validation

```bash
npm run lint
npm run typecheck
npm test
npm run build
node scripts/smoke-http.cjs
```

CI runs these commands for pull requests to `main` and pushes to `main`.
The tests cover lead validation, offer/source context, notification content,
mail configuration, success/failure reporting, and rejected requests. They use
an injected mail sender; they do not prove real SMTP or inbox delivery.

## Email configuration

Use a transactional SMTP provider with a verified sender. Set `SMTP_HOST`,
`SMTP_PORT` (587, 465, or 2525), `SMTP_USER`, `SMTP_PASSWORD`,
`CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` in Vercel **Preview** and
**Production**, then redeploy. Never commit populated environment files.
Only one recipient and one sender mailbox are supported. The SMTP username
may be an API username; it is not used as the notification recipient.

The old `EMAIL_USER` / `EMAIL_PASSWORD` / `EMAIL_SERVICE` configuration is
intentionally no longer read. A personal Outlook/Hotmail sign-in password is
not a supported replacement; [Microsoft requires modern authentication](https://support.microsoft.com/en-us/outlook/pop-imap-and-smtp-settings-for-outlook-com).
Existing leaked credentials must be invalidated in the account that issued them.

After credentials are configured locally, check authentication without sending:

```bash
npm run verify:email
```

To send a clearly labeled test to the configured owner inbox:

```bash
npm run verify:email -- --send-test
```

Provider acceptance is not proof of inbox delivery. Check receipt, spam folder,
and Reply before considering the form ready. See [the launch checklist](docs/LAUNCH.md).

## Offer and attribution

- `/free-website-review`: three priority fixes, delivered by email within two business days.
- `/free-website-review?offer=founding-build`: selected founding-build application.
- Optional phone and challenge are optional on the client **and** server.
- The form accepts bare website domains and removes website query/fragment data.
- Session storage preserves campaign source/medium/name, landing path, and referring
  hostname across internal navigation. No form values are stored in the browser.
- Notifications include offer, source, and request ID; successful provider acceptance
  emits a `lead_submitted` server-log event with ID and offer only.
- Source data in the inbox is the initial reporting record. There is no CRM, GA4
  collector, durable queue, or separate lead database in this implementation.
- The API limits bodies to 12 KB, validates requests, requires JSON, checks browser
  origins, escapes email content, and rejects the honeypot. These do not replace
  deployment-level rate limiting; see the checklist before scaling traffic.

## Portfolio evidence

Raisa’s public homepage was inspected on September 17, 2026. Its screenshot is
stored at `public/raisa-website.jpg`. The project copy describes observable website
work, not measured lead, ranking, or revenue improvements. Do not present Raisa’s
cleaning reviews as testimonials about the agency.

## Deployment

Git pushes to PR #17 update its Vercel preview. The email-draft mode permits publishing without relying on the old SMTP password.
Credential rotation and real inbox testing remain account-level tasks. Verify
the SMTP form after configuring a fresh sender before using it for outreach. The source pins
Node 22; Vercel’s older project-level Node setting should be aligned with it.
