'use client'

import { useEffect, useState } from 'react'
import HUDNav from '@/components/HUDNav'
import HomeView from '@/components/views/HomeView'
import AboutView from '@/components/views/AboutView'
import ProcessView from '@/components/views/ProcessView'
import PricingView from '@/components/views/PricingView'
import PortfolioView from '@/components/views/PortfolioView'
import ContactView from '@/components/views/ContactView'

export type View = 'home' | 'process' | 'pricing' | 'portfolio' | 'contact' | 'about'

const SECTION_ORDER: View[] = ['home', 'process', 'pricing', 'portfolio', 'contact', 'about']

export default function Page() {
  const [activeView, setActiveView] = useState<View>('home')

  const navigateTo = (view: View) => {
    document.getElementById(view)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Scroll-spy: highlights the nav pill for whichever section currently
  // occupies the vertical center of the viewport, instead of a click-driven
  // state swap now that every section lives on one continuously scrolling page.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (mostVisible) setActiveView(mostVisible.target.id as View)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    SECTION_ORDER.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative w-full bg-base">

      {/* ── Animated gradient orbs — fixed so they stay put as the page scrolls ── */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Top-left violet orb */}
        <div className="absolute -top-48 -left-24 h-[600px] w-[600px] rounded-full bg-accent-violet/[0.18] blur-[130px] animate-drift" />
        {/* Top-right blue orb */}
        <div className="absolute -top-20 -right-20 h-[480px] w-[480px] rounded-full bg-accent-blue/[0.14] blur-[110px] animate-drift-alt" />
        {/* Bottom-center pink orb */}
        <div className="absolute -bottom-20 left-1/3 h-[420px] w-[420px] rounded-full bg-accent-pink/[0.10] blur-[110px] animate-float-slow" />
        {/* Mid-right floating violet accent */}
        <div className="absolute top-1/2 right-1/4 h-[280px] w-[280px] rounded-full bg-accent-violet/[0.08] blur-[80px] animate-float" />
      </div>

      {/* ── Subtle dot grid ── */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── Nav ── */}
      <HUDNav activeView={activeView} onNavigate={navigateTo} />

      {/* ── Content — every section stacked on one scrollable page ── */}
      <main className="relative w-full">
        <HomeView      onNavigate={navigateTo} />
        <ProcessView   onNavigate={navigateTo} />
        <PricingView   onNavigate={navigateTo} />
        <PortfolioView />
        <ContactView />
        <AboutView     onNavigate={navigateTo} />
      </main>
    </div>
  )
}
