// Facts that do not change between languages (proper nouns, contact details, asset paths).

export const COMPANY = {
  name: 'Swiftcode Studio',
  email: 'sales@swiftcode-studio.com',
  phone: '(+84) 35-543-0828',
  phoneHref: 'tel:+84355430828',
  github: 'https://github.com/swiftcode-studio',
  linkedin: 'https://linkedin.com/company/swiftcode-studio',
  founded: 2024,
}

export const PLAYBOOK_URL = 'https://claude.com/resources/articles/the-ai-native-sdlc-playbook'

export const STACK = ['React', 'TypeScript', 'Vue.js', 'Ruby on Rails', 'Node.js', 'Python', 'PHP', 'Flutter', 'React Native', 'PostgreSQL', 'MySQL', 'AWS', 'Google Cloud', 'Docker', 'FFmpeg', 'Claude Code']

export const WORK_BASE = {
  feediy: { name: 'Feediy', url: 'https://feediy.com/', logo: '/images/clients/feediy-logo.png' },
  ireport: { name: 'i-report', url: 'https://i-report.jp/', logo: '/images/clients/ireport-logo.webp' },
  restory: { name: 'RESTORY', url: 'https://re-story.jp/', logo: '/images/clients/restory-logo.png' },
}

export type ShotLang = 'ja' | 'en' | 'vi'

export const MANGA_IMG = {
  input: '/images/manga/input-v3.webp',
  output: '/images/manga/out-v3.webp',
  clip: '/images/manga/clip-v2.mp4',
  poster: '/images/manga/clip-poster.webp',
  cuts: ['/images/manga/cut-1.webp', '/images/manga/cut-2.webp', '/images/manga/cut-3.webp'] as const,
  /** Illustrative tool screens (built from scenes of the same video), labels in the page language. */
  shot: (name: 'compare' | 'speakers', lang: ShotLang) => `/images/manga/tool-v2-${name}-${lang}.webp`,
}
