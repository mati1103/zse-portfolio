import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/Reveal'
import PageHero from '@/components/PageHero'
import ProjectPanel from '@/components/ProjectPanel'
import CinematicCTA from '@/components/CinematicCTA'
import { PROJECTS } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects built by Zarembka Software Engineering.',
}

const [futurePro, nextTouch] = PROJECTS

export default function WorkPage() {
  return (
    <main>
      {/* ── Cinematic hero ── */}
      <PageHero
        image="/studio-conference-room.webp"
        objectPosition="55% 50%"
        minHeight="78vh"
        title="Selected work."
        description="Custom websites and software platforms designed around real businesses, real workflows, and the people using them."
      >
        <div className="mb-4 flex items-center gap-2.5">
          <span className="block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
          <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-warm-light/70">
            {PROJECTS.length} live projects
          </span>
        </div>
      </PageHero>

      {/* ── Dominant case study ── */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
              Complete case study
            </p>
          </Reveal>
          <div className="mt-8">
            <Reveal delay={0.06}>
              <ProjectPanel project={futurePro} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Secondary selected work ── */}
      <section className="bg-soft-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
              Also selected
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <Link
              href={`/work/${nextTouch.slug}`}
              className="group mt-8 grid grid-cols-1 items-center gap-8 rounded-[26px] border border-border-neutral p-6 transition-colors duration-300 hover:border-ink/25 md:grid-cols-2 md:gap-12 md:p-10"
            >
              <div className="relative h-[340px] overflow-hidden rounded-2xl border border-border-neutral bg-ivory">
                <Image
                  src={nextTouch.image}
                  alt={nextTouch.imageAlt}
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  loading="lazy"
                  className="object-contain transition-transform duration-700 ease-calm group-hover:scale-[1.03]"
                />
              </div>
              <div>
                <div className="flex flex-wrap gap-2">
                  {nextTouch.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border-neutral px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-muted">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="mt-5 font-display text-[28px] leading-tight text-ink md:text-[32px]">
                  {nextTouch.nameHighlight}
                  <span className="text-muted">{nextTouch.nameRest}</span>
                </h2>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                  {nextTouch.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-ink transition-colors duration-200 group-hover:text-cobalt">
                  View case study
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.75} />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Final CTA (cinematic) ── */}
      <CinematicCTA />
    </main>
  )
}
