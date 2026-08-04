import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/Reveal'
import CapabilityList from '@/components/CapabilityList'
import PipelineRail from '@/components/PipelineRail'
import TechnicalDetails from '@/components/TechnicalDetails'
import { PROJECTS, getProject } from '@/lib/projects'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.nameHighlight}${project.nameRest}`,
    description: project.summary,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const index = PROJECTS.findIndex((p) => p.slug === slug)
  const next = PROJECTS[(index + 1) % PROJECTS.length]

  return (
    <main>
      {/* 1 — Hero */}
      <section className="relative flex min-h-[58vh] w-full items-end overflow-hidden bg-charcoal">
        <Image
          src="/studio-project-cta.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: '30% 55%' }}
        />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              'linear-gradient(to top, rgba(23,24,23,0.88) 0%, rgba(23,24,23,0.45) 45%, rgba(23,24,23,0.12) 70%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          aria-hidden
          style={{ background: 'linear-gradient(to right, rgba(23,24,23,0.5) 0%, transparent 55%)' }}
        />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-16 pt-32 md:px-8 md:pb-20">
          <Reveal>
            <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-warm-light/70">
              {project.category}
            </p>
            <h1 className="mt-6 font-display text-[38px] leading-[1.15] text-warm-light md:text-[56px]">
              {project.nameHighlight}
              <span className="text-warm-light/60">{project.nameRest}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-[1.75] text-warm-light/80">
              {project.summary}
            </p>
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-1.5 text-[14px] font-medium text-warm-light transition-colors duration-200 hover:text-white"
            >
              Visit live site
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* 2 + 3 — Overview & challenge */}
      <section className="bg-soft-white">
        <div className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <Reveal>
              <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-muted">Overview</p>
              <p className="mt-4 text-[16px] leading-[1.8] text-muted">{project.overview}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-muted">The challenge</p>
              <p className="mt-4 text-[16px] leading-[1.8] text-muted">{project.challenge}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4 — Solution */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-muted">The solution</p>
            <p className="mt-4 max-w-2xl text-[16px] leading-[1.8] text-muted">{project.solutionSummary}</p>
          </Reveal>
        </div>
      </section>

      {/* 5 — Product visuals */}
      <section className="bg-soft-white">
        <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="mb-8 text-[13px] font-medium uppercase tracking-[0.18em] text-muted">Product visuals</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {project.previews.map((preview, i) => (
              <Reveal key={preview.title} delay={i * 0.06}>
                <div className="overflow-hidden rounded-2xl border border-border-neutral">
                  <div className="relative h-[360px] w-full bg-ivory">
                    <Image
                      src={preview.src}
                      alt={preview.alt}
                      fill
                      sizes="(min-width: 768px) 45vw, 90vw"
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>
                  <div className="border-t border-border-neutral p-5">
                    <p className="text-[14px] font-medium text-ink">{preview.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted">{preview.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Core capabilities */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="mb-8 text-[13px] font-medium uppercase tracking-[0.18em] text-muted">Core capabilities</p>
            <CapabilityList items={project.features} />
          </Reveal>
        </div>
      </section>

      {/* 7 — Implementation */}
      <section className="bg-soft-white">
        <div className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="mb-8 text-[13px] font-medium uppercase tracking-[0.18em] text-muted">Implementation</p>
            <PipelineRail project={project} />
          </Reveal>
        </div>
      </section>

      {/* 8 — Technical architecture */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="mb-8 text-[13px] font-medium uppercase tracking-[0.18em] text-muted">Technical architecture</p>
            <TechnicalDetails
              infraContent={
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.infra.map(({ Icon, label, desc }, i) => (
                    <div key={i} className="flex items-start gap-4 rounded-2xl border border-border-neutral bg-ink/[0.012] p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cobalt/10">
                        <Icon className="h-[18px] w-[18px] text-cobalt" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[14px] font-medium text-ink">{label}</p>
                        <p className="mt-1 text-[12.5px] leading-relaxed text-muted">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              }
              stackContent={
                <div>
                  <p className="mb-5 text-[13px] leading-relaxed text-muted">
                    Every technology was chosen for a specific reason — no bloat, no defaults
                    kept for convention.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border-neutral px-3.5 py-1.5 text-[12px] font-medium text-muted transition-colors duration-200 hover:border-ink/30 hover:text-ink"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              }
            />
          </Reveal>
        </div>
      </section>

      {/* 9 — Testimonial */}
      {project.testimonial && (
        <section className="bg-soft-white">
          <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
            <Reveal>
              <div className="card-surface rounded-2xl p-8 md:p-10">
                <span className="select-none font-display text-[56px] leading-[0.6] text-cobalt/25">&ldquo;</span>
                <p className="mt-2 font-display text-[20px] leading-[1.55] text-ink md:text-[23px]">
                  {project.testimonial.quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-[13px] font-medium text-warm-light">
                    {project.testimonial.initials}
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-ink">{project.testimonial.name}</p>
                    <p className="text-[13px] text-muted">{project.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* 10 — Outcome */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-muted">Outcome</p>
            <p className="mt-4 max-w-2xl text-[16px] leading-[1.8] text-muted">{project.outcome}</p>
          </Reveal>
        </div>
      </section>

      {/* 11 — Next project CTA */}
      <section className="relative flex min-h-[55vh] w-full items-center justify-center overflow-hidden bg-charcoal">
        <Image
          src="/studio-office-desk.webp"
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
          className="animate-kenburns object-cover motion-reduce:animate-none"
          style={{ objectPosition: '45% 55%' }}
        />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{ background: 'rgba(23,24,23,0.72)' }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32">
          <Reveal>
            <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-warm-light/60">Next project</p>
            <Link
              href={`/work/${next.slug}`}
              className="mt-4 inline-flex items-center gap-3 font-display text-[30px] text-warm-light transition-colors duration-300 hover:text-warm-light/80 md:text-[40px]"
            >
              {next.nameHighlight}{next.nameRest}
              <ArrowRight className="h-6 w-6" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
