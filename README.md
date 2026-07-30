# Created Revolution

Created Revolution is a conversion-focused agency website for HVAC, plumbing,
and roofing companies. It is built with Next.js, React, TypeScript, Sass, and a
Nodemailer-backed website-review form.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Set these locally and in the production hosting environment:

```text
EMAIL_SERVICE
EMAIL_USER
EMAIL_PASSWORD
```

`EMAIL_SERVICE` defaults to `hotmail` when omitted. Never commit populated
environment files.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Primary routes

- `/`
- `/services`
- `/industries`
- `/our-work`
- `/about`
- `/free-website-review`
- `/privacy`
