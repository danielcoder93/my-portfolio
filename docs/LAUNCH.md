# Agency prospecting launch

## Current release gate

The site can publish using its explicit email-draft contact mode while fresh SMTP
configuration is pending. A visitor must send the draft from their email app; the
site does not claim receipt or log a submission when a draft opens. Verify that
Daniel’s public inbox receives mail before beginning an outreach campaign.
Credential rotation remains necessary even though this site no longer uses the
old password. Code validation and Vercel READY do not prove inbox delivery.

### Required account work

1. In the email account whose credential was previously committed, change the
   exposed password or revoke the exposed app credential. If reused, replace it
   on affected accounts too. Removing `.env` from this branch did not revoke it.
2. Configure an authenticated transactional SMTP sender with domain verification.
   Use fresh provider credentials; do not put a personal Hotmail password into SMTP.
3. In Vercel project `my-portfolio`, set the six names from `.env.example` for
   Preview and Production. `CONTACT_TO_EMAIL` must be an inbox Daniel monitors.
   The public fallback is `dan@createdrevolution.com`; verify it can receive mail.
4. Redeploy the PR preview. Test SMTP authentication and a real form submission.
   Confirm inbox receipt, request offer/source fields, and the Reply recipient.
5. Align Vercel’s project Node setting with the repository’s `22.x` engine.

Password rotation must be performed by the account owner. Do not paste passwords
or SMTP credentials into PR comments, issues, or chat. This task did not rotate
credentials or configure Vercel environment variables.

### Acceptance checks

- Homepage and services emphasize websites, local visibility, and inquiry tracking.
- Raisa’s project links and screenshot load; no unmeasured client outcomes are claimed.
- The review states the three-fix deliverable and two-business-day response window.
- Founding-build CTA selects its offer; scope and separate costs remain visible.
- Submit with phone, challenge, and website blank. Verify the correct owner inbox
  receives the request, then verify Reply targets the prospect.
- Follow an outreach URL through internal pages, then submit. Confirm campaign labels,
  landing page, and selected offer in the same email.
- Missing mail settings or provider failure shows an error, keeps typed details,
  and provides a working direct email link. No success event should be logged.
- Check mobile menu, keyboard navigation, form labels, and narrow viewport overflow.
- Lint, typecheck, focused tests, and production build pass on Node 22.
- On production: check apex-to-www behavior, canonical URLs, robots, sitemap, and old-route redirects.
- After merge, verify a real submission on the production domain before sending outreach.

### Initial measurement and follow-up

Use campaign labels that contain no prospect names, emails, or other personal data.
Example campaign URL:

`https://www.createdrevolution.com/?utm_source=outreach&utm_medium=email&utm_campaign=sarasota-hvac`

Lead notifications contain attribution and a request ID. Save the notification
and record whether the inquiry led to a conversation, proposal, and paying client.
Server conversion logs report provider acceptance, not inbox placement or booked jobs.
Set aside time each business day to respond and meet the two-business-day promise.

Before increasing public or paid traffic, configure a shared rate limit on
`POST /api/contact-form` through Vercel Firewall or a durable backend limiter.
The honeypot and origin checks alone do not stop direct automated submissions.

### Deployment review record

Fill this with the final tested commit and evidence. Preserve incomplete account
checks as incomplete; do not mark them complete based on a build.

- Credential invalidation: owner action pending.
- Vercel mail environment settings: not verified/configured by this task.
- Real SMTP and inbox delivery: pending account configuration.

## Implementation validation — September 17, 2026

- Local revision: primary commit `85e169a` plus the validation handoff commit.
- Lint, TypeScript checks, ten focused tests, and the production build passed.
- Node 22.23.2 HTTP smoke checks: all seven core pages, sitemap, robots, and
  the Raisa screenshot returned 200; all four legacy routes redirected correctly.
- With SMTP configuration absent, a real HTTP submission returned 503 and a
  request reference instead of claiming success.
- The original hosted preview and Raisa’s live site were inspected in the browser.
  Browser access to the revised local site was blocked, so interactive mobile
  and revised form UI checks remain pending.
- GitHub did not receive this revision: local Git lacked authentication, and the
  connected GitHub integration rejected blob creation with HTTP 403
  (Resource not accessible by integration). PR #17 and its preview are unchanged.
- The connected Mac returned one initial shell check, then stopped responding
  to the repository/account check and a connectivity ping. No Mac files changed.

The handoff includes the patch for the exact PR head
`56e96331bec1116af06babc2a8ca44b6f2c22e23`. Apply it on the existing PR branch
and push through an authenticated Git client; do not force-push.

## Publication mode update

The review page now checks server-side SMTP configuration. Without a configured
sender it offers a labeled email-draft action, including founding-offer intent and
campaign labels. It never presents the unconfigured submission form. With valid
settings it presents the tested direct submission form. No credentials or provider
settings are passed to the browser.
