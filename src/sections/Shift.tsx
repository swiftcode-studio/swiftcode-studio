import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'
import { useDict } from '../i18n'
import { PLAYBOOK_URL } from '../i18n/shared'

export function Shift() {
  const s = useDict().shift
  return (
    <section className="section" id="shift" aria-labelledby="shift-title">
      <div className="wrap">
        <SectionHead id="shift-title" eyebrow={s.eyebrow} title={s.title} lead={s.lead} split />
        <Reveal>
          <table className="shift">
            <thead>
              <tr><th scope="col">{s.colStage}</th><th scope="col">{s.colOld}</th><th scope="col" className="new">{s.colNew}</th></tr>
            </thead>
            <tbody>
              {s.rows.map(([step, old, now]) => (
                <tr key={step}>
                  <th scope="row">{step}</th>
                  <td className="old">{old}</td>
                  <td className="new"><div className="cell"><span className="an-dot" aria-hidden="true" /><span>{now}</span></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className="source">{s.source} <a href={PLAYBOOK_URL} target="_blank" rel="noopener noreferrer">{s.sourceLink} ↗</a></p>
      </div>
    </section>
  )
}
