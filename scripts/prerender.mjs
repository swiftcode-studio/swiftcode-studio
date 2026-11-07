// Writes one static HTML page per page and language (dist/index.html, dist/en/index.html, dist/manga/index.html, …)
// from the SSR build, so content, <title>, description, share tags, hreflang alternates and JSON-LD are there
// before any JS runs. Also writes dist/sitemap.xml.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')
const { render, PAGES } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function replace(html, pattern, value) {
  if (!pattern.test(html)) throw new Error(`prerender: template is missing ${pattern}`)
  return html.replace(pattern, value)
}
const attr = (html, pattern, value) => replace(html, pattern, (_, head) => head + esc(value))

for (const page of PAGES) {
  let html = template
  html = replace(html, /<html lang="[^"]*"/, `<html lang="${page.htmlLang}"`)
  html = replace(html, /<title>[^<]*<\/title>/, `<title>${esc(page.title)}</title>`)
  html = attr(html, /(<meta name="description" content=")[^"]*/, page.description)
  html = attr(html, /(<meta property="og:title" content=")[^"]*/, page.title)
  html = attr(html, /(<meta property="og:description" content=")[^"]*/, page.description)
  html = attr(html, /(<meta property="og:url" content=")[^"]*/, page.canonical)
  html = attr(html, /(<meta property="og:locale" content=")[^"]*/, page.ogLocale)
  html = attr(html, /(<meta property="og:image" content=")[^"]*/, page.ogImage)
  html = attr(html, /(<link rel="canonical" href=")[^"]*/, page.canonical)
  html = replace(html, /<!--alternates-->[\s\S]*?<!--\/alternates-->/,
    page.alternates.map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${esc(a.href)}" />`).join('\n    '))
  // JSON-LD: escape "<" so text can never close the script element.
  html = replace(html, /<!--jsonld-->/,
    page.jsonLd.map((j) => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`).join('\n    '))
  html = replace(html, /<body data-page="[^"]*">/, `<body data-page="${page.page}">`)
  if (!html.includes('<div id="root"></div>')) throw new Error('prerender: #root not found')
  html = html.replace('<div id="root"></div>', `<div id="root">${render(page.url)}</div>`)

  const out = page.url === '/' ? path.join(dist, 'index.html') : path.join(dist, page.url.slice(1), 'index.html')
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, html)
  console.log(`prerendered ${page.url} → ${path.relative(root, out)} (${Math.round(html.length / 1024)} KB)`)
}

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${PAGES.map((p) => `  <url>
    <loc>${p.canonical}</loc>
    <lastmod>${today}</lastmod>
${p.alternates.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`).join('\n')}
  </url>`).join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
console.log(`sitemap.xml: ${PAGES.length} URLs`)

fs.rmSync(ssrDir, { recursive: true, force: true })
