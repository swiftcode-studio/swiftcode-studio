import { DICTS, LANG_PATH, SITE_URL, type Lang } from './i18n'
import { COMPANY } from './i18n/shared'
import { PAGE_PATH, type PageKey } from './site'

/** Head data for one prerendered page: meta, alternates and JSON-LD (schema.org). */
export interface PageHead {
  page: PageKey
  lang: Lang
  url: string
  canonical: string
  htmlLang: string
  ogLocale: string
  ogImage: string
  title: string
  description: string
  alternates: { hreflang: string; href: string }[]
  jsonLd: object[]
}

const STUDIO_ID = `${SITE_URL}/#studio`

function studio(lang: Lang): object {
  const d = DICTS[lang]
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': STUDIO_ID,
    name: COMPANY.name,
    url: SITE_URL + LANG_PATH[lang],
    description: d.meta.description,
    image: `${SITE_URL}/og.png`,
    email: COMPANY.email,
    telephone: '+84-35-543-0828',
    foundingDate: String(COMPANY.founded),
    address: { '@type': 'PostalAddress', streetAddress: 'No. 12, Alley 239 Dinh Cong', addressLocality: 'Hoang Mai, Hanoi', addressCountry: 'VN' },
    founder: { '@type': 'Person', name: 'Chien' },
    knowsLanguage: ['ja', 'en', 'vi'],
    areaServed: ['JP', 'VN', 'Worldwide'],
    sameAs: [COMPANY.github],
  }
}

function faqPage(items: { q: string; a: string }[], lang: Lang): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: DICTS[lang].htmlLang,
    mainEntity: items.map((it) => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a } })),
  }
}

export function pageHead(page: PageKey, lang: Lang): PageHead {
  const d = DICTS[lang]
  const url = PAGE_PATH[page][lang]
  const canonical = SITE_URL + url
  const title = page === 'home' ? d.meta.title : d.mangaPage.metaTitle
  const description = page === 'home' ? d.meta.description : d.mangaPage.metaDescription
  const langs = Object.keys(PAGE_PATH[page]) as Lang[]
  const alternates = [
    ...langs.map((l) => ({ hreflang: DICTS[l].htmlLang, href: SITE_URL + PAGE_PATH[page][l] })),
    { hreflang: 'x-default', href: SITE_URL + PAGE_PATH[page].ja },
  ]
  const jsonLd: object[] = [studio(lang)]
  if (page === 'home') {
    jsonLd.push(faqPage(d.faq.items, lang))
  } else {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: d.mangaPage.metaTitle.split(' | ')[0],
      description,
      serviceType: d.mangaPage.breadcrumb,
      provider: { '@id': STUDIO_ID },
      areaServed: 'Worldwide',
      url: canonical,
    })
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: d.mangaPage.home, item: SITE_URL + LANG_PATH[lang] },
        { '@type': 'ListItem', position: 2, name: d.mangaPage.breadcrumb, item: canonical },
      ],
    })
    jsonLd.push(faqPage(d.mangaPage.faq, lang))
  }
  return {
    page, lang, url, canonical, title, description, alternates, jsonLd,
    htmlLang: d.htmlLang,
    ogLocale: d.ogLocale,
    ogImage: `${SITE_URL}/${lang === 'ja' ? 'og.png' : `og-${lang}.png`}`,
  }
}

export const ALL_PAGES: PageHead[] = (Object.keys(PAGE_PATH) as PageKey[]).flatMap((page) =>
  (Object.keys(PAGE_PATH[page]) as Lang[]).map((lang) => pageHead(page, lang)))
