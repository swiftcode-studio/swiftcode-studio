import { useId } from 'react'

/** Swiftcode Studio mark: a folded-ribbon "S" between code brackets. Vector redraw of the brand logo;
 *  source files and usage rules: design-system/logo/. Gradient ids are per instance (header and footer both render it). */
export function Logo({ className }: { className?: string }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg className={className} viewBox="20 18 610 524" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-scTop`} x1="0" y1=".2" x2="1" y2=".8"><stop offset="0" stopColor="#ffd02a" /><stop offset="1" stopColor="#ffa800" /></linearGradient>
        <linearGradient id={`${id}-scMid`} x1="0" y1=".3" x2="1" y2=".7"><stop offset="0" stopColor="#e03008" /><stop offset=".5" stopColor="#f7801c" /><stop offset="1" stopColor="#ffcc33" /></linearGradient>
        <linearGradient id={`${id}-scBot`} x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#ff8a0a" /><stop offset="1" stopColor="#e83a06" /></linearGradient>
        <linearGradient id={`${id}-scBr`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ff8a1a" /><stop offset="1" stopColor="#ff5200" /></linearGradient>
      </defs>
      <path d="M138 210 L58 292 L138 374" fill="none" stroke={`url(#${id}-scBr)`} strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M512 210 L592 292 L512 374" fill="none" stroke={`url(#${id}-scBr)`} strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M555 28 L465 148 L285 206 C232 222 200 240 182 266 C168 226 180 168 226 130 C250 110 276 102 300 94 Z" fill={`url(#${id}-scTop)`}/>
      <path d="M182 266 C190 285 205 293 225 300 L398 372 C430 384 440 400 436 415 C462 404 490 378 488 340 C486 304 470 288 440 276 L285 206 C232 222 200 240 182 266 Z" fill={`url(#${id}-scMid)`}/>
      <path d="M95 532 L145 450 C160 425 185 412 210 405 L360 355 L398 372 C430 384 440 400 436 415 C430 430 410 440 390 446 Z" fill={`url(#${id}-scBot)`}/>
    </svg>
  )
}

/** Full brand lockup for the header and footer: mark + "SwiftCode" + "STUDIO". */
export function Brand() {
  return (
    <>
      <Logo className="brand__logo" />
      <span className="brand__word">
        <span className="brand__name"><span>Swift</span><span className="brand__code">Code</span></span>
        <span className="brand__studio">STUDIO</span>
      </span>
    </>
  )
}
