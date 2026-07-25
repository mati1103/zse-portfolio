'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  Bell, CalendarDays, ChevronLeft, ChevronRight, Cloud, Database, DollarSign,
  ExternalLink, GitBranch, Globe, LayoutDashboard,
  Server, Shield, Terminal, Users, Video, X, Zap,
} from 'lucide-react'
import Reveal from '@/components/Reveal'
import SectionVideoBackground from '@/components/SectionVideoBackground'

type IconType = typeof Database

type Feature = { Icon: IconType; label: string; desc: string; grad: string; glow: string }
type Preview  = { src: string; alt: string; title: string; desc: string; grad: string; rgb: string }
type Pipeline = { label: string; sub: string; Icon: IconType; grad: string }
type Testimonial = { quote: string; initials: string; name: string; role: string }

type Project = {
  tag: string
  nameHighlight: string
  nameRest: string
  description: string
  websiteUrl: string
  statusLabel: string
  features: Feature[]
  previews: Preview[]
  pipelineIntro: string
  pipeline: Pipeline[]
  infra: Feature[]
  techStack: string[]
  testimonial?: Testimonial
}

const PROJECTS: Project[] = [
  {
    tag: 'Client project — Personal training platform',
    nameHighlight: 'FuturePro',
    nameRest: ' Soccer',
    description:
      'A full-stack personal training platform for elite soccer coaches and athletes. Handles session booking, coach scheduling, player communications, and complete business analytics in one system.',
    websiteUrl: 'https://futureprosoccer.com',
    statusLabel: 'Deployed & live',
    features: [
      {
        Icon: Users,
        label: 'Athlete Portal',
        desc: 'Sign up for packages, camps, and drop-ins. Choose sessions based on coach availability and location, and invite other players to join.',
        grad: 'from-violet-500 to-purple-600',
        glow: '0 0 20px rgba(139,92,246,0.5)',
      },
      {
        Icon: CalendarDays,
        label: 'Coach Dashboard',
        desc: 'Set availability and locations. Once athletes book, build session plans, log notes, and communicate directly through the platform.',
        grad: 'from-blue-500 to-indigo-600',
        glow: '0 0 20px rgba(59,130,246,0.5)',
      },
      {
        Icon: LayoutDashboard,
        label: 'Admin Suite',
        desc: 'Full business visibility: revenue, net profit, expenses, all sign-ups, coach account management, and live website traffic.',
        grad: 'from-emerald-500 to-teal-600',
        glow: '0 0 20px rgba(16,185,129,0.5)',
      },
      {
        Icon: Shield,
        label: 'Role-Based Auth',
        desc: 'Three distinct permission layers — Athlete, Coach, Admin. Each role sees only its own data, enforced at the database level via RLS policies.',
        grad: 'from-orange-500 to-rose-500',
        glow: '0 0 20px rgba(249,115,22,0.5)',
      },
    ],
    previews: [
      {
        src: '/ChatGPT%20Image%20Jun%2026%2C%202026%20at%2011_29_14%20PM.png',
        alt: 'CEO Dashboard',
        title: 'CEO Dashboard',
        desc: 'The owner sees live revenue, net profit, coach payroll, expenses, and athlete sign-ups — all in one command center.',
        grad: 'from-emerald-500 to-teal-600',
        rgb: '16,185,129',
      },
      {
        src: '/Screenshot%202026-06-26%20at%2011.28.03%E2%80%AFPM.png',
        alt: 'Athlete Portal',
        title: 'Athlete Portal',
        desc: 'Athletes view their upcoming sessions, coach notes, session history, and communicate directly through the platform.',
        grad: 'from-violet-500 to-purple-600',
        rgb: '139,92,246',
      },
    ],
    pipelineIntro:
      'Every code change ships to production automatically. Push to main — Vercel picks it up, builds the Next.js app, and the live site updates in under 30 seconds. No manual deploys, no downtime.',
    pipeline: [
      { label: 'Write Code', sub: 'TS + Tailwind',   Icon: Terminal,  grad: 'from-violet-500 to-purple-600' },
      { label: 'git push',   sub: 'origin/main',     Icon: GitBranch, grad: 'from-blue-500 to-indigo-500'  },
      { label: 'Vercel CI',  sub: 'Build fires',     Icon: Zap,       grad: 'from-slate-300 to-slate-500'  },
      { label: '~25s Build', sub: 'Next.js compile', Icon: Server,    grad: 'from-teal-500 to-cyan-500'    },
      { label: 'Live',       sub: 'Global edge',     Icon: Globe,     grad: 'from-emerald-400 to-green-500' },
    ],
    infra: [
      {
        Icon: Database,
        label: 'Supabase (Postgres)',
        desc: 'Stores users, sessions, bookings, coach schedules, messages, and all financial data. Row-level security enforces role isolation at the database layer.',
        grad: 'from-emerald-500 to-teal-600',
        glow: '0 0 20px rgba(16,185,129,0.5)',
      },
      {
        Icon: DollarSign,
        label: 'Venmo Checkout',
        desc: 'Athletes are redirected to Venmo to complete payment for packages, camps, and drop-ins. Keeps the flow simple and avoids card processing fees.',
        grad: 'from-violet-500 to-purple-600',
        glow: '0 0 20px rgba(139,92,246,0.5)',
      },
      {
        Icon: Zap,
        label: 'Vercel — CI/CD',
        desc: 'Every push to main triggers an automatic production build. Zero-downtime deploys with instant rollback — the client never sees an outage during an update.',
        grad: 'from-slate-300 to-slate-500',
        glow: '0 0 20px rgba(148,163,184,0.3)',
      },
      {
        Icon: Globe,
        label: 'Squarespace',
        desc: 'futureprosoccer.com registered via Squarespace. DNS A and CNAME records point to Vercel\'s edge network for fast global delivery.',
        grad: 'from-blue-500 to-cyan-500',
        glow: '0 0 20px rgba(59,130,246,0.5)',
      },
    ],
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Prisma ORM', 'Tailwind CSS', 'NextAuth.js', 'Vercel'],
    testimonial: {
      quote:
        'They actually took the time to understand how the business operates — the coaches, the athletes, the workflows — and built a platform that handles all of it seamlessly. Bookings, scheduling, payments, and business reporting in one place. The pricing was fixed from day one, the process was completely transparent, and they didn\'t consider it done until I was genuinely happy with it. I can\'t recommend them enough.',
      initials: 'KL',
      name: 'Kareem Ladki',
      role: 'Owner · FuturePro Soccer',
    },
  },
  {
    tag: 'Original build — Youth sports coaching platform',
    nameHighlight: 'Next',
    nameRest: 'Touch',
    description:
      'A mobile-first coaching platform for youth soccer clubs. Players submit training clips for coach feedback, coaches run practices and rosters, and admins manage subscriptions and safety moderation for every club from one dashboard.',
    websiteUrl: 'https://nexttouchsports.com',
    statusLabel: 'Deployed & live',
    features: [
      {
        Icon: Video,
        label: 'Video Feedback Loop',
        desc: 'Players record 30-second training clips and submit them for review. Coaches respond directly in the app, with each clip scoped to Coach-only or Team visibility.',
        grad: 'from-violet-500 to-purple-600',
        glow: '0 0 20px rgba(139,92,246,0.5)',
      },
      {
        Icon: Users,
        label: 'Club & Team Management',
        desc: 'Coaches create clubs and teams, invite players by code, and manage rosters, weekly training plans, and point-based leaderboards.',
        grad: 'from-blue-500 to-indigo-600',
        glow: '0 0 20px rgba(59,130,246,0.5)',
      },
      {
        Icon: LayoutDashboard,
        label: 'CEO / Admin Suite',
        desc: 'Full visibility across every club on the platform: subscriptions, promo codes, moderation queues, and account activity, from a dedicated CEO dashboard.',
        grad: 'from-emerald-500 to-teal-600',
        glow: '0 0 20px rgba(16,185,129,0.5)',
      },
      {
        Icon: Shield,
        label: 'Youth Safety & Compliance',
        desc: 'Age verification, parental consent flows, message content filtering, and block/report tooling — built for a platform where most users are minors.',
        grad: 'from-orange-500 to-rose-500',
        glow: '0 0 20px rgba(249,115,22,0.5)',
      },
    ],
    previews: [
      {
        src: '/nexttouch-lesson.png',
        alt: 'Practice & Video Submission',
        title: 'Practice & Video Submission',
        desc: 'Players follow a step-by-step practice, then record or upload their attempt for their coach to review.',
        grad: 'from-violet-500 to-purple-600',
        rgb: '139,92,246',
      },
      {
        src: '/nexttouch-leaderboard.png',
        alt: 'Team Leaderboard',
        title: 'Team Leaderboard',
        desc: 'Points earned from completed practices rank players on the team leaderboard, updated weekly.',
        grad: 'from-emerald-500 to-teal-600',
        rgb: '16,185,129',
      },
    ],
    pipelineIntro:
      'The website — marketing pages, signup, login, and legal docs — deploys through Vercel on every push to main. The mobile app is built separately with Flutter and shipped through TestFlight and Google Play.',
    pipeline: [
      { label: 'Write Code', sub: 'TS + Dart',       Icon: Terminal,  grad: 'from-violet-500 to-purple-600' },
      { label: 'git push',   sub: 'origin/main',     Icon: GitBranch, grad: 'from-blue-500 to-indigo-500'  },
      { label: 'Vercel CI',  sub: 'Build fires',     Icon: Zap,       grad: 'from-slate-300 to-slate-500'  },
      { label: 'Build',      sub: 'Next.js compile', Icon: Server,    grad: 'from-teal-500 to-cyan-500'    },
      { label: 'Live',       sub: 'Global edge',     Icon: Globe,     grad: 'from-emerald-400 to-green-500' },
    ],
    infra: [
      {
        Icon: Database,
        label: 'Supabase — Postgres + Edge Functions',
        desc: 'Stores clubs, teams, submissions, chat, and subscriptions. 20+ Edge Functions handle checkout, video uploads, moderation, and scheduled cleanup jobs.',
        grad: 'from-emerald-500 to-teal-600',
        glow: '0 0 20px rgba(16,185,129,0.5)',
      },
      {
        Icon: Cloud,
        label: 'Cloudflare Stream',
        desc: 'Hosts and streams every training video behind short-lived, authorized playback tokens. Clips are auto-deleted six months after upload via a scheduled job.',
        grad: 'from-orange-400 to-amber-500',
        glow: '0 0 20px rgba(251,146,60,0.5)',
      },
      {
        Icon: DollarSign,
        label: 'Stripe',
        desc: 'Powers subscription checkout, the billing portal, and promo codes through dedicated Edge Functions, kept in sync by a webhook that updates club plans in real time.',
        grad: 'from-violet-500 to-purple-600',
        glow: '0 0 20px rgba(139,92,246,0.5)',
      },
      {
        Icon: Bell,
        label: 'OneSignal',
        desc: 'Push notifications for new coach feedback, released training plans, and club activity — wired through Flutter and a dedicated notification Edge Function.',
        grad: 'from-blue-500 to-cyan-500',
        glow: '0 0 20px rgba(59,130,246,0.5)',
      },
      {
        Icon: Zap,
        label: 'Vercel',
        desc: 'Hosts the marketing site and every auth flow — signup, login, password reset — with an automatic production deploy on every push to main.',
        grad: 'from-slate-300 to-slate-500',
        glow: '0 0 20px rgba(148,163,184,0.3)',
      },
    ],
    techStack: ['Flutter', 'Dart', 'Next.js', 'TypeScript', 'Supabase', 'Cloudflare Stream', 'Stripe', 'OneSignal', 'Vercel', 'Tailwind CSS'],
  },
]

type Tab = 'Platform' | 'Preview' | 'Pipeline' | 'Infrastructure' | 'Stack'
const TABS: Tab[] = ['Platform', 'Preview', 'Pipeline', 'Infrastructure', 'Stack']

function ProjectCard({ project, onPreview }: { project: Project; onPreview: (item: { src: string; title: string }) => void }) {
  const [activeTab,      setActiveTab     ] = useState<Tab>('Platform')
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
    <>
      <motion.div
        ref={cardRef}
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

        <div className="p-5 lg:p-10">

          {/* ── Project header (always visible) ── */}
          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-text-muted">
                {project.tag}
              </p>
              <h3 className="mb-3 text-3xl font-black leading-tight tracking-tight lg:text-5xl">
                <span className="gradient-text">{project.nameHighlight}</span>
                <span className="text-text-primary">{project.nameRest}</span>
              </h3>
              <p className="max-w-lg text-base leading-relaxed text-text-secondary">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 lg:items-end lg:shrink-0">
              <motion.a
                href={project.websiteUrl}
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
                <span className="text-[11px] font-medium text-emerald-400">{project.statusLabel}</span>
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
                  {project.features.map(({ Icon, label, desc, grad, glow }, i) => (
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

              {/* Preview */}
              {activeTab === 'Preview' && (
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {project.previews.map((item) => (
                    <div
                      key={item.title}
                      className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]"
                    >
                      <div
                        className="relative cursor-zoom-in overflow-hidden border-b border-white/[0.06] group"
                        onClick={() => onPreview({ src: item.src, title: item.title })}
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/20">
                          <span className="rounded-full border border-white/30 bg-black/40 px-3 py-1 text-[11px] font-medium text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                            Click to enlarge
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className={`mb-1 bg-gradient-to-r ${item.grad} bg-clip-text text-[12px] font-bold text-transparent`}>
                          {item.title}
                        </p>
                        <p className="text-[12px] leading-relaxed text-text-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {/* Pipeline */}
              {activeTab === 'Pipeline' && (
                <div className="py-4">
                  <p className="mb-6 text-[13px] leading-relaxed text-text-secondary">
                    {project.pipelineIntro}
                  </p>
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
                    {project.pipeline.map(({ label, sub, Icon, grad }, i) => (
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
                        {i < project.pipeline.length - 1 && (
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
                  {project.infra.map(({ Icon, label, desc, grad, glow }, i) => (
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
                    {project.techStack.map((tech, i) => (
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
      {project.testimonial && (
        <div
          className="mt-6 glass rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(139,92,246,0.18)' }}
        >
          <div className="h-[2px] w-full bg-gradient-to-r from-accent-violet via-accent-blue to-transparent" />
          <div className="flex items-start gap-4 p-5 md:gap-6 md:p-7">
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
                {project.testimonial.quote}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet to-accent-blue text-[13px] font-black text-white"
                  style={{ boxShadow: '0 0 16px rgba(139,92,246,0.4)' }}
                >
                  {project.testimonial.initials}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-text-primary">{project.testimonial.name}</p>
                  <p className="text-[11px] text-text-muted">{project.testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const slide = {
  enter:  (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:   (d: number) => ({ x: d < 0 ? 60 : -60, opacity: 0 }),
}

export default function PortfolioView() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null)
  const [current,   setCurrent]   = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (idx: number) => {
    if (idx === current || idx < 0 || idx >= PROJECTS.length) return
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  const project = PROJECTS[current]

  return (
    <section id="portfolio" className="relative w-full overflow-x-hidden px-4 py-24 lg:px-10">
      <SectionVideoBackground src="/19870630-uhd_3840_2160_25fps.mp4" />
      <Reveal className="relative mx-auto max-w-5xl">

        {/* ── Section header ── */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="mb-1 text-sm text-text-muted">Selected work</p>
            <h2 className="text-2xl font-bold text-text-primary">Portfolio</h2>
          </div>
          <div className="flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] px-4 py-2 backdrop-blur-sm">
            <span className="block h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            <span className="text-[12px] font-semibold text-emerald-400">{PROJECTS.length} Live</span>
          </div>
        </div>

        {/* ── Project card — cycles left/right instead of stacking ── */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={current}
              custom={direction}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ProjectCard project={project} onPreview={setLightbox} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Prev / next + project pips ── */}
        <div className="mt-8 flex items-center justify-center gap-5">
          <motion.button
            onClick={() => go(current - 1)}
            disabled={current === 0}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Previous project"
            className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-accent-violet to-accent-blue text-white transition-opacity duration-200 disabled:opacity-25 disabled:pointer-events-none"
            style={{ boxShadow: '0 0 24px rgba(139,92,246,0.5), 0 6px 18px rgba(59,130,246,0.25)' }}
          >
            <ChevronLeft strokeWidth={2.75} className="h-6 w-6 transition-transform duration-200 group-hover:-translate-x-0.5" />
          </motion.button>

          <div className="flex items-center gap-1.5">
            {PROJECTS.map((p, i) => (
              <button
                key={p.nameHighlight}
                onClick={() => go(i)}
                aria-label={`${p.nameHighlight}${p.nameRest}`}
                className="h-1.5 rounded-full transition-all duration-300 ease-out"
                style={{
                  width:      i === current ? 24 : 6,
                  background: i === current ? 'rgba(139,92,246,1)' : 'rgba(255,255,255,0.18)',
                  boxShadow:  i === current ? '0 0 8px rgba(139,92,246,0.9)' : 'none',
                }}
              />
            ))}
          </div>

          <motion.button
            onClick={() => go(current + 1)}
            disabled={current === PROJECTS.length - 1}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Next project"
            className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-accent-violet to-accent-blue text-white transition-opacity duration-200 disabled:opacity-25 disabled:pointer-events-none"
            style={{ boxShadow: '0 0 24px rgba(139,92,246,0.5), 0 6px 18px rgba(59,130,246,0.25)' }}
          >
            <ChevronRight strokeWidth={2.75} className="h-6 w-6 transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.button>
        </div>

        {/* ── More coming ── */}
        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-text-muted">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.3 }}
              className="block h-1.5 w-1.5 rounded-full bg-accent-violet/40"
            />
          ))}
          More projects coming soon
        </div>

      </Reveal>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl border border-white/[0.12] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
              >
                <X strokeWidth={2} className="h-4 w-4" />
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
