/**
 * Build-time pre-renderer.
 *
 * After `vite build` produces the client bundle, this script renders the app
 * to static HTML (via the SSR bundle in dist-ssr) and injects the content into
 * dist/index.html. Search engines then see the full page in the raw HTML.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

// Resolve paths from this script's own location so cwd never matters.
const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(scriptDir, '..')
const distDir = path.join(root, 'dist')
const indexHtml = path.join(distDir, 'index.html')
const ssrBundle = path.join(root, 'dist-ssr', 'prerender-entry.js')

if (!existsSync(indexHtml) || !existsSync(ssrBundle)) {
  console.error('❌ Missing dist/index.html or dist-ssr/prerender-entry.js — run `vite build` first.')
  process.exit(1)
}

const { render } = await import(pathToFileURL(ssrBundle).href)
const bodyHtml = render()

let html = readFileSync(indexHtml, 'utf8')
const rootMarker = '<div id="root"></div>'

if (!html.includes(rootMarker)) {
  console.error('❌ Could not find the root div marker in dist/index.html')
  process.exit(1)
}

// Use a function replacement so any "$" in the rendered HTML is preserved verbatim.
html = html.replace(rootMarker, () => `<div id="root">${bodyHtml}</div>`)
writeFileSync(indexHtml, html)

console.log(
  `✅ Pre-rendered ${bodyHtml.length.toLocaleString()} chars of content into dist/index.html`
)
