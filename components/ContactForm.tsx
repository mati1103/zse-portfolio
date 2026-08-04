'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

const TIMELINES = ['ASAP', '1–3 months', '3–6 months', 'Flexible']

const INPUT_CLASS =
  'w-full border-b border-border-neutral bg-transparent py-3 text-[16px] text-ink placeholder:text-muted/60 outline-none transition-colors duration-200 focus:border-ink'

const LABEL_CLASS = 'mb-1.5 block text-[12px] font-medium uppercase tracking-[0.12em] text-muted'

export default function ContactForm() {
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
      <div className="flex flex-col items-start gap-4 py-10">
        <CheckCircle2 className="h-9 w-9 text-cobalt" strokeWidth={1.25} />
        <div>
          <h3 className="font-display text-2xl text-ink">Inquiry sent.</h3>
          <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-muted">
            I&rsquo;ll review your project and get back to you within one to two business days.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className={LABEL_CLASS}>Name *</label>
          <input required value={form.name} onChange={set('name')} placeholder="Jane Smith" className={INPUT_CLASS} />
        </div>
        <div>
          <label className={LABEL_CLASS}>Email *</label>
          <input required type="email" value={form.email} onChange={set('email')} placeholder="jane@company.com" className={INPUT_CLASS} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className={LABEL_CLASS}>Phone *</label>
          <input required type="tel" value={form.phone} onChange={set('phone')} placeholder="(555) 000-0000" className={INPUT_CLASS} />
        </div>
        <div>
          <label className={LABEL_CLASS}>Company / Business *</label>
          <input required value={form.company} onChange={set('company')} placeholder="Acme Inc." className={INPUT_CLASS} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
        <label className={LABEL_CLASS}>Project description *</label>
        <textarea
          required
          rows={4}
          value={form.description}
          onChange={set('description')}
          placeholder="What are you building — and what does success look like?"
          className={`${INPUT_CLASS} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-[13px] text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-ink py-4 text-[15px] font-medium text-warm-light transition-colors duration-300 hover:bg-cobalt disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <span>Send inquiry</span>}
      </button>
    </form>
  )
}
