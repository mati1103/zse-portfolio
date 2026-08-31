'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, Database, RefreshCw, type LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  eyebrow: string
  title: string
  body: string
  points: string[]
  href: string
  cta: string
}

const SERVICES: Service[] = [
  {
    icon: RefreshCw,
    eyebrow: '01 — Redesign',
    title: 'Give me what you have. I’ll rebuild it properly.',
    body: 'For businesses that already have a website, just not one that works anymore. Your existing content and brand become the foundation for a completely rebuilt, modern experience — no templates, no theme swaps.',
    points: ['Existing content & brand as the starting point', 'Rebuilt from scratch, not reskinned', 'Faster, mobile-friendly, easier to use'],
    href: '/redesign',
    cta: 'Learn about Redesign',
  },
  {
    icon: Globe,
    eyebrow: '02 — Web Design',
    title: 'Marketing sites that earn the click.',
    body: 'For businesses that need a completely new site built around their message. Every page is designed from the ground up, built for speed and mobile, and structured to move a visitor toward a decision.',
    points: ['Custom design and copy direction, not a theme', 'Fast, mobile-first, and built for search', 'Structured around a clear conversion path'],
    href: '/web-design',
    cta: 'Learn about Web Design',
  },
  {
    icon: Database,
    eyebrow: '03 — Applications',
    title: 'Software for how your business runs.',
    body: 'For businesses that have outgrown spreadsheets and off-the-shelf tools. Client portals, booking systems, internal dashboards, and workflow software built around your actual operation — not a generic SaaS shape.',
    points: ['Custom portals, dashboards, and booking systems', 'Real databases, authentication, and role-based access', 'Built to be owned, understood, and grown on'],
    href: '/applications',
    cta: 'Learn about Applications',
  },
]

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s) => (
        <motion.div
          key={s.href}
          whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(23,24,23,0.10), 0 2px 4px rgba(23,24,23,0.05)' }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col rounded-2xl border border-ink/[0.09] bg-soft-white p-8 shadow-[0_1px_2px_rgba(23,24,23,0.04),0_12px_28px_rgba(23,24,23,0.05)] md:p-10"
        >
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cobalt/10">
            <s.icon className="h-6 w-6 text-cobalt" strokeWidth={1.5} />
          </div>
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-muted">{s.eyebrow}</p>
          <h3 className="mt-3 font-display text-[26px] leading-[1.2] text-ink md:text-[30px]">{s.title}</h3>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">{s.body}</p>

          <ul className="mt-6 space-y-2 border-t border-border-neutral pt-6">
            {s.points.map((p) => (
              <li key={p} className="flex items-baseline gap-2 text-[14px] text-ink">
                <span className="text-cobalt">·</span>
                {p}
              </li>
            ))}
          </ul>

          <Link
            href={s.href}
            className="group mt-auto inline-flex items-center gap-2 pt-8 text-[14px] font-medium text-ink transition-colors duration-200 hover:text-cobalt"
          >
            {s.cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.75} />
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
