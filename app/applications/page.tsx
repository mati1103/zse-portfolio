import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import PageHero from '@/components/PageHero'
import CinematicCTA from '@/components/CinematicCTA'
import PricingCard from '@/components/PricingCard'
import { getTier, TIER_ICONS } from '@/lib/pricing'

export const metadata: Metadata = {
  title: 'Applications',
  description:
    'Custom web applications — client portals, dashboards, and internal tools — built on real databases and role-based access. Starting at $6,500.',
}

const EXAMPLES = [
  'Client and member portals with authentication and role-based access',
  'Booking and scheduling platforms tied to real availability',
  'Internal dashboards for revenue, operations, or reporting',
  'Membership systems and subscription management',
]

const CONSIDERATIONS = [
  { title: 'Data model first',    body: 'Before any interface is designed, the underlying data — users, roles, records, relationships — is mapped out properly.' },
  { title: 'Real authentication', body: 'Role-based access is enforced at the database level, not just hidden in the UI, so each user sees only what they should.' },
  { title: 'Built to be owned',   body: 'No proprietary lock-in. You get a codebase you can hand to another engineer if you ever need to, on infrastructure you control.' },
]

const tier = getTier('applications')!
const TierIcon = TIER_ICONS[tier.slug]

export default function ApplicationsPage() {
  return (
    <main>
      <PageHero
        image="/studio-conference-room.webp"
        objectPosition="50% 55%"
        eyebrow="Applications"
        title="Software built around how your business actually runs."
        description="For businesses that have outgrown spreadsheets and off-the-shelf tools — client portals, booking systems, dashboards, and workflow software built on real infrastructure, not a page builder."
      />

      <section className="bg-soft-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div className="space-y-8">
              <Reveal>
                <div className="card-surface rounded-2xl p-8">
                  <h2 className="font-display text-[22px] text-ink">What gets built</h2>
                  <ul className="mt-6 space-y-4">
                    {EXAMPLES.map((f) => (
                      <li key={f} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-cobalt" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-border-neutral pt-6 text-[14px] leading-relaxed text-muted">
                    Two examples of this in production:{' '}
                    <Link href="/work/futurepro-soccer" className="font-medium text-ink underline decoration-border-neutral underline-offset-4 hover:decoration-ink">
                      FuturePro Soccer
                    </Link>{' '}
                    and{' '}
                    <Link href="/work/nexttouch" className="font-medium text-ink underline decoration-border-neutral underline-offset-4 hover:decoration-ink">
                      NextTouch
                    </Link>.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="card-surface rounded-2xl p-8">
                  <h2 className="font-display text-[22px] text-ink">Build considerations</h2>
                  <div className="mt-6 space-y-5">
                    {CONSIDERATIONS.map((c) => (
                      <div key={c.title}>
                        <p className="text-[15px] font-medium text-ink">{c.title}</p>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{c.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <PricingCard tier={tier} icon={<TierIcon className="h-5 w-5 text-ink" strokeWidth={1.5} />} />
              <p className="mt-4 text-center text-[13px] text-muted">
                Just need a marketing site?{' '}
                <Link href="/web-design" className="font-medium text-ink underline decoration-border-neutral underline-offset-4 hover:decoration-ink">
                  See Web Design
                </Link>
                {' '}· Already have a site to rebuild?{' '}
                <Link href="/redesign" className="font-medium text-ink underline decoration-border-neutral underline-offset-4 hover:decoration-ink">
                  See Redesign
                </Link>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CinematicCTA
        eyebrow="Applications"
        headline="Have a system in mind that doesn’t exist yet?"
        body="Portals, dashboards, booking systems — tell me what your business needs and I’ll get back to you within one business day."
        secondary={{ label: 'See Web Design', href: '/web-design' }}
      />
    </main>
  )
}
