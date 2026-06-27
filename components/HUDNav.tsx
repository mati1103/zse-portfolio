'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import type { View } from '@/app/page'

interface NavProps {
  activeView: View
  onNavigate: (view: View) => void
}

const NAV_ITEMS: { id: View; label: string }[] = [
  { id: 'home',      label: 'Home'      },
  { id: 'process',   label: 'Process'   },
  { id: 'pricing',   label: 'Pricing'   },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact',   label: 'Contact'   },
]

export default function HUDNav({ activeView, onNavigate }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navigate = (view: View) => {
    onNavigate(view)
    setMobileOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">

      {/* ── Brand – top left ── */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed flex items-center pointer-events-auto" style={{ top: '-28px', left: '12px' }}
      >
        <div className="flex flex-col items-center">
          <img
            src="/Adobe Express - file-Picsart-BackgroundRemover-2.png"
            alt="ZSE"
            className="h-20 w-20 md:h-36 md:w-36 object-contain"
            style={{ filter: 'drop-shadow(0 0 24px rgba(139,92,246,0.9)) drop-shadow(0 0 48px rgba(99,102,241,0.5))' }}
          />
          <p className="text-[9px] md:text-[10px] font-semibold tracking-[0.14em] gradient-text uppercase -mt-7 md:-mt-12">Zarembka Software Eng.</p>
        </div>
      </motion.div>

      {/* ── Desktop: Navigation pills – screen center ── */}
      <div className="hidden md:flex fixed inset-x-0 top-4 justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="pointer-events-auto"
        >
          <nav className="flex items-center gap-0.5 rounded-xl glass-strong px-1 py-1 shadow-xl shadow-black/30">
            {NAV_ITEMS.map((item) => {
              const isActive = activeView === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className={`relative rounded-lg px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-violet to-accent-blue"
                      style={{ boxShadow: '0 0 20px rgba(139,92,246,0.45), 0 4px 15px rgba(59,130,246,0.2)' }}
                      transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </motion.div>
      </div>

      {/* ── Desktop: About Us – top right ── */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="hidden md:block fixed top-5 right-5 pointer-events-auto"
      >
        <button
          onClick={() => navigate('about')}
          className={`text-sm font-medium underline underline-offset-4 decoration-1 transition-colors duration-200 ${
            activeView === 'about'
              ? 'text-text-primary decoration-accent-violet'
              : 'text-text-muted decoration-white/20 hover:text-text-secondary hover:decoration-white/50'
          }`}
        >
          About Us
        </button>
      </motion.div>

      {/* ── Mobile: hamburger button ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => setMobileOpen(v => !v)}
        className="md:hidden fixed top-4 right-4 z-[60] pointer-events-auto flex h-10 w-10 items-center justify-center rounded-xl glass-strong"
      >
        {mobileOpen
          ? <X className="h-5 w-5 text-text-primary" strokeWidth={2} />
          : <Menu className="h-5 w-5 text-text-primary" strokeWidth={2} />
        }
      </motion.button>

      {/* ── Mobile: full-screen menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-50 pointer-events-auto"
            style={{ background: 'rgba(7,7,26,0.97)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
          >
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center h-full gap-3 px-8"
            >
              {[...NAV_ITEMS, { id: 'about' as View, label: 'About Us' }].map((item) => {
                const isActive = activeView === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.id)}
                    className={`w-full max-w-xs rounded-xl px-6 py-4 text-[17px] font-semibold text-center transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-accent-violet to-accent-blue text-white'
                        : 'glass text-text-secondary'
                    }`}
                    style={isActive ? { boxShadow: '0 0 24px rgba(139,92,246,0.4)' } : {}}
                  >
                    {item.label}
                  </button>
                )
              })}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  )
}
