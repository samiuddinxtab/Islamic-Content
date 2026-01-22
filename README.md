# Islamic Content PWA

Modern Islamic Content Platform built with Next.js App Router, featuring RTL support for Arabic and Urdu languages.

## Features
- Static-first architecture optimized for performance
- RTL (Right-to-Left) support for Arabic and Urdu languages
- Runtime-safe language direction detection
- Optimized for Cloudflare Pages deployment

## Architecture
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Deployment**: Cloudflare Pages (Static Export)
- **Languages Supported**: English (LTR), Arabic (RTL), Urdu (RTL)

## Configuration
- Static export enabled via `output: "export"` in `next.config.js`
- Image optimization disabled for static export compatibility
- Safe fallbacks for language direction detection
- Middleware for locale handling with safe redirections

## Deployment
Build command: `pnpm build`
Output directory: `out/` (automatically generated)
Deploy to Cloudflare Pages with these settings.
