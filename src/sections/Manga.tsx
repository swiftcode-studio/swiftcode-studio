import { useEffect, useRef, useState } from 'react'
import { Button, StageCard, Terminal } from '../ds'
import { CodeWell } from '../components/CodeWell'
import { Reveal } from '../components/Reveal'
import { SectionHead } from '../components/SectionHead'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useDict } from '../i18n'
import { MANGA_IMG } from '../i18n/shared'
import { PAGE_PATH } from '../site'

/** Homepage section, or (standalone) the body of the manga page, whose hero already shows the heading and before/after. */
export function Manga({ standalone = false }: { standalone?: boolean }) {
  const d = useDict()
  const m = d.manga
  const reduced = useReducedMotion()
  // The clip is ~1 MB: attach it only when it gets close to the viewport.
  const clipRef = useRef<HTMLVideoElement>(null)
  const [clipNear, setClipNear] = useState(false)
  useEffect(() => {
    const el = clipRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setClipNear(true); io.disconnect() } }, { rootMargin: '400px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="section" id="manga" aria-labelledby="manga-title">
      <div className="wrap">
        {standalone ? <h2 id="manga-title" className="sr-only">{m.title}</h2> : <SectionHead id="manga-title" eyebrow={m.eyebrow} title={m.title} lead={m.lead} split />}

        {standalone ? null : <div className="ba">
          <Reveal className="ba__item">
            <p className="eyebrow ba__label">{m.inLabel}</p>
            <img src={MANGA_IMG.input} alt={m.inAlt} width={1280} height={720} loading="lazy" />
            <ul className="ba__list">{m.inputs.map((x) => <li key={x}>{x}</li>)}</ul>
          </Reveal>
          <div className="ba__arrow" aria-hidden="true">→</div>
          <Reveal className="ba__item" delay={80}>
            <p className="eyebrow ba__label">{m.outLabel}</p>
            <img src={MANGA_IMG.output} alt={m.outAlt} width={1280} height={720} loading="lazy" />
            <ul className="ba__list ba__list--out">{m.outputs.map((x) => <li key={x}>{x}</li>)}</ul>
          </Reveal>
        </div>}

        <div className="cuts">
          <figure className="cuts__media">
            <video
              key={String(reduced)}
              ref={clipRef}
              src={clipNear ? MANGA_IMG.clip : undefined}
              poster={MANGA_IMG.poster}
              width={1280}
              height={720}
              muted
              loop
              playsInline
              preload="none"
              autoPlay={clipNear && !reduced}
              controls={reduced}
              aria-label={m.clipCaption}
            />
            <figcaption className="caption-row">{m.clipCaption}</figcaption>
          </figure>
          <div className="cuts__text">
            <h3 className="title">{m.cutsTitle}</h3>
            <p className="muted">{m.cutsBody}</p>
            <div className="cuts__thumbs">
              {MANGA_IMG.cuts.map((src, i) => (
                <figure key={src}>
                  <img src={src} alt={m.cutAlts[i]} width={1280} height={720} loading="lazy" />
                  <figcaption>{m.cutLabel} {i + 1}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <h3 className="title subhead">{m.stepsTitle}</h3>
        <div className="stage-grid stage-grid--tight">
          {m.steps.map((s, i) => (
            <Reveal key={s.index} delay={(i % 3) * 60}>
              <StageCard index={s.index} code={d.ds.codes[s.code]} title={s.title} owner={s.owner} ownerLabels={d.ds.owner} artifact={s.artifact} artifactLabel={d.ds.output} gate={s.gate}>
                {s.body}
              </StageCard>
            </Reveal>
          ))}
        </div>

        <div className="mreview">
          <div className="mreview__col">
            <h3 className="title">{m.reviewTitle}</h3>
            <p className="muted">{m.reviewBody}</p>
            <Terminal key={d.lang} title={m.reviewTerminalTitle} lines={m.review} pace={380} />
          </div>
          <div className="mreview__col">
            <h3 className="title">{m.cardTitle}</h3>
            <div className="an-term">
              <div className="an-term__bar"><i /><i /><i /><span className="an-term__title">{m.cardFile}</span></div>
              <div className="an-term__body an-term__body--flush"><CodeWell text={m.card} label={m.cardTitle} /></div>
            </div>
            <h3 className="title specs__title">{m.specsTitle}</h3>
            <dl className="specs">
              {m.specs.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          </div>
        </div>

        <div className="tools">
          <div className="tools__head">
            <h3 className="title">{m.toolTitle}</h3>
            <p className="muted">{m.toolBody}</p>
          </div>
          <div className="tools__grid">
            {m.shots.map((s) => (
              <Reveal key={s.src}>
                <figure className="shot">
                  <a href={MANGA_IMG.shot(s.src, d.lang)} target="_blank" rel="noopener noreferrer">
                    <img src={MANGA_IMG.shot(s.src, d.lang)} alt={s.alt} width={1440} height={900} loading="lazy" />
                  </a>
                  <figcaption>{s.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="manga__foot">
          <p className="source">{m.source}</p>
          <div className="btn-row">
            {standalone ? null : <a className="ext" href={PAGE_PATH.manga[d.lang]}>{m.more}</a>}
            <Button variant="ghost" href="#contact" arrow>{m.cta}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
