import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/Reveal'
import BrowserFrame from '@/components/BrowserFrame'
import PhoneFrame from '@/components/PhoneFrame'
import CinematicCTA from '@/components/CinematicCTA'
import { PROJECTS } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects built by Zarembka Software Engineering.',
}

const [futurePro, nextTouch] = PROJECTS

// Display-only copy for the portfolio overview — condensed from the full
// project data in lib/projects.ts (which still powers the case-study pages).
const FUTUREPRO_TAGS = ['Web Application', 'Booking Platform', 'Business Operations']
const FUTUREPRO_SUMMARY =
  'A booking, scheduling, communication, and business-analytics platform built for independent soccer coaches and athletes.'
const FUTUREPRO_HIGHLIGHTS = [
  'Athlete booking and package management',
  'Coach scheduling and session operations',
  'Revenue, expenses, and performance reporting',
]

const NEXTTOUCH_TAGS = ['Mobile App', 'Coaching Platform', 'Team Development']
const NEXTTOUCH_SUMMARY =
  'A mobile-first soccer training platform where coaches assign development work, athletes submit practice videos, and feedback stays organized inside the team environment.'
const NEXTTOUCH_HIGHLIGHTS = [
  'Weekly coach-assigned training',
  'Player video submissions and feedback',
  'Club, team, and role-based access',
]

export default function WorkPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[52vh] w-full items-end overflow-hidden bg-charcoal md:min-h-[58vh]">
        <Image
          src="/studio-conference-room.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: '55% 50%' }}
        />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              'linear-gradient(to top, rgba(23,24,23,0.9) 0%, rgba(23,24,23,0.5) 45%, rgba(23,24,23,0.15) 70%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          aria-hidden
          style={{ background: 'linear-gradient(to right, rgba(23,24,23,0.55) 0%, transparent 55%)' }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-20">
          <Reveal>
            <div className="mb-5 flex items-center gap-2.5">
              <span className="block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
              <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-warm-light/70">
                {PROJECTS.length} live products
              </span>
            </div>
            <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.22em] text-warm-light/70">
              Selected Work
            </p>
            <h1 className="max-w-3xl font-display text-[42px] leading-[1.08] text-warm-light md:text-[64px]">
              Digital products built around real businesses.
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-warm-light/80 md:text-[18px]">
              Custom websites and software platforms designed around real workflows,
              real users, and the way each business actually operates.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Quick jump — skip straight to a case study ── */}
      <section className="border-b border-border-neutral bg-soft-white">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="flex flex-wrap items-center gap-6 py-5 md:gap-10">
            <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
              View case study
            </span>
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              <Link
                href={`/work/${futurePro.slug}`}
                className="group flex items-center gap-1.5 text-[14px] font-medium text-ink transition-colors duration-200 hover:text-cobalt"
              >
                FuturePro Soccer
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />
              </Link>
              <span className="h-4 w-px bg-border-neutral" />
              <Link
                href={`/work/${nextTouch.slug}`}
                className="group flex items-center gap-1.5 text-[14px] font-medium text-ink transition-colors duration-200 hover:text-cobalt"
              >
                NextTouch
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 01 — FuturePro Soccer ── */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-5 pt-28 pb-24 md:px-8 md:pt-40 md:pb-32">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
            {/* Story */}
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
                  Project 01
                </p>
                <p className="mt-4 text-[12px] font-medium uppercase tracking-wide text-muted">
                  {FUTUREPRO_TAGS.join(' · ')}
                </p>
                <h2 className="mt-3 font-display text-[36px] leading-[1.1] text-ink md:text-[48px]">
                  FuturePro<span className="text-muted"> Soccer</span>
                </h2>
                <p className="mt-5 max-w-md text-[16px] leading-relaxed text-muted">
                  {FUTUREPRO_SUMMARY}
                </p>

                <ul className="mt-8 space-y-3">
                  {FUTUREPRO_HIGHLIGHTS.map((h) => (
                    <li key={h} className="flex items-baseline gap-2.5 text-[15px] text-ink">
                      <span className="text-cobalt">·</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <Link
                    href={`/work/${futurePro.slug}`}
                    className="shimmer-sweep group flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-medium text-warm-light transition-colors duration-300 hover:bg-charcoal"
                  >
                    View case study
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />
                  </Link>
                  <a
                    href={futurePro.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[14px] font-medium text-ink underline decoration-border-neutral underline-offset-4 transition-colors hover:decoration-ink"
                  >
                    Visit website
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Media */}
            <div className="lg:col-span-7">
              <Reveal delay={0.08}>
                <BrowserFrame src={futurePro.image} alt={futurePro.imageAlt} priority />
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-6 w-[78%] lg:ml-auto lg:mt-[-64px] lg:w-[58%]">
                  <BrowserFrame src={futurePro.previews[1].src} alt={futurePro.previews[1].alt} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 — NextTouch ── */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-[1400px] px-5 pt-28 pb-28 md:px-8 md:py-40">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
            {/* Media */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-5 md:gap-7">
                <Reveal delay={0.06}>
                  <PhoneFrame
                    src={nextTouch.previews[0].src}
                    alt={nextTouch.previews[0].alt}
                    className="max-w-[280px]"
                  />
                </Reveal>
                <Reveal delay={0.14}>
                  <PhoneFrame
                    src={nextTouch.previews[1].src}
                    alt={nextTouch.previews[1].alt}
                    className="max-w-[280px] md:mt-10"
                  />
                </Reveal>
              </div>
            </div>

            {/* Story */}
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-warm-light/60">
                  Project 02
                </p>
                <p className="mt-4 text-[12px] font-medium uppercase tracking-wide text-warm-light/50">
                  {NEXTTOUCH_TAGS.join(' · ')}
                </p>
                <h2 className="mt-3 font-display text-[36px] leading-[1.1] text-warm-light md:text-[48px]">
                  Next<span className="text-warm-light/60">Touch</span>
                </h2>
                <p className="mt-5 max-w-md text-[16px] leading-relaxed text-warm-light/75">
                  {NEXTTOUCH_SUMMARY}
                </p>

                <ul className="mt-8 space-y-3">
                  {NEXTTOUCH_HIGHLIGHTS.map((h) => (
                    <li key={h} className="flex items-baseline gap-2.5 text-[15px] text-warm-light/90">
                      <span className="text-cobalt">·</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <Link
                    href={`/work/${nextTouch.slug}`}
                    className="shimmer-sweep group flex items-center gap-2 rounded-full bg-cobalt px-6 py-3.5 text-[14px] font-medium text-white transition-colors duration-300 hover:bg-cobalt-hover"
                  >
                    View case study
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />
                  </Link>
                  <a
                    href={nextTouch.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[14px] font-medium text-warm-light underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-warm-light"
                  >
                    Visit website
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA (cinematic) ── */}
      <CinematicCTA />
    </main>
  )
}
