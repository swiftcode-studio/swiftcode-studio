/** @type {import('tailwindcss').Config} */
// Colours, spacing, radius and fonts read the CSS variables in src/styles/tokens.css
// (from the AI-Native Studio design system, see design-system/).
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        surface: 'var(--surface)',
        'surface-raised': 'var(--surface-raised)',
        'surface-sunken': 'var(--surface-sunken)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        ink: 'var(--ink)',
        'ink-muted': 'var(--ink-muted)',
        agent: 'var(--agent)',
        'agent-fill': 'var(--agent-fill)',
        'on-agent': 'var(--on-agent)',
        'agent-soft': 'var(--agent-soft)',
        human: 'var(--human)',
        'human-fill': 'var(--human-fill)',
        'on-human': 'var(--on-human)',
        'human-soft': 'var(--human-soft)',
        danger: 'var(--danger)',
        focus: 'var(--focus)',
      },
      spacing: {
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        6: 'var(--space-6)',
        8: 'var(--space-8)',
        12: 'var(--space-12)',
        24: 'var(--space-24)',
      },
      borderRadius: { sm: 'var(--radius-sm)', md: 'var(--radius-md)', lg: 'var(--radius-lg)' },
      fontFamily: { sans: 'var(--font-sans)', mono: 'var(--font-mono)' },
      boxShadow: { lift: 'var(--shadow-lift)' },
    },
  },
  plugins: [],
}
