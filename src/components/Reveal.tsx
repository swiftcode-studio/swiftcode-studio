import { useEffect, useRef, useState, type ReactNode } from 'react'

/** Fades children in once they scroll into view. Skipped under reduced motion (see .reveal in site.css). */
export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setInView(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect() } }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal${inView ? ' is-in' : ''}${className ? ` ${className}` : ''}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  )
}
