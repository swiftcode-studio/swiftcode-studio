import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'
const KEY = 'sc-theme'

/** Dark is the default. The inline script in index.html applies a saved theme before first paint;
 *  state starts at 'dark' (same as the prerendered HTML) and syncs after hydration. */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('dark')

  useEffect(() => {
    if (document.documentElement.dataset.theme === 'light') setThemeState('light')
  }, [])

  const setTheme = useCallback((t: Theme) => {
    document.documentElement.dataset.theme = t
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', t === 'dark' ? '#0f0e0c' : '#f6f3ec')
    try { localStorage.setItem(KEY, t) } catch { /* private mode */ }
    setThemeState(t)
  }, [])

  return { theme, toggle: () => setTheme(theme === 'dark' ? 'light' : 'dark') }
}
