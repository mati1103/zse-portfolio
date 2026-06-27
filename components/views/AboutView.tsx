'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { View } from '@/app/page'

interface AboutViewProps {
  onNavigate: (view: View) => void
}

const SECTIONS = [
  {
    id:       'who',
    label:    'Who We Are',
    rgb:      '139,92,246',
    grad:     'from-violet-500 to-purple-600',
    tag:      'Our Story',
    headline: 'A boutique studio that builds what\nyou actually need.',
    body: [
      "Zarembka Software Engineering is a small, deliberate software studio. We specialise in modern, high-performance websites and web applications — from clean marketing sites to full-stack platforms backed by live databases.",
      "We don't operate like a large agency juggling dozens of clients. We work like a dedicated partner. Every project gets our full attention, not a slice of it.",
      "Our work spans industries: restaurants, fitness studios, professional services, e-commerce, and more. Whatever your business, we bring the same standard of craft.",
    ],
  },
  {
    id:       'mission',
    label:    'Our Mission',
    rgb:      '59,130,246',
    grad:     'from-blue-500 to-cyan-500',
    tag:      'What Drives Us',
    headline: 'Built around your business.\nNot someone else\'s template.',
    body: [
      "We believe your website should be built around how you operate — not adapted from a template designed for someone else. Our mission is to understand your goals, your customers, and what success looks like for you. Then build exactly that.",
      "We don't offer off-the-shelf packages. Every project starts with a conversation about your goals, your audience, and the workflows that matter to you. From there, we design and build something that fits.",
      "We want every client to walk away with a platform they understand, own, and can grow on. Something built to last, not just to launch.",
    ],
  },
  {
    id:       'how',
    label:    'How We Work',
    rgb:      '16,185,129',
    grad:     'from-emerald-500 to-teal-600',
    tag:      'Our Approach',
    headline: 'Hand-coded. Properly deployed.\nConnected from day one.',
    body: [
      "We start by scoping the project together — understanding your brand, your users, and the features you need. Every site is hand-coded and tailored with modern tooling that keeps things fast, maintainable, and scalable.",
      "When your site needs a live database — for bookings, user accounts, product listings, or anything data-driven — we connect it to Supabase, a powerful backend platform that handles real-time data without the complexity.",
      "Once the build is ready, we deploy to Vercel, which handles global delivery and automatic updates. We also connect your domain and wire it to a professional email system, so everything is properly tied together from day one.",
    ],
  },
  {
    id:       'why',
    label:    'Why Choose Us',
    rgb:      '236,72,153',
    grad:     'from-pink-500 to-rose-500',
    tag:      'Our Promise',
    headline: 'One project at a time.\nYours is the only one.',
    body: [
      "We take on one project at a time. Not two. Not three. One. When you're our client, you have our complete focus — no juggling, no back-burner delays, no putting your project on hold for someone else's deadline.",
      "We don't start something new until our current client is genuinely happy with what we've built. Your sign-off matters more to us than the next deal.",
      "If something isn't right, we fix it. When you're satisfied, we move forward. It's a simple way to work — and we think it's the right one.",
    ],
  },
]

export default function AboutView({ onNavigate }: AboutViewProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp')   setCurrent(c => Math.max(c - 1, 0))
      if (e.key === 'ArrowDown') setCurrent(c => Math.min(c + 1, SECTIONS.length - 1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const s = SECTIONS[current]

  return (
    <div className="relative h-full w-full overflow-x-hidden overflow-y-auto md:overflow-hidden">

      {/* Ambient wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 60% 50%, rgba(${s.rgb},0.09) 0%, transparent 65%)`,
          transition: 'background 0.2s ease',
        }}
      />

      <div className="relative flex h-full flex-col md:flex-row md:px-10">

        {/* ── Mobile: horizontal tab bar ── */}
        <div className="flex md:hidden gap-1.5 overflow-x-auto px-4 pt-3 pb-2 shrink-0">
          {SECTIONS.map((sec, i) => (
            <button
              key={sec.id}
              onClick={() => setCurrent(i)}
              className="shrink-0 rounded-lg px-3.5 py-2 text-[13px] font-medium transition-all duration-200"
              style={{
                background: i === current ? `rgba(${sec.rgb}, 0.12)` : 'transparent',
                color:      i === current ? `rgba(${sec.rgb}, 1)`    : 'rgba(255,255,255,0.35)',
                border:     `1px solid ${i === current ? `rgba(${sec.rgb}, 0.3)` : 'rgba(255,255,255,0.06)'}`,
              }}
            >
              {sec.label}
            </button>
          ))}
        </div>

        {/* ── Desktop: Left sidebar nav ── */}
        <div className="hidden md:flex w-52 shrink-0 flex-col justify-center gap-1">
          {SECTIONS.map((sec, i) => (
            <button
              key={sec.id}
              onClick={() => setCurrent(i)}
              className="group relative flex items-center gap-3 rounded-xl px-4 py-3.5 text-left transition-all duration-200"
            >
              <motion.div
                className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full"
                style={{ background: `rgba(${sec.rgb}, 1)` }}
                animate={{ opacity: i === current ? 1 : 0, scaleY: i === current ? 1 : 0.3 }}
                transition={{ duration: 0.25 }}
              />
              <span
                className="text-[15px] font-medium leading-tight transition-colors duration-200"
                style={{ color: i === current ? `rgba(${sec.rgb}, 1)` : 'rgba(255,255,255,0.3)' }}
              >
                {sec.label}
              </span>
            </button>
          ))}

          <div className="mt-8 pl-4">
            <motion.button
              onClick={() => onNavigate('contact')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`group flex items-center gap-2 text-[13px] font-semibold bg-gradient-to-r ${s.grad} bg-clip-text text-transparent`}
            >
              Start a Project
              <ArrowRight
                strokeWidth={2.5}
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                style={{ color: `rgba(${s.rgb}, 0.9)` }}
              />
            </motion.button>
          </div>
        </div>

        {/* ── Desktop: Divider ── */}
        <div
          className="hidden md:block my-12 w-px shrink-0"
          style={{ background: `rgba(${s.rgb}, 0.15)` }}
        />

        {/* ── Main content ── */}
        <div className="flex flex-1 flex-col justify-start md:justify-center px-4 md:pl-12 md:pr-8 py-4 md:py-12">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p
                className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em]"
                style={{ color: `rgba(${s.rgb}, 0.7)` }}
              >
                {s.tag}
              </p>

              <h2
                className="mb-5 text-[24px] font-black leading-[1.2] tracking-tight text-text-primary md:mb-8 md:text-[38px] md:leading-[1.15]"
                style={{ whiteSpace: 'pre-line' }}
              >
                {s.headline}
              </h2>

              <div className="space-y-4 md:space-y-5">
                {s.body.map((para, i) => (
                  <p key={i} className="text-[14px] leading-[1.75] text-text-secondary md:text-[17px] md:leading-[1.8]">
                    {para}
                  </p>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.button
                onClick={() => onNavigate('contact')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`mt-6 flex md:hidden items-center gap-2 text-[14px] font-semibold bg-gradient-to-r ${s.grad} bg-clip-text text-transparent`}
              >
                Start a Project
                <ArrowRight
                  strokeWidth={2.5}
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  style={{ color: `rgba(${s.rgb}, 0.9)` }}
                />
              </motion.button>

              <div className="mt-6 flex items-center gap-2 md:mt-10">
                {SECTIONS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width:      i === current ? 24 : 6,
                      height:     6,
                      background: i === current ? `rgba(${s.rgb}, 1)` : 'rgba(255,255,255,0.15)',
                      boxShadow:  i === current ? `0 0 10px rgba(${s.rgb}, 0.8)` : 'none',
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
