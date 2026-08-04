'use client'

import { motion } from 'framer-motion'
import { Code2, Crosshair, DollarSign } from 'lucide-react'

const STATS = [
  { icon: Code2,     label: 'Zero Templates', desc: 'Every line hand-engineered from scratch' },
  { icon: Crosshair, label: 'One Project',    desc: '100% of our focus, dedicated to you' },
  { icon: DollarSign, label: 'Fixed Price',   desc: 'One number, locked, zero surprises' },
]

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {STATS.map(({ icon: Icon, label, desc }, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -3 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          className="card-surface rounded-2xl p-6 text-center"
        >
          <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cobalt/10">
            <Icon className="h-5 w-5 text-cobalt" strokeWidth={1.5} />
          </div>
          <p className="mb-1.5 text-[15px] font-medium text-ink">{label}</p>
          <p className="text-[13px] leading-relaxed text-muted">{desc}</p>
        </motion.div>
      ))}
    </div>
  )
}
