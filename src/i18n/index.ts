import { createContext, useContext } from 'react'
import type { Dict, Lang } from './types'
import vi from './vi'
import en from './en'
import ja from './ja'

export type { Dict, Lang } from './types'

export const DICTS: Record<Lang, Dict> = { ja, en, vi }
// Japanese is the main market, so it lives at the root. Key order = switcher order.
export const LANG_PATH: Record<Lang, string> = { ja: '/', en: '/en', vi: '/vi' }
export const LANG_LABEL: Record<Lang, string> = { ja: 'JA', en: 'EN', vi: 'VI' }
export const LANG_NAME: Record<Lang, string> = { ja: '日本語', en: 'English', vi: 'Tiếng Việt' }
export const SITE_URL = 'https://swiftcode-studio.com'

export const DictContext = createContext<Dict>(ja)
export const useDict = () => useContext(DictContext)
