import { Button } from '../ds'
import { useDict } from '../i18n'
import { LANG_PATH } from '../i18n'
import { MANGA_IMG } from '../i18n/shared'

export function MangaHero() {
  const d = useDict()
  const p = d.mangaPage
  const m = d.manga
  return (
    <section className="hero mhero" aria-labelledby="mhero-title" data-cta-top>
      <div className="wrap">
        <nav className="crumbs" aria-label={p.breadcrumb}>
          <a href={LANG_PATH[d.lang]}>{p.home}</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{p.breadcrumb}</span>
        </nav>
        <div className="hero__grid">
          <div>
            <p className="eyebrow">{p.eyebrow}</p>
            <h1 id="mhero-title" className="display-xl">{p.title}</h1>
            <p className="lead">{p.lead}</p>
            <div className="btn-row">
              <Button href="#contact" arrow>{p.primary}</Button>
              <Button href="#manga" variant="ghost">{p.secondary}</Button>
            </div>
          </div>
          <figure className="mhero__visual">
            <div className="mhero__in">
              <img src={MANGA_IMG.input} alt={m.inAlt} width={1280} height={720} />
              <span className="mhero__chip">{m.inLabel}</span>
            </div>
            <span className="mhero__arrow" aria-hidden="true">↓</span>
            <div className="mhero__outwrap">
              <img className="mhero__out" src={MANGA_IMG.output} alt={m.outAlt} width={1280} height={720} />
              <span className="mhero__chip mhero__chip--out">{m.outLabel}</span>
            </div>
          </figure>
        </div>

        <h2 className="title subhead subhead--sm">{p.whyTitle}</h2>
        <div className="style style--3">
          {p.why.map((w, i) => (
            <div key={w.title} className="style__item">
              <span className="style__n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
