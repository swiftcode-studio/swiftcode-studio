import type { Owner, TerminalLine } from '../ds'

export type Lang = 'vi' | 'en' | 'ja'
export type StageCode = 'PLAN' | 'DESIGN' | 'BUILD' | 'TEST' | 'DEPLOY' | 'MAINTAIN'

/**
 * Every string a visitor can see or hear (including aria labels, terminal lines and example files)
 * lives in this dictionary, so each language page is entirely in that language.
 * Only proper nouns, file names and code identifiers stay as they are.
 */

export interface Stage {
  index: string
  code: StageCode
  name: string
  /** Short output label for the pipeline row. */
  file: string
  /** File name shown on the card and in the viewer tab. */
  artifact: string
  owner: Owner
  gate?: string
  body: string
  /** Example content of the stage's output file. */
  sample: string
}

export interface Dict {
  lang: Lang
  htmlLang: string
  ogLocale: string
  meta: { title: string; description: string }
  skip: string
  nav: {
    process: string
    manga: string
    work: string
    about: string
    engage: string
    faq: string
    cta: string
    menu: string
    close: string
    primaryAria: string
    mobileAria: string
    home: string
    theme: { toDark: string; toLight: string }
    language: string
  }
  ds: {
    owner: Record<Owner, string>
    /** Localised stage codes for eyebrows, e.g. "01 / 計画". */
    codes: Record<StageCode, string>
    output: string
    open: string
    legend: { agent: string; human: string }
    gate: string
    pipelineAria: string
    loop: string
  }
  hero: {
    eyebrow: string
    title: string
    lead: string
    primary: string
    secondary: string
    proof: { tone: 'agent' | 'human' | 'neutral'; text: string }[]
    terminalTitle: string
    terminal: TerminalLine[]
    caption: string
    pathsLabel: string
    paths: { title: string; body: string; href: string }[]
  }
  process: {
    eyebrow: string
    title: string
    lead: string
    viewerEyebrow: string
    viewerNote: string
  }
  stages: Stage[]
  manifesto: { line1: string; line2: string; body: string }
  gates: {
    eyebrow: string
    title: string
    lead: string
    who: { client: string; engineer: string; both: string }
    items: { code: StageCode; index: string; who: 'client' | 'engineer' | 'both'; title: string; body: string }[]
    demo: {
      eyebrow: string
      title: string
      body: string
      terminalTitle: string
      start: TerminalLine[]
      approve: string
      revise: string
      reset: string
      approved: TerminalLine[]
      revised: TerminalLine[]
      doneNote: string
    }
  }
  manga: {
    eyebrow: string
    title: string
    lead: string
    inLabel: string
    inputs: string[]
    outLabel: string
    outputs: string[]
    inAlt: string
    outAlt: string
    clipCaption: string
    cutsTitle: string
    cutsBody: string
    cutLabel: string
    cutAlts: [string, string, string]
    stepsTitle: string
    steps: { index: string; code: StageCode; title: string; owner: Owner; artifact: string; gate?: string; body: string }[]
    reviewTitle: string
    reviewBody: string
    reviewTerminalTitle: string
    review: TerminalLine[]
    cardTitle: string
    cardFile: string
    card: string
    specsTitle: string
    specs: [string, string][]
    toolTitle: string
    toolBody: string
    shots: { src: 'compare' | 'speakers'; alt: string; caption: string }[]
    source: string
    cta: string
    /** Link from the homepage section to the dedicated manga page. */
    more: string
  }
  /** The dedicated manga video page (/manga, /en/manga, /vi/manga). */
  mangaPage: {
    metaTitle: string
    metaDescription: string
    eyebrow: string
    title: string
    lead: string
    primary: string
    secondary: string
    whyTitle: string
    why: { title: string; body: string }[]
    faqTitle: string
    faq: { q: string; a: string }[]
    breadcrumb: string
    home: string
  }
  /** Short CTA shown in the fixed bar on phones. */
  stickyCta: string
  shift: {
    eyebrow: string
    title: string
    lead: string
    colStage: string
    colOld: string
    colNew: string
    rows: [string, string, string][]
    source: string
    sourceLink: string
  }
  principles: { eyebrow: string; title: string; items: { title: string; body: string }[] }
  services: { eyebrow: string; title: string; lead: string; items: { title: string; body: string; href?: string }[]; stackLabel: string; more: string }
  work: {
    eyebrow: string
    title: string
    lead: string
    items: { key: 'feediy' | 'ireport' | 'restory'; kind: string; body: string; ai: string; tags: string[] }[]
    /** Label before each project's "how AI was used" line. */
    aiLabel: string
    visit: string
    logoAlt: string
    note: string
    casesTitle: string
    /** Client work shown without names or logos. */
    cases: {
      kind: string
      title: string
      body: string
      ai: string
      fact: string
      tags: string[]
      /** Illustration (localized file per language) and its alt text. */
      image?: { name: string; alt: string; note: string; /** Same file for every language (no text in the image). */ shared?: boolean }
      /** Short step chain drawn as a flow. */
      flow?: string[]
    }[]
    /** This site as a verifiable example of the process. */
    self: { eyebrow: string; title: string; body: string; verify: string }
  }
  about: {
    eyebrow: string
    title: string
    lead: string
    terminalTitle: string
    whoami: TerminalLine[]
    body: string[]
    facts: [string, string][]
    styleTitle: string
    style: { title: string; body: string }[]
  }
  fit: {
    eyebrow: string
    title: string
    lead: string
    good: { title: string; items: string[] }
    bad: { title: string; items: string[] }
  }
  engage: {
    eyebrow: string
    title: string
    lead: string
    items: { code: string; name: string; fit: string; includes: string[]; price: string; contract: string }[]
    fitLabel: string
    flowTitle: string
    flow: { title: string; body: string }[]
    note: string
  }
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] }
  contact: {
    eyebrow: string
    title: string
    lead: string
    f: {
      name: string
      email: string
      company: string
      kind: string
      kinds: string[]
      problem: string
      problemHint: string
      users: string
      usersHint: string
      success: string
      successHint: string
      timeline: string
      timelines: string[]
      optional: string
      none: string
      honeypot: string
    }
    submit: string
    sending: string
    sentMail: string
    sentApi: string
    required: string
    previewTitle: string
    previewNote: string
    mailSubject: string
    privacy: string
    intent: {
      heading: string
      untitled: string
      from: string
      problem: string
      users: string
      success: string
      kind: string
      timeline: string
      next: string
      empty: string
    }
    direct: string
    hours: string
  }
  footer: { tagline: string; company: string; address: string; contact: string; rights: string; process: string; chain: string }
}
