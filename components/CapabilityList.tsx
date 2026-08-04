import type { Feature } from '@/lib/projects'

interface CapabilityListProps {
  items: Feature[]
  tone?: 'light' | 'dark'
}

export default function CapabilityList({ items, tone = 'light' }: CapabilityListProps) {
  const divider = tone === 'dark' ? 'divide-white/10' : 'divide-border-neutral'
  const label   = tone === 'dark' ? 'text-warm-light'  : 'text-ink'
  const body    = tone === 'dark' ? 'text-warm-light/60' : 'text-muted'
  const icon    = tone === 'dark' ? 'text-warm-light/70' : 'text-cobalt'

  return (
    <div className={`grid grid-cols-1 divide-y sm:grid-cols-2 sm:divide-y-0 sm:divide-x ${divider}`}>
      {items.map(({ Icon, label: title, desc }, i) => (
        <div key={i} className={`flex items-start gap-3.5 py-4 sm:px-6 sm:py-1 ${i % 2 === 0 ? 'sm:pl-0' : ''}`}>
          <Icon className={`mt-0.5 h-[18px] w-[18px] shrink-0 ${icon}`} strokeWidth={1.5} />
          <div>
            <p className={`text-[14px] font-medium ${label}`}>{title}</p>
            <p className={`mt-1 text-[13px] leading-relaxed ${body}`}>{desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
