# Ticketscoup

A Next.js 15 full-stack ticketing system using Hono (API), Prisma (ORM), PostgreSQL, NextAuth v5, Firebase Cloud Messaging, and BunnyCDN.

## Cursor Cloud specific instructions

### Services

| Service | How to start | Port |
|---------|-------------|------|
| Next.js dev server | `npm run dev` | 3000 |
| PostgreSQL | `sudo service postgresql start` | 5432 |

### Key commands

- **Dev server:** `npm run dev`
- **Lint:** `npm run lint`
- **Format:** `npm run pretty`
- **Prisma migrate:** `npx prisma migrate dev --name <name>`
- **Prisma generate:** `npx prisma generate`

### Gotchas

- **Peer dependency conflict:** Use `npm ci --legacy-peer-deps` (or `npm install --legacy-peer-deps`) because `tailwind-scrollbar@4` expects `tailwindcss@4.x` while the project uses `tailwindcss@3.4`.
- **Env validation (`src/_instrumentation.ts`):** The file has an underscore prefix and is NOT auto-loaded by Next.js, so `npm run dev` starts without strict env validation. This is intentional for the current state of the codebase.
- **PostgreSQL must be running** before starting the dev server or running migrations. Start with `sudo service postgresql start`.
- **Database credentials:** The dev database is `ticketscoup` with user/password `ticketscoup/ticketscoup` at `localhost:5432`.
- **API routes** are mounted at `/api/*` via Hono (see `src/app/api/[[...route]]/route.ts`). API reference docs are at `/api/reference`.
- **Auth:** GitHub OAuth and email magic-link auth require real credentials to function. For local dev without auth, use the Hono API endpoints directly (team/ticket endpoints have no auth middleware).
- **Pre-existing lint errors:** The codebase has pre-existing ESLint warnings/errors (unused vars, `any` types). These are not regressions.
