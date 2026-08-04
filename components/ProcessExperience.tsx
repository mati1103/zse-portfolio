'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import {
  MessageSquare, Phone, FileText, CheckCircle, Layers,
  Code2, RefreshCw, Rocket, Shield, Repeat, ArrowRight,
  type LucideIcon,
} from 'lucide-react'

interface HL { label: string; value: string; strike?: boolean }
interface Step {
  num: string
  title: string
  Icon: LucideIcon
  description: string
  highlights: HL[]
}

const STEPS: Step[] = [
  {
    num: '01', title: 'Project Inquiry', Icon: MessageSquare,
    description: 'Tell us about your business, goals, and what you need built. We review your project type, required features, timeline, and budget.',
    highlights: [
      { label: 'Channel',    value: 'Inquiry form' },
      { label: 'We review',  value: 'Type, features, timeline' },
      { label: 'Budget',     value: 'Discussed upfront' },
      { label: 'Commitment', value: 'None required' },
    ],
  },
  {
    num: '02', title: 'Discovery Call', Icon: Phone,
    description: 'A 30–45 minute call to deeply understand your project. We discuss goals, target users, design direction, and the functionality you need.',
    highlights: [
      { label: 'Duration', value: '30–45 minutes' },
      { label: 'Goals',    value: 'Business objectives' },
      { label: 'Users',    value: "Who we're building for" },
      { label: 'Design',   value: 'Direction & style' },
    ],
  },
  {
    num: '03', title: 'Project Proposal', Icon: FileText,
    description: 'You receive a custom proposal covering everything needed to make an informed decision before committing to the project.',
    highlights: [
      { label: 'Scope',        value: 'Full work breakdown' },
      { label: 'Timeline',     value: 'Delivery schedule' },
      { label: 'Pricing',      value: 'Flat rate, binding' },
      { label: 'Deliverables', value: 'Clearly defined' },
    ],
  },
  {
    num: '04', title: 'Agreement & Deposit', Icon: CheckCircle,
    description: 'Once the proposal is approved, the engagement is formalized. A contract is signed, the initialization deposit is paid, and development begins.',
    highlights: [
      { label: 'Contract', value: 'Signed by both' },
      { label: 'Deposit',  value: '50% to initialize' },
      { label: 'Final',    value: '50% on sign-off' },
      { label: 'Status',   value: 'Development begins' },
    ],
  },
  {
    num: '05', title: 'Planning & Design', Icon: Layers,
    description: 'We create the complete foundation before writing a single line of production code: site structure, user flows, design direction, and technical plan.',
    highlights: [
      { label: 'Structure',  value: 'Site architecture' },
      { label: 'User flows', value: 'Journeys mapped' },
      { label: 'Design',     value: 'Direction agreed' },
      { label: 'Tech plan',  value: 'Stack & approach' },
    ],
  },
  {
    num: '06', title: 'Development', Icon: Code2,
    description: 'The website or application is built from a blank canvas. Frontend, backend, databases, and integrations — all rigorously tested before delivery.',
    highlights: [
      { label: 'Frontend',  value: 'Next.js + Tailwind' },
      { label: 'Backend',   value: 'Supabase + APIs' },
      { label: 'Staging',   value: 'Private link access' },
      { label: 'Templates', value: 'Never used', strike: true },
    ],
  },
  {
    num: '07', title: 'Review & Revisions', Icon: RefreshCw,
    description: 'You test the project and provide feedback. Revision rounds are included based on project type to ensure everything meets your expectations.',
    highlights: [
      { label: 'Marketing site',  value: '2 revision rounds' },
      { label: 'Web application', value: '3 revision rounds' },
      { label: 'Feedback',        value: 'Structured process' },
      { label: 'Your control',    value: 'Client-led testing' },
    ],
  },
  {
    num: '08', title: 'Launch', Icon: Rocket,
    description: 'Final deployment to production: domain connection, performance checks, and final testing to ensure everything is live and running perfectly.',
    highlights: [
      { label: 'Deployment',  value: 'Vercel edge servers' },
      { label: 'Domain',      value: 'Connected & live' },
      { label: 'Performance', value: 'Final checks' },
      { label: 'Ownership',   value: '100% legally yours' },
    ],
  },
  {
    num: '09', title: 'Post-Launch Support', Icon: Shield,
    description: 'Every project includes a dedicated support period after launch. Bug fixes and technical support are covered at no extra cost during this window.',
    highlights: [
      { label: 'Marketing site',  value: '30 days included' },
      { label: 'Web application', value: '60 days included' },
      { label: 'Bug fixes',       value: 'Fully covered' },
      { label: 'Extra cost',      value: 'None in period', strike: true },
    ],
  },
  {
    num: '10', title: 'Ongoing Maintenance', Icon: Repeat,
    description: 'Keep your project running and evolving. Choose a monthly care plan or a Growth Retainer for continued feature development.',
    highlights: [
      { label: 'Website Care',    value: '$99 / month' },
      { label: 'App Care',        value: '$249 / month' },
      { label: 'Growth Retainer', value: '$500 / month' },
      { label: 'Additional work', value: '$75 / hour' },
    ],
  },
]

const card = {
  enter:  (d: number) => ({ x: d > 0 ? 32 : -32, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:   (d: number) => ({ x: d < 0 ? 32 : -32, opacity: 0 }),
}

export default function ProcessExperience() {
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
    <div>
      {/* ── Progress rail ── */}
      <div className="mb-4 flex items-baseline justify-between">
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-muted">
          Step {s.num} <span className="text-ink">of 10</span>
        </p>
        <p className="text-[12px] font-medium text-ink">{s.title}</p>
      </div>
      <div className="mb-8 flex items-center gap-1.5 overflow-x-auto pb-1 md:mb-10">
        {STEPS.map((step, i) => (
          <button
            key={step.num}
            onClick={() => go(i)}
            aria-label={`Step ${step.num}: ${step.title}`}
            aria-current={i === current ? 'step' : undefined}
            className="group flex shrink-0 flex-col items-center gap-2"
          >
            <span
              className={`h-2 rounded-full transition-all duration-300 ease-calm ${
                i === current
                  ? 'w-9 bg-cobalt shadow-[0_0_0_3px_rgba(49,87,213,0.15)]'
                  : i < current
                    ? 'w-4 bg-ink/40 group-hover:bg-ink/60'
                    : 'w-4 bg-ink/[0.12] group-hover:bg-ink/25'
              }`}
            />
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.div
          key={current}
          custom={direction}
          variants={card}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="card-surface overflow-hidden rounded-3xl"
        >
          <div className="flex flex-col md:flex-row">
            {/* ── Mobile compact header ── */}
            <div className="flex items-center gap-4 border-b border-border-neutral bg-ink/[0.02] px-5 py-4 md:hidden">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cobalt">
                <s.Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted">Step {s.num} of 10</p>
                <p className="text-[16px] font-medium leading-tight text-ink">{s.title}</p>
              </div>
            </div>

            {/* ── Desktop left panel ── */}
            <div className="hidden w-56 shrink-0 flex-col items-center justify-center gap-5 border-r border-border-neutral bg-ink/[0.02] p-11 md:flex">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cobalt">
                <s.Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted">Step</p>
                <p className="font-display text-4xl leading-none text-ink">{s.num}</p>
                <p className="mt-1 text-[10px] text-muted">of 10</p>
              </div>
            </div>

            {/* ── Right panel ── */}
            <div className="flex flex-1 flex-col p-6 md:p-11">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${current}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="flex flex-1 flex-col"
                >
                  <h3 className="mb-2 hidden font-display text-[24px] leading-snug text-ink md:block">
                    {s.title}
                  </h3>
                  <p className="mb-5 text-[14px] leading-relaxed text-muted md:mb-6 md:text-[15px]">
                    {s.description}
                  </p>

                  <div className="mb-6 grid grid-cols-2 gap-2.5 md:mb-8">
                    {s.highlights.map((h, i) => (
                      <div key={i} className="rounded-xl border border-border-neutral bg-ink/[0.015] p-3.5">
                        <p className="mb-0.5 text-[9px] uppercase tracking-wider text-muted">{h.label}</p>
                        <p className={`text-[13px] font-medium leading-tight ${
                          h.strike ? 'text-muted line-through' : 'text-ink'
                        }`}>
                          {h.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-2">
                    {current > 0 && (
                      <button
                        onClick={() => go(current - 1)}
                        className="rounded-full border border-border-neutral px-4 py-2.5 text-[13px] font-medium text-muted transition-colors duration-200 hover:text-ink"
                      >
                        ← Back
                      </button>
                    )}

                    {current === 0 && (
                      <Link
                        href="/start"
                        className="rounded-full border border-border-neutral px-4 py-2.5 text-[13px] font-medium text-muted transition-colors duration-200 hover:text-ink"
                      >
                        Send inquiry
                      </Link>
                    )}

                    {current < STEPS.length - 1 ? (
                      <button
                        onClick={() => go(current + 1)}
                        className="shimmer-sweep group flex flex-1 items-center justify-center gap-2 rounded-full bg-cobalt py-2.5 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-cobalt-hover"
                      >
                        Next step
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
                      </button>
                    ) : (
                      <Link
                        href="/start"
                        className="shimmer-sweep group flex flex-1 items-center justify-center gap-2 rounded-full bg-cobalt py-2.5 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-cobalt-hover"
                      >
                        Send an inquiry
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
                      </Link>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
