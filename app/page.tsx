import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import StatCards from '@/components/StatCards'
import ServiceCards from '@/components/ServiceCards'
import ProcessExperience from '@/components/ProcessExperience'
import PricingTiers from '@/components/PricingTiers'
import FeaturedProjectShowcase from '@/components/FeaturedProjectShowcase'
import CinematicCTA from '@/components/CinematicCTA'

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-charcoal">
        <Image
          src="/hero-studio.png"
          alt="A calm, well-designed workspace displaying a custom-built website"
          fill
          priority
          className="object-cover object-[68%_center] md:object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(23,24,23,0.78) 0%, rgba(23,24,23,0.35) 42%, rgba(23,24,23,0.05) 68%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'linear-gradient(to right, rgba(23,24,23,0.55) 0%, rgba(23,24,23,0.15) 40%, transparent 62%)',
          }}
        />

        <div className="relative z-10 w-full max-w-3xl pl-5 pr-5 pb-16 pt-32 md:pl-14 md:pr-10 md:pb-24 lg:pl-32 lg:pr-14">
          <Reveal>
            <p className="mb-5 text-[13px] font-medium uppercase tracking-[0.22em] text-warm-light/75">
              Zarembka Software Engineering
            </p>
            <h1 className="max-w-2xl font-display text-[40px] leading-[1.08] text-warm-light md:text-[68px]">
              Websites built with intention.
            </h1>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-warm-light/80 md:text-[18px]">
              Custom websites and applications designed around your business — not a template.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/work"
                className="rounded-full bg-warm-light px-7 py-3.5 text-center text-[14px] font-medium text-ink transition-colors duration-300 hover:bg-white"
              >
                View our work
              </Link>
              <Link
                href="/start"
                className="rounded-full border border-warm-light/40 px-7 py-3.5 text-center text-[14px] font-medium text-warm-light transition-colors duration-300 hover:border-warm-light hover:bg-white/5"
              >
                Start a project
              </Link>
            </div>

            <p className="mt-10 text-[13px] tracking-wide text-warm-light/55">
              Small by design. Built from scratch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Studio ethos + stats ── */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
              Studio ethos
            </p>
            <h2 className="max-w-2xl font-display text-[34px] leading-[1.15] text-ink md:text-[48px]">
              Small by design.
            </h2>
            <p className="mt-8 max-w-2xl text-[17px] leading-[1.8] text-muted md:text-[19px]">
              Zarembka Software Engineering is a studio of one, working with a small number
              of clients at a time. That isn&rsquo;t a limitation — it&rsquo;s the whole point.
              You work directly with the person designing and building your project, from
              the first conversation to the day it launches, with the full attention that
              comes from never juggling more than one thing at once.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14">
              <StatCards />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Service overview ── */}
      <section className="bg-soft-white">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-muted">Services</p>
            <h2 className="mt-4 max-w-xl font-display text-[32px] leading-[1.2] text-ink md:text-[42px]">
              Three ways to work together.
            </h2>
          </Reveal>
          <div className="mt-12">
            <ServiceCards />
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-5xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-muted">Process</p>
            <h2 className="mt-4 max-w-lg font-display text-[32px] leading-[1.2] text-ink md:text-[42px]">
              Ten steps. Fixed pricing. No surprises.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
              Click through each stage, or use the arrow keys.
            </p>
          </Reveal>
          <div className="mt-12">
            <ProcessExperience />
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="bg-soft-white">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
              Flat-rate development
            </p>
            <h2 className="mt-4 max-w-lg font-display text-[32px] leading-[1.2] text-ink md:text-[42px]">
              Simple pricing. Serious software.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
              One fixed quote after scope approval · 50% upfront · 50% at launch.
            </p>
          </Reveal>
          <div className="mt-12">
            <PricingTiers />
          </div>
        </div>
      </section>

      {/* ── Featured work (cinematic) ── */}
      <FeaturedProjectShowcase />

      {/* ── Final CTA (cinematic) ── */}
      <CinematicCTA />
    </main>
  )
}
