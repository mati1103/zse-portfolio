import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'base':               '#07071a',
        'accent-violet':      '#8b5cf6',
        'accent-blue':        '#3b82f6',
        'accent-pink':        '#f472b6',
        'accent-violet-light':'#a78bfa',
        'accent-blue-light':  '#60a5fa',
        'text-primary':       '#f8fafc',
        'text-secondary':     '#94a3b8',
        'text-muted':         '#64748b',
        // backward-compat refs still used inside components
        'hud-bg':             '#07071a',
        'neon-cyan':          '#8b5cf6',
        'text-dim':           '#64748b',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'float-slow':  'float 10s ease-in-out infinite',
        'float-rev':   'float-rev 8s ease-in-out infinite',
        'drift':       'drift 18s ease-in-out infinite',
        'drift-alt':   'drift-alt 22s ease-in-out infinite',
        'glow-pulse':  'glow-pulse 3s ease-in-out infinite',
        'shimmer':     'shimmer 2.5s linear infinite',
        'blink':       'blink 1s step-end infinite',
        'pulse-dot':   'pulse-dot 2s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-24px)' },
        },
        'float-rev': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(24px)' },
        },
        'drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%':      { transform: 'translate(40px, -30px) scale(1.06)' },
          '75%':      { transform: 'translate(-20px, 30px) scale(0.94)' },
        },
        'drift-alt': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%':      { transform: 'translate(-40px, 40px) scale(1.08)' },
          '66%':      { transform: 'translate(30px, -20px) scale(0.92)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%':      { opacity: '1' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        'pulse-dot': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%':      { transform: 'scale(1.3)', opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}

export default config
