'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, Globe, Database, ShieldCheck } from 'lucide-react'
import type { View } from '@/app/page'

interface PricingViewProps {
  onNavigate: (view: View) => void
}

const TIERS = [
  {
    icon:      Globe,
    name:      'Marketing Website',
    price:     '$2,500',
    timeline:  '3–4 weeks',
    grad:      'from-blue-500 to-indigo-600',
    rgb:       '59,130,246',
    glow:      '0 0 28px rgba(59,130,246,0.4)',
    highlight: false,
    bestFor:   ['Local businesses', 'Service companies', 'Personal brands & portfolios'],
    includes:  [
      'Up to 5 custom pages',
      'Mobile-responsive design',
      'SEO-friendly setup',
      'Contact forms & analytics',
      '2 revision rounds · 30-day support',
    ],
    extra: '+$250 per additional page',
  },
  {
    icon:      Database,
    name:      'Web Application',
    price:     '$8,500',
    timeline:  '6–10 weeks',
    grad:      'from-accent-violet to-accent-blue',
    rgb:       '139,92,246',
    glow:      '0 0 32px rgba(139,92,246,0.55)',
    highlight: true,
    bestFor:   ['Client portals & dashboards', 'Scheduling & booking platforms', 'Membership systems & internal tools'],
    includes:  [
      'Everything in Marketing Website',
      'Database design & auth',
      'Role-based dashboards & admin panels',
      'API integrations',
      '3 revision rounds · 60-day support',
    ],
    extra: '+$750 per integration',
  },
]

const MAINTENANCE = [
  {
    name:  'Website Care',
    price: '$99 / mo',
    lines: ['Security & hosting monitoring', 'Bug fixes & updates', 'Up to 1 hr edits/month'],
    rgb:   '59,130,246',
  },
  {
    name:  'Application Care',
    price: '$249 / mo',
    lines: ['Database & performance checks', 'Bug fixes & security updates', 'Up to 3 hrs/month'],
    rgb:   '139,92,246',
  },
  {
    name:  'Growth Retainer',
    price: '$500 / mo',
    lines: ['Up to 8 hrs development/month', 'New features, pages & integrations', '$75 / hr beyond that'],
    rgb:   '244,114,182',
  },
]

export default function PricingView({ onNavigate }: PricingViewProps) {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden px-4 pb-6">
      <div className="w-full max-w-4xl">
        {/* ── Header ── */}
        <div className="mb-6 text-center">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-text-muted">
            Flat-Rate Development
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary lg:text-4xl">
            Simple pricing.{' '}
            <span className="gradient-text">Serious software.</span>
          </h2>
          <p className="mt-2 text-[13px] text-text-secondary">
            One fixed quote after scope approval · 50% upfront · 50% at launch
          </p>
        </div>

        {/* ── Main tiers ── */}
        <div className="mb-4 grid grid-cols-2 gap-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: t.highlight ? 'rgba(139,92,246,0.07)' : 'rgba(255,255,255,0.05)',
                border:     `1px solid rgba(${t.rgb}, ${t.highlight ? 0.35 : 0.15})`,
                boxShadow:  t.highlight ? `0 0 40px rgba(${t.rgb},0.1)` : 'none',
              }}
            >
              {t.highlight && (
                <motion.div
                  className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-accent-violet to-accent-blue"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              )}

              <div className="p-5">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${t.grad}`}
                      style={{ boxShadow: t.glow }}
                    >
                      <t.icon strokeWidth={1.5} className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-text-primary leading-tight">{t.name}</p>
                      <p className="text-[11px] text-text-muted">{t.timeline}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-text-muted leading-none mb-0.5">starting at</p>
                    <p className="text-2xl font-black text-text-primary leading-none">{t.price}</p>
                  </div>
                </div>

                <div className={`mb-3 h-px bg-gradient-to-r ${t.grad}`} style={{ opacity: 0.2 }} />

                <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-text-muted">Best for</p>
                <ul className="mb-3 space-y-0.5">
                  {t.bestFor.map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <span className="text-[11px]" style={{ color: `rgba(${t.rgb},0.8)` }}>·</span>
                      <span className="text-[12px] text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-text-muted">Includes</p>
                <ul className="mb-3 space-y-1">
                  {t.includes.map((item) => (
                    <li key={item} className="flex items-start gap-1.5">
                      <Check className="mt-0.5 h-3 w-3 shrink-0 text-emerald-400" strokeWidth={2.5} />
                      <span className="text-[12px] leading-snug text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mb-4 text-[11px] text-text-muted">{t.extra}</p>

                <motion.button
                  onClick={() => onNavigate('contact')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`group relative flex w-full items-center justify-center gap-1.5 overflow-hidden rounded-xl py-2.5 text-[12px] font-semibold text-white ${
                    t.highlight
                      ? `bg-gradient-to-r ${t.grad}`
                      : 'border border-white/[0.12] bg-white/[0.04] !text-text-secondary hover:!text-text-primary'
                  }`}
                  style={t.highlight ? { boxShadow: t.glow } : {}}
                >
                  {t.highlight && (
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  )}
                  <span className="relative">Get a Quote</span>
                  <ArrowRight strokeWidth={2} className="relative h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </motion.button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Maintenance ── */}
        <div>
          <div className="mb-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <ShieldCheck strokeWidth={1.5} className="h-3.5 w-3.5 text-text-muted" />
              <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">Ongoing Maintenance</p>
            </div>
            <span className="rounded-full border border-white/[0.08] px-2 py-0.5 text-[9px] font-medium text-text-muted">
              Optional
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {MAINTENANCE.map((m) => (
              <div
                key={m.name}
                className="rounded-xl p-3"
                style={{
                  background: `rgba(${m.rgb},0.06)`,
                  border:     `1px solid rgba(${m.rgb},0.15)`,
                }}
              >
                <div className="mb-1.5 flex items-baseline justify-between gap-1">
                  <p className="text-[12px] font-semibold text-text-primary leading-tight">{m.name}</p>
                  <p className="shrink-0 text-[12px] font-black text-text-primary">{m.price}</p>
                </div>
                <ul className="space-y-0.5">
                  {m.lines.map((l) => (
                    <li key={l} className="flex items-start gap-1">
                      <span className="text-[10px] leading-[1.6]" style={{ color: `rgba(${m.rgb},0.7)` }}>·</span>
                      <span className="text-[11px] leading-snug text-text-muted">{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
