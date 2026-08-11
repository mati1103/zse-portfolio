import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import PageHero from '@/components/PageHero'
import CinematicCTA from '@/components/CinematicCTA'
import PricingCard from '@/components/PricingCard'
import { getTier, TIER_ICONS } from '@/lib/pricing'

export const metadata: Metadata = {
  title: 'Website Redesign',
  description:
    'Already have a website? We take what you have and rebuild it from scratch with a cleaner, faster, modern design — starting at $1,250.',
}

const FIT = [
  'Businesses with outdated websites',
  'Clubs and organizations ready for a modern look',
  'Companies whose current site is difficult to use on mobile',
  'Businesses that don’t need an entirely new digital strategy',
]

const PROCESS = [
  { n: '01', title: 'Discover', body: 'A short call to understand your business and what isn’t working about your current site.' },
  { n: '02', title: 'Define',   body: 'A fixed quote and page-by-page scope, agreed before any design work starts.' },
  { n: '03', title: 'Rebuild',  body: 'Your existing content and brand become the foundation for a site rebuilt entirely from scratch.' },
  { n: '04', title: 'Launch',   body: 'The new site replaces the old one, with 30 days of support once you’re live.' },
]

const tier = getTier('redesign')!
const TierIcon = TIER_ICONS[tier.slug]

export default function RedesignPage() {
  return (
    <main>
      <PageHero
        image="/studio-work-gallery.webp"
        objectPosition="50% 50%"
        eyebrow="Website Redesign"
        title="Already have a website? Let’s make it feel new."
        description="We take your existing website, keep what works, and rebuild the experience from the ground up with a cleaner, faster, modern design — built specifically for your business, not a template."
      />

      <section className="bg-soft-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div className="space-y-8">
              <Reveal>
                <div className="card-surface rounded-2xl p-8">
                  <h2 className="font-display text-[22px] text-ink">Who this is for</h2>
                  <ul className="mt-6 space-y-4">
                    {FIT.map((f) => (
                      <li key={f} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-cobalt" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-border-neutral pt-6 text-[14px] leading-relaxed text-muted">
                    No templates. No generic theme swaps. Your existing content and brand become
                    the starting point — we use it to rebuild the actual website from scratch.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="card-surface rounded-2xl p-8">
                  <h2 className="font-display text-[22px] text-ink">How it runs</h2>
                  <div className="mt-6 space-y-5">
                    {PROCESS.map((p) => (
                      <div key={p.n} className="flex gap-4">
                        <span className="font-display text-[14px] text-muted">{p.n}</span>
                        <div>
                          <p className="text-[15px] font-medium text-ink">{p.title}</p>
                          <p className="mt-0.5 text-[13.5px] leading-relaxed text-muted">{p.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <PricingCard tier={tier} icon={<TierIcon className="h-5 w-5 text-ink" strokeWidth={1.5} />} />
              <p className="mt-4 text-center text-[13px] text-muted">
                Need a completely new site instead?{' '}
                <Link href="/web-design" className="font-medium text-ink underline decoration-border-neutral underline-offset-4 hover:decoration-ink">
                  See Web Design
                </Link>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CinematicCTA
        eyebrow="Website Redesign"
        headline="Ready to give your site a rebuild?"
        body="Send over your current site and tell me what isn’t working, and I’ll get back to you within one business day."
        secondary={{ label: 'See Web Design', href: '/web-design' }}
      />
    </main>
  )
}
