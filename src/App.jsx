import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, Clock, Brain, Calendar, Shield, Zap, Waves, X } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.73, 0.35, 1] } },
}

const stagger = { show: { transition: { staggerChildren: 0.08 } } }

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState('demo') // 'demo' | 'email'
  const [submitting, setSubmitting] = useState(false)
  const [toast, setToast] = useState(null)
  const [cardIndex, setCardIndex] = useState(0)
  const [apiBase, setApiBase] = useState(null)

  // Build robust backend candidates to avoid "Network issue" when env isn't set
  const API_CANDIDATES = useMemo(() => {
    const list = []
    const env = import.meta.env.VITE_BACKEND_URL
    if (env) list.push(String(env).replace(/\/$/, ''))
    try {
      const u = new URL(window.location.href)
      // Dev: swap 3000 -> 8000
      if (u.port === '3000') list.push(`${u.protocol}//${u.hostname}:8000`)
      // Fallback same origin (if a reverse proxy is configured in prod)
      list.push(`${u.protocol}//${u.host}`)
    } catch {}
    return Array.from(new Set(list))
  }, [])

  useEffect(() => {
    let cancelled = false
    async function detect() {
      // Ping each candidate /test and cache the first that responds
      for (const base of API_CANDIDATES) {
        try {
          const controller = new AbortController()
          const timeout = setTimeout(() => controller.abort(), 3500)
          const r = await fetch(`${base}/test`, { signal: controller.signal })
          clearTimeout(timeout)
          if (r.ok) {
            if (!cancelled) setApiBase(base)
            console.info('[API] Using backend at', base)
            return
          }
        } catch (_) {
          // try next
        }
      }
      console.warn('[API] No backend detected from candidates:', API_CANDIDATES)
    }
    detect()
    return () => { cancelled = true }
  }, [API_CANDIDATES])

  function openModal(type = 'demo') {
    setModalType(type)
    setModalOpen(true)
  }

  // Cycle the feature card every ~8s
  const cards = useMemo(
    () => [
      {
        title: 'Live Call',
        lines: [
          { who: 'Blovi', msg: 'Hi—how can I help you today?' },
          { who: 'Caller', msg: 'I need to book an appointment next Tuesday around noon.' },
          { who: 'Blovi', msg: 'Absolutely. May I have your name and phone number to confirm?' },
        ],
      },
      {
        title: 'Smart Intake',
        lines: [
          { who: 'Caller', msg: 'My name is Sam, I prefer mornings.' },
          { who: 'Blovi', msg: 'Thanks Sam. Morning slots are open—shall I book 9:30am?' },
          { who: 'Caller', msg: 'Perfect.' },
        ],
      },
      {
        title: 'Instant Scheduling',
        lines: [
          { who: 'Blovi', msg: 'I’ve reserved Tuesday 9:30am. You’ll receive a confirmation by text.' },
          { who: 'Caller', msg: 'Got it, thanks!' },
        ],
      },
    ],
    []
  )

  useEffect(() => {
    const t = setInterval(() => setCardIndex((i) => (i + 1) % cards.length), 8000)
    return () => clearInterval(t)
  }, [cards.length])

  async function postEmail(payload) {
    let lastError
    const bases = apiBase ? [apiBase, ...API_CANDIDATES.filter((b) => b !== apiBase)] : API_CANDIDATES
    for (const base of bases) {
      try {
        const res = await fetch(`${base}/contact/email`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (res.ok) return { ok: true }
        lastError = new Error(`HTTP ${res.status}`)
      } catch (e) {
        lastError = e
        continue
      }
    }
    throw lastError || new Error('Network')
  }

  async function submitForm(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name') || undefined,
      company: form.get('company') || undefined,
      email: form.get('email') || undefined,
      phone: form.get('phone') || undefined,
      message: form.get('message') || undefined,
      source: modalType === 'demo' ? 'request-demo' : 'send-email',
    }
    try {
      setSubmitting(true)
      await postEmail(payload)
      setModalOpen(false)
      setToast({
        type: 'success',
        message: modalType === 'demo' ? 'Thanks! We received your demo request.' : 'Thanks! Your message has been sent.'
      })
      e.currentTarget.reset()
    } catch (err) {
      setToast({ type: 'error', message: 'Network issue—please try again.' })
    } finally {
      setSubmitting(false)
      setTimeout(() => setToast(null), 3500)
    }
  }

  // Optional quick email helper (unused by buttons but kept available)
  async function sendQuickEmail() {
    try {
      setSubmitting(true)
      await postEmail({ source: 'quick-email' })
      setToast({ type: 'success', message: 'Thanks! Your email has been sent.' })
    } catch (e) {
      setToast({ type: 'error', message: 'Network issue—please try again.' })
    } finally {
      setSubmitting(false)
      setTimeout(() => setToast(null), 3500)
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f7fb] text-slate-900 antialiased selection:bg-violet-500/20 selection:text-slate-900">
      {/* Ambient background with lilac gradient + subtle glass depth */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f7fb] via-[#f3f0ff] to-[#eef0ff]" />
        <div className="absolute inset-0 opacity-80 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)] bg-[radial-gradient(80%_60%_at_30%_0%,rgba(139,92,246,0.18)_0%,rgba(139,92,246,0)_60%)]" />
        <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_bottom_right,black,transparent_70%)] bg-[radial-gradient(60%_50%_at_85%_90%,rgba(168,85,247,0.14)_0%,rgba(168,85,247,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_120%,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0)_60%)]" />
        <motion.div
          initial={{ x: '-20%' }}
          animate={{ x: '120%' }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-0 h-20 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-2xl"
        />
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(2,6,23,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,6,23,.08) 1px, transparent 1px)",
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* Logo only at top-left */}
      <div className="fixed left-6 top-6 z-20 select-none">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-indigo-500 shadow-xl ring-1 ring-black/5">
          <svg viewBox="0 0 32 32" className="h-6 w-6 text-white" fill="currentColor" aria-hidden>
            <path d="M10 6h8a6 6 0 1 1 0 12h-8V6zm0 12h9a5 5 0 1 1 0 10h-9V18z" />
          </svg>
        </div>
      </div>

      {/* Wide layout with generous spacing */}
      <main className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-40 pb-44">
        {/* Hero */}
        <motion.section variants={stagger} initial="hidden" animate="show" className="relative text-center">
          {/* Professional, deep purple heading with more pronounced glass effect */}
          <motion.h1
            variants={fadeUp}
            className="mx-auto max-w-5xl text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight"
          >
            <span className="relative inline-block">
              <span className="text-violet-900">
                The AI voice agent that answers every call
              </span>
              {/* Glass layers: soft blur + subtle ring + highlight streak */}
              <span className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-white/15 backdrop-blur-md ring-1 ring-white/40" />
              <span className="pointer-events-none absolute inset-x-8 -top-3 -z-10 h-10 rounded-full bg-white/40 blur-2xl opacity-50" />
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-3xl text-lg text-slate-700">
            Human-quality conversations, instant pickup, and seamless scheduling—24/7.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => openModal('demo')}
              className="group inline-flex items-center rounded-full bg-slate-900 text-white px-7 py-3 text-sm font-medium shadow/50 shadow-black/10 transition hover:shadow-black/20"
            >
              Request demo
              <ArrowRight className="ml-2 h-4 w-4 transition -translate-x-0.5 group-hover:translate-x-0" />
            </button>
            <button
              onClick={() => openModal('email')}
              disabled={submitting}
              className="inline-flex items-center rounded-full border border-slate-300/80 bg-white/80 px-7 py-3 text-sm text-slate-800 backdrop-blur transition hover:bg-white disabled:opacity-60"
            >
              Send us an email
            </button>
          </motion.div>
        </motion.section>

        {/* Feature Box beneath heading */}
        <section className="relative mx-auto mt-16 max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-white/70 p-6 ring-1 ring-slate-200/80 shadow-sm backdrop-blur">
            <div className="flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500/90" />
                {cards[cardIndex].title}
              </div>
              <span className="rounded-full bg-slate-100 px-2 py-0.5">Live</span>
            </div>
            <div className="relative mt-4 min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cardIndex}
                  initial={{ opacity: 0, y: 12, rotateX: -8 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -12, rotateX: 8 }}
                  transition={{ duration: 0.5, ease: [0.22, 0.72, 0, 1] }}
                  className="space-y-3"
                >
                  {cards[cardIndex].lines.map((l, i) => (
                    <div key={i} className={
                      (l.who === 'Blovi'
                        ? 'rounded-2xl bg-slate-50 ring-slate-200'
                        : 'rounded-2xl bg-white ring-slate-200') +
                      ' p-4 ring-1'
                    }>
                      <div className="text-sm font-medium text-slate-800">{l.who}</div>
                      <p className="mt-1 text-sm text-slate-700">{l.msg}</p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="pointer-events-none absolute -left-16 -top-10 h-48 w-2/3 -rotate-6 bg-gradient-to-r from-white/80 to-transparent blur-2xl" />
          </div>
        </section>

        {/* Restored: What is Blovi? */}
        <motion.section id="about" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="mt-28">
          <motion.h2 variants={fadeUp} className="text-center text-3xl font-semibold">
            <span className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">What is Blovi?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-4xl text-center text-slate-700 text-lg">
            An AI voice receptionist for modern businesses. It answers instantly, speaks naturally, understands intent, collects the right details, and schedules—without putting anyone on hold.
          </motion.p>
        </motion.section>

        {/* Restored: Core capabilities */}
        <motion.section id="capabilities" className="mt-24" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          <motion.h2 variants={fadeUp} className="text-center text-3xl font-semibold">
            <span className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">Core capabilities</span>
          </motion.h2>
          <motion.ul variants={stagger} className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Clock, title: 'Instant pickup', desc: 'No voicemails. No missed calls.' },
              { icon: Brain, title: 'Understands intent', desc: 'Natural, context-aware conversation.' },
              { icon: Calendar, title: 'Scheduling', desc: 'Books and confirms in your calendar.' },
              { icon: Shield, title: 'Reliable', desc: 'Consistent quality, 24/7 availability.' },
              { icon: Zap, title: 'Fast + accurate', desc: 'Optimized for speed and clarity.' },
              { icon: Waves, title: 'On-brand voice', desc: 'Friendly, polished and consistent.' },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.li variants={fadeUp} key={title} className="group rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200 backdrop-blur transition hover:shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg bg-violet-50 p-2 text-violet-600 ring-1 ring-violet-100">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm text-slate-700">{desc}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Restored: Why teams choose Blovi */}
        <motion.section id="different" className="mt-24" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          <motion.h2 variants={fadeUp} className="text-center text-3xl font-semibold">
            <span className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">Why teams choose Blovi</span>
          </motion.h2>
          <motion.div variants={stagger} className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { title: 'Lightning fast', desc: 'Immediate response creates a premium experience.' },
              { title: 'Feels human', desc: 'Warm tone with smart timing and clarifications.' },
              { title: 'High accuracy', desc: 'Understands messy inputs and confirms key details.' },
              { title: 'Works across industries', desc: 'Clinics, restaurants, salons, services and more.' },
            ].map(({ title, desc }) => (
              <motion.div variants={fadeUp} key={title} className="rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200 backdrop-blur">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-violet-600" />
                  <div>
                    <h3 className="font-medium text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm text-slate-700">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Restored: Contact / CTA */}
        <motion.section id="contact" className="mt-28" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          <motion.div variants={fadeUp} className="relative overflow-hidden rounded-3xl bg-white/80 p-12 text-center ring-1 ring-slate-200 shadow-sm backdrop-blur">
            <h3 className="text-2xl font-semibold bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">Let’s talk</h3>
            <p className="mx-auto mt-3 max-w-2xl text-slate-700">Ready to automate your phone line with a human-quality agent?</p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button onClick={() => openModal('email')} disabled={submitting} className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow/50 shadow-black/10 transition hover:shadow-black/20 disabled:opacity-60">
                Send us an email
              </button>
              <button onClick={() => openModal('demo')} className="inline-flex items-center rounded-full border border-slate-300/80 bg-white/80 px-6 py-3 text-sm text-slate-800 backdrop-blur transition hover:bg-white">
                Request a demo
              </button>
            </div>
            <div className="pointer-events-none absolute -left-16 -top-8 h-48 w-2/3 -rotate-6 bg-gradient-to-r from-white to-transparent blur-2xl" />
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="pb-16">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-500">
          Blovi © 2025. All rights reserved.
        </div>
      </footer>

      {/* Unified Modal for Demo + Email */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center p-4">
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
            <motion.div initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }} transition={{ type: 'spring', stiffness: 260, damping: 24 }} className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <h4 className="font-semibold text-slate-900">{modalType === 'demo' ? 'Request a demo' : 'Send us an email'}</h4>
                <button onClick={() => setModalOpen(false)} className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100"><X className="h-5 w-5" /></button>
              </div>
              <form onSubmit={submitForm} className="px-5 py-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label className="text-xs font-medium text-slate-700">Name</label>
                    <input name="name" className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/30" placeholder="Jane Doe" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-xs font-medium text-slate-700">Company</label>
                    <input name="company" className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/30" placeholder="Acme Inc." />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-xs font-medium text-slate-700">Email</label>
                    <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/30" placeholder="jane@company.com" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-xs font-medium text-slate-700">Phone number</label>
                    <input name="phone" className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/30" placeholder="(555) 123-4567" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-medium text-slate-700">Short message</label>
                    <textarea name="message" rows={4} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/30" placeholder={modalType === 'demo' ? 'What would you like to see in the demo?' : 'How can we help?'} />
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-end gap-3 border-t border-slate-200 pt-4">
                  <button type="button" onClick={() => setModalOpen(false)} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Cancel</button>
                  <button type="submit" disabled={submitting} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-60">{submitting ? 'Sending…' : modalType === 'demo' ? 'Send request' : 'Send message'}</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }} className={`fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full px-4 py-2 text-sm shadow-lg ring-1 ${toast.type === 'success' ? 'bg-white text-slate-800 ring-slate-200' : 'bg-rose-600 text-white ring-rose-500/20'}`}>
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
