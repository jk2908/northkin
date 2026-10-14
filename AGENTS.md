# northkin

The [northkin.org](https://northkin.org) site, built with [Solas](https://github.com/jk2908/solas) on Cloudflare Workers. See `README.md` for the layout and scripts.

- Routes live in `app/` as `+layout.tsx` / `+page.tsx`; files without a `+` prefix are components.
- Bindings (`NAME`, `EMAIL`, `EUSEND_API_KEY`) are declared in `cloudflare.config.ts` and read with `import { env } from 'cloudflare:workers'`.
- A route is prerendered at build time; mark a subtree as request-time with `await dynamic()` from `@jk2908/solas/server` (the site uses `prerender: 'ppr'`).
- `bun run dev` / `build` / `deploy`; lint and format with `bunx oxlint` and `bunx oxfmt`.
