import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '../ds'
import { CodeWell } from '../components/CodeWell'
import { SectionHead } from '../components/SectionHead'
import { useDict, type Dict } from '../i18n'
import { COMPANY } from '../i18n/shared'

interface Fields { name: string; email: string; company: string; kind: string; problem: string; users: string; success: string; timeline: string; website: string }
const EMPTY: Fields = { name: '', email: '', company: '', kind: '', problem: '', users: '', success: '', timeline: '', website: '' }

/**
 * Where the form is posted. Default: FormSubmit, which forwards the JSON to the business inbox (no backend needed;
 * the first submission sends a one-time activation email to that inbox). Override with VITE_CONTACT_ENDPOINT.
 * If the request fails for any reason, the form falls back to opening the visitor's email app.
 */
const ENDPOINT = (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined) || `https://formsubmit.co/ajax/${COMPANY.email}`

const bullets = (s: string, empty: string) => {
  const parts = s.split(/[,;\n、，]+/).map((x) => x.trim()).filter(Boolean)
  return parts.length ? parts.map((x) => `- ${x}`).join('\n') : `- ${empty}`
}

function localDate(now: Date): string {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

function buildIntent(d: Dict, f: Fields, today: string): string {
  const t = d.contact.intent
  const who = [f.name.trim(), f.company.trim()].filter(Boolean).join(' · ') || t.empty
  // Select values are option indexes, so a choice survives a language switch.
  const kind = f.kind === '' ? '' : d.contact.f.kinds[Number(f.kind)]
  const timeline = f.timeline === '' ? '' : d.contact.f.timelines[Number(f.timeline)]
  const meta = [kind && `${t.kind}: ${kind}`, timeline && `${t.timeline}: ${timeline}`].filter(Boolean).join(' · ')
  return [
    `# ${t.heading}: ${f.company.trim() || t.untitled}`,
    `${t.from}: ${[who, today].filter(Boolean).join(' · ')}`,
    ...(meta ? [meta] : []),
    '',
    `## ${t.problem}`,
    f.problem.trim() || t.empty,
    '',
    `## ${t.users}`,
    bullets(f.users, t.empty),
    '',
    `## ${t.success}`,
    bullets(f.success, t.empty),
    '',
    `◆ ${t.next}`,
  ].join('\n')
}

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'ok'; msg: string } | { kind: 'err'; msg: string }

export function Contact({ presetKind }: { presetKind?: number } = {}) {
  const d = useDict()
  const c = d.contact
  const initial: Fields = { ...EMPTY, kind: presetKind === undefined ? '' : String(presetKind) }
  const [f, setF] = useState<Fields>(initial)
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  // Set after mount so the prerendered HTML and the first client render match.
  const [today, setToday] = useState('')
  useEffect(() => setToday(localDate(new Date())), [])
  const intent = useMemo(() => buildIntent(d, f, today), [d, f, today])

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => setF((x) => ({ ...x, [k]: e.target.value }))

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (f.website) return // honeypot
    if (!f.name.trim() || !/^\S+@\S+\.\S+$/.test(f.email.trim()) || !f.problem.trim()) {
      setStatus({ kind: 'err', msg: c.required })
      return
    }
    const subject = `[swiftcode-studio.com] ${c.mailSubject} — ${f.company.trim() || f.name.trim()}`
    const openMail = () => {
      const body = `${intent}\n\n---\n${f.name} <${f.email}>`
      window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus({ kind: 'ok', msg: c.sentMail })
    }
    setStatus({ kind: 'sending' })
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: f.name, email: f.email, company: f.company,
          kind: f.kind === '' ? '' : c.f.kinds[Number(f.kind)], timeline: f.timeline === '' ? '' : c.f.timelines[Number(f.timeline)],
          problem: f.problem, users: f.users, success: f.success, lang: d.lang, intent_md: intent,
          _subject: subject, _replyto: f.email, _template: 'box', _honey: '',
        }),
      })
      const data = await res.json().catch(() => ({}))
      // FormSubmit answers 200 with success "false" until the inbox is activated.
      if (!res.ok || String((data as { success?: unknown }).success) === 'false') throw new Error(String(res.status))
      setStatus({ kind: 'ok', msg: c.sentApi })
      setF(initial)
    } catch {
      openMail()
    }
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <SectionHead id="contact-title" eyebrow={c.eyebrow} title={c.title} lead={c.lead} split />
        <div className="contact">
          <form className="form" onSubmit={submit} noValidate>
            <div className="form__row">
              <div className="field">
                <label htmlFor="cf-name">{c.f.name}</label>
                <input id="cf-name" name="name" autoComplete="name" required value={f.name} onChange={set('name')} />
              </div>
              <div className="field">
                <label htmlFor="cf-email">{c.f.email}</label>
                <input id="cf-email" name="email" type="email" autoComplete="email" required value={f.email} onChange={set('email')} />
              </div>
            </div>
            <div className="form__row">
              <div className="field">
                <label htmlFor="cf-company">{c.f.company}<small>{c.f.optional}</small></label>
                <input id="cf-company" name="company" autoComplete="organization" value={f.company} onChange={set('company')} />
              </div>
              <div className="field">
                <label htmlFor="cf-kind">{c.f.kind}</label>
                <select id="cf-kind" name="kind" value={f.kind} onChange={set('kind')}>
                  <option value="">{c.f.none}</option>
                  {c.f.kinds.map((k, i) => <option key={k} value={String(i)}>{k}</option>)}
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="cf-problem">{c.f.problem}</label>
              <textarea id="cf-problem" name="problem" required placeholder={c.f.problemHint} value={f.problem} onChange={set('problem')} />
            </div>
            <div className="form__row">
              <div className="field">
                <label htmlFor="cf-users">{c.f.users}<small>{c.f.optional}</small></label>
                <input id="cf-users" name="users" placeholder={c.f.usersHint} value={f.users} onChange={set('users')} />
              </div>
              <div className="field">
                <label htmlFor="cf-success">{c.f.success}<small>{c.f.optional}</small></label>
                <input id="cf-success" name="success" placeholder={c.f.successHint} value={f.success} onChange={set('success')} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="cf-timeline">{c.f.timeline}</label>
              <select id="cf-timeline" name="timeline" value={f.timeline} onChange={set('timeline')}>
                <option value="">{c.f.none}</option>
                {c.f.timelines.map((k, i) => <option key={k} value={String(i)}>{k}</option>)}
              </select>
            </div>
            <div className="hp" aria-hidden="true">
              <label htmlFor="cf-website">{c.f.honeypot}</label>
              <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" value={f.website} onChange={set('website')} />
            </div>
            <div className="btn-row">
              <Button type="submit" arrow disabled={status.kind === 'sending'}>{status.kind === 'sending' ? c.sending : c.submit}</Button>
            </div>
            <p className="form__privacy">{c.privacy}</p>
            <div aria-live="polite">
              {status.kind === 'ok' ? <p className="form__status form__status--ok">{status.msg}</p> : null}
              {status.kind === 'err' ? <p className="form__status form__status--err">{status.msg}</p> : null}
            </div>
          </form>

          <div className="intent-preview">
            <div className="an-term">
              <div className="an-term__bar"><i /><i /><i /><span className="an-term__title">{c.previewTitle}</span></div>
              <div className="an-term__body"><CodeWell text={intent} label={c.previewTitle} /></div>
            </div>
            <p className="caption">{c.previewNote}</p>
          </div>
        </div>

        <div className="direct">
          <p className="eyebrow" style={{ margin: 0 }}>{c.direct}</p>
          <ul>
            <li><Mail size={18} strokeWidth={1.5} aria-hidden="true" /><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
            <li><Phone size={18} strokeWidth={1.5} aria-hidden="true" /><a href={COMPANY.phoneHref}>{COMPANY.phone}</a></li>
            <li><MapPin size={18} strokeWidth={1.5} aria-hidden="true" /><span>{d.footer.address}</span></li>
            <li><Clock size={18} strokeWidth={1.5} aria-hidden="true" /><span>{c.hours}</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
