import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import Reveal from '@/components/Reveal'
import PageHero from '@/components/PageHero'
import CinematicCTA from '@/components/CinematicCTA'

export const metadata: Metadata = {
  title: 'Studio',
  description:
    'Zarembka Software Engineering is a small, independent studio. One project at a time, direct collaboration, and no templates.',
}

const SECTIONS = [
  {
    label: 'Who we are',
    title: 'A studio of one, working like a partner.',
    body: [
      'Zarembka Software Engineering is a small, deliberate software studio specializing in modern, high-performance websites and web applications — from marketing sites to full-stack platforms backed by live databases.',
      'It doesn’t operate like a large agency juggling dozens of accounts. It works like a dedicated partner: every project gets full attention, not a slice of it, across industries from restaurants and fitness studios to e-commerce and professional services.',
    ],
  },
  {
    label: 'Why intentionally small',
    title: 'One project at a time. Yours is the only one.',
    body: [
      'Not two projects. Not three. One. While you’re a client, your project has complete focus — no juggling, no back-burner delays, no waiting behind someone else’s deadline.',
      'A new project doesn’t start until the current client is genuinely satisfied with what’s been built. That constraint is what keeps the work good.',
    ],
  },
  {
    label: 'Why you work directly with me',
    title: 'No account managers. No handoffs.',
    body: [
      'There’s no layer between the conversation about what you need and the person writing the code. Every decision — design, architecture, scope — is made by the same person you talk to on day one.',
      'That means fewer meetings, faster answers, and a build that reflects what you actually said, not a summary of it passed down a chain.',
    ],
  },
  {
    label: 'How projects are approached',
    title: 'Hand-coded, properly deployed, connected from day one.',
    body: [
      'Every project starts with scoping together — your brand, your users, the features that matter — then gets hand-coded with modern tooling that keeps it fast, maintainable, and built to last.',
      'When a project needs a live database — bookings, accounts, product listings — it’s wired to a real backend, deployed to production infrastructure, and connected to your domain and email from the start.',
    ],
  },
]

export default function StudioPage() {
  return (
    <main>
      <PageHero
        image="/studio-work-gallery.webp"
        objectPosition="60% 45%"
        eyebrow="Studio"
        title="Small by design, not by accident."
        description="Zarembka Software Engineering exists because most studios grow past the point where the person you spoke to on the first call is still the person building your project. This one stays deliberately small so that never happens."
      />

      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[340px_1fr] md:gap-16">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-sm md:mx-0">
                <Image
                  src="/matias-zarembka.png"
                  alt="Matias Zarembka, founder of Zarembka Software Engineering"
                  fill
                  sizes="(min-width: 768px) 340px, 320px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-muted">
                  About Me
                </p>
                <h2 className="mt-4 font-display text-[28px] leading-[1.25] text-ink md:text-[36px]">
                  Matias Zarembka
                </h2>
                <div className="mt-5 space-y-4">
                  <p className="text-[16px] leading-[1.8] text-muted">
                    I&rsquo;m currently a sophomore at the University of Maryland, pursuing a
                    degree in Finance with a minor in Economics. Alongside my studies, I&rsquo;ve
                    spent countless hours learning and building — websites, applications,
                    trading bots, and trading algorithms among them — turning that curiosity
                    into a genuine command of the craft.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-muted">
                    That work became Zarembka Software Engineering LLC, a studio I founded and
                    run myself. Every project I take on gets my full attention, and I&rsquo;m
                    focused on growing a client base built on the same standard: thoughtful,
                    hand-built software and a direct line to the person building it.
                  </p>
                </div>
                <Link
                  href="https://www.linkedin.com/in/matiaszarembka/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-ink transition-colors duration-200 hover:text-cobalt"
                >
                  <Linkedin className="h-4 w-4" strokeWidth={1.75} />
                  Connect on LinkedIn
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-soft-white">
        <div className="mx-auto max-w-4xl divide-y divide-border-neutral px-5 md:px-8">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-6 py-16 md:grid-cols-[220px_1fr] md:gap-16 md:py-20">
                <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-muted">
                  {s.label}
                </p>
                <div>
                  <h2 className="font-display text-[26px] leading-[1.25] text-ink md:text-[32px]">
                    {s.title}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {s.body.map((p, j) => (
                      <p key={j} className="text-[16px] leading-[1.8] text-muted">{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CinematicCTA
        eyebrow="Studio"
        headline="If that sounds like how you’d rather work, let’s talk."
        body="No account managers, no handoffs — just a direct conversation about what you’re building."
        secondary={{ label: 'Learn the process', href: '/process' }}
      />
    </main>
  )
}
