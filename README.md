# northkin

The [northkin.org](https://northkin.org) site, built with [Solas](https://github.com/jk2908/solas) and deployed to Cloudflare Workers.

## Setup

```sh
bun install
```

## Development

```sh
bun run dev # cf dev: runs the Worker (and emulates bindings) locally
```

## Build and deploy

```sh
bun run build  # cf build
bun run deploy # build, then cf deploy (reads secrets from .dev.vars)
```

Pushes to `main` deploy via `.github/workflows/deploy.yml`.

## Structure

- `app/+layout.tsx`: root layout, metadata and fonts
- `app/+page.tsx`: the home page (PPR shell, dynamic footer)
- `app/actions.ts`: the contact server action (valibot + eusend)
- `lib/config.ts`: site config, read from Cloudflare bindings
- `cloudflare.config.ts`: Worker name, domains and bindings
