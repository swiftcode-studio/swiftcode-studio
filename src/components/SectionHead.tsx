import type { ReactNode } from 'react'

export function SectionHead({ eyebrow, title, lead, id, split }: { eyebrow: string; title: string; lead?: ReactNode; id?: string; split?: boolean }) {
  return (
    <div className={`head${split ? ' head--split' : ''}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display-lg" id={id}>{title}</h2>
      </div>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  )
}
