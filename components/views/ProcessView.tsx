'use client'

import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  MessageSquare, Phone, FileText, CheckCircle, Layers,
  Code2, RefreshCw, Rocket, Shield, Repeat, ArrowRight,
} from 'lucide-react'
import type { View } from '@/app/page'

interface ProcessViewProps {
  onNavigate: (view: View) => void
}

interface HL { label: string; value: string; strike?: boolean }
interface Step {
  num:         string
  title:       string
  Icon:        React.ElementType
  description: string
  highlights:  HL[]
  grad:        string
  glow:        string
  rgb:         string
}

const STEPS: Step[] = [
  {
    num: '01', title: 'Project Inquiry',
    Icon: MessageSquare,
    grad: 'from-violet-500 to-purple-600', glow: '0 0 32px rgba(139,92,246,0.5)', rgb: '139,92,246',
    description: 'Tell us about your business, goals, and what you need built. We review your project type, required features, timeline, and budget.',
    highlights: [
      { label: 'Channel',    value: 'Inquiry form' },
      { label: 'We review',  value: 'Type, features, timeline' },
      { label: 'Budget',     value: 'Discussed upfront' },
      { label: 'Commitment', value: 'None required' },
    ],
  },
  {
    num: '02', title: 'Discovery Call',
    Icon: Phone,
    grad: 'from-blue-500 to-cyan-500', glow: '0 0 32px rgba(59,130,246,0.5)', rgb: '59,130,246',
    description: 'A 30–45 minute call to deeply understand your project. We discuss goals, target users, design direction, and the functionality you need.',
    highlights: [
      { label: 'Duration', value: '30–45 minutes' },
      { label: 'Goals',    value: 'Business objectives' },
      { label: 'Users',    value: "Who we're building for" },
      { label: 'Design',   value: 'Direction & style' },
    ],
  },
  {
    num: '03', title: 'Project Proposal',
    Icon: FileText,
    grad: 'from-emerald-500 to-teal-600', glow: '0 0 32px rgba(16,185,129,0.5)', rgb: '16,185,129',
    description: 'You receive a custom proposal covering everything needed to make an informed decision before committing to the project.',
    highlights: [
      { label: 'Scope',        value: 'Full work breakdown' },
      { label: 'Timeline',     value: 'Delivery schedule' },
      { label: 'Pricing',      value: 'Flat rate, binding' },
      { label: 'Deliverables', value: 'Clearly defined' },
    ],
  },
  {
    num: '04', title: 'Agreement & Deposit',
    Icon: CheckCircle,
    grad: 'from-orange-500 to-amber-500', glow: '0 0 32px rgba(249,115,22,0.5)', rgb: '249,115,22',
    description: 'Once the proposal is approved, the engagement is formalized. A contract is signed, the initialization deposit is paid, and development begins.',
    highlights: [
      { label: 'Contract', value: 'Signed by both' },
      { label: 'Deposit',  value: '50% to initialize' },
      { label: 'Final',    value: '50% on sign-off' },
      { label: 'Status',   value: 'Development begins' },
    ],
  },
  {
    num: '05', title: 'Planning & Design',
    Icon: Layers,
    grad: 'from-pink-500 to-rose-500', glow: '0 0 32px rgba(236,72,153,0.5)', rgb: '236,72,153',
    description: 'We create the complete foundation before writing a single line of production code: site structure, user flows, design direction, and technical plan.',
    highlights: [
      { label: 'Structure',  value: 'Site architecture' },
      { label: 'User flows', value: 'Journeys mapped' },
      { label: 'Design',     value: 'Direction agreed' },
      { label: 'Tech plan',  value: 'Stack & approach' },
    ],
  },
  {
    num: '06', title: 'Development',
    Icon: Code2,
    grad: 'from-indigo-500 to-blue-600', glow: '0 0 32px rgba(99,102,241,0.5)', rgb: '99,102,241',
    description: 'The website or application is built from a blank canvas. Frontend, backend, databases, and integrations — all rigorously tested before delivery.',
    highlights: [
      { label: 'Frontend',  value: 'Next.js + Tailwind' },
      { label: 'Backend',   value: 'Supabase + APIs' },
      { label: 'Staging',   value: 'Private link access' },
      { label: 'Templates', value: 'Never used', strike: true },
    ],
  },
  {
    num: '07', title: 'Review & Revisions',
    Icon: RefreshCw,
    grad: 'from-teal-500 to-emerald-600', glow: '0 0 32px rgba(20,184,166,0.5)', rgb: '20,184,166',
    description: 'You test the project and provide feedback. Revision rounds are included based on project type to ensure everything meets your expectations.',
    highlights: [
      { label: 'Marketing site',  value: '2 revision rounds' },
      { label: 'Web application', value: '3 revision rounds' },
      { label: 'Feedback',        value: 'Structured process' },
      { label: 'Your control',    value: 'Client-led testing' },
    ],
  },
  {
    num: '08', title: 'Launch',
    Icon: Rocket,
    grad: 'from-fuchsia-500 to-purple-600', glow: '0 0 32px rgba(217,70,239,0.5)', rgb: '217,70,239',
    description: 'Final deployment to production: domain connection, performance checks, and final testing to ensure everything is live and running perfectly.',
    highlights: [
      { label: 'Deployment',  value: 'Vercel edge servers' },
      { label: 'Domain',      value: 'Connected & live' },
      { label: 'Performance', value: 'Final checks' },
      { label: 'Ownership',   value: '100% legal yours' },
    ],
  },
  {
    num: '09', title: 'Post-Launch Support',
    Icon: Shield,
    grad: 'from-cyan-500 to-sky-600', glow: '0 0 32px rgba(6,182,212,0.5)', rgb: '6,182,212',
    description: 'Every project includes a dedicated support period after launch. Bug fixes and technical support are covered at no extra cost during this window.',
    highlights: [
      { label: 'Marketing site',  value: '30 days included' },
      { label: 'Web application', value: '60 days included' },
      { label: 'Bug fixes',       value: 'Fully covered' },
      { label: 'Extra cost',      value: 'None in period', strike: true },
    ],
  },
  {
    num: '10', title: 'Ongoing Maintenance',
    Icon: Repeat,
    grad: 'from-violet-500 to-indigo-600', glow: '0 0 32px rgba(139,92,246,0.5)', rgb: '139,92,246',
    description: 'Keep your project running and evolving. Choose a monthly care plan or a Growth Retainer for continued feature development.',
    highlights: [
      { label: 'Website Care',    value: '$99 / month' },
      { label: 'App Care',        value: '$249 / month' },
      { label: 'Growth Retainer', value: '$500 / month' },
      { label: 'Additional work', value: '$75 / hour' },
    ],
  },
]

/* ─── Card variants ─── */

const card = {
  enter:  (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0, filter: 'blur(6px)' }),
  center: { x: 0, opacity: 1, filter: 'blur(0px)' },
  exit:   (d: number) => ({ x: d < 0 ? 40 : -40, opacity: 0, filter: 'blur(6px)' }),
}

/* ─── Component ─── */

export default function ProcessView({ onNavigate }: ProcessViewProps) {
  const [current,   setCurrent]   = useState(0)
  const [direction, setDirection] = useState(1)

  const go = useCallback((idx: number) => {
    if (idx === current || idx < 0 || idx >= STEPS.length) return
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  go(current - 1)
      if (e.key === 'ArrowRight') go(current + 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, go])

  const s = STEPS[current]

  return (
    <div className="relative h-full w-full overflow-hidden">

      {/* ── Ambient color wash ── */}
      <AnimatePresence>
        <motion.div
          key={`wash-${current}`}
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 90% 70% at 50% 45%, rgba(${s.rgb},0.1) 0%, transparent 65%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        />
      </AnimatePresence>

      {/* ── Card ── */}
      <div className="absolute inset-0 flex items-center justify-center px-4 pb-8">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={card}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="glass-strong relative w-full max-w-5xl overflow-hidden rounded-3xl"
            style={{
              border:    `1px solid rgba(${s.rgb}, 0.2)`,
              boxShadow: `0 0 80px rgba(${s.rgb}, 0.09), 0 24px 64px rgba(0,0,0,0.4)`,
            }}
          >
            {/* Colored top bar */}
            <div className={`h-1 w-full bg-gradient-to-r ${s.grad}`} />

            <div className="flex">

              {/* ── Left panel ── */}
              <div
                className="flex w-56 shrink-0 flex-col items-center justify-center gap-5 p-11"
                style={{ background: `rgba(${s.rgb}, 0.05)`, borderRight: `1px solid rgba(${s.rgb}, 0.12)` }}
              >
                <motion.div
                  key={`icon-${current}`}
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${s.grad}`}
                  style={{ boxShadow: s.glow }}
                >
                  <s.Icon strokeWidth={1.5} className="h-7 w-7 text-white" />
                </motion.div>

                <div className="text-center">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-text-muted">Step</p>
                  <p className="text-4xl font-black leading-none" style={{ color: `rgba(${s.rgb}, 0.9)` }}>
                    {s.num}
                  </p>
                  <p className="mt-1 text-[9px] text-text-muted">of 10</p>
                </div>
              </div>

              {/* ── Right panel ── */}
              <div className="flex flex-1 flex-col p-11">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${current}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="flex flex-1 flex-col"
                  >
                    <h3 className="mb-2 text-[21px] font-bold leading-snug text-text-primary">
                      {s.title}
                    </h3>
                    <p className="mb-5 text-[13.5px] leading-relaxed text-text-secondary">
                      {s.description}
                    </p>

                    {/* 2×2 highlights */}
                    <div className="mb-5 grid grid-cols-2 gap-2">
                      {s.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="rounded-xl p-3"
                          style={{ background: `rgba(${s.rgb}, 0.06)`, border: `1px solid rgba(${s.rgb}, 0.1)` }}
                        >
                          <p className="mb-0.5 text-[9px] uppercase tracking-wider text-text-muted">{h.label}</p>
                          <p className={`text-[12px] font-semibold leading-tight ${
                            h.strike ? 'text-rose-400/75 line-through' : 'text-text-primary'
                          }`}>
                            {h.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-2">
                      {current > 0 && (
                        <motion.button
                          onClick={() => go(current - 1)}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="rounded-xl border border-white/10 px-4 py-2.5 text-[11px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                        >
                          ← Back
                        </motion.button>
                      )}

                      {current === 0 && (
                        <motion.button
                          onClick={() => onNavigate('contact')}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="rounded-xl border border-white/10 px-4 py-2.5 text-[11px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                        >
                          Send Inquiry
                        </motion.button>
                      )}

                      {current < STEPS.length - 1 ? (
                        <motion.button
                          onClick={() => go(current + 1)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          className={`group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r ${s.grad} py-2.5 text-[11px] font-semibold text-white`}
                          style={{ boxShadow: s.glow }}
                        >
                          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                          <span className="relative">Next Step</span>
                          <ArrowRight strokeWidth={2} className="relative h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </motion.button>
                      ) : (
                        <motion.button
                          onClick={() => onNavigate('contact')}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          className={`group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r ${s.grad} py-2.5 text-[11px] font-semibold text-white`}
                          style={{ boxShadow: s.glow }}
                        >
                          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                          <span className="relative">Send an Inquiry</span>
                          <ArrowRight strokeWidth={2} className="relative h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Progress pills ── */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-1.5">
        {STEPS.map((step, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className="h-1.5 rounded-full transition-all duration-300 ease-out"
            style={{
              width:      i === current ? 24 : 5,
              opacity:    i < current ? 0.5 : i === current ? 1 : 0.2,
              background: `rgba(${step.rgb}, 1)`,
              boxShadow:  i === current ? `0 0 8px rgba(${step.rgb}, 0.9)` : 'none',
            }}
          />
        ))}
      </div>
    </div>
  )
}
