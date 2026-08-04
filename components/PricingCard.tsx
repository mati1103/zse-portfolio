'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import type { Tier } from '@/lib/pricing'

export default function PricingCard({ tier, icon }: { tier: Tier; icon: ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex h-full flex-col rounded-2xl p-7 md:p-9 ${
        tier.highlight
          ? 'card-surface border-cobalt/30 shadow-[0_1px_2px_rgba(23,24,23,0.04),0_16px_36px_rgba(49,87,213,0.12)]'
          : 'card-surface'
      }`}
    >
      {tier.highlight && (
        <span className="absolute -top-3 left-7 rounded-full bg-cobalt px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-white">
          Most requested
        </span>
      )}

      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink/[0.05]">
            {icon}
          </div>
          <div>
            <p className="text-[15px] font-medium leading-tight text-ink">{tier.name}</p>
            <p className="text-[13px] text-muted">{tier.timeline}</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">Starting at</p>
        <p className="mt-1 font-display text-[42px] leading-none text-ink md:text-[48px]">{tier.price}</p>
      </div>

      <div className="mb-6 h-px bg-border-neutral" />

      <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">Best for</p>
      <ul className="mb-6 space-y-1.5">
        {tier.bestFor.map((item) => (
          <li key={item} className="flex items-baseline gap-2 text-[14px] text-muted">
            <span className="text-cobalt">·</span>
            {item}
          </li>
        ))}
      </ul>

      <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">Includes</p>
      <ul className="mb-6 space-y-2">
        {tier.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[14px] leading-snug text-ink">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cobalt" strokeWidth={2.5} />
            {item}
          </li>
        ))}
      </ul>

      <p className="mb-6 text-[13px] text-muted">{tier.extra}</p>

      <Link
        href="/start"
        className={`shimmer-sweep group mt-auto flex items-center justify-center gap-2 rounded-full py-3.5 text-[14px] font-medium transition-colors duration-300 ${
          tier.highlight
            ? 'bg-cobalt text-white hover:bg-cobalt-hover'
            : 'bg-ink text-warm-light hover:bg-charcoal'
        }`}
      >
        Get a quote
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />
      </Link>
    </motion.div>
  )
}
