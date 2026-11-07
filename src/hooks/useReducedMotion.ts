import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

/** Starts false (matches the prerendered HTML), then follows the media query. */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(QUERY)
    const on = () => setReduced(mq.matches)
    on()
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return reduced
}
