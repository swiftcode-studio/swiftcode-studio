import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { cx } from './cx'

export type LineKind = 'prompt' | 'out' | 'ok' | 'gate' | 'error'
export interface TerminalLine { kind?: LineKind; text: string }

export interface TerminalProps {
  title?: string
  lines: TerminalLine[]
  /** shadow-lift: hero only. */
  lift?: boolean
  /** Reveal lines one by one once the terminal scrolls into view. */
  typing?: boolean
  /** Delay between lines, ms. */
  pace?: number
  live?: boolean
  className?: string
}

export function Terminal({ title = 'terminal', lines, lift, typing = true, pace = 520, live, className }: TerminalProps) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const [shown, setShown] = useState(0)
  const animate = typing && !reduced

  useEffect(() => {
    if (!animate || !ref.current) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); io.disconnect() } }, { threshold: 0.3 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [animate])

  useEffect(() => {
    if (!animate || !started || shown >= lines.length) return
    const t = window.setTimeout(() => setShown((n) => n + 1), shown === 0 ? 200 : pace)
    return () => window.clearTimeout(t)
  }, [animate, started, shown, lines.length, pace])

  // Lines removed (e.g. a demo reset) — clamp.
  useEffect(() => { if (shown > lines.length) setShown(lines.length) }, [lines.length, shown])

  const visible = animate ? lines.slice(0, shown) : lines

  return (
    <div ref={ref} className={cx('an-term', lift && 'an-term--lift', className)}>
      <div className="an-term__bar"><i /><i /><i /><span className="an-term__title">{title}</span></div>
      <div className="an-term__body" aria-live={live ? 'polite' : undefined}>
        {visible.map((l, i) => (
          <div key={i} className={cx('an-term__line', `an-term__line--${l.kind ?? 'out'}`, animate && i === visible.length - 1 && 'an-term__line--cursor')}>{l.text}</div>
        ))}
        {/* Reserve height so the frame does not jump while lines appear. */}
        {animate ? lines.slice(visible.length).map((l, i) => (
          <div key={`ghost-${i}`} className={`an-term__line an-term__line--ghost`} aria-hidden="true">{l.text}</div>
        )) : null}
      </div>
    </div>
  )
}
