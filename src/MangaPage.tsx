import { Layout } from './components/Layout'
import { MangaHero } from './sections/MangaHero'
import { Manga } from './sections/Manga'
import { Faq } from './sections/Faq'
import { Contact } from './sections/Contact'
import { DICTS, type Lang } from './i18n'

/** Index of "manga video" in contact.f.kinds, preselected on this page. */
const MANGA_KIND = 5

export default function MangaPage({ lang }: { lang: Lang }) {
  const d = DICTS[lang]
  const p = d.mangaPage
  return (
    <Layout lang={lang} page="manga" title={p.metaTitle} description={p.metaDescription}>
      <MangaHero />
      <Manga standalone />
      <Faq eyebrow={d.faq.eyebrow} title={p.faqTitle} items={p.faq} />
      <Contact presetKind={MANGA_KIND} />
    </Layout>
  )
}
