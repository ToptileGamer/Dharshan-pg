/**
 * Build-time sitemap + robots.txt generator.
 *
 * Runs after `vite build` and writes host-aware dist/sitemap.xml +
 * dist/robots.txt, so the URLs always match the host you submit to Google
 * Search Console — no more "URLs don't match the property" errors when the
 * site is deployed to a Vercel preview URL vs. the custom domain.
 *
 * Host resolution order:
 *   1. $SITE_URL                       — explicit override
 *   2. $VERCEL_PROJECT_PRODUCTION_URL  — custom domain, else <project>.vercel.app
 *   3. https://dharshanpg.com          — canonical fallback
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(scriptDir, '..', 'dist')
mkdirSync(distDir, { recursive: true })

const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
const siteUrl = (
  process.env.SITE_URL ||
  (vercelUrl ? `https://${vercelUrl}` : 'https://dharshanpg.com')
).replace(/\/+$/, '')

const today = new Date().toISOString().slice(0, 10)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${siteUrl}/</loc>
    <xhtml:link rel="alternate" hreflang="en-IN" href="${siteUrl}/" />
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${siteUrl}/og-image.png</image:loc>
      <image:title>Dharshan PG — Premium Ladies PG in Electronic City, Bengaluru</image:title>
      <image:caption>Premium paying guest accommodation for women near TCS &amp; Infosys in Electronic City</image:caption>
    </image:image>
  </url>
</urlset>
`

const robots = `# robots.txt for Dharshan PG
User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap)
writeFileSync(path.join(distDir, 'robots.txt'), robots)
console.log(`✅ Generated sitemap.xml + robots.txt for ${siteUrl}/`)
