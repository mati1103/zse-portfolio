import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import CapabilityList from '@/components/CapabilityList'
import type { Project } from '@/lib/projects'

interface ProjectPanelProps {
  project: Project
  summaryOverride?: string
  reverse?: boolean
  onImage?: boolean
}

export default function ProjectPanel({ project, summaryOverride, reverse = false, onImage = false }: ProjectPanelProps) {
  return (
    <div
      className={`overflow-hidden rounded-[26px] p-6 md:p-10 ${
        onImage
          ? 'border border-white/15 bg-soft-white/95 shadow-2xl shadow-black/30 backdrop-blur-sm'
          : 'border border-border-neutral bg-soft-white shadow-sm'
      }`}
    >
      <div className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        {/* ── Project story ── */}
        <div className="flex flex-col">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-border-neutral px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-muted">
                {t}
              </span>
            ))}
          </div>

          <h3 className="mt-5 font-display text-[30px] leading-tight text-ink md:text-[36px]">
            {project.nameHighlight}
            <span className="text-muted">{project.nameRest}</span>
          </h3>

          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            {summaryOverride ?? project.summary}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-5">
            <Link
              href={`/work/${project.slug}`}
              className="shimmer-sweep group flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-warm-light transition-colors duration-300 hover:bg-charcoal"
            >
              View case study
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />
            </Link>
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[14px] font-medium text-ink underline decoration-border-neutral underline-offset-4 transition-colors hover:decoration-ink"
            >
              Visit website
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
            </a>
          </div>
        </div>

        {/* ── Browser-frame screenshot ── */}
        <div className="overflow-hidden rounded-2xl border border-border-neutral shadow-lg">
          <div className="flex items-center gap-1.5 bg-ink/[0.04] px-3.5 py-2.5">
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="h-2 w-2 rounded-full bg-ink/15" />
          </div>
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              loading="lazy"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* ── Capabilities ── */}
      <div className="mt-10 border-t border-border-neutral pt-8">
        <CapabilityList items={project.features} />
      </div>

      {/* ── Testimonial, integrated ── */}
      {project.testimonial && (
        <div className="mt-8 border-t border-border-neutral pt-8">
          <div className="flex items-start gap-4">
            <span className="select-none font-display text-[48px] leading-[0.5] text-cobalt/25">&ldquo;</span>
            <div>
              <p className="text-[15px] leading-[1.7] text-ink">{project.testimonial.quote}</p>
              <p className="mt-4 text-[13.5px]">
                <span className="font-medium text-ink">{project.testimonial.name}</span>
                <span className="text-muted"> — {project.testimonial.role}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
