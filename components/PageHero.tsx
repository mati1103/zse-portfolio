import Image from 'next/image'
import type { ReactNode } from 'react'
import Reveal from '@/components/Reveal'

interface PageHeroProps {
  image: string
  objectPosition?: string
  eyebrow?: string
  title: string
  description: string
  minHeight?: string
  children?: ReactNode
}

export default function PageHero({
  image,
  objectPosition = '50% 50%',
  eyebrow,
  title,
  description,
  minHeight = '62vh',
  children,
}: PageHeroProps) {
  return (
    <section className="relative flex w-full items-end overflow-hidden bg-charcoal" style={{ minHeight }}>
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition }}
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

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-20">
        <Reveal>
          {children}
          {eyebrow && (
            <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.22em] text-warm-light/70">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-[36px] leading-[1.12] text-warm-light md:text-[54px]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-warm-light/75 md:text-[18px]">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
