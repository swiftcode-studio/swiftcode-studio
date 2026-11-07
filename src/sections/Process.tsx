import { useState } from 'react'
import { Pipeline, StageCard } from '../ds'
import { CodeWell } from '../components/CodeWell'
import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'
import { useDict } from '../i18n'

export function Process() {
  const d = useDict()
  const [cur, setCur] = useState(1)
  const s = d.stages[cur]

  const select = (i: number, scroll = false) => {
    setCur(i)
    if (scroll) document.getElementById('viewer')?.scrollIntoView({ block: 'nearest' })
  }

  return (
    <section className="section" id="process" aria-labelledby="process-title">
      <div className="wrap">
        <SectionHead id="process-title" eyebrow={d.process.eyebrow} title={d.process.title} lead={d.process.lead} split />
        <Reveal>
          <Pipeline
            stages={d.stages.map((x) => ({ index: x.index, name: x.name, file: x.file, gate: Boolean(x.gate) }))}
            current={cur}
            onSelect={(i) => select(i, window.matchMedia('(max-width: 719px)').matches)}
            loopLabel={d.ds.loop}
            legend={d.ds.legend}
            ariaLabel={d.ds.pipelineAria}
            gateLabel={d.ds.gate}
          />
        </Reveal>

        <div className="stage-grid stage-grid--process">
          {d.stages.map((x, i) => (
            <Reveal key={x.index} delay={(i % 3) * 60}>
              <StageCard
                index={x.index}
                code={d.ds.codes[x.code]}
                title={x.name}
                owner={x.owner}
                ownerLabels={d.ds.owner}
                artifact={x.artifact}
                artifactLabel={d.ds.output}
                openArtifactLabel={d.ds.open}
                gate={x.gate}
                active={i === cur}
                onOpenArtifact={() => select(i, true)}
              >
                {x.body}
              </StageCard>
            </Reveal>
          ))}
        </div>

        <div className="viewer" id="viewer">
          <div className="viewer__bar">
            <span className="eyebrow viewer__label" style={{ margin: 0 }}>{d.process.viewerEyebrow}</span>
            <div className="tabs" role="tablist" aria-label={d.process.viewerEyebrow}>
              {d.stages.map((x, i) => (
                <button
                  key={x.index}
                  type="button"
                  role="tab"
                  id={`tab-${x.index}`}
                  aria-selected={i === cur}
                  aria-controls="viewer-panel"
                  tabIndex={i === cur ? 0 : -1}
                  className="tab"
                  onClick={() => select(i)}
                  onKeyDown={(e) => {
                    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
                    const n = (cur + (e.key === 'ArrowRight' ? 1 : d.stages.length - 1)) % d.stages.length
                    select(n)
                    document.getElementById(`tab-${d.stages[n].index}`)?.focus()
                  }}
                >
                  <span className="tab__n">{x.index}</span>{x.artifact}
                </button>
              ))}
            </div>
          </div>
          <div className="viewer__body" id="viewer-panel" role="tabpanel" aria-labelledby={`tab-${s.index}`}>
            <CodeWell text={s.sample} label={s.artifact} />
            <aside className="viewer__side">
              <p className="an-stage__eyebrow">{s.index} / {d.ds.codes[s.code]}</p>
              <h3 className="title">{s.name}</h3>
              <p>{s.body}</p>
              {s.gate ? <span className="an-gate"><span className="an-diamond" aria-hidden="true" />{s.gate}</span> : null}
              <p className="viewer__note">{d.process.viewerNote}</p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
