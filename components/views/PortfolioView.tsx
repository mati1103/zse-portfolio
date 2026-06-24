'use client'

import { Fragment, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  CalendarDays, ChevronRight, Database, DollarSign,
  ExternalLink, GitBranch, Globe, LayoutDashboard,
  Server, Shield, Terminal, Users, Zap,
} from 'lucide-react'

const TECH_STACK = [
  'Next.js', 'TypeScript', 'Supabase', 'Prisma ORM',
  'Tailwind CSS', 'NextAuth.js', 'Vercel',
]

const FEATURES = [
  {
    Icon:  Users,
    label: 'Athlete Portal',
    desc:  'Sign up for packages, camps, and drop-ins. Choose sessions based on coach availability and location, and invite other players to join.',
    grad:  'from-violet-500 to-purple-600',
    glow:  '0 0 20px rgba(139,92,246,0.5)',
  },
  {
    Icon:  CalendarDays,
    label: 'Coach Dashboard',
    desc:  'Set availability and locations. Once athletes book, build session plans, log notes, and communicate directly through the platform.',
    grad:  'from-blue-500 to-indigo-600',
    glow:  '0 0 20px rgba(59,130,246,0.5)',
  },
  {
    Icon:  LayoutDashboard,
    label: 'Admin Suite',
    desc:  'Full business visibility: revenue, net profit, expenses, all sign-ups, coach account management, and live website traffic.',
    grad:  'from-emerald-500 to-teal-600',
    glow:  '0 0 20px rgba(16,185,129,0.5)',
  },
  {
    Icon:  Shield,
    label: 'Role-Based Auth',
    desc:  'Three distinct permission layers — Athlete, Coach, Admin. Each role sees only its own data, enforced at the database level via RLS policies.',
    grad:  'from-orange-500 to-rose-500',
    glow:  '0 0 20px rgba(249,115,22,0.5)',
  },
]

const INFRA = [
  {
    Icon:  Database,
    label: 'Supabase (Postgres)',
    desc:  'Stores users, sessions, bookings, coach schedules, messages, and all financial data. Row-level security enforces role isolation at the database layer.',
    grad:  'from-emerald-500 to-teal-600',
    glow:  '0 0 20px rgba(16,185,129,0.5)',
  },
  {
    Icon:  DollarSign,
    label: 'Venmo Checkout',
    desc:  'Athletes are redirected to Venmo to complete payment for packages, camps, and drop-ins. Keeps the flow simple and avoids card processing fees.',
    grad:  'from-violet-500 to-purple-600',
    glow:  '0 0 20px rgba(139,92,246,0.5)',
  },
  {
    Icon:  Zap,
    label: 'Vercel — CI/CD',
    desc:  'Every push to main triggers an automatic production build. Zero-downtime deploys with instant rollback — the client never sees an outage during an update.',
    grad:  'from-slate-300 to-slate-500',
    glow:  '0 0 20px rgba(148,163,184,0.3)',
  },
  {
    Icon:  Globe,
    label: 'Squarespace',
    desc:  'futureprosoccer.com registered via Squarespace. DNS A and CNAME records point to Vercel\'s edge network for fast global delivery.',
    grad:  'from-blue-500 to-cyan-500',
    glow:  '0 0 20px rgba(59,130,246,0.5)',
  },
]

const PIPELINE = [
  { label: 'Write Code', sub: 'TS + Tailwind',   Icon: Terminal,  grad: 'from-violet-500 to-purple-600' },
  { label: 'git push',   sub: 'origin/main',     Icon: GitBranch, grad: 'from-blue-500 to-indigo-500'  },
  { label: 'Vercel CI',  sub: 'Build fires',     Icon: Zap,       grad: 'from-slate-300 to-slate-500'  },
  { label: '~25s Build', sub: 'Next.js compile', Icon: Server,    grad: 'from-teal-500 to-cyan-500'    },
  { label: 'Live',       sub: 'Global edge',     Icon: Globe,     grad: 'from-emerald-400 to-green-500' },
]

type Tab = 'Platform' | 'Pipeline' | 'Infrastructure' | 'Stack'
const TABS: Tab[] = ['Platform', 'Pipeline', 'Infrastructure', 'Stack']

export default function PortfolioView() {
  const [activeTab,     setActiveTab    ] = useState<Tab>('Platform')
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [hoveredInfra,   setHoveredInfra  ] = useState<number | null>(null)

  const cardRef  = useRef<HTMLDivElement>(null)
  const rawX     = useMotionValue(0)
  const rawY     = useMotionValue(0)
  const springX  = useSpring(rawX, { stiffness: 200, damping: 28 })
  const springY  = useSpring(rawY, { stiffness: 200, damping: 28 })
  const rotateX  = useTransform(springY, [-60, 60], [4, -4])
  const rotateY  = useTransform(springX, [-80, 80], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set(e.clientX - (rect.left + rect.width  / 2))
    rawY.set(e.clientY - (rect.top  + rect.height / 2))
  }
  const handleMouseLeave = () => { rawX.set(0); rawY.set(0) }

  return (
    <div className="h-full overflow-y-auto overflow-x-hidden p-6 lg:p-10">
      <div className="mx-auto max-w-5xl">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <p className="mb-1 text-sm text-text-muted">Client work</p>
            <h2 className="text-2xl font-bold text-text-primary">Portfolio</h2>
          </div>
          <div className="flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] px-4 py-2 backdrop-blur-sm">
            <span className="block h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            <span className="text-[12px] font-semibold text-emerald-400">1 Live</span>
          </div>
        </motion.div>

        {/* ── Project card ── */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
            perspective: 900,
          }}
          className="glass rounded-3xl overflow-hidden shadow-2xl shadow-black/40"
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-accent-violet via-accent-blue to-accent-pink" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-violet/[0.06] blur-3xl" />

          <div className="p-8 lg:p-10">

            {/* ── Project header (always visible) ── */}
            <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-text-muted">
                  Client project — Personal training platform
                </p>
                <h3 className="mb-3 text-4xl font-black leading-tight tracking-tight lg:text-5xl">
                  <span className="gradient-text">FuturePro</span>
                  <span className="text-text-primary"> Soccer</span>
                </h3>
                <p className="max-w-lg text-base leading-relaxed text-text-secondary">
                  A full-stack personal training platform for elite soccer coaches and athletes.
                  Handles session booking, coach scheduling, player communications, and complete
                  business analytics in one system.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 lg:items-end lg:shrink-0">
                <motion.a
                  href="https://futureprosoccer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-blue px-5 py-3 text-sm font-semibold text-white shadow-lg"
                  style={{ boxShadow: '0 0 24px rgba(139,92,246,0.4), 0 6px 20px rgba(59,130,246,0.2)' }}
                >
                  <ExternalLink strokeWidth={1.5} className="h-4 w-4" />
                  View Website
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </motion.a>
                <div className="flex items-center gap-2">
                  <span className="block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-medium text-emerald-400">Deployed & live</span>
                </div>
              </div>
            </div>

            <div className="mb-6 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

            {/* ── Tab bar ── */}
            <div className="mb-6 flex gap-1 rounded-xl border border-white/[0.07] bg-white/[0.03] p-1">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative flex-1 rounded-lg px-3 py-2 text-center text-[12px] font-semibold transition-all duration-100 ${
                    activeTab === tab
                      ? 'border border-white/[0.1] bg-white/[0.08] text-text-primary'
                      : 'text-text-muted hover:text-text-secondary'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* ── Tab content ── */}
            <div>

                {/* Platform */}
                {activeTab === 'Platform' && (
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {FEATURES.map(({ Icon, label, desc, grad, glow }, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -3 }}
                        onHoverStart={() => setHoveredFeature(i)}
                        onHoverEnd={() => setHoveredFeature(null)}
                        className={`flex items-start gap-4 rounded-2xl border p-5 transition-all duration-200 cursor-default ${
                          hoveredFeature === i
                            ? 'border-white/15 bg-white/[0.07]'
                            : 'border-white/[0.06] bg-white/[0.02]'
                        }`}
                      >
                        <motion.div
                          animate={{ boxShadow: hoveredFeature === i ? glow : 'none' }}
                          transition={{ duration: 0.25 }}
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${grad}`}
                        >
                          <Icon strokeWidth={1.5} className="h-5 w-5 text-white" />
                        </motion.div>
                        <div>
                          <p className="mb-1 text-sm font-semibold text-text-primary">{label}</p>
                          <p className="text-[12px] leading-relaxed text-text-muted">{desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Pipeline */}
                {activeTab === 'Pipeline' && (
                  <div className="py-4">
                    <p className="mb-6 text-[13px] leading-relaxed text-text-secondary">
                      Every code change ships to production automatically. Push to main — Vercel
                      picks it up, builds the Next.js app, and the live site updates in under 30 seconds.
                      No manual deploys, no downtime.
                    </p>
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
                      {PIPELINE.map(({ label, sub, Icon, grad }, i) => (
                        <Fragment key={i}>
                          <motion.div
                            whileHover={{ y: -3, scale: 1.04 }}
                            className="flex flex-col items-center gap-2 shrink-0 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3.5 min-w-[96px] cursor-default"
                          >
                            <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${grad}`}>
                              <Icon strokeWidth={1.5} className="h-4 w-4 text-white" />
                            </div>
                            <div className="text-center">
                              <p className="text-[12px] font-semibold text-text-primary leading-tight">{label}</p>
                              <p className="mt-0.5 text-[10px] text-text-muted">{sub}</p>
                            </div>
                          </motion.div>
                          {i < PIPELINE.length - 1 && (
                            <ChevronRight strokeWidth={1.5} className="h-4 w-4 shrink-0 text-text-muted/40" />
                          )}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {/* Infrastructure */}
                {activeTab === 'Infrastructure' && (
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {INFRA.map(({ Icon, label, desc, grad, glow }, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -3 }}
                        onHoverStart={() => setHoveredInfra(i)}
                        onHoverEnd={() => setHoveredInfra(null)}
                        className={`flex items-start gap-4 rounded-2xl border p-5 transition-all duration-200 cursor-default ${
                          hoveredInfra === i
                            ? 'border-white/15 bg-white/[0.07]'
                            : 'border-white/[0.06] bg-white/[0.02]'
                        }`}
                      >
                        <motion.div
                          animate={{ boxShadow: hoveredInfra === i ? glow : 'none' }}
                          transition={{ duration: 0.25 }}
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${grad}`}
                        >
                          <Icon strokeWidth={1.5} className="h-5 w-5 text-white" />
                        </motion.div>
                        <div>
                          <p className="mb-1 text-sm font-semibold text-text-primary">{label}</p>
                          <p className="text-[12px] leading-relaxed text-text-muted">{desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Stack */}
                {activeTab === 'Stack' && (
                  <div className="py-2">
                    <p className="mb-6 text-[13px] leading-relaxed text-text-secondary">
                      Every technology was chosen for a specific reason — no bloat, no defaults
                      kept for convention. The stack handles auth, real-time data, role isolation,
                      and CI/CD without a single workaround.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {TECH_STACK.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.07, borderColor: 'rgba(139,92,246,0.4)' }}
                          className="cursor-default rounded-lg border border-white/[0.09] bg-white/[0.04] px-3.5 py-1.5 text-[12px] font-medium text-text-secondary transition-all duration-200 hover:text-text-primary"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}

            </div>

          </div>
        </motion.div>

        {/* ── Testimonial ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="mt-6 glass rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(139,92,246,0.18)' }}
        >
          <div className="h-[2px] w-full bg-gradient-to-r from-accent-violet via-accent-blue to-transparent" />
          <div className="flex items-start gap-6 p-7">
            <span
              className="shrink-0 text-[72px] font-black leading-none select-none"
              style={{
                background: 'linear-gradient(135deg,rgba(139,92,246,0.5),rgba(59,130,246,0.3))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: '0.75',
              }}
            >
              "
            </span>
            <div>
              <p className="text-[15px] leading-[1.75] text-text-secondary">
                They actually took the time to understand how the business operates — the coaches,
                the athletes, the workflows — and built a platform that handles all of it
                seamlessly. Bookings,
                scheduling, payments, and business reporting in one place. The pricing was fixed from
                day one, the process was completely transparent, and they didn't consider it done
                until I was genuinely happy with it. I can't recommend them enough.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet to-accent-blue text-[13px] font-black text-white"
                  style={{ boxShadow: '0 0 16px rgba(139,92,246,0.4)' }}
                >
                  KL
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-text-primary">Kareem Ladki</p>
                  <p className="text-[11px] text-text-muted">Owner · FuturePro Soccer</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── More coming ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="mt-6 flex items-center gap-3 text-sm text-text-muted"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.3 }}
              className="block h-1.5 w-1.5 rounded-full bg-accent-violet/40"
            />
          ))}
          More projects coming soon
        </motion.div>

      </div>
    </div>
  )
}
