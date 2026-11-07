import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import './styles/tokens.css'
import './styles/components.css'
import './styles/site.css'
import App from './App'
import { DICTS } from './i18n'
import { matchPage } from './site'

const el = document.getElementById('root')!
const app = <StrictMode><App /></StrictMode>
const match = matchPage(window.location.pathname)

// Every page in PAGE_PATH is prerendered at build time (scripts/prerender.mjs). Hydrate only when the
// HTML served is that page in that language; anything else (legacy URLs, a server falling back to the
// root page) is rendered from scratch.
if (el.firstElementChild && match && document.documentElement.lang === DICTS[match.lang].htmlLang && document.body.dataset.page === match.page) {
  hydrateRoot(el, app)
} else {
  el.textContent = ''
  createRoot(el).render(app)
}
