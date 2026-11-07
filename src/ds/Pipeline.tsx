import { cx } from './cx'

export interface PipelineStage { index: string; name: string; file: string; gate?: boolean }

export interface PipelineProps {
  stages: PipelineStage[]
  current?: number
  onSelect?: (i: number) => void
  loopLabel?: string
  legend?: { agent: string; human: string }
  ariaLabel: string
  gateLabel: string
}

export function Pipeline({ stages, current, onSelect, loopLabel, legend, ariaLabel, gateLabel }: PipelineProps) {
  return (
    <div className="an-pipe" role="list" aria-label={ariaLabel}>
      <div className="an-pipe__row">
        {stages.map((s, i) => {
          const inner = (
            <>
              <div className="an-pipe__node">{s.index}</div>
              {s.gate ? <span className="an-pipe__gate" title={gateLabel} aria-label={gateLabel} /> : null}
              <div>
                <div className="an-pipe__name">{s.name}</div>
                <div className="an-pipe__file">{s.file}</div>
              </div>
            </>
          )
          const cls = cx('an-pipe__step', current === i && 'an-pipe__step--current')
          return (
            <div key={s.index} role="listitem" className="an-pipe__item">
              {onSelect ? (
                <button type="button" className={cx(cls, 'an-pipe__step--btn')} aria-pressed={current === i} onClick={() => onSelect(i)}>
                  {inner}
                </button>
              ) : <div className={cls}>{inner}</div>}
            </div>
          )
        })}
      </div>
      {loopLabel ? <div className="an-pipe__loop">{loopLabel}</div> : null}
      {legend ? (
        <div className="an-pipe__legend">
          <span><span className="an-dot" />{legend.agent}</span>
          <span><span className="an-diamond" />{legend.human}</span>
        </div>
      ) : null}
    </div>
  )
}
