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
    <div className="flex h-full w-full items-center justify-center px-6">
      <div className="flex w-full max-w-2xl flex-col items-center">
        {/* Status badge */}
        <div className="mb-6">
          <div className="flex items-center gap-2.5 rounded-full border border-accent-violet/30 bg-accent-violet/[0.08] px-5 py-2 backdrop-blur-sm">
            <span className="block h-2 w-2 rounded-full bg-accent-violet-light animate-pulse-dot shadow-[0_0_8px_rgba(167,139,250,0.9)]" />
            <span className="text-[13px] font-medium tracking-wide text-accent-violet-light">
              Now accepting new projects
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-center text-[48px] font-bold leading-[1.12] tracking-tight lg:text-[64px]">
          <span className="whitespace-nowrap">
            <span className="text-text-primary">Built </span>
            <span className="gradient-text">From Scratch.</span>
          </span>
          <br />
          <span className="whitespace-nowrap text-text-primary">Every Time.</span>
        </h1>

        {/* Subheadline */}
        <p className="mb-10 max-w-lg text-center text-[18px] leading-relaxed text-text-secondary">
          Data-driven web infrastructure with zero templates and zero shortcuts.
          Precision systems, fixed pricing, and total singular focus — every time.
        </p>

        {/* Stat cards */}
        <div className="mb-10 grid w-full grid-cols-3 gap-4">
          {STATS.map(({ icon: Icon, label, desc, grad, glow }, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="glass rounded-2xl p-6 text-center cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className={`mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${grad}`}
                style={{ boxShadow: glow }}
              >
                <Icon strokeWidth={1.5} className="h-6 w-6 text-white" />
              </motion.div>
              <p className="mb-1.5 text-[15px] font-semibold text-text-primary">{label}</p>
              <p className="text-[13px] leading-relaxed text-text-muted">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => onNavigate('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-accent-violet to-accent-blue px-8 py-3.5 text-base font-semibold text-white"
            style={{ boxShadow: '0 0 28px rgba(139,92,246,0.4), 0 6px 20px rgba(59,130,246,0.2)' }}
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Start a Project</span>
            <ArrowRight strokeWidth={2} className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.button>

          <motion.a
            href="mailto:admin@zarembkasoftware.com"
            whileHover={{ scale: 1.03, borderColor: 'rgba(255,255,255,0.25)' }}
            className="rounded-xl border border-white/[0.1] px-8 py-3.5 text-base font-medium text-text-secondary transition-all duration-200 hover:text-text-primary"
          >
            Contact: admin@zarembkasoftware.com
          </motion.a>
        </div>
      </div>
    </div>
  )
}
