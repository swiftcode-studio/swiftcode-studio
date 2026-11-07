import { ArrowRight, Clapperboard, Code2, Workflow } from 'lucide-react'
import { Button, Terminal } from '../ds'
import { useDict } from '../i18n'

export function Hero() {
  const d = useDict()
  const h = d.hero
  return (
    <section className="hero" aria-labelledby="hero-title" data-cta-top>
      <div className="wrap hero__grid">
        <div>
          <p className="eyebrow">{h.eyebrow}</p>
          <h1 id="hero-title" className="display-xl">{h.title}</h1>
          <p className="lead">{h.lead}</p>
          <div className="btn-row">
            <Button href="#contact" arrow>{h.primary}</Button>
            <Button href="#process" variant="ghost">{h.secondary}</Button>
          </div>
          <ul className="proof">
            {h.proof.map((p) => (
              <li key={p.text}>
                {p.tone === 'agent' ? <span className="an-dot" aria-hidden="true" />
                  : p.tone === 'human' ? <span className="an-diamond" aria-hidden="true" />
                    : <span className="sq" aria-hidden="true" />}
                {p.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero__term">
          <Terminal key={d.lang} title={h.terminalTitle} lines={h.terminal} lift pace={650} />
          <p className="caption-row">{h.caption}</p>
        </div>
      </div>
      <div className="wrap">
        <nav className="paths" aria-label={h.pathsLabel}>
          <p className="eyebrow paths__label">{h.pathsLabel}</p>
          {h.paths.map((p, i) => {
            const Icon = [Code2, Workflow, Clapperboard][i]
            return (
              <a key={p.href} className="path" href={p.href}>
                <Icon className="path__icon" size={24} strokeWidth={1.5} aria-hidden="true" />
                <span className="path__text"><b>{p.title}</b><span>{p.body}</span></span>
                <ArrowRight className="path__arrow" size={20} strokeWidth={1.5} aria-hidden="true" />
              </a>
            )
          })}
        </nav>
      </div>
    </section>
  )
}
