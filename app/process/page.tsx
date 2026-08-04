import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import PageHero from '@/components/PageHero'
import CinematicCTA from '@/components/CinematicCTA'
import ProcessExperience from '@/components/ProcessExperience'

export const metadata: Metadata = {
  title: 'Process',
  description: 'How a project moves from first inquiry to launch and ongoing support — ten steps, fixed pricing, no surprises.',
}

export default function ProcessPage() {
  return (
    <main>
      <PageHero
        image="/studio-project-cta.webp"
        objectPosition="35% 55%"
        eyebrow="Process"
        title="Ten steps. Fixed pricing. No surprises."
        description="Every project follows the same structure, whether it’s a five-page site or a full application. Scope and price are agreed before development begins, and stay fixed once they are."
      />

      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <p className="mb-8 max-w-lg text-[15px] leading-relaxed text-muted">
              Click through each stage below, or use the arrow keys.
            </p>
            <ProcessExperience />
          </Reveal>
        </div>
      </section>

      <CinematicCTA
        eyebrow="Process"
        headline="Ready to start the first step?"
        body="A short inquiry is all it takes to get a discovery call on the calendar."
        secondary={{ label: 'About the studio', href: '/studio' }}
      />
    </main>
  )
}
