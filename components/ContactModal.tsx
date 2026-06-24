'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle, Loader2 } from 'lucide-react'

interface ContactModalProps {
  tier?: string
  onClose: () => void
}

const TIMELINES = ['ASAP', '1–3 months', '3–6 months', 'Flexible']

const INPUT_CLASS =
  'w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-3.5 py-2.5 text-[13px] text-text-primary placeholder:text-text-muted outline-none focus:border-accent-violet/50 focus:ring-1 focus:ring-accent-violet/30 transition-all duration-200'

export default function ContactModal({ tier, onClose }: ContactModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: tier ?? 'Marketing Website',
    description: '',
    timeline: 'Flexible',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong')
      setStatus('success')
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
      setStatus('error')
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full max-w-lg rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(15,15,20,0.95)',
            border: '1px solid rgba(139,92,246,0.25)',
            boxShadow: '0 0 60px rgba(139,92,246,0.15), 0 24px 60px rgba(0,0,0,0.6)',
          }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent-violet to-accent-blue" />

          <div className="p-6">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-8 text-center"
              >
                <CheckCircle className="h-12 w-12 text-emerald-400" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-bold text-text-primary">Inquiry sent!</h3>
                  <p className="mt-1.5 text-[13px] text-text-secondary">
                    I'll review your project and get back to you within 1–2 business days.
                  </p>
                </div>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-blue px-6 py-2.5 text-[13px] font-semibold text-white"
                  style={{ boxShadow: '0 0 24px rgba(139,92,246,0.4)' }}
                >
                  Close
                </motion.button>
              </motion.div>
            ) : (
              <>
                <div className="mb-5 flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">Get a Quote</h3>
                    <p className="text-[12px] text-text-muted">
                      Fill out the form and I'll get back to you within 1–2 business days.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="rounded-lg p-1.5 text-text-muted hover:text-text-primary hover:bg-white/[0.06] transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <form onSubmit={submit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                        Name <span className="text-accent-violet">*</span>
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={set('name')}
                        placeholder="Jane Smith"
                        className={INPUT_CLASS}
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                        Email <span className="text-accent-violet">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={set('email')}
                        placeholder="jane@company.com"
                        className={INPUT_CLASS}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                      Company / Business
                    </label>
                    <input
                      value={form.company}
                      onChange={set('company')}
                      placeholder="Optional"
                      className={INPUT_CLASS}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                        Service
                      </label>
                      <select value={form.service} onChange={set('service')} className={INPUT_CLASS}>
                        <option value="Marketing Website">Marketing Website</option>
                        <option value="Web Application">Web Application</option>
                        <option value="Maintenance Plan">Maintenance Plan</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                        Timeline
                      </label>
                      <select value={form.timeline} onChange={set('timeline')} className={INPUT_CLASS}>
                        {TIMELINES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                      Project Description <span className="text-accent-violet">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.description}
                      onChange={set('description')}
                      placeholder="Tell me about your project — what you need built, any existing systems to integrate with, and any specific requirements..."
                      className={`${INPUT_CLASS} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-[12px] text-red-400">{errorMsg}</p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-accent-violet to-accent-blue py-3 text-[13px] font-semibold text-white disabled:opacity-60"
                    style={{ boxShadow: '0 0 28px rgba(139,92,246,0.45)' }}
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    {status === 'loading' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5" strokeWidth={2} />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
