import { ArrowRight, Check, Clapperboard, Code2, Workflow, type LucideIcon } from 'lucide-react'
import { Badge } from '../ds'
import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'
import { useDict } from '../i18n'
import { STACK } from '../i18n/shared'

const ICONS: Record<string, LucideIcon> = { dev: Code2, auto: Workflow, manga: Clapperboard }

export function Services() {
  const s = useDict().services
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <SectionHead id="services-title" eyebrow={s.eyebrow} title={s.title} lead={s.lead} split />
        <div className="cards cards--3">
          {s.groups.map((g, i) => {
            const Icon = ICONS[g.id]
            return (
              <Reveal key={g.id} className="card group" delay={i * 60}>
                <Icon className="card__icon" size={28} strokeWidth={1.5} aria-hidden="true" />
                <h3 className="title">{g.title}</h3>
                <p>{g.body}</p>
                <ul className="group__list">
                  {g.bullets.map((b) => <li key={b}><Check size={16} strokeWidth={1.5} aria-hidden="true" /><span>{b}</span></li>)}
                </ul>
                <a className="ext card__more" href={g.href}>{s.more}<ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" /></a>
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
