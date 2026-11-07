import { createContext, useContext } from 'react'
import { LANG_PATH, type Lang } from './i18n'

export type PageKey = 'home' | 'manga'

/** Every prerendered page, per language. */
export const PAGE_PATH: Record<PageKey, Record<Lang, string>> = {
  home: LANG_PATH,
  manga: { ja: '/manga', en: '/en/manga', vi: '/vi/manga' },
}

export const PageContext = createContext<PageKey>('home')
export const usePage = () => useContext(PageContext)

/** Link to a homepage section from any page (same-page anchor on the homepage itself). */
export function sectionHref(page: PageKey, lang: Lang, id: string): string {
  return page === 'home' ? `#${id}` : `${LANG_PATH[lang]}#${id}`
}

/** Finds which page and language a pathname belongs to. */
export function matchPage(pathname: string): { page: PageKey; lang: Lang } | undefined {
  const path = pathname.replace(/\/+$/, '') || '/'
  for (const page of Object.keys(PAGE_PATH) as PageKey[]) {
    for (const lang of Object.keys(PAGE_PATH[page]) as Lang[]) {
      if (PAGE_PATH[page][lang] === path) return { page, lang }
    }
  }
  return undefined
}
