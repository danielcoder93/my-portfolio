# Agency prospecting launch

## Current release gate

The code is pushed to PR #17 and its Vercel preview and GitHub Actions checks pass.
Production release is blocked by the custom domain and its contact address:
`createdrevolution.com` returns NXDOMAIN, including its MX lookup. Vercel reports
the domain is available to register, so the site must not advertise
`dan@createdrevolution.com` as a working contact path yet.

Restore/register the intended domain and configure an inbox, or obtain Daniel’s
current public contact address and use the project’s active Vercel production
domain temporarily. Match the canonical URL, sitemap, robots, and contact links
to the chosen launch setup. Do not publish a private account email merely because
it appears in hosting metadata.

Once there is a working inbox, the site can publish using explicit email-draft
contact mode while fresh SMTP configuration is pending. A visitor must send the
draft from their email app; opening it never claims receipt or logs a submission.
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
- Missing mail settings selects the explicit email-draft page. Provider failure
  in the configured form shows an error, keeps typed details, and provides a
  direct email link. Neither case logs a successful submission.
- Check mobile menu, keyboard navigation, form labels, and narrow viewport overflow.
- Lint, typecheck, focused tests, and production build pass on Node 22.
- On production: check apex-to-www behavior, canonical URLs, robots, sitemap, and old-route redirects.
- After merge, verify the production email draft and actual inbox receipt before
  sending outreach. If SMTP is configured, also verify a real form submission.

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

- Local revision includes the offer, portfolio, direct form, email-draft mode,
  and validation documentation.
- Lint, TypeScript checks, ten focused tests, and the production build passed.
- Node 22.23.2 HTTP smoke checks: all seven core pages, sitemap, robots, and
  the Raisa screenshot returned 200; all four legacy routes redirected correctly.
- With SMTP configuration absent, a real HTTP submission returned 503 and a
  request reference instead of claiming success.
- GitHub authentication was restored as `danielcoder93`, and the prepared Mac
  worktree was pushed to the existing PR branch. Existing uncommitted work in
  `my-portfolio-dan` was preserved.
- Preview commit `cc8c3e52579950986fde287bd4653862d45cbdad` reached Vercel READY
  (deployment `dpl_B7gJpCREiLNrWVVVQW7qSUzE3XJf`). GitHub Actions run
  `35248485680` passed lint, typecheck, ten tests, and the production build.
- The revised hosted homepage and email-draft review page were inspected in the
  browser. Narrow-viewport interactive checks remain pending.
- Desktop review identified an oversized hero headline; this revision shortens
  the headline and reduces its size to bring the primary action higher.
- DNS checks from the Mac and Google Public DNS returned NXDOMAIN for the domain
  and its mail records. Vercel reported registration availability at $11.25 for
  one year on September 17, 2026. No domain purchase was made.

## Publication mode update

The review page now checks server-side SMTP configuration. Without a configured
sender it offers a labeled email-draft action, including founding-offer intent and
campaign labels. It never presents the unconfigured submission form. With valid
settings it presents the tested direct submission form. No credentials or provider
settings are passed to the browser.
