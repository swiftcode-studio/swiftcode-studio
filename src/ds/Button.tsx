import type { ReactNode } from 'react'
import { cx } from './cx'

export interface ButtonProps {
  /** primary = agent-fill (one per screen); human = a gate action; ghost = secondary. */
  variant?: 'primary' | 'human' | 'ghost'
  size?: 'md' | 'sm'
  href?: string
  arrow?: boolean
  disabled?: boolean
  type?: 'button' | 'submit'
  onClick?: () => void
  className?: string
  children: ReactNode
}

export function Button({ variant = 'primary', size = 'md', href, arrow, disabled, type = 'button', onClick, className, children }: ButtonProps) {
  const cls = cx('an-btn', `an-btn--${variant}`, size === 'sm' && 'an-btn--sm', className)
  const tail = arrow ? <span className="an-btn__arrow" aria-hidden="true">→</span> : null
  if (href) {
    return <a className={cls} href={href} onClick={onClick}>{children}{tail}</a>
  }
  return <button className={cls} type={type} disabled={disabled} onClick={onClick}>{children}{tail}</button>
}
