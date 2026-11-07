import { Layout } from './components/Layout'
import { Hero } from './sections/Hero'
import { Process } from './sections/Process'
import { Manifesto } from './sections/Manifesto'
import { Gates } from './sections/Gates'
import { Manga } from './sections/Manga'
import { Shift } from './sections/Shift'
import { Principles } from './sections/Principles'
import { Services } from './sections/Services'
import { Work } from './sections/Work'
import { About } from './sections/About'
import { Fit } from './sections/Fit'
import { Engage } from './sections/Engage'
import { Faq } from './sections/Faq'
import { Contact } from './sections/Contact'
import { DICTS, type Lang } from './i18n'

export default function Home({ lang }: { lang: Lang }) {
  const d = DICTS[lang]
  return (
    <Layout lang={lang} page="home" title={d.meta.title} description={d.meta.description}>
      <Hero />
      <Process />
      <Manifesto />
      <Gates />
      <Manga />
      <Shift />
      <Principles />
      <Services />
      <Work />
      <About />
      <Fit />
      <Engage />
      <Faq />
      <Contact />
    </Layout>
  )
}
