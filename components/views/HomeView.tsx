'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2, Crosshair, DollarSign } from 'lucide-react'
import type { View } from '@/app/page'

interface HomeViewProps {
  onNavigate: (view: View) => void
}

const STATS = [
  {
    icon:  Code2,
    label: 'Zero Templates',
    desc:  'Every line hand-engineered from scratch',
    grad:  'from-violet-500 to-purple-600',
    glow:  '0 0 24px rgba(139,92,246,0.5)',
  },
  {
    icon:  Crosshair,
    label: 'One Project',
    desc:  '100% of our focus, dedicated to you',
    grad:  'from-blue-500 to-cyan-500',
    glow:  '0 0 24px rgba(59,130,246,0.5)',
  },
  {
    icon:  DollarSign,
    label: 'Fixed Price',
    desc:  'One number, locked, zero surprises',
    grad:  'from-pink-500 to-rose-500',
    glow:  '0 0 24px rgba(244,114,182,0.5)',
  },
]

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-y-auto px-5 py-6 md:px-6 md:py-0">
      <div className="flex w-full max-w-2xl flex-col items-center">
        {/* Status badge */}
        <div className="mb-4 md:mb-6">
          <div className="flex items-center gap-2 rounded-full border border-accent-violet/30 bg-accent-violet/[0.08] px-4 py-1.5 md:gap-2.5 md:px-5 md:py-2 backdrop-blur-sm">
            <span className="block h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-accent-violet-light animate-pulse-dot shadow-[0_0_8px_rgba(167,139,250,0.9)]" />
            <span className="text-[12px] md:text-[13px] font-medium tracking-wide text-accent-violet-light">
              Now accepting new projects
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="mb-4 text-center text-[30px] font-bold leading-[1.12] tracking-tight md:mb-6 md:text-[48px] lg:text-[64px]">
          <span className="sm:whitespace-nowrap">
            <span className="text-text-primary">Built </span>
            <span className="gradient-text">From Scratch.</span>
          </span>
          <br />
          <span className="sm:whitespace-nowrap text-text-primary">Every Time.</span>
        </h1>

        {/* Subheadline */}
        <p className="mb-6 max-w-lg text-center text-[14px] leading-relaxed text-text-secondary md:mb-10 md:text-[18px]">
          Data-driven web infrastructure with zero templates and zero shortcuts.
          Precision systems, fixed pricing, and total singular focus — every time.
        </p>

        {/* Stat cards */}
        <div className="mb-6 grid w-full grid-cols-3 gap-2.5 md:mb-10 md:gap-4">
          {STATS.map(({ icon: Icon, label, desc, grad, glow }, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="glass rounded-2xl p-3 text-center cursor-default md:p-6"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className={`mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${grad} md:mb-4 md:h-11 md:w-11`}
                style={{ boxShadow: glow }}
              >
                <Icon strokeWidth={1.5} className="h-4 w-4 md:h-6 md:w-6 text-white" />
              </motion.div>
              <p className="mb-0.5 text-[11px] font-semibold text-text-primary md:text-[15px] md:mb-1.5">{label}</p>
              <p className="hidden sm:block text-[11px] leading-relaxed text-text-muted md:text-[13px]">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex w-full flex-col items-center gap-2.5 sm:flex-row sm:justify-center sm:gap-3">
          <motion.button
            onClick={() => onNavigate('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex w-full sm:w-auto items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-accent-violet to-accent-blue px-8 py-3 md:py-3.5 text-[14px] md:text-base font-semibold text-white"
            style={{ boxShadow: '0 0 28px rgba(139,92,246,0.4), 0 6px 20px rgba(59,130,246,0.2)' }}
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Start a Project</span>
            <ArrowRight strokeWidth={2} className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.button>

          <motion.a
            href="mailto:admin@zarembkasoftware.com"
            whileHover={{ scale: 1.03, borderColor: 'rgba(255,255,255,0.25)', color: '#f8fafc' }}
            style={{ color: '#94a3b8' }}
            className="w-full sm:w-auto rounded-xl border border-white/[0.1] px-6 md:px-8 py-3 md:py-3.5 text-[13px] md:text-base font-medium text-center transition-all duration-200"
          >
            admin@zarembkasoftware.com
          </motion.a>
        </div>
      </div>
    </div>
  )
}
