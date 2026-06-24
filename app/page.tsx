'use client'

import { useState } from 'react'
import HUDNav from '@/components/HUDNav'
import HomeView from '@/components/views/HomeView'
import AboutView from '@/components/views/AboutView'
import ProcessView from '@/components/views/ProcessView'
import PricingView from '@/components/views/PricingView'
import PortfolioView from '@/components/views/PortfolioView'
import ContactView from '@/components/views/ContactView'

export type View = 'home' | 'process' | 'pricing' | 'portfolio' | 'contact' | 'about'

export default function Page() {
  const [activeView, setActiveView] = useState<View>('home')

  const navigateTo = (view: View) => {
    setActiveView(view)
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-base">

      {/* ── Animated gradient orbs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
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
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── Nav ── */}
      <HUDNav activeView={activeView} onNavigate={navigateTo} />

      {/* ── Content ── */}
      <main className="relative h-full w-full overflow-hidden">
        <div className="absolute inset-0 pt-16 overflow-hidden">
            {activeView === 'home'      && <HomeView      onNavigate={navigateTo} />}
            {activeView === 'process'   && <ProcessView   onNavigate={navigateTo} />}
            {activeView === 'pricing'   && <PricingView   onNavigate={navigateTo} />}
            {activeView === 'portfolio' && <PortfolioView />}
            {activeView === 'contact'   && <ContactView />}
            {activeView === 'about'     && <AboutView onNavigate={navigateTo} />}
          </div>
      </main>
    </div>
  )
}
