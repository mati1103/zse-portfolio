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
        'ivory':          '#F3F0E9',
        'soft-white':     '#FAF9F6',
        'ink':            '#171817',
        'muted':          '#676761',
        'border-neutral': '#D9D5CC',
        'cobalt':         '#3157D5',
        'cobalt-hover':   '#2443AE',
        'charcoal':       '#1C1E20',
        'warm-light':     '#F4F2EC',
      },
      fontFamily: {
        sans:    ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        shimmer:     'shimmer 2.5s linear infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        kenburns:    'kenburns 22s ease-in-out infinite alternate',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-dot': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%':      { transform: 'scale(1.3)', opacity: '0.7' },
        },
        kenburns: {
          '0%':   { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.03)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
