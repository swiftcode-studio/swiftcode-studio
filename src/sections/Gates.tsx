import { useState } from 'react'
import { Badge, Button, Terminal } from '../ds'
import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'
import { useDict } from '../i18n'

export function Gates() {
  const d = useDict()
  const g = d.gates
  // Steps taken in the demo, replayed onto the terminal log.
  const [steps, setSteps] = useState<Array<'revise' | 'approve'>>([])
  const [run, setRun] = useState(0)

  const lines = [...g.demo.start, ...steps.flatMap((s) => (s === 'approve' ? g.demo.approved : g.demo.revised))]
  const approved = steps.includes('approve')
  const revised = steps.includes('revise')

  const reset = () => { setSteps([]); setRun((r) => r + 1) }

  return (
    <section className="section" id="gates" aria-labelledby="gates-title">
      <div className="wrap">
        <SectionHead id="gates-title" eyebrow={g.eyebrow} title={g.title} lead={g.lead} split />
        <div className="gates">
          <ol className="gate-list">
            {g.items.map((it, i) => (
              <li key={i}>
                <Reveal className="gate-item">
                  <span className="gate-item__mark" aria-hidden="true" />
                  <div>
                    <div className="gate-item__top">
                      <span className="gate-item__stage">{it.index} / {d.ds.codes[it.code]}</span>
                      <Badge tone="human">{g.who[it.who]}</Badge>
                    </div>
                    <h3>{it.title}</h3>
                    <p>{it.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <div className="demo">
            <p className="eyebrow" style={{ margin: 0 }}>{g.demo.eyebrow}</p>
            <h3 className="title">{g.demo.title}</h3>
            <p className="muted">{g.demo.body}</p>
            <Terminal key={`${d.lang}-${run}`} title={g.demo.terminalTitle} lines={lines} pace={420} live />
            <div className="btn-row">
              {approved ? (
                <Button variant="ghost" onClick={reset}>{g.demo.reset}</Button>
              ) : (
                <>
                  <Button variant="human" onClick={() => setSteps((x) => [...x, 'approve'])}>{g.demo.approve}</Button>
                  {revised
                    ? <Button variant="ghost" onClick={reset}>{g.demo.reset}</Button>
                    : <Button variant="ghost" onClick={() => setSteps((x) => [...x, 'revise'])}>{g.demo.revise}</Button>}
                </>
              )}
            </div>
            <p className="demo__note">{g.demo.doneNote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
