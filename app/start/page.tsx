import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import Reveal from '@/components/Reveal'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Start a Project',
  description: 'Tell me what you’re building and I’ll get back to you within one to two business days.',
}

const NEXT_STEPS = [
  { n: '01', text: 'Your inquiry is reviewed within one business day' },
  { n: '02', text: 'A 30–45 minute discovery call is scheduled' },
  { n: '03', text: 'You receive a custom proposal with fixed pricing' },
]

export default function StartPage() {
  return (
    <main className="bg-soft-white">
      <PageHero
        image="/studio-office-desk.webp"
        objectPosition="45% 55%"
        minHeight="42vh"
        eyebrow="Start a Project"
        title="Let’s build something."
        description="Tell me about your project. I’ll get back to you within one business day."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-5 md:grid-cols-[1fr_1.5fr] md:gap-20 md:px-8">
          <Reveal>
            <div className="space-y-5">
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-muted">What happens next</p>
              {NEXT_STEPS.map((s) => (
                <div key={s.n} className="flex items-start gap-4">
                  <span className="font-display text-[14px] text-muted">{s.n}</span>
                  <p className="text-[15px] leading-snug text-muted">{s.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-border-neutral pt-8">
              <p className="text-[13px] text-muted">Prefer email directly?</p>
              <a
                href="mailto:admin@zarembkasoftware.com"
                className="text-[15px] font-medium text-ink transition-colors duration-200 hover:text-cobalt"
              >
                admin@zarembkasoftware.com
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card-surface rounded-2xl p-6 md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
