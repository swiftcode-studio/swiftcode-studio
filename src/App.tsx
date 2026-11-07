import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import MangaPage from './MangaPage'

/** Scrolls to #hash after navigation, including legacy redirects like /contact → /en#contact. */
function HashScroll() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (!hash) return
    const id = decodeURIComponent(hash.slice(1))
    const t = window.setTimeout(() => document.getElementById(id)?.scrollIntoView(), 60)
    return () => window.clearTimeout(t)
  }, [hash, pathname])
  return null
}

/** /ja used to be the Japanese site; Japanese now lives at the root. Keep the #hash. */
function JaToRoot() {
  const { hash } = useLocation()
  return <Navigate to={{ pathname: '/', hash }} replace />
}

// Old site URLs (search results, bookmarks) land on the matching section of the new homepage.
// The old root was English, so old English paths go to /en and old /ja paths go to the root.
const LEGACY: Array<[string, string]> = [
  ['about', 'about'],
  ['services/*', 'services'],
  ['services', 'services'],
  ['technologies', 'services'],
  ['product/*', 'work'],
  ['contact', 'contact'],
]

/** Routes without a router, so the same tree renders in the browser and at build time (prerender). */
export function AppRoutes() {
  return (
    <>
      <HashScroll />
      <Routes>
        <Route path="/" element={<Home lang="ja" />} />
        <Route path="/en" element={<Home lang="en" />} />
        <Route path="/vi" element={<Home lang="vi" />} />
        <Route path="/manga" element={<MangaPage lang="ja" />} />
        <Route path="/en/manga" element={<MangaPage lang="en" />} />
        <Route path="/vi/manga" element={<MangaPage lang="vi" />} />
        <Route path="/ja" element={<JaToRoot />} />
        {LEGACY.map(([from, to]) => (
          <Route key={from} path={`/${from}`} element={<Navigate to={`/en#${to}`} replace />} />
        ))}
        {LEGACY.map(([from, to]) => (
          <Route key={`ja-${from}`} path={`/ja/${from}`} element={<Navigate to={`/#${to}`} replace />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
