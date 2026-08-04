'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Maximize2, X } from 'lucide-react'
import Reveal from '@/components/Reveal'
import type { Preview } from '@/lib/projects'

export default function ProductVisuals({ previews }: { previews: Preview[] }) {
  const [active, setActive] = useState<Preview | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {previews.map((preview, i) => (
          <Reveal key={preview.title} delay={i * 0.06}>
            <div className="overflow-hidden rounded-2xl border border-border-neutral">
              <button
                type="button"
                onClick={() => setActive(preview)}
                aria-label={`Enlarge ${preview.title} screenshot`}
                className="group relative block h-[360px] w-full cursor-zoom-in bg-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt"
              >
                <Image
                  src={preview.src}
                  alt={preview.alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  loading="lazy"
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-200 group-hover:bg-ink/10">
                  <span className="flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1.5 text-[11px] font-medium text-warm-light opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <Maximize2 className="h-3 w-3" strokeWidth={2} />
                    Enlarge
                  </span>
                </span>
              </button>
              <div className="border-t border-border-neutral p-5">
                <p className="text-[14px] font-medium text-ink">{preview.title}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">{preview.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 md:p-10"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-full max-w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close enlarged screenshot"
                className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-warm-light transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt"
              >
                <X className="h-4 w-4" strokeWidth={2} />
              </button>
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[85vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
              />
              <p className="mt-3 text-center text-[13px] text-warm-light/70">{active.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
