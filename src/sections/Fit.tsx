import { Check, X } from 'lucide-react'
import { SectionHead } from '../components/SectionHead'
import { useDict } from '../i18n'

export function Fit() {
  const f = useDict().fit
  return (
    <section className="section" id="fit" aria-labelledby="fit-title">
      <div className="wrap">
        <SectionHead id="fit-title" eyebrow={f.eyebrow} title={f.title} lead={f.lead} split />
        <div className="fit">
          <div className="fit__col fit__col--good">
            <h3 className="title">{f.good.title}</h3>
            <ul>{f.good.items.map((x) => <li key={x}><Check size={18} strokeWidth={1.5} aria-hidden="true" /><span>{x}</span></li>)}</ul>
          </div>
          <div className="fit__col">
            <h3 className="title">{f.bad.title}</h3>
            <ul>{f.bad.items.map((x) => <li key={x}><X size={18} strokeWidth={1.5} aria-hidden="true" /><span>{x}</span></li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}
