import { ArrowUpRight } from 'lucide-react'
import { Badge } from '../ds'
import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'
import { LANG_PATH, SITE_URL, useDict } from '../i18n'
import { WORK_BASE } from '../i18n/shared'

export function Work() {
  const d = useDict()
  const w = d.work
  const pagespeed = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(SITE_URL + LANG_PATH[d.lang])}`
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <SectionHead id="work-title" eyebrow={w.eyebrow} title={w.title} lead={w.lead} split />
        <div className="cards cards--3">
          {w.items.map((it, i) => {
            const base = WORK_BASE[it.key]
            return (
            <Reveal key={it.key} className="card" delay={i * 60}>
              <div className="work-logo"><img src={base.logo} alt={`${base.name} ${w.logoAlt}`} loading="lazy" /></div>
              <span className="work-kind">{it.kind}</span>
              <h3 className="title">{base.name}</h3>
              <p>{it.body}</p>
              <p className="ai-line"><b>{w.aiLabel}</b>{it.ai}</p>
              <a className="ext" href={base.url} target="_blank" rel="noopener noreferrer">
                {w.visit}<ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </a>
              <div className="tags">{it.tags.map((t) => <Badge key={t}>{t}</Badge>)}</div>
            </Reveal>
            )
          })}
        </div>
        <h3 className="title subhead subhead--sm">{w.casesTitle}</h3>
        <div className="cases">
          {w.cases.map((c) => (
            <Reveal key={c.title} className="case">
              <div className="case__text">
                <span className="work-kind">{c.kind}</span>
                <h4 className="title">{c.title}</h4>
                <p>{c.body}</p>
                <p className="ai-line"><b>{w.aiLabel}</b>{c.ai}</p>
                <p className="case__fact">{c.fact}</p>
                <div className="tags">{c.tags.map((t) => <Badge key={t}>{t}</Badge>)}</div>
              </div>
              <div className="case__visual">
                {c.image ? (
                  <figure className="case__img">
                    <img src={c.image.shared ? `/images/cases/${c.image.name}.webp` : `/images/cases/${c.image.name}-${d.lang}.webp`} alt={c.image.alt} width={1600} height={900} loading="lazy" />
                    <figcaption>{c.image.note}</figcaption>
                  </figure>
                ) : null}
                {c.flow ? (
                  <ol className="flowchain">
                    {c.flow.map((step, i) => (
                      <li key={step}><span className="flowchain__n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>{step}</li>
                    ))}
                  </ol>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="selfproof">
          <p className="eyebrow">{w.self.eyebrow}</p>
          <h3 className="title">{w.self.title}</h3>
          <p>{w.self.body}</p>
          <a className="ext" href={pagespeed} target="_blank" rel="noopener noreferrer">
            {w.self.verify}<ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
        <p className="note">{w.note}</p>
      </div>
    </section>
  )
}
