/** Renders a plain-text artifact with line numbers and light, meaning-based colouring. */
function lineClass(line: string): string {
  const t = line.trimStart()
  if (t === '') return 'cl cl--blank'
  if (t.startsWith('## ')) return 'cl cl--h2'
  if (t.startsWith('# ')) return 'cl cl--h1'
  if (t.startsWith('◆')) return 'cl cl--gate'
  if (t.startsWith('✓')) return 'cl cl--ok'
  if (t.startsWith('✗')) return 'cl cl--err'
  if (t.startsWith('→')) return 'cl cl--arrow'
  if (t.startsWith('$ ')) return 'cl cl--prompt'
  if (/^[a-z-]+:\s/i.test(t) && !t.startsWith('- ')) return 'cl cl--meta'
  return 'cl'
}

export function CodeWell({ text, label }: { text: string; label?: string }) {
  return (
    <pre className="code-well" aria-label={label} tabIndex={0}>
      <code>
        {text.split('\n').map((line, i) => {
          const cls = lineClass(line)
          if (cls.endsWith('prompt')) {
            const at = line.indexOf('$ ')
            return <span key={i} className={cls}>{line.slice(0, at)}<span className="p">$</span>{line.slice(at + 1)}</span>
          }
          return <span key={i} className={cls}>{line}</span>
        })}
      </code>
    </pre>
  )
}
