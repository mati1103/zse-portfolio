'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Loader2, Mail } from 'lucide-react'

const NEXT_STEPS = [
  { num: '01', text: 'We review your inquiry within 1 business day' },
  { num: '02', text: 'Schedule a 30–45 min discovery call' },
  { num: '03', text: 'Receive a custom proposal with fixed pricing' },
]

const TIMELINES = ['ASAP', '1–3 months', '3–6 months', 'Flexible']

const INPUT_CLASS =
  'w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-[15px] text-text-primary placeholder:text-text-muted outline-none focus:border-accent-violet/50 focus:ring-1 focus:ring-accent-violet/30 transition-all duration-200'

const LABEL_CLASS = 'mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-text-muted'

export default function ContactView() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    service: 'Marketing Website', description: '', timeline: 'Flexible',
  })
  const [status,   setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set = (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res  = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong')
      setStatus('success')
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center gap-5 text-center"
        >
          <div
            className="flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-500/10"
            style={{ border: '1px solid rgba(52,211,153,0.3)', boxShadow: '0 0 40px rgba(52,211,153,0.2)' }}
          >
            <CheckCircle className="h-9 w-9 text-emerald-400" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Inquiry sent!</h2>
            <p className="mt-2 max-w-xs text-[13px] text-text-secondary">
              I'll review your project and get back to you within 1–2 business days.
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden px-6 pb-6">
      <div className="grid w-full max-w-6xl grid-cols-[1fr_1.6fr] gap-12">
        {/* ── Left: info panel ── */}
        <div className="flex flex-col justify-center gap-7">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-text-muted">
              Get Started
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-text-primary lg:text-5xl">
              Let's build{' '}
              <span className="gradient-text">something.</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">
              Tell us about your project. We'll get back to you within one business day.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
              What happens next
            </p>
            {NEXT_STEPS.map((s) => (
              <div key={s.num} className="flex items-start gap-3">
                <span
                  className="mt-0.5 shrink-0 text-[13px] font-black"
                  style={{ background: 'linear-gradient(135deg,#8b5cf6,#3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {s.num}
                </span>
                <p className="text-[14px] leading-snug text-text-secondary">{s.text}</p>
              </div>
            ))}
          </div>

          <div
            className="flex items-center gap-3 rounded-xl p-4"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <Mail className="h-5 w-5 shrink-0 text-text-muted" strokeWidth={1.5} />
            <div>
              <p className="text-[11px] text-text-muted">Prefer email directly?</p>
              <a
                href="mailto:admin@zarembkasoftware.com"
                className="text-[14px] font-semibold text-text-primary hover:text-accent-violet-light transition-colors duration-200"
              >
                admin@zarembkasoftware.com
              </a>
            </div>
          </div>
        </div>

        {/* ── Right: form ── */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border:     '1px solid rgba(139,92,246,0.2)',
            boxShadow:  '0 0 40px rgba(139,92,246,0.07)',
          }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent-violet to-accent-blue rounded-t-2xl" style={{ position: 'relative', marginBottom: '20px', height: '1px', background: 'linear-gradient(to right, #8b5cf6, #3b82f6)' }} />

          <form onSubmit={submit} className="space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={LABEL_CLASS}>
                  Name <span className="text-accent-violet">*</span>
                </label>
                <input required value={form.name} onChange={set('name')} placeholder="Jane Smith" className={INPUT_CLASS} />
              </div>
              <div>
                <label className={LABEL_CLASS}>
                  Email <span className="text-accent-violet">*</span>
                </label>
                <input required type="email" value={form.email} onChange={set('email')} placeholder="jane@company.com" className={INPUT_CLASS} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={LABEL_CLASS}>
                  Phone <span className="text-accent-violet">*</span>
                </label>
                <input required type="tel" value={form.phone} onChange={set('phone')} placeholder="(555) 000-0000" className={INPUT_CLASS} />
              </div>
              <div>
                <label className={LABEL_CLASS}>
                  Company / Business <span className="text-accent-violet">*</span>
                </label>
                <input required value={form.company} onChange={set('company')} placeholder="Acme Inc." className={INPUT_CLASS} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={LABEL_CLASS}>Service</label>
                <select value={form.service} onChange={set('service')} className={INPUT_CLASS}>
                  <option value="Marketing Website">Marketing Website</option>
                  <option value="Web Application">Web Application</option>
                  <option value="Maintenance Plan">Maintenance Plan</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className={LABEL_CLASS}>Timeline</label>
                <select value={form.timeline} onChange={set('timeline')} className={INPUT_CLASS}>
                  {TIMELINES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className={LABEL_CLASS}>
                Project Description <span className="text-accent-violet">*</span>
              </label>
              <textarea
                required
                rows={5}
                value={form.description}
                onChange={set('description')}
                placeholder="Tell me about your project — what you need built, any existing systems, and specific requirements..."
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
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-accent-violet to-accent-blue py-4 text-[15px] font-semibold text-white disabled:opacity-60"
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
        </div>
      </div>
    </div>
  )
}
