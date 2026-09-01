# Guilders Limited — Corporate Website

Official website for **Guilders Limited** (RC 9819868), a diversified Nigerian company
operating across technology, transport & logistics, trade & commerce, assets & leasing,
and ventures & investments.

**Live:** https://guilders.ltd · **Contact:** hello@guilders.ltd

## Stack

- [Next.js 15](https://nextjs.org) (App Router, static export)
- [Tailwind CSS 4](https://tailwindcss.com)
- TypeScript
- Served by nginx in Docker (see `Dockerfile`), deployed via Coolify

## Pages

`/` home · `/about` · `/services` (5 divisions) · `/contact` · `/privacy` · `/terms`

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Deployment

Pushes to `main` deploy automatically to the VPS via Coolify (Dockerfile build pack).
