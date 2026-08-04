import Link from 'next/link'

const LINKS = [
  { href: '/studio',       label: 'Studio' },
  { href: '/web-design',   label: 'Web Design' },
  { href: '/applications', label: 'Applications' },
  { href: '/process',      label: 'Process' },
  { href: '/work',         label: 'Work' },
  { href: '/start',        label: 'Start a Project' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-light">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <p className="font-display text-[20px]">Zarembka Software Engineering</p>
            <p className="mt-3 text-[14px] leading-relaxed text-warm-light/60">
              Small by design. A studio that builds one project at a time.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 md:flex md:gap-10">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[14px] text-warm-light/70 transition-colors duration-200 hover:text-warm-light"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="text-[14px] text-warm-light/70">
            <a
              href="mailto:admin@zarembkasoftware.com"
              className="transition-colors duration-200 hover:text-warm-light"
            >
              admin@zarembkasoftware.com
            </a>
            <p className="mt-2 text-warm-light/40">Remote · United States</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 text-[12px] text-warm-light/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Zarembka Software Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
