import { GitBranch, FileCheck, History, KeyRound, Lock, ShieldCheck, type LucideIcon } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'
import { useDict } from '../i18n'

const ICONS: LucideIcon[] = [GitBranch, ShieldCheck, Lock, FileCheck, KeyRound, History]

export function Principles() {
  const p = useDict().principles
  return (
    <section className="section" id="principles" aria-labelledby="principles-title">
      <div className="wrap">
        <SectionHead id="principles-title" eyebrow={p.eyebrow} title={p.title} />
        <div className="rules">
          {p.items.map((it, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <Reveal key={it.title} className="rule" delay={(i % 3) * 60}>
                <Icon className="rule__icon" size={24} strokeWidth={1.5} aria-hidden="true" />
                <h3>{it.title}</h3>
                <p>{it.body}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
