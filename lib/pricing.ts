import { Globe, Database, RefreshCw, type LucideIcon } from 'lucide-react'

export interface Tier {
  slug: string
  name: string
  price: string
  timeline: string
  highlight: boolean
  bestFor: string[]
  includes: string[]
  extra: string
}

export const TIER_ICONS: Record<string, LucideIcon> = {
  'redesign': RefreshCw,
  'web-design': Globe,
  'applications': Database,
}

export const TIERS: Tier[] = [
  {
    slug: 'redesign',
    name: 'Website Redesign',
    price: '$1,250',
    timeline: '1–2 weeks',
    highlight: false,
    bestFor: ['Businesses with an outdated or hard-to-use site', 'Clubs & organizations ready for a modern look', 'Sites that just need a rebuild, not a new strategy'],
    includes: [
      'Up to 5 redesigned pages',
      'Complete visual redesign, mobile-responsive rebuild',
      'Improved navigation & performance optimization',
      'Existing content migration · basic SEO setup',
      '2 revision rounds · 30-day post-launch support',
    ],
    extra: '+$150 / page · +$500 / integration',
  },
  {
    slug: 'web-design',
    name: 'Custom Website',
    price: '$2,500',
    timeline: '3–4 weeks',
    highlight: false,
    bestFor: ['Local businesses', 'Service companies', 'Personal brands & portfolios'],
    includes: [
      'Up to 5 custom pages',
      'Mobile-responsive design',
      'SEO-friendly setup',
      'Contact forms & analytics',
      '2 revision meetings · 30-day support',
    ],
    extra: '+$250 / page · +$750 / integration',
  },
  {
    slug: 'applications',
    name: 'Web Application',
    price: '$6,500',
    timeline: '6–10 weeks',
    highlight: true,
    bestFor: ['Client portals & dashboards', 'Scheduling & booking platforms', 'Membership systems & internal tools'],
    includes: [
      'Everything in Marketing Website',
      'Database design & auth',
      'Role-based dashboards & admin panels',
      '3 revision meetings · 60-day support',
    ],
    extra: '+$750 / integration (Stripe, CRM, booking APIs, etc.)',
  },
]

export interface MaintenancePlan {
  name: string
  price: string
  lines: string[]
}

export const MAINTENANCE: MaintenancePlan[] = [
  {
    name: 'Website Care',
    price: '$99 / mo',
    lines: ['Security & hosting monitoring', 'Bug fixes & updates', 'Up to 1 hr edits/month'],
  },
  {
    name: 'Application Care',
    price: '$249 / mo',
    lines: ['Database & performance checks', 'Bug fixes & security updates', 'Up to 3 hrs/month'],
  },
  {
    name: 'Growth Retainer',
    price: '$500 / mo',
    lines: ['Up to 8 hrs development/month', 'New features, pages & integrations', '$75 / hr beyond that'],
  },
]

export function getTier(slug: string) {
  return TIERS.find((t) => t.slug === slug)
}
