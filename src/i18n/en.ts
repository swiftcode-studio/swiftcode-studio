import type { Dict } from './types'

const en: Dict = {
  lang: 'en',
  htmlLang: 'en',
  ogLocale: 'en_US',
  meta: {
    title: 'AI-native software development & manga video localization | Swiftcode Studio',
    description: 'Swiftcode Studio is a freelance studio that builds software the AI-native way: AI writes the spec, code and tests and ships them; you approve at every gate, and I review and own every line that reaches production. AI manga video editing too.',
  },
  skip: 'Skip to main content',
  nav: {
    process: 'Process',
    services: 'Services',
    manga: 'Manga video',
    work: 'Work',
    about: 'About',
    engage: 'Pricing',
    faq: 'FAQ',
    cta: 'Contact',
    menu: 'Open menu',
    close: 'Close menu',
    primaryAria: 'Main menu',
    mobileAria: 'Mobile menu',
    home: 'Back to top',
    theme: { toDark: 'Switch to dark theme', toLight: 'Switch to light theme' },
    language: 'Language',
  },
  ds: {
    owner: { agent: 'AI does', human: 'Human does', both: 'AI + human' },
    codes: { PLAN: 'PLAN', DESIGN: 'DESIGN', BUILD: 'BUILD', TEST: 'TEST', DEPLOY: 'DEPLOY', MAINTAIN: 'MAINTAIN' },
    output: 'Output',
    open: 'Open file',
    legend: { agent: 'AI does', human: 'Human approves' },
    gate: 'Human approval gate',
    pipelineAria: 'Six-stage process',
    loop: 'Maintain writes a new intent.md → back to Plan',
  },
  hero: {
    eyebrow: 'AI-NATIVE DEVELOPMENT · FREELANCE · HANOI',
    title: 'AI builds it. People sign it off.',
    lead: 'You describe the idea. AI writes the spec, code and tests and ships them — you approve at every gate, and I review and own every line that reaches production.',
    primary: 'Discuss a project',
    secondary: 'See the process',
    proof: [
      { tone: 'agent', text: 'Every stage leaves a file you can read' },
      { tone: 'human', text: 'A person approves every key step' },
      { tone: 'neutral', text: 'One person accountable, end to end' },
    ],
    terminalTitle: 'claude — spa-booking',
    terminal: [
      { kind: 'prompt', text: 'claude "read intent.md, write spec.md for the booking system"' },
      { kind: 'out', text: 'Read intent.md · 3 goals · 2 constraints' },
      { kind: 'out', text: 'Applying rules: security, UX, brand' },
      { kind: 'ok', text: 'spec.md — 14 requirements, 2 decisions for you' },
      { kind: 'gate', text: 'Waiting for you to approve spec.md' },
    ],
    caption: 'Illustrative example of a working session.',
    pathsLabel: 'THREE SERVICES',
    paths: [
      { title: 'Software development', body: 'Web services, SaaS, APIs and existing systems.', href: '#work-dev' },
      { title: 'Automation and tools', body: 'Automate manual tallying and video handling.', href: '#work-auto' },
      { title: 'AI manga video editing', body: 'Full English episodes from manga material.', href: '#manga' },
    ],
  },
  process: {
    eyebrow: 'PROCESS',
    title: 'Six stages, one loop',
    lead: 'From requirements to release and operations, AI does most of the work. Each stage ends with a recorded file — and the next stage starts by reading it.',
    viewerEyebrow: 'STAGE OUTPUT',
    viewerNote: 'Example content, shortened for reading.',
  },
  stages: [
    {
      index: '01', code: 'PLAN', name: 'Plan', file: 'intent.md', artifact: 'intent.md', owner: 'both',
      gate: 'You confirm the goals',
      body: 'AI works with you to turn the idea into a one-page intent: the problem, the users, what success looks like. No long requirements document.',
      sample: `# intent: Online booking for a spa chain
owner: operations manager · 2026-11-02

## Problem
Customers phone in; the front desk writes
bookings by hand. Therapists get
double-booked every week.

## Users
- Customers booking on their phones
- Front desk viewing and moving bookings

## Success when
- Customers book without calling
- No more double-booked therapists

## Constraints
- Web only for now, no app
◆ You confirm → recorded`,
    },
    {
      index: '02', code: 'DESIGN', name: 'Design', file: 'spec.md', artifact: 'spec.md', owner: 'agent',
      gate: 'You approve the spec',
      body: 'AI merges requirements and design into one spec, applies your security, UX and brand rules as it writes, and flags what needs your decision.',
      sample: `# spec: Online booking — v1
based on: intent.md (a41c9e)

## Requirements
R1  Pick service, branch, open slot
R2  Hold the slot 10 min while confirming
R3  Front desk drags to reschedule
R4  Email reminder 24 hours before

## Rules applied
security  no card data stored
UX        booking done in 3 steps max

## Needs your decision
◆ Q1  How many hours ahead can people cancel?
◆ Q2  Take a deposit at booking?`,
    },
    {
      index: '03', code: 'BUILD', name: 'Build', file: 'plan.md → code', artifact: 'plan.md', owner: 'agent',
      gate: 'I approve the plan',
      body: 'AI reads the codebase in read-only mode and writes plan.md: which files change, in what order, with which tests. I approve it before AI writes code, across parallel sessions.',
      sample: `# plan: R1–R4
status: plan only · no files changed yet

1. db/migrate    bookings and slots tables
2. booking.rb    double-booking lock
3. bookings_controller.rb
4. web/src/pages/Book.tsx
5. jobs/reminder_job.rb

## Tests written first
- no overlapping bookings   R3
- slot hold expires        R2
- book in 3 steps          UX

◆ I approve → coding starts`,
    },
    {
      index: '04', code: 'TEST', name: 'Test', file: 'tests + screenshots', artifact: 'test-report', owner: 'agent',
      body: 'AI runs the tests, screenshots the UI against the design and fixes its own work until every check passes. For bugs, the failing test comes first.',
      sample: `$ make test
✓ unit · ✓ integration · ✓ end-to-end
✓ Book.tsx screen matches the design
  (mobile 375px, desktop 1280px)
✗ slot hold test failed
  slot hold does not expire after 10 min
  → AI fixes booking.rb, not the test
✓ slot hold test

all checks passed
evidence attached to PR #42`,
    },
    {
      index: '05', code: 'DEPLOY', name: 'Deploy', file: 'PR + REVIEW.md', artifact: 'PR #42', owner: 'agent',
      gate: 'You accept, I release',
      body: 'AI reviews every change against the same policy: bugs, security, compliance. You run acceptance testing on staging. AI never approves its own code — only a person releases.',
      sample: `# PR #42  Online booking (R1–R4)
reviewed against REVIEW.md v3

important   0
minor       2   (cap 5)
security    ✓ no secrets, inputs validated
compliance  ✓ no card data stored
evidence    ✓ tests, build log, screenshots

◆ You run acceptance testing on staging
◆ I approve · release to production`,
    },
    {
      index: '06', code: 'MAINTAIN', name: 'Maintain', file: 'new intent.md', artifact: 'intents/next.md', owner: 'agent',
      gate: 'You and I pick the next job',
      body: 'AI watches production metrics. When a threshold is crossed, it diagnoses and writes a new intent.md — and the loop returns to stage 01.',
      sample: `# monitor: error rate after release
1σ log · 2σ diagnose · 3σ propose

2026-11-20 09:14
2σ breach on /bookings
AI diagnosis (read-only):
  wrong time zone at one branch
→ wrote intents/fix-timezone.md
→ added a regression test for it

◆ Waiting for you and me to prioritise`,
    },
  ],
  manifesto: {
    line1: 'The speed of AI.',
    line2: 'The accountability of people.',
    body: 'AI writes the code, runs the tests and reviews the changes. People decide what to build, approve every gate and put their name on every release.',
  },
  gates: {
    eyebrow: 'WHERE YOU APPROVE',
    title: 'Nothing reaches production without a person',
    lead: 'AI moves fast but does not decide on its own. Every gate is a specific file, a specific person and a recorded timestamp.',
    who: { client: 'You', engineer: 'Me', both: 'Together' },
    items: [
      { index: '01', code: 'PLAN', who: 'client', title: 'Confirm the goals', body: 'You read a one-page intent.md: the right problem, the right users, the right success criteria.' },
      { index: '02', code: 'DESIGN', who: 'client', title: 'Approve the spec', body: 'The spec marks every decision that is yours. Nothing gets built until you agree.' },
      { index: '03', code: 'BUILD', who: 'engineer', title: 'Approve the plan', body: 'I read plan.md before AI writes the first line — changing course while it is still cheap.' },
      { index: '05', code: 'DEPLOY', who: 'client', title: 'Acceptance testing', body: 'You try it on staging. Test results and screenshots are already attached to every change.' },
      { index: '05', code: 'DEPLOY', who: 'engineer', title: 'Approve and release', body: 'Branch protection stops AI from merging its own work. Only I release to production.' },
      { index: '06', code: 'MAINTAIN', who: 'both', title: 'Pick what comes next', body: 'AI proposes improvements from production data. You and I decide what to do.' },
    ],
    demo: {
      eyebrow: 'TRY A GATE',
      title: 'You press the button',
      body: 'This is the spec approval gate. Approve it and AI moves on to planning, or request changes and AI updates the spec.',
      terminalTitle: 'claude — gate: spec.md',
      start: [
        { kind: 'prompt', text: 'claude "finish spec.md, send it for client approval"' },
        { kind: 'ok', text: 'spec.md — 14 requirements · 2 questions answered' },
        { kind: 'ok', text: 'security, UX and brand rules: pass' },
        { kind: 'gate', text: 'Waiting for you to approve spec.md' },
      ],
      approve: 'Approve spec',
      revise: 'Request changes',
      reset: 'Run again',
      approved: [
        { kind: 'gate', text: 'You approved spec.md · recorded as 7f3e21a' },
        { kind: 'prompt', text: 'claude --plan "read spec.md, write plan.md"' },
        { kind: 'ok', text: 'plan.md — 5 steps, 3 tests written first' },
        { kind: 'gate', text: 'Waiting for me to approve plan.md' },
      ],
      revised: [
        { kind: 'out', text: 'Feedback: "add SMS reminders"' },
        { kind: 'prompt', text: 'claude "update spec.md with the feedback"' },
        { kind: 'ok', text: 'spec.md v2 — added R15: SMS reminders' },
        { kind: 'gate', text: 'Waiting for you to approve spec.md v2' },
      ],
      doneNote: 'Every approval or change request is recorded, with who and when.',
    },
  },
  manga: {
    eyebrow: 'AI MANGA VIDEO',
    title: 'From manga panels to a finished video',
    lead: 'The same AI-native loop, applied to video editing. You send the art, the script and the voice tracks; AI builds the full episode and I check every scene before delivery.',
    inLabel: 'YOU SEND',
    inputs: ['Coloured panels (PNG / PSD)', 'Script with translation (Excel)', 'Voice-over files', 'The Japanese edition, to match the music'],
    outLabel: 'YOU GET',
    outputs: ['A full-episode Full HD video (MP4)', 'English speech bubbles and narration boxes', 'Zoom, pan and several cuts per panel', 'Music, opening teaser and ending scene'],
    inAlt: 'A frame from the Japanese-language video, with no text on it',
    outAlt: 'The same frame with English speech bubbles and a narration box added by my own tool',
    clipCaption: '15 seconds from a publicly released Japanese-language manga video (muted).',
    cutsTitle: 'One panel, several cuts',
    cutsBody: 'Long scenes are split at sentence boundaries: close on the speaker, then medium, then wide. Hard rules: never cut through a face, keep the speaker in frame, and make consecutive cuts clearly different.',
    cutLabel: 'CUT',
    cutAlts: ['Cut 1: close on the speaking character', 'Cut 2: medium shot of the characters', 'Cut 3: wide shot of both characters'],
    stepsTitle: 'Six stages, applied to video',
    steps: [
      { index: '01', code: 'PLAN', title: 'Take the job', owner: 'both', artifact: 'README.md', gate: 'You confirm the delivery date', body: 'Each batch becomes a job card: deadline, material links, notes. I confirm a delivery date the same day.' },
      { index: '02', code: 'DESIGN', title: 'Read the material', owner: 'agent', artifact: 'project.json', gate: 'I check the setup', body: 'The tool detects the script columns (page, panel, speaker, translation), the art, the dialogue images and the voice files.' },
      { index: '03', code: 'BUILD', title: 'Automatic edit', owner: 'agent', artifact: 'speakers.json', gate: 'I confirm the speaker in every scene', body: 'AI aligns every line to the voice track, finds faces, places bubbles clear of them, cuts long scenes and matches the music to the Japanese edition.' },
      { index: '04', code: 'TEST', title: 'Check', owner: 'agent', artifact: 'review.py', body: 'Automated checks on the render: bubbles, framing, every line present, loudness, silences, still frames. Then I watch the whole video.' },
      { index: '05', code: 'DEPLOY', title: 'Deliver in Full HD', owner: 'agent', artifact: '20261104.mp4', gate: 'You approve the delivery', body: 'The Full HD MP4 goes out by download link. You leave timestamped notes; revisions come back on schedule.' },
      { index: '06', code: 'MAINTAIN', title: 'Learn from feedback', owner: 'both', artifact: 'CLAUDE.md', gate: 'We agree on the new rule', body: 'Every note becomes a checklist line or a rule in the tool, applied to every later episode.' },
    ],
    reviewTitle: 'Checked before delivery',
    reviewBody: 'Real output of the automated check on a 22-minute episode. The machine catches what can be measured; a person reviews the rest.',
    reviewTerminalTitle: 'review.py — 20261104.mp4',
    review: [
      { kind: 'prompt', text: 'python review.py --project 20261104' },
      { kind: 'ok', text: 'file: 1920x1080, audio=True, 22:53' },
      { kind: 'ok', text: 'bubbles cut by the screen edge: none' },
      { kind: 'ok', text: 'speaker framed out: none' },
      { kind: 'ok', text: 'shots cutting a face in half: none' },
      { kind: 'ok', text: 'lines: 279 in the video, missing none' },
      { kind: 'ok', text: 'peak -3.3 dBFS · loudness -16.0 LUFS' },
      { kind: 'gate', text: 'I watch the whole video before delivery' },
    ],
    cardTitle: 'One delivered episode',
    cardFile: 'delivery.md',
    card: `# delivery: November 2026, episode 4
length     22:53 · 1920×1080
panels     56 panels · 279 lines
bubbles    125 placed by hand, kept in the render
silence    ~104 s of dead air trimmed from voice files
music      12 segments matched to the Japanese edition
loudness   -16.0 LUFS · peak -3.3 dBFS
checks     13 of 13 automated checks passed
◆ I watch the whole video → deliver`,
    specsTitle: 'Production specs',
    specs: [
      ['Format', 'MP4 (H.264 / AAC), 1920×1080, 30 fps'],
      ['Length', 'A full episode (typically 17–35 minutes)'],
      ['Material', 'Coloured panels (PNG / PSD), script (Excel / Google Sheets), voice (MP3 / WAV)'],
      ['Transfer', 'Google Drive, GigaFile or similar'],
      ['Revisions', 'Timestamped notes; revised video back on schedule'],
      ['Trial', 'Starts with the first ~10 minutes'],
      ['Pricing', 'Quoted by episode length and scope (see the quality in the trial first)'],
      ['Language', 'English editions of Japanese manga (ask about other languages)'],
    ],
    toolTitle: 'A tool I built',
    toolBody: 'AI does the repetitive work; the screens are built for the parts that need human eyes: who is speaking, original versus translation, and nudging a bubble when needed.',
    shots: [
      { src: 'compare', alt: 'Mock-up of the comparison screen: Japanese original on the left, the same scene in English on the right', caption: 'Japanese original and English version side by side, checked line by line (illustration).' },
      { src: 'speakers', alt: 'Mock-up of the character screen: detected faces are numbered and assigned to speaker names', caption: 'A gate: the tool guesses who is speaking, and I confirm every scene before rendering (illustration).' },
    ],
    source: 'Figures are from an episode delivered to a Japanese manga video channel, used with the client\'s permission. Images and the clip are excerpts from a publicly released Japanese-language video, shown as examples to explain the workflow. The English bubbles were composited onto the same scene by my own tool. The tool screens are illustrations built from scenes of the same video; the face boxes are real detector output.',
    cta: 'Discuss a trial episode',
    more: 'Full details on the manga video page',
  },
  mangaPage: {
    metaTitle: 'Manga video English localization | Swiftcode Studio',
    metaDescription: 'Turn Japanese manga videos into English editions. Using the art, script and voice tracks you already have, I edit full episodes — speech bubbles, camera moves and music. Built with AI, checked end to end by a person. Start with a ~10-minute trial.',
    eyebrow: 'MANGA VIDEO · ENGLISH EDITION · GLOBAL',
    title: 'Take your manga videos to English-speaking viewers.',
    lead: 'I edit full English episodes from the art, script and voice tracks you already have. AI assembles each episode; I check every scene before it ships.',
    primary: 'Discuss a trial episode',
    secondary: 'See how it works',
    whyTitle: 'An English edition you can keep up',
    why: [
      { title: 'No redrawing', body: 'Your coloured panels are reused as they are; only the speech bubbles and narration boxes are rebuilt in English.' },
      { title: 'Same music as the original', body: 'Music is matched scene by scene to the published Japanese edition, so each episode keeps its mood.' },
      { title: 'The same standard every time', body: 'Automated checks and a full watch-through on every episode. Your notes become rules applied from the next episode on.' },
    ],
    faqTitle: 'Manga video questions',
    faq: [
      { q: 'What material do you need?', a: 'Coloured panels (PNG / PSD), a script with the translation, and the English voice tracks. Send the published Japanese edition too, so the music can be matched.' },
      { q: 'Can you also translate or record voices?', a: 'For now I work from a translated script and English voice tracks you provide. If you need help with translation or voice, mention it when you get in touch.' },
      { q: 'How long does an episode take?', a: 'It depends on length and the state of the material. I confirm a delivery date the same day you send the request.' },
      { q: 'How do I ask for revisions?', a: 'Send timestamps (for example 4:43–5:21) with what to change. The revised video comes back by the agreed date, and the note becomes a rule for later episodes.' },
      { q: 'Can you handle a regular schedule?', a: 'Yes. Each episode\'s records and checklist carry over to the next, so quality settles in as episodes add up.' },
      { q: 'How much does it cost?', a: 'Quotes depend on episode length and scope. Start with a trial of the first ~10 minutes to see the quality.' },
      { q: 'How do you handle my material?', a: 'It is used only for production and never published. I show work as a reference only with the client\'s permission.' },
    ],
    breadcrumb: 'Manga video editing',
    home: 'Home',
  },
  stickyCta: 'Contact',
  shift: {
    eyebrow: 'WHAT CHANGES',
    title: 'Code is no longer the bottleneck',
    lead: 'Once AI writes code quickly, the slow parts become requirements, review and testing. I redesigned each step around that.',
    colStage: 'Step',
    colOld: 'Traditional',
    colNew: 'AI-native at Swiftcode',
    rows: [
      ['Requirements', 'A PM writes requirements over weeks', 'AI and you write intent.md in one session'],
      ['Design', 'An architect turns requirements into a spec', 'AI writes the spec with your rules applied; you approve'],
      ['Code', 'Engineers write every line', 'AI writes from an approved plan; I review'],
      ['Testing', 'Manual QA at the end of the project', 'AI checks and fixes itself; regression tests run continuously'],
      ['Review', 'Reviewers read the whole diff', 'AI reviews against REVIEW.md; people focus on risk'],
      ['Operations', 'Wait for users to report bugs', 'AI watches metrics and drafts the fix'],
    ],
    source: 'Process based on',
    sourceLink: 'The AI-native SDLC playbook',
  },
  principles: {
    eyebrow: 'COMMITMENTS',
    title: 'Six things that hold on every project',
    items: [
      { title: 'Everything has a history', body: 'Intent, spec, plan, code and review are files with history: who asked for what, what AI did, who approved.' },
      { title: 'Your rules, built in', body: 'Your security, UX and brand rules become settings the AI must follow. They apply while it works, not after a reviewer catches it.' },
      { title: 'AI never approves itself', body: 'Automated guards and branch protection block AI from merging or releasing. Every block is logged with a timestamp.' },
      { title: 'Evidence on every change', body: 'Test results, build logs and screenshots come attached. You approve on evidence, not on promises.' },
      { title: 'Your code is yours', body: 'Repo, docs and configuration live in your accounts from day one. No vendor lock-in.' },
      { title: 'Incidents become tests', body: 'Every production bug becomes a permanent regression test, so the same bug does not come back.' },
    ],
  },
  services: {
    eyebrow: 'WHAT I BUILD',
    title: 'Three services',
    lead: 'What I take on falls into three kinds. All of them follow the same process: AI does the work, people approve.',
    groups: [
      { id: 'dev', title: 'Software development', body: 'Web services, SaaS, APIs and improving existing systems. Six stages with approval gates.', bullets: ['SaaS and web apps', 'APIs and integrations', 'Mobile apps', 'AI features in your product', 'Legacy systems, maintenance and technical audits'], href: '#work-dev' },
      { id: 'auto', title: 'Automation and video/data tools', body: 'Replace manual tallying and video handling with scripts and small tools.', bullets: ['Spreadsheet and LINE workflow automation (Google Apps Script)', 'Automatic video processing (FFmpeg, OBS)', 'AI-powered production tools'], href: '#work-auto' },
      { id: 'manga', title: 'AI manga video editing', body: 'Full English episodes from manga material. Start with a trial of the first ~10 minutes.', bullets: ['Speech bubbles and narration boxes rebuilt', 'Zoom, pan and several cuts', 'Music, opening teaser and ending scene'], href: '#manga' },
    ],
    stackLabel: 'Technologies I use',
    more: 'Learn more',
  },
  work: {
    eyebrow: 'WORK',
    title: 'Products I have built',
    lead: 'SaaS tools for the Japanese market, in use by real customers.',
    items: [
      { key: 'feediy', kind: 'Instagram automation', body: 'Replies to comments and DMs, sends links by scenario, and manages automation flows for business accounts.', ai: 'AI (OpenAI, Gemini) drafts post copy and generates or edits images, and a chat-style AI assistant carries out day-to-day tasks on request.', tags: ['SaaS', 'Instagram API', 'Japan'] },
      { key: 'ireport', kind: 'Instagram analytics', body: 'Account and post performance reports for businesses, processing data from the Instagram API.', ai: 'AI (GPT-4o-mini) classifies competitor accounts by genre and region, and Google Vision reads text inside images. No more manual sorting.', tags: ['SaaS', 'Analytics', 'Japan'] },
      { key: 'restory', kind: 'Stories management', body: 'Archives and manages Instagram Stories, with an interface built for social media teams.', ai: 'Google Vision reads the text in Stories images and videos, and AI (OpenAI) tidies it into searchable text, so past Stories can be found by keyword.', tags: ['SaaS', 'Instagram API', 'Japan'] },
    ],
    visit: 'Visit site',
    logoAlt: 'logo',
    note: 'Want a demo or more detail on a project? Ask me in the contact form.',
    aiLabel: 'How AI helps',
    groupTitles: { dev: 'Products and system development', auto: 'Automation and video/data tools', manga: 'Manga video' },
    casesTitle: 'Other client work',
    cases: [
      {
        group: 'auto',
        kind: 'Video processing · on-device AI',
        title: 'Automatic video mosaic tool',
        body: 'Detects faces that are not on an allow-list, and sensitive regions, then mosaics them. Detections are reviewed and corrected in the browser, and the result exports as a censored video or as a transparent overlay for Premiere Pro. Everything runs on the client\'s Mac; no footage leaves it.',
        ai: 'AI models handle detection (body regions and face recognition). Every human correction becomes training data, so accuracy improves with use.',
        fact: 'A 90-minute Full HD video: about 1 h 40 min to analyse, about 40 min to export (measured on an M1 Mac)',
        tags: ['Python', 'ONNX', 'FFmpeg'],
        flow: ['Load the video', 'AI detects', 'Review in the browser', 'Export censored'],
      },
      {
        group: 'auto',
        kind: 'Workflow automation · Google Apps Script',
        title: 'TikTok Live gift tracking with LINE rankings',
        body: 'Imports TikTok Live gift data into the sales spreadsheet with one button. Monthly sheets, a gifter list and rankings update automatically, and talents or managers check their ranking just by messaging a LINE bot, with what each person sees controlled by role.',
        ai: 'AI wrote the code and tests and automated checks for duplicate imports and date shifts. Manual copy-paste and tallying are gone.',
        image: { name: 'tiktok-gift', alt: 'The monthly totals sheet and the gifter ranking returned in LINE', note: 'Illustration (all data is sample data)' },
        fact: 'Import, totals and LINE replies all run on Google services alone',
        tags: ['Google Apps Script', 'LINE Messaging API', 'Google Sheets'],
      },
      {
        group: 'auto',
        kind: 'Streaming · video editing automation',
        title: 'TikTok Live recording and highlight clips',
        body: 'From TikTok Live streams recorded in OBS, Python and FFmpeg cut out the highlights automatically and export them as short videos. No more re-watching hours of stream from the start.',
        ai: 'AI was used to build the clipping script quickly and to automate everything from finding scenes to export. A person only picks from the finished candidates.',
        fact: 'Recording in OBS; clipping and export automated with Python + FFmpeg',
        tags: ['OBS', 'Python', 'FFmpeg'],
        image: { name: 'tiktok-clips', alt: 'Highlights found in an OBS recording and exported as short clips', note: 'Illustration (sample data)' },
      },
      {
        group: 'dev',
        kind: 'Developer tool · Ruby gem',
        title: 'Error Radar — error tracking and task board for Rails',
        body: 'Captures exceptions from controllers, Rack, Sidekiq and ActiveJob in Rails apps. Repeats of the same failure collapse into one task with an occurrence count, triaged on a kanban dashboard: open, in progress, resolved.',
        ai: 'AI drove design, implementation and tests, so releases up to 1.0 came in short cycles. When a bug shows up in production, AI pins down the cause and prepares the fix and its test together.',
        fact: 'Published and versioned as a gem; running in two live SaaS products',
        tags: ['Ruby on Rails', 'Sidekiq', 'Rails Engine'],
        image: { name: 'error-radar', alt: 'A kanban dashboard for tracking errors', note: 'Illustration (sample data)' },
      },
      {
        group: 'dev',
        kind: 'Infrastructure monitoring · mobile app',
        title: 'Ops Guardian — server monitoring and recovery app',
        body: 'Checks several AWS servers every 30 seconds and shows CPU, memory, disk and Sidekiq status in an Android app. Problems trigger a push notification, and a server can be restarted from the app.',
        ai: 'AI built the control API (Rails) and the Flutter app in parallel. The monitoring rules and the restart procedure were designed and tested together with AI.',
        fact: 'Rails API + Sidekiq for checks, Firebase for push, AWS credentials kept only on the server',
        tags: ['Flutter', 'Ruby on Rails', 'AWS EC2', 'Firebase'],
        image: { name: 'ops-guardian', alt: 'An app screen listing server status with an alert', note: 'Illustration (sample data)' },
      },
      {
        group: 'dev',
        kind: 'Technical audit · existing systems',
        title: 'System audit for merging two SaaS products',
        body: 'Read the code and database of a live SaaS (Rails API + React) and reported on architecture, integrations, technical debt and risks, in a form that supports the decision to merge and lists what must be done first.',
        ai: 'AI read tens of thousands of lines of code and the database schema and drafted the architecture diagram and risk list. I reviewed and completed it, so the whole system was covered in a short time.',
        fact: 'Delivered as an architecture report and a database review',
        tags: ['Ruby on Rails', 'React', 'MySQL', 'Audit'],
        image: { name: 'system-audit', alt: 'An audit report: summary, architecture, risks and merge readiness', note: 'Illustration (sample content)' },
      },
      {
        group: 'auto',
        kind: 'In-house · AI video production',
        title: 'Cue Studio — a tool for making short films with AI',
        body: 'From an idea, AI writes the script and storyboard, then the tool handles keyframes, motion, choosing takes and the final edit in one place. Faces and outfits stay consistent across shots.',
        ai: 'Claude writes the script and directs, an image model draws keyframes and a video model adds motion. The tool picks up downloaded clips automatically, scores the takes and finishes the edit.',
        fact: 'These four frames are AI keyframes that keep the same character',
        tags: ['React', 'Ruby on Rails', 'Remotion', 'FFmpeg'],
        image: { name: 'cue-keyframes', alt: 'Four AI keyframes: the same young woman walks a Saigon sidewalk and drinks iced coffee at a café', note: 'AI-generated keyframes (in-house demo film)', shared: true },
      },
    ],
    self: {
      eyebrow: 'THIS SITE',
      title: 'This site was built the same way',
      body: 'Six pages in three languages, prerendered. Lighthouse on mobile: performance 93–98; accessibility, best practices and SEO all 100 (November 2026, measured before launch). From design rules to build and measurement, it went through the stages described on this page.',
      verify: 'Check it on PageSpeed Insights',
    },
  },
  about: {
    eyebrow: 'ABOUT',
    title: 'You work with one person',
    lead: 'The same person handles the conversation, the design, the review and the release. Nothing gets lost in hand-offs.',
    terminalTitle: 'whoami',
    whoami: [
      { kind: 'prompt', text: 'whoami' },
      { kind: 'out', text: 'Chien — founder, Swiftcode Studio' },
      { kind: 'out', text: 'Freelance engineer · Hanoi, Vietnam' },
      { kind: 'ok', text: 'Web services and SaaS development' },
      { kind: 'ok', text: 'Builds and runs an AI manga video editing tool' },
      { kind: 'gate', text: 'I review everything before it ships' },
    ],
    body: [
      'Since 2024 I have run Swiftcode Studio, building mostly SaaS tools for the Japanese market. My main areas are React, TypeScript and Ruby on Rails, plus video processing in Python.',
      'I use Claude Code every day and keep a clear line between work I hand to AI and decisions a person must make. The process on this site is the one I use on real projects.',
    ],
    facts: [
      ['Based in', 'Hanoi, Vietnam (UTC+7)'],
      ['Since', '2024, as Swiftcode Studio'],
      ['Services', 'Custom software development, AI manga video editing'],
      ['Main stack', 'React, TypeScript, Ruby on Rails, Python, FFmpeg'],
      ['Languages', 'English and Japanese (mostly written), Vietnamese'],
      ['Hours', 'Weekdays 8:00–17:00 Hanoi time'],
    ],
    styleTitle: 'How I work',
    style: [
      { title: 'Same-day replies', body: 'I answer on weekdays within working hours, and questions like delivery dates get an answer the same day.' },
      { title: 'Progress you can read', body: 'Goals, spec, plan and test results are saved as files along the way, so you can always see where things stand.' },
      { title: 'Meetings only when needed', body: 'Most work happens in writing and every decision is documented. Video calls whenever they help.' },
      { title: 'Your tools, not mine', body: 'Slack, Chatwork, Discord or email — whatever you already use. Repos and file sharing stay in your environment.' },
    ],
  },
  fit: {
    eyebrow: 'FIT',
    title: 'What I take on, and what I don\'t',
    lead: 'Said plainly, so neither of us wastes time.',
    good: {
      title: 'A good fit',
      items: [
        'Starting a new web service or SaaS small and fast',
        'Requirements are fuzzy, but the problem is clear',
        'Adding tests and structure to an existing system, then improving it steadily',
        'Turning manga material into English videos on a regular schedule',
      ],
    },
    bad: {
      title: 'Not a good fit',
      items: [
        'You need a large team on site (I work alone)',
        'You cannot make time for reviews and approvals along the way',
        'Your contract does not allow AI tools',
      ],
    },
  },
  engage: {
    eyebrow: 'PRICING',
    title: 'Three ways to start',
    lead: 'Quotes are based on an approved spec, not on guesswork. You know what you are paying for before the project starts.',
    fitLabel: 'Fits when',
    items: [
      {
        code: 'SPRINT 0', name: 'Kick-off', fit: 'You have an idea but no documents yet.',
        includes: ['A working session to write intent.md', 'spec.md with open questions', 'A clickable prototype', 'A fixed quote based on the spec'],
        price: 'Fixed fee', contract: 'Fixed-price contract',
      },
      {
        code: 'BUILD', name: 'Fixed-scope project', fit: 'Scope is clear and you need to launch.',
        includes: ['All six stages with clear gates', 'Weekly demo on staging', 'Acceptance testing and production release', 'Handover of repo and documentation'],
        price: 'Quoted from the approved spec', contract: 'Fixed-price contract',
      },
      {
        code: 'RUN', name: 'Ongoing partnership', fit: 'Your product is live and needs to keep moving.',
        includes: ['Monitoring and the stage 06 loop', 'Me + AI, billed monthly', 'Weekly prioritisation', 'Regular metrics reports'],
        price: 'Monthly', contract: 'Monthly time-and-materials',
      },
    ],
    flowTitle: 'How a project starts',
    flow: [
      { title: 'Get in touch', body: 'Use the form or email. I reply within one business day.' },
      { title: 'Discovery', body: 'In writing or on a call, I learn the problem and the goal.' },
      { title: 'Intent and quote', body: 'You get a one-page intent.md with scope, timeline and cost.' },
      { title: 'Agreement', body: 'Terms in writing before work starts. NDA available.' },
      { title: 'Kick-off', body: 'Work follows the six stages and their gates.' },
    ],
    note: 'Already have an engineering team? I also help teams move to an AI-native process.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions',
    items: [
      { q: 'Is AI-written code good enough?', a: 'AI writes it but never approves it. Every change passes automated tests, a review against REVIEW.md and my approval. I stand behind that code exactly as I would code written by hand.' },
      { q: 'I am not technical. Can I still work this way?', a: 'Yes. You only need to describe the problem. The files you approve — intent.md and spec.md — are in plain language, not code.' },
      { q: 'Are my source code and data safe?', a: 'The repo lives in your account. AI runs in an isolated environment with minimal permissions and no production access. I sign an NDA whenever you need one.' },
      { q: 'Which AI tools do you use?', a: 'Mainly Claude Code for planning, coding, testing and review, connected to your setup on GitHub or GitLab. Tools are chosen to fit your security policy.' },
      { q: 'How is this different from AI-assisted or AI-driven development?', a: 'AI use comes in stages: AI-assisted (AI helps you write code), AI-driven (AI drafts the work at each step), and AI-native (AI runs through every stage from requirements to operations, while people decide and approve). I work the AI-native way, and every approval is recorded: which stage, who, and when.' },
      { q: 'How much cheaper or faster is it with AI?', a: 'It varies too much between projects to promise a figure like "a third of the effort". Instead, quotes come from an approved spec, and you see every stage\'s output and approval record as the work happens.' },
      { q: 'What if requirements change mid-project?', a: 'You edit intent.md or spec.md and AI updates the plan and the code. Every change has a history, so scope and cost stay visible.' },
      { q: 'You are one person. Can you keep up?', a: 'AI runs many sessions in parallel for coding, testing and editing; I spend my time on review and decisions. I only take on as much as I can review properly, and I commit to a delivery date before starting.' },
      { q: 'What kind of contract do you use?', a: 'Kick-off and fixed-scope projects are fixed-price; the ongoing partnership is billed monthly on time and materials. Terms are agreed in writing before work starts.' },
      { q: 'What do you need for a manga video?', a: 'Coloured panels, a script with the translation, and the voice tracks. If the Japanese edition is already published, send it too so the music matches scene by scene. You can start with a trial of the first ~10 minutes.' },
      { q: 'How do you handle my material?', a: 'It is used only for production and never published. I show work as a reference only with the client\'s permission.' },
      { q: 'Can you join an existing system?', a: 'Yes. First, AI reads the codebase, writes documentation and adds tests — before changing anything.' },
    ],
  },
  contact: {
    eyebrow: '01 / PLAN — START HERE',
    title: 'Tell me your idea',
    lead: 'Fill in a few lines and watch a draft intent.md take shape beside the form. It is the first file of your project.',
    f: {
      name: 'Your name',
      email: 'Email',
      company: 'Company',
      kind: 'Project type',
      kinds: ['SaaS / web app', 'API and integrations', 'Mobile app', 'AI feature', 'Legacy system', 'Manga video', 'Other'],
      problem: 'Problem to solve',
      problemHint: 'e.g. Customers phone in to book and the front desk writes it down, so double-bookings happen.',
      users: 'Who will use it?',
      usersHint: 'e.g. customers, front desk staff',
      success: 'Success when…',
      successHint: 'e.g. customers book on their own, no double-bookings',
      timeline: 'Timeline',
      timelines: ['Under 1 month', '1–3 months', '3–6 months', 'Not sure yet'],
      optional: 'optional',
      none: 'Choose one',
      honeypot: 'Leave this field empty',
    },
    submit: 'Send',
    sending: 'Sending…',
    sentMail: 'Your email app opened with everything filled in. Just press send.',
    sentApi: 'Received. I will reply by email.',
    required: 'Error: please add your name, a valid email and the problem.',
    previewTitle: 'intent.md — draft',
    previewNote: 'Once I receive it, I refine this file with you in our first conversation.',
    mailSubject: 'New enquiry',
    privacy: 'What you enter is used only to answer your enquiry. The form is delivered through FormSubmit, a form-forwarding service. Email me if you want it deleted.',
    intent: {
      heading: 'intent',
      untitled: 'New project',
      from: 'from',
      problem: 'Problem',
      users: 'Users',
      success: 'Success when',
      kind: 'type',
      timeline: 'timeline',
      next: 'Waiting for you and me to confirm the goals',
      empty: '…',
    },
    direct: 'Or reach me directly',
    hours: 'Weekdays 8:00–17:00 Hanoi time (UTC+7)',
  },
  footer: {
    tagline: 'The speed of AI, the accountability of people.',
    company: 'Address',
    address: 'No. 12, Alley 239 Dinh Cong, Dinh Cong Ward, Hanoi, Vietnam',
    contact: 'Contact',
    rights: 'All rights reserved.',
    process: 'Process',
    chain: 'intent → spec → plan → change → release ↺',
  },
}

export default en
