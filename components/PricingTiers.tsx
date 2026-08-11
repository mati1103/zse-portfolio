import { ShieldCheck } from 'lucide-react'
import Reveal from '@/components/Reveal'
import PricingCard from '@/components/PricingCard'
import { TIERS, MAINTENANCE, TIER_ICONS } from '@/lib/pricing'

export default function PricingTiers() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TIERS.map((tier, i) => {
          const Icon = TIER_ICONS[tier.slug]
          return (
            <Reveal key={tier.slug} delay={i * 0.08}>
              <PricingCard tier={tier} icon={<Icon className="h-5 w-5 text-ink" strokeWidth={1.5} />} />
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={0.15}>
        <div className="mt-12">
          <div className="mb-4 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-muted" strokeWidth={1.5} />
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">Ongoing maintenance</p>
            </div>
            <span className="rounded-full border border-border-neutral px-2.5 py-1 text-[10px] font-medium text-muted">
              Optional
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {MAINTENANCE.map((m) => (
              <div key={m.name} className="card-surface rounded-xl p-4">
                <div className="mb-1.5 flex items-baseline justify-between gap-1">
                  <p className="text-[14px] font-medium leading-tight text-ink">{m.name}</p>
                  <p className="shrink-0 text-[14px] font-medium text-ink">{m.price}</p>
                </div>
                <ul className="space-y-0.5">
                  {m.lines.map((l) => (
                    <li key={l} className="flex items-start gap-1.5 text-[13px] leading-snug text-muted">
                      <span className="text-cobalt">·</span>
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  )
}
