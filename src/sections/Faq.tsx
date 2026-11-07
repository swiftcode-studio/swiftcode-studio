import { ChevronDown } from 'lucide-react'
import { useDict } from '../i18n'

export function Faq(props: { eyebrow?: string; title?: string; items?: { q: string; a: string }[] }) {
  const base = useDict().faq
  const f = { eyebrow: props.eyebrow ?? base.eyebrow, title: props.title ?? base.title, items: props.items ?? base.items }
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq">
        <div>
          <p className="eyebrow">{f.eyebrow}</p>
          <h2 className="display-lg" id="faq-title">{f.title}</h2>
        </div>
        <div className="qa">
          {f.items.map((it, i) => (
            <details key={it.q} open={i === 0}>
              <summary>{it.q}<ChevronDown size={20} strokeWidth={1.5} aria-hidden="true" /></summary>
              <p>{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
