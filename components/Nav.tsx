'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { href: '/studio',       label: 'Studio' },
  { href: '/redesign',     label: 'Redesign' },
  { href: '/web-design',   label: 'Web Design' },
  { href: '/applications', label: 'Applications' },
  { href: '/process',      label: 'Process' },
  { href: '/work',         label: 'Portfolio' },
]

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  // Snaps the header to the new route's steady state instantly, so the
  // scroll-fade transition only ever plays for actual scrolling — not for
  // the leftover style from whichever page we just navigated away from.
  const [skipTransition, setSkipTransition] = useState(true)

  useEffect(() => {
    setSkipTransition(true)
    if (!isHome) {
      setScrolled(false)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const frame = requestAnimationFrame(() => setSkipTransition(false))
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [pathname, isHome])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const solid = !isHome || scrolled
  const light = isHome && !scrolled

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${skipTransition ? '' : 'transition-colors duration-500 ease-calm'} ${
        solid ? 'bg-soft-white/90 backdrop-blur-md border-b border-border-neutral' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8 lg:py-6">
        <Link
          href="/"
          className={`font-display text-[21px] leading-none tracking-tight ${skipTransition ? '' : 'transition-colors duration-500'} ${
            light ? 'text-warm-light' : 'text-ink'
          }`}
        >
          <span className="sm:hidden">ZSE</span>
          <span className="hidden sm:inline">Zarembka</span>
          <span className={`ml-2.5 hidden text-[11px] font-sans font-medium uppercase tracking-[0.18em] sm:inline ${
            light ? 'text-warm-light/75' : 'text-muted'
          }`}>
            Software Engineering
          </span>
        </Link>

        <nav className="hidden items-center gap-10 xl:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-[15.5px] font-[550] ${skipTransition ? '' : 'transition-colors duration-300'} ${
                  light
                    ? 'text-warm-light/85 hover:text-warm-light'
                    : active
                      ? 'text-ink'
                      : 'text-muted hover:text-ink'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-[2px] rounded-full ${skipTransition ? '' : 'transition-all duration-300'} ${
                    active
                      ? light ? 'bg-warm-light opacity-100' : 'bg-cobalt opacity-100'
                      : 'opacity-0'
                  }`}
                />
              </Link>
            )
          })}
          <Link
            href="/start"
            className={`rounded-full px-6 py-2.5 text-[15px] font-[550] ${skipTransition ? '' : 'transition-all duration-300'} ${
              light
                ? 'bg-warm-light text-ink hover:bg-white'
                : 'bg-cobalt text-white hover:bg-cobalt-hover'
            }`}
          >
            Start a Project
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center xl:hidden"
        >
          {mobileOpen
            ? <X className={`h-5 w-5 ${light && !mobileOpen ? 'text-warm-light' : 'text-ink'}`} strokeWidth={1.75} />
            : <Menu className={`h-5 w-5 ${light ? 'text-warm-light' : 'text-ink'}`} strokeWidth={1.75} />
          }
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-border-neutral bg-soft-white px-5 pb-6 pt-2 xl:hidden"
          >
            <div className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-border-neutral py-3.5 text-[16px] font-medium text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/start"
                className="mt-5 rounded-full bg-cobalt px-5 py-3 text-center text-[15px] font-medium text-white"
              >
                Start a Project
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
