import { ArrowRight, Clapperboard, Cpu, LayoutGrid, Plug, Smartphone, Wrench, type LucideIcon } from 'lucide-react'
import { Badge } from '../ds'
import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'
import { useDict } from '../i18n'
import { STACK } from '../i18n/shared'

const ICONS: LucideIcon[] = [LayoutGrid, Plug, Smartphone, Cpu, Wrench, Clapperboard]

export function Services() {
  const s = useDict().services
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <SectionHead id="services-title" eyebrow={s.eyebrow} title={s.title} lead={s.lead} split />
        <div className="cards cards--3">
          {s.items.map((it, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <Reveal key={it.title} className="card" delay={(i % 3) * 60}>
                <Icon className="card__icon" size={24} strokeWidth={1.5} aria-hidden="true" />
                <h3 className="title">{it.title}</h3>
                <p>{it.body}</p>
                {it.href ? <a className="ext card__more" href={it.href}>{s.more}<ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" /></a> : null}
              </Reveal>
            )
          })}
        </div>
        <div className="stack">
          <p className="eyebrow">{s.stackLabel}</p>
          <div className="stack__list">{STACK.map((t) => <Badge key={t}>{t}</Badge>)}</div>
        </div>
      </div>
    </section>
  )
}
