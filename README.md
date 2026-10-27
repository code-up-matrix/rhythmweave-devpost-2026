# RhythmWeave

Compose rhythmic patterns and export deterministic, accessible vector art with its recipe.

Built for [InnovArt 2027: Art and Technology Hack Day](https://innovart2027.devpost.com/).

## Run and verify

Node 24 is required. Run `npm ci`, configure .env.local from .env.example, apply `npm run db:migrate` to this product’s own Postgres database, and run `npm run check`. Deploy this Next.js root to Vercel with npm run build.

Open / for the product, /access for signed workspace access and /history for saved work. /api/health reports configuration only; it is not proof of a successful provider call.

## Backend

Local modular rhythm generator and SVG export; Postgres persistence.

Use a dedicated database, random SESSION_SECRET and CRON_SECRET of at least 32 characters, long independent access codes, and the exact HTTPS APP_ORIGIN. Never expose provider keys to the browser. The daily Vercel cleanup cron deletes expired 24-hour run records. Provider-side retention is separate.

This is controlled hackathon workspace access. Consumer-account recovery, general multi-tenant identity, operating budgets, backups and provider terms must be resolved before a broad public launch.

## Entry requirements and current status

Art and technology fit. Overview says students only; body/rules say broader eligibility. Resolve conflict and prepare the Jan 3 presentation.

Source is prepared and independently verified as recorded in verification.json when present. Vercel hosting is deployed at https://rhythmweave-devpost-2026.vercel.app. Database provisioning, any required sponsor proof, video and final submission are still pending. Hosting does not establish production readiness. Repository: https://github.com/code-up-matrix/rhythmweave-devpost-2026.

## Attribution

MIT-licensed. Product implementation was prepared with ChatGPT/Codex assistance on 27 October 2026. Shared foundation: code-up-matrix/axios-fx-compliance-agent, commit 4093cf1. The authored product and shared infrastructure must be disclosed accurately in the event submission.
