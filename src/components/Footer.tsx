import { useDict } from '../i18n'
import { Logo } from './Logo'
import { COMPANY } from '../i18n/shared'
import { sectionHref, usePage } from '../site'

export function Footer() {
  const d = useDict()
  const page = usePage()
  const year = new Date().getFullYear()
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__grid">
          <div>
            <a href="#top" className="brand"><Logo className="brand__logo" />Swiftcode Studio</a>
            <p className="ftr__tag">{d.footer.tagline}</p>
          </div>
          <div>
            <h2>{d.footer.process}</h2>
            <ul>
              {d.stages.map((s) => <li key={s.index}><a href={sectionHref(page, d.lang, 'process')}>{s.index} · {s.name}</a></li>)}
            </ul>
          </div>
          <div>
            <h2>{d.footer.company}</h2>
            <p className="ftr__addr">{d.footer.address}</p>
          </div>
          <div>
            <h2>{d.footer.contact}</h2>
            <ul>
              <li><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
              <li><a href={COMPANY.phoneHref}>{COMPANY.phone}</a></li>
              <li><a href={COMPANY.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="ftr__bottom">
          <span suppressHydrationWarning>© {COMPANY.founded}–{year} {COMPANY.name}. {d.footer.rights}</span>
          <span className="mono">{d.footer.chain}</span>
        </div>
      </div>
    </footer>
  )
}
