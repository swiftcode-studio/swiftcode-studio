import type { ReactNode } from 'react'
import { Badge } from './Badge'
import { cx } from './cx'

export type Owner = 'agent' | 'human' | 'both'

export interface StageCardProps {
  index: string
  code: string
  title: string
  owner?: Owner
  ownerLabels: Record<Owner, string>
  artifact?: string
  artifactLabel: string
  gate?: string
  active?: boolean
  /** Makes the artifact chip a button that opens the file. */
  onOpenArtifact?: () => void
  openArtifactLabel?: string
  children?: ReactNode
}

export function StageCard(props: StageCardProps) {
  const { index, code, title, owner = 'agent', ownerLabels, artifact, artifactLabel, gate, active, onOpenArtifact, openArtifactLabel, children } = props
  const tone = owner === 'human' ? 'human' : owner === 'agent' ? 'agent' : 'neutral'
  return (
    <article className={cx('an-stage', active && 'an-stage--active', onOpenArtifact && 'an-stage--clickable')} onClick={onOpenArtifact}>
      <div className="an-stage__top">
        <span className="an-stage__eyebrow">{index} / {code}</span>
        <Badge tone={tone}>{ownerLabels[owner]}</Badge>
      </div>
      <h3 className="an-stage__title">{title}</h3>
      {children ? <p className="an-stage__body">{children}</p> : null}
      <div className="an-stage__foot">
        {artifact ? (
          <span>
            {artifactLabel}{' '}
            {onOpenArtifact ? (
              <button
                type="button"
                className="an-file an-file--btn"
                aria-pressed={active}
                aria-label={openArtifactLabel ? `${openArtifactLabel} ${artifact}` : undefined}
                onClick={(e) => { e.stopPropagation(); onOpenArtifact() }}
              >{artifact}</button>
            ) : <code className="an-file">{artifact}</code>}
          </span>
        ) : null}
        {gate ? <span className="an-gate"><span className="an-diamond" aria-hidden="true" />{gate}</span> : null}
      </div>
    </article>
  )
}
