import { Reveal } from '../components/Reveal'
import { useDict } from '../i18n'

export function Manifesto() {
  const m = useDict().manifesto
  return (
    <section className="manifesto" aria-label={`${m.line1} ${m.line2}`}>
      <div className="wrap manifesto__grid">
        <Reveal>
          <h2 className="display-xl"><span>{m.line1}</span><span>{m.line2}</span></h2>
        </Reveal>
        <Reveal delay={80}><p>{m.body}</p></Reveal>
      </div>
    </section>
  )
}
