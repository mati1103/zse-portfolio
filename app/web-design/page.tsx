import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/Reveal'
import PageHero from '@/components/PageHero'
import CinematicCTA from '@/components/CinematicCTA'
import PricingCard from '@/components/PricingCard'
import { getTier, TIER_ICONS } from '@/lib/pricing'
import { getProject } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Web Design',
  description:
    'Custom-designed, hand-coded marketing websites built for clarity, speed, and conversion — starting at $2,500.',
}

const FIT = [
  'Local businesses and service companies whose website undersells the work they actually do',
  'Founders and professionals who need a site that reads as credible, not templated',
  'Teams replacing a slow, outdated, or drag-and-drop site with something built properly',
]

const PROCESS = [
  { n: '01', title: 'Discover',  body: 'A short call to understand your business, your audience, and what the site needs to do for you.' },
  { n: '02', title: 'Define',    body: 'A fixed quote and page-by-page scope, agreed before any design work starts.' },
  { n: '03', title: 'Design',    body: 'A full design direction for your review — structure, messaging hierarchy, and visual system.' },
  { n: '04', title: 'Build',     body: 'The approved design is hand-coded, tested across devices, and prepared for launch.' },
  { n: '05', title: 'Launch',    body: 'Domain, hosting, and analytics connected, with 30 days of support once you’re live.' },
]

const tier = getTier('web-design')!
const TierIcon = TIER_ICONS[tier.slug]
const example = getProject('palm-beach-athletic')!

export default function WebDesignPage() {
  return (
    <main>
      <PageHero
        image="/studio-office-desk.webp"
        objectPosition="45% 55%"
        eyebrow="Web Design"
        title="A website that reads as credible as the work behind it."
        description="Custom-designed, hand-coded marketing sites — built for clarity, speed, and a clear path to a decision. No themes, no drag-and-drop builders."
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
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="card-surface overflow-hidden rounded-2xl">
                  <Link href={`/work/${example.slug}`} className="relative block aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={example.image}
                      alt={example.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      loading="lazy"
                      className="object-cover object-top"
                    />
                  </Link>
                  <div className="p-8">
                    <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-muted">A recent example</p>
                    <h2 className="mt-2 font-display text-[22px] text-ink">
                      {example.nameHighlight}
                      <span className="text-muted">{example.nameRest}</span>
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      A launch marketing site for a new Palm Beach County youth soccer club — hand-coded exactly like this, no theme or page builder underneath.
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-5">
                      <Link
                        href={`/work/${example.slug}`}
                        className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink transition-colors duration-200 hover:text-cobalt"
                      >
                        View case study
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                      </Link>
                      <a
                        href={example.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[14px] font-medium text-muted transition-colors duration-200 hover:text-ink"
                      >
                        Visit website
                        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
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
                Already have a site that just needs a rebuild?{' '}
                <Link href="/redesign" className="font-medium text-ink underline decoration-border-neutral underline-offset-4 hover:decoration-ink">
                  See Redesign
                </Link>
                {' '}· Need more than a marketing site?{' '}
                <Link href="/applications" className="font-medium text-ink underline decoration-border-neutral underline-offset-4 hover:decoration-ink">
                  See Applications
                </Link>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CinematicCTA
        eyebrow="Web Design"
        headline="Ready to talk through your project?"
        body="Tell me about your business and what you need your site to do, and I’ll get back to you within one business day."
        secondary={{ label: 'See Applications', href: '/applications' }}
      />
    </main>
  )
}
