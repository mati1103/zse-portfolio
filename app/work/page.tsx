import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/Reveal'
import BrowserFrame from '@/components/BrowserFrame'
import PhoneFrame from '@/components/PhoneFrame'
import { PROJECTS } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Selected projects built by Zarembka Software Engineering.',
}

const [futurePro, nextTouch, palmBeachAthletic] = PROJECTS

// Display-only copy for the portfolio overview — condensed from the full
// project data in lib/projects.ts (which still powers the case-study pages).
const FUTUREPRO_CATEGORY = 'Web Application'
const FUTUREPRO_SUMMARY =
  'A booking, scheduling, communication, and business-analytics platform built for independent soccer coaches and athletes.'
const FUTUREPRO_HIGHLIGHTS = [
  'Athlete booking and package management',
  'Coach scheduling and session operations',
  'Revenue, expenses, and performance reporting',
]

const NEXTTOUCH_CATEGORY = 'Mobile App'
const NEXTTOUCH_SUMMARY =
  'A mobile-first soccer training platform where coaches assign development work, athletes submit practice videos, and feedback stays organized within the team environment.'
const NEXTTOUCH_HIGHLIGHTS = [
  'Weekly coach-assigned training',
  'Player video submissions and feedback',
  'Club, team, and role-based access',
]

const PBA_CATEGORY = 'Marketing Website'
const PBA_SUMMARY =
  'A pre-launch marketing site for a new Palm Beach County youth soccer club, built to capture interest-list sign-ups and clinic registrations ahead of its 2027 opening.'
const PBA_HIGHLIGHTS = [
  'Interest list and free clinic registration',
  'Live Google Sheets operations hub',
  'Automated confirmation emails via Resend',
]

export default function WorkPage() {
  return (
    <main>
      {/* ── Intro ── */}
      <section className="bg-soft-white pb-14 pt-36 md:pb-16 md:pt-44">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <Reveal>
            <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
              Selected Work
            </p>
            <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <h1 className="max-w-2xl font-display text-[38px] leading-[1.1] text-ink md:text-[52px]">
                Digital products built around real businesses.
              </h1>
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-muted md:whitespace-nowrap md:pb-1.5">
                {String(PROJECTS.length).padStart(2, '0')} Selected Projects
              </p>
            </div>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted md:text-[17px]">
              Websites, web applications, and software platforms — each built around
              how the business actually operates, not a template.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Quick-nav project cards ── */}
      <section className="bg-soft-white pb-16 md:pb-20">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
                <div className="group overflow-hidden rounded-2xl border border-border-neutral bg-soft-white transition-shadow duration-300 hover:shadow-lg">
                  <Link href={`/work/${project.slug}`} className="relative block aspect-[16/10] w-full overflow-hidden bg-ink/5">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      loading="lazy"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </Link>
                  <div className="p-6">
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-[22px] leading-tight text-ink">
                      {project.nameHighlight}
                      <span className="text-muted">{project.nameRest}</span>
                    </h3>
                    <p className="mt-3 line-clamp-2 text-[14px] leading-relaxed text-muted">
                      {project.summary}
                    </p>
                    <div className="mt-5 flex items-center gap-5">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink transition-colors duration-200 hover:text-cobalt"
                      >
                        View case study
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                      </Link>
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-muted transition-colors duration-200 hover:text-ink"
                      >
                        Website
                        <ArrowUpRight className="h-3 w-3" strokeWidth={1.75} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 01 — FuturePro Soccer ── */}
      <section className="bg-soft-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-8 lg:gap-12">
            {/* Story */}
            <div className="order-2 md:order-1 md:col-span-5">
              <Reveal>
                <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-muted">
                  <span className="text-ink">01</span> / {FUTUREPRO_CATEGORY}
                </p>
                <h2 className="mt-3 font-display text-[32px] leading-[1.12] text-ink md:text-[42px]">
                  FuturePro<span className="text-muted"> Soccer</span>
                </h2>
                <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-muted">
                  {FUTUREPRO_SUMMARY}
                </p>

                <ul className="mt-7 space-y-2.5">
                  {FUTUREPRO_HIGHLIGHTS.map((h) => (
                    <li key={h} className="flex items-baseline gap-2.5 text-[14.5px] text-ink">
                      <span className="text-cobalt">·</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Link
                    href={`/work/${futurePro.slug}`}
                    className="group inline-flex items-center gap-2 text-[14px] font-medium text-ink transition-colors duration-200 hover:text-cobalt"
                  >
                    View case study
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />
                  </Link>
                  <a
                    href={futurePro.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-muted transition-colors duration-200 hover:text-ink"
                  >
                    Visit website
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Media */}
            <div className="order-1 md:order-2 md:col-span-7">
              <Reveal delay={0.08}>
                <BrowserFrame src={futurePro.image} alt={futurePro.imageAlt} priority />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── divider ── */}
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="border-t border-border-neutral" />
      </div>

      {/* ── 02 — NextTouch ── */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-8 lg:gap-12">
            {/* Media */}
            <div className="md:col-span-7">
              <div className="mx-auto grid max-w-md grid-cols-2 gap-5 md:max-w-none md:gap-7">
                <Reveal delay={0.06}>
                  <PhoneFrame
                    src={nextTouch.previews[0].src}
                    alt={nextTouch.previews[0].alt}
                  />
                </Reveal>
                <Reveal delay={0.14}>
                  <PhoneFrame
                    src={nextTouch.previews[1].src}
                    alt={nextTouch.previews[1].alt}
                    className="mt-8 md:mt-12"
                  />
                </Reveal>
              </div>
            </div>

            {/* Story */}
            <div className="md:col-span-5">
              <Reveal>
                <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-muted">
                  <span className="text-ink">02</span> / {NEXTTOUCH_CATEGORY}
                </p>
                <h2 className="mt-3 font-display text-[32px] leading-[1.12] text-ink md:text-[42px]">
                  Next<span className="text-muted">Touch</span>
                </h2>
                <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-muted">
                  {NEXTTOUCH_SUMMARY}
                </p>

                <ul className="mt-7 space-y-2.5">
                  {NEXTTOUCH_HIGHLIGHTS.map((h) => (
                    <li key={h} className="flex items-baseline gap-2.5 text-[14.5px] text-ink">
                      <span className="text-cobalt">·</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Link
                    href={`/work/${nextTouch.slug}`}
                    className="group inline-flex items-center gap-2 text-[14px] font-medium text-ink transition-colors duration-200 hover:text-cobalt"
                  >
                    View case study
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />
                  </Link>
                  <a
                    href={nextTouch.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-muted transition-colors duration-200 hover:text-ink"
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

      {/* ── divider ── */}
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="border-t border-border-neutral" />
      </div>

      {/* ── 03 — Palm Beach Athletic ── */}
      <section className="bg-soft-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-8 lg:gap-12">
            {/* Story */}
            <div className="order-2 md:order-1 md:col-span-5">
              <Reveal>
                <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-muted">
                  <span className="text-ink">03</span> / {PBA_CATEGORY}
                </p>
                <h2 className="mt-3 font-display text-[32px] leading-[1.12] text-ink md:text-[42px]">
                  Palm Beach<span className="text-muted"> Athletic</span>
                </h2>
                <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-muted">
                  {PBA_SUMMARY}
                </p>

                <ul className="mt-7 space-y-2.5">
                  {PBA_HIGHLIGHTS.map((h) => (
                    <li key={h} className="flex items-baseline gap-2.5 text-[14.5px] text-ink">
                      <span className="text-cobalt">·</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Link
                    href={`/work/${palmBeachAthletic.slug}`}
                    className="group inline-flex items-center gap-2 text-[14px] font-medium text-ink transition-colors duration-200 hover:text-cobalt"
                  >
                    View case study
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />
                  </Link>
                  <a
                    href={palmBeachAthletic.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-muted transition-colors duration-200 hover:text-ink"
                  >
                    Visit website
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Media */}
            <div className="order-1 md:order-2 md:col-span-7">
              <Reveal delay={0.08}>
                <BrowserFrame src={palmBeachAthletic.image} alt={palmBeachAthletic.imageAlt} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="border-t border-border-neutral bg-soft-white">
        <div className="mx-auto max-w-[1280px] px-5 py-20 text-center md:px-8 md:py-24">
          <Reveal>
            <h2 className="font-display text-[32px] leading-[1.15] text-ink md:text-[42px]">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-muted">
              Let&rsquo;s build something that actually works for your business.
            </p>
            <div className="mt-8">
              <Link
                href="/start"
                className="shimmer-sweep group inline-flex items-center gap-2 rounded-full bg-cobalt px-7 py-3.5 text-[14px] font-medium text-white transition-colors duration-300 hover:bg-cobalt-hover"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
