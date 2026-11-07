/** Swiftcode Studio mark: an "S" drawn as the AI loop (agent colour), broken by a human approval gate (diamond).
 *  Colours follow the theme tokens. Source files: design-system/logo/. */
export function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d="M43.06 10.76A13.5 13.5 0 1 0 32 32A13.5 13.5 0 1 1 20.94 53.24" fill="none" stroke="var(--agent)" strokeWidth="9" strokeLinecap="round" />
      <rect x="25.5" y="25.5" width="13" height="13" rx="1.5" transform="rotate(45 32 32)" fill="var(--human)" stroke="var(--surface)" strokeWidth="3" />
    </svg>
  )
}
