import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { Button } from '../ds'
import { Brand } from './Logo'
import { LANG_LABEL, LANG_NAME, LANG_PATH, useDict, type Lang } from '../i18n'
import { PAGE_PATH, sectionHref, usePage } from '../site'
import { useTheme } from '../hooks/useTheme'

export function Header() {
  const d = useDict()
  const page = usePage()
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const links = [
    [sectionHref(page, d.lang, 'process'), d.nav.process],
    [page === 'manga' ? '#manga' : PAGE_PATH.manga[d.lang], d.nav.manga],
    [sectionHref(page, d.lang, 'work'), d.nav.work],
    [sectionHref(page, d.lang, 'about'), d.nav.about],
    [sectionHref(page, d.lang, 'engage'), d.nav.engage],
    ['#faq', d.nav.faq],
  ] as const

  return (
    <header className="hdr">
      <div className="wrap hdr__in">
        <a className="brand" href={page === 'home' ? '#top' : LANG_PATH[d.lang]} aria-label={`Swiftcode Studio — ${d.nav.home}`}>
          <Brand />
        </a>
        <nav className="nav" aria-label={d.nav.primaryAria}>
          {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="hdr__tools">
          <div className="langs" role="group" aria-label={d.nav.language}>
            {(Object.keys(LANG_PATH) as Lang[]).map((l) => (
              <Link key={l} to={PAGE_PATH[page][l]} hrefLang={l} lang={l} aria-current={l === d.lang ? 'true' : undefined} title={LANG_NAME[l]} preventScrollReset>
                {LANG_LABEL[l]}
              </Link>
            ))}
          </div>
          <button type="button" className="icon-btn" onClick={toggle} aria-label={theme === 'dark' ? d.nav.theme.toLight : d.nav.theme.toDark}>
            {theme === 'dark' ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
          </button>
          <Button variant="ghost" size="sm" href="#contact" className="hdr__cta">{d.nav.cta}</Button>
          <button type="button" className="icon-btn hdr__burger" aria-expanded={open} aria-controls="drawer" aria-label={open ? d.nav.close : d.nav.menu} onClick={() => setOpen((o) => !o)}>
            {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="drawer" id="drawer">
          <nav className="wrap" aria-label={d.nav.mobileAria}>
            {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
            <Button variant="ghost" href="#contact" onClick={() => setOpen(false)}>{d.nav.cta}</Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
