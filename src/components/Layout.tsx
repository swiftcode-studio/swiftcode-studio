import { useEffect, type ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { MobileCta } from './MobileCta'
import { DICTS, DictContext, SITE_URL, type Lang } from '../i18n'
import { PAGE_PATH, PageContext, type PageKey } from '../site'

function setMeta(selector: string, attr: string, value: string) {
  document.head.querySelector(selector)?.setAttribute(attr, value)
}

/** Shared page shell. Keeps <head> in sync on client-side language switches (prerender writes it for first load). */
export function Layout({ lang, page, title, description, children }: { lang: Lang; page: PageKey; title: string; description: string; children: ReactNode }) {
  const d = DICTS[lang]

  useEffect(() => {
    const url = SITE_URL + PAGE_PATH[page][lang]
    document.documentElement.lang = d.htmlLang
    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[property="og:locale"]', 'content', d.ogLocale)
    setMeta('link[rel="canonical"]', 'href', url)
  }, [lang, page, d, title, description])

  return (
    <DictContext.Provider value={d}>
      <PageContext.Provider value={page}>
        <a className="skip" href="#main">{d.skip}</a>
        <div id="top" />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCta />
      </PageContext.Provider>
    </DictContext.Provider>
  )
}
