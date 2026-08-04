import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/Reveal'
import ProjectPanel from '@/components/ProjectPanel'
import { PROJECTS } from '@/lib/projects'

const project = PROJECTS[0]

export default function FeaturedProjectShowcase() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
            Selected Work
          </p>
          <h2 className="mt-4 max-w-xl font-display text-[32px] leading-[1.2] text-ink md:text-[44px]">
            Software built around the way a business actually works.
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-muted">
            From customer-facing websites to complete operational platforms, every
            project is designed around a real business, its users, and its workflows.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <ProjectPanel
              project={project}
              summaryOverride="A complete training and business platform connecting athletes, coaches, scheduling, payments, communication, and operational reporting."
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-ink transition-colors duration-200 hover:text-cobalt"
            >
              View the complete Work page
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
