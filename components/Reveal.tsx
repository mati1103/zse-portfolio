'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  /**
   * Above-the-fold content (hero headings, etc.) shouldn't depend on
   * IntersectionObserver ever firing — if a client-side route transition
   * ever races the browser's scroll/layout settling, `whileInView` with
   * `once: true` can miss its one check and leave the element stuck at
   * opacity 0 forever. Guaranteed-visible content should just animate
   * in on mount instead.
   */
  immediate?: boolean
}

export default function Reveal({ children, delay = 0, className, immediate = false }: RevealProps) {
  const shown = { opacity: 1, y: 0 }
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={immediate ? shown : undefined}
      whileInView={immediate ? undefined : shown}
      viewport={immediate ? undefined : { once: true, amount: 0, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.35, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
