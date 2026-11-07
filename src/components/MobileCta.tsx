import { useEffect, useState } from 'react'
import { Button } from '../ds'
import { useDict } from '../i18n'

/** Fixed contact bar on phones. Hidden while the hero (which has its own button), the contact form or the footer is on screen. */
export function MobileCta() {
  const d = useDict()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const top = document.querySelector('[data-cta-top]')
    const ends = [document.getElementById('contact'), document.querySelector('footer')].filter(Boolean) as Element[]
    let topVisible = true
    const endVisible = new Map<Element, boolean>()
    const update = () => setShow(!topVisible && ![...endVisible.values()].some(Boolean))
    const ioTop = new IntersectionObserver(([e]) => { topVisible = e.isIntersecting; update() })
    const ioEnd = new IntersectionObserver((es) => { es.forEach((e) => endVisible.set(e.target, e.isIntersecting)); update() })
    if (top) ioTop.observe(top); else topVisible = false
    ends.forEach((el) => ioEnd.observe(el))
    return () => { ioTop.disconnect(); ioEnd.disconnect() }
  }, [])

  return (
    <div className={`mcta${show ? ' is-on' : ''}`} inert={!show}>
      <Button href="#contact" arrow>{d.stickyCta}</Button>
    </div>
  )
}
