import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/Reveal'

interface CtaLink {
  label: string
  href: string
}

interface CinematicCTAProps {
  image?: string
  objectPosition?: string
  eyebrow?: string
  headline?: string
  body?: string
  primary?: CtaLink
  secondary?: CtaLink
}

export default function CinematicCTA({
  image = '/studio-project-cta.webp',
  objectPosition = '35% 60%',
  eyebrow = 'Start a Project',
  headline = 'Have something worth building?',
  body = 'Tell me what you’re working on, what needs to be improved, and what a successful result would look like.',
  primary = { label: 'Start a project', href: '/start' },
  secondary = { label: 'View the process', href: '/process' },
}: CinematicCTAProps) {
  return (
    <section className="relative flex min-h-[70vh] w-full items-center overflow-hidden bg-charcoal md:min-h-[85vh]">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        loading="lazy"
        className="animate-kenburns object-cover motion-reduce:animate-none"
        style={{ objectPosition }}
      />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            'linear-gradient(to right, rgba(23,24,23,0.85) 0%, rgba(23,24,23,0.55) 45%, rgba(23,24,23,0.25) 70%, rgba(23,24,23,0.15) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{ background: 'linear-gradient(to top, rgba(23,24,23,0.5) 0%, transparent 40%)' }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24 md:px-8">
        <Reveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-warm-light/65">
            {eyebrow}
          </p>
          <h2 className="mt-5 max-w-xl font-display text-[36px] leading-[1.15] text-warm-light md:text-[54px]">
            {headline}
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-warm-light/75">
            {body}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={primary.href}
              className="shimmer-sweep rounded-full bg-cobalt px-8 py-3.5 text-center text-[15px] font-medium text-white transition-colors duration-300 hover:bg-cobalt-hover"
            >
              {primary.label}
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="group flex items-center justify-center gap-2 rounded-full border border-warm-light/35 px-7 py-3.5 text-[15px] font-medium text-warm-light transition-colors duration-300 hover:border-warm-light hover:bg-white/5"
              >
                {secondary.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
