import { Check } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'
import { useDict } from '../i18n'

export function Engage() {
  const d = useDict()
  const e = d.engage
  return (
    <section className="section" id="engage" aria-labelledby="engage-title">
      <div className="wrap">
        <SectionHead id="engage-title" eyebrow={e.eyebrow} title={e.title} lead={e.lead} split />
        <div className="cards cards--3">
          {e.items.map((it, i) => (
            <Reveal key={it.code} className="card plan" delay={i * 60}>
              <span className="plan__code">{it.code}</span>
              <h3 className="title">{it.name}</h3>
              <p className="plan__fit"><b>{e.fitLabel}:</b> {it.fit}</p>
              <ul>
                {it.includes.map((x) => <li key={x}><Check size={16} strokeWidth={1.5} aria-hidden="true" /><span>{x}</span></li>)}
              </ul>
              <div className="plan__price">
                <span>{it.price}<small>{it.contract}</small></span>
                <a className="ext" href="#contact" aria-label={d.nav.cta}>→</a>
              </div>
            </Reveal>
          ))}
        </div>

        <h3 className="title subhead subhead--sm">{e.flowTitle}</h3>
        <ol className="flow">
          {e.flow.map((f, i) => (
            <li key={f.title}>
              <span className="flow__n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h4>{f.title}</h4>
              <p>{f.body}</p>
            </li>
          ))}
        </ol>
        <p className="note">{e.note}</p>
      </div>
    </section>
  )
}
