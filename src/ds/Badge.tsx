import type { ReactNode } from 'react'
import { cx } from './cx'

export interface BadgeProps {
  /** agent = work the AI does (dot); human = a person approves (diamond); neutral = metadata. */
  tone?: 'agent' | 'human' | 'neutral'
  className?: string
  children: ReactNode
}

export function Badge({ tone = 'neutral', className, children }: BadgeProps) {
  const mark = tone === 'human' ? <span className="an-diamond" aria-hidden="true" />
    : tone === 'agent' ? <span className="an-dot" aria-hidden="true" /> : null
  return <span className={cx('an-badge', `an-badge--${tone}`, className)}>{mark}{children}</span>
}
