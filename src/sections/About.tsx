import { Terminal } from '../ds'
import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'
import { useDict } from '../i18n'

export function About() {
  const d = useDict()
  const a = d.about
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <SectionHead id="about-title" eyebrow={a.eyebrow} title={a.title} lead={a.lead} split />
        <div className="about">
          <div className="about__term">
            <Terminal key={d.lang} title={a.terminalTitle} lines={a.whoami} pace={420} />
          </div>
          <div className="about__text">
            {a.body.map((p) => <p key={p}>{p}</p>)}
            <dl className="specs">
              {a.facts.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          </div>
        </div>

        <h3 className="title subhead subhead--sm">{a.styleTitle}</h3>
        <div className="style">
          {a.style.map((s, i) => (
            <Reveal key={s.title} className="style__item" delay={i * 60}>
              <span className="style__n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
