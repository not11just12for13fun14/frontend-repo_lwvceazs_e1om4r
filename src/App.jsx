import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Clock, Sparkles, PhoneCall, Calendar, Shield, Zap, Brain, Waves, ArrowRight, X } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.73, 0.35, 1] } },
}

const stagger = { show: { transition: { staggerChildren: 0.08 } } }

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [toast, setToast] = useState(null)

  const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

  async function sendQuickEmail() {
    try {
      setSubmitting(true)
      const res = await fetch(`${API_BASE}/contact/email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'quick-email' })
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data?.detail || 'Failed to send')
      setToast({ type: 'success', message: 'Thanks! Your email has been sent. We will get back to you shortly.' })
    } catch (e) {
      setToast({ type: 'error', message: 'Could not send right now. Please try again in a moment.' })
    } finally {
      setSubmitting(false)
      setTimeout(() => setToast(null), 3500)
    }
  }

  async function submitDemoForm(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name') || undefined,
      company: form.get('company') || undefined,
      email: form.get('email') || undefined,
      phone: form.get('phone') || undefined,
      message: form.get('message') || undefined,
      source: 'request-demo'
    }
    try {
      setSubmitting(true)
      const res = await fetch(`${API_BASE}/contact/email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data?.detail || 'Failed to submit')
      setDemoOpen(false)
      setToast({ type: 'success', message: 'Thanks! We received your request and will reach out soon.' })
      e.currentTarget.reset()
    } catch (err) {
      setToast({ type: 'error', message: 'Submission failed. Please try again.' })
    } finally {
      setSubmitting(false)
      setTimeout(() => setToast(null), 3500)
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-violet-500/20 selection:text-slate-900">
      {/* Premium light ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* white base */}
        <div className="absolute inset-0 bg-white" />
        {/* subtle soft gradient washes */}
        <div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] bg-[radial-gradient(80%_60%_at_30%_0%,rgba(139,92,246,0.18)_0%,rgba(139,92,246,0)_60%)]" />
        <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_bottom_right,black,transparent_70%)] bg-[radial-gradient(60%_50%_at_85%_90%,rgba(168,85,247,0.15)_0%,rgba(168,85,247,0)_60%)]" />
        {/* soft vignette for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_120%,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0)_60%)]" />
        {/* subtle grid texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(2,6,23,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,6,23,.08) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        {/* animated light sweep */}
        <motion.div
          initial={{ x: '-20%' }}
          animate={{ x: '120%' }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-0 h-24 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent blur-2xl"
        />
        {/* faint color orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-violet-300/30 via-fuchsia-300/20 to-indigo-300/20 blur-3xl"
        />
        {/* noise for material feel */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\' viewBox=\'0 0 800 600\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.35\'/></svg>")',
            backgroundSize: 'cover',
          }}
        />
      </div>

      {/* Brand mark: redesigned single B */}
      <div className="fixed left-5 top-5 z-20 select-none">
        <div className="flex items-center gap-2.5">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-indigo-400 shadow-xl ring-1 ring-black/5">
            <span className="font-semibold text-white tracking-tight">B</span>
          </div>
        </div>
      </div>

      {/* Page container with generous spacing */}
      <main className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 pt-32 pb-40">
        {/* Hero */}
        <motion.section variants={stagger} initial="hidden" animate="show" className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            {/* Headline */}
            <div className="lg:col-span-7">
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
                The AI voice agent that answers every call
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-slate-600">
                Blovi handles your phone line with human-quality conversations, captures details, and books appointments—instantly and reliably, 24/7.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => setDemoOpen(true)} className="group inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow/50 shadow-black/10 transition hover:shadow-black/20">
                  Request demo
                  <ArrowRight className="ml-2 h-4 w-4 transition -translate-x-0.5 group-hover:translate-x-0" />
                </button>
                <a href="#about" className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm text-slate-700 backdrop-blur transition hover:bg-white">
                  Learn more
                </a>
              </motion.div>
              {/* quick highlights */}
              <motion.ul variants={fadeUp} className="mt-10 grid max-w-xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-3">
                {[
                  { icon: Clock, label: 'Fast and reliable call pick-ups, every time.' },
                  { icon: Brain, label: 'Understands intent' },
                  { icon: Calendar, label: 'Books for you' },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2 ring-1 ring-slate-200">
                    <Icon className="h-4 w-4 text-violet-500" /> {label}
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Visual */}
            <div className="lg:col-span-5">
              <motion.div
                variants={fadeUp}
                className="relative overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm"
              >
                {/* faux interface */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500/90" />
                    Live call
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-slate-100 px-2 py-0.5">00:23</span>
                    <Shield className="h-3.5 w-3.5 text-slate-400" />
                  </div>
                </div>
                <div className="mt-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <div className="text-sm text-slate-800">Blovi</div>
                  <p className="mt-1 text-sm text-slate-600">Hi—how can I help you today?</p>
                </div>
                <div className="mt-3 rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                  <div className="text-sm text-slate-800">Caller</div>
                  <p className="mt-1 text-sm text-slate-700">I’d like to book an appointment next Tuesday around noon.</p>
                </div>
                <div className="mt-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <div className="text-sm text-slate-800">Blovi</div>
                  <p className="mt-1 text-sm text-slate-600">Great—can I have your name and phone number to confirm?</p>
                </div>

                {/* reflective sheen */}
                <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-1/2 -rotate-6 bg-gradient-to-r from-white/70 to-transparent blur-2xl" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="my-20 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* About / What Blovi Is */}
        <motion.section id="about" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          <motion.h2 variants={fadeUp} className="text-2xl font-semibold text-slate-900">What is Blovi?</motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-slate-600">
            Blovi is an AI voice receptionist for modern businesses. It answers every call instantly, speaks naturally, understands what people need, collects the right details, and schedules appointments—all without putting anyone on hold.
          </motion.p>
        </motion.section>

        {/* Core Capabilities */}
        <motion.section id="capabilities" className="mt-20" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          <motion.h2 variants={fadeUp} className="text-2xl font-semibold text-slate-900">Core capabilities</motion.h2>
          <motion.ul variants={stagger} className="mt-8 grid gap-6 sm:grid-cols=2 lg:grid-cols-3 sm:grid-cols-2">
            {[
              { icon: PhoneCall, title: 'Instant pickup', desc: 'No voicemails. No missed calls.' },
              { icon: Brain, title: 'Natural conversations', desc: 'Understands context and intent.' },
              { icon: Calendar, title: 'Scheduling', desc: 'Books and confirms in your calendar.' },
              { icon: Shield, title: 'Reliable', desc: 'Consistent quality, 24/7 availability.' },
              { icon: Zap, title: 'Fast + accurate', desc: 'Optimized for speed and clarity.' },
              { icon: Waves, title: 'Human-like voice', desc: 'Polished, friendly and on-brand.' },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.li variants={fadeUp} key={title} className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg bg-violet-50 p-2 text-violet-600 ring-1 ring-violet-100">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{desc}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Why teams choose Blovi */}
        <motion.section id="different" className="mt-20" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          <motion.h2 variants={fadeUp} className="text-2xl font-semibold text-slate-900">Why teams choose Blovi</motion.h2>
          <motion.div variants={stagger} className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Lightning fast', desc: 'Immediate response creates a premium experience.' },
              { title: 'Feels human', desc: 'Warm tone with smart timing, clarifications and empathy.' },
              { title: 'High accuracy', desc: 'Understands messy inputs and confirms key details.' },
              { title: 'Works across industries', desc: 'Clinics, restaurants, salons, services and more.' },
            ].map(({ title, desc }) => (
              <motion.div variants={fadeUp} key={title} className="rounded-2xl bg-gradient-to-br from-white to-white p-6 ring-1 ring-slate-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-violet-600" />
                  <div>
                    <h3 className="font-medium text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact / CTA */}
        <motion.section id="contact" className="mt-24" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          <motion.div variants={fadeUp} className="relative overflow-hidden rounded-3xl bg-white p-10 text-center ring-1 ring-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Let’s talk</h3>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">Ready to automate your phone line with a human-quality agent?</p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button onClick={sendQuickEmail} disabled={submitting} className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow/50 shadow-black/10 transition hover:shadow-black/20 disabled:opacity-60">
                {submitting ? 'Sending…' : 'Send us an email'}
              </button>
              <button onClick={() => setDemoOpen(true)} className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm text-slate-700 backdrop-blur transition hover:bg-white">
                Request a demo
              </button>
            </div>
            {/* sheen */}
            <div className="pointer-events-none absolute -left-16 -top-8 h-48 w-2/3 -rotate-6 bg-gradient-to-r from-white to-transparent blur-2xl" />
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="pb-14">
        <div className="mx-auto max-w-6xl px-5 text-center text-sm text-slate-500">
          Blovi © 2025. All rights reserved.
        </div>
      </footer>

      {/* Demo Modal */}
      <AnimatePresence>
        {demoOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center p-4">
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setDemoOpen(false)} />
            <motion.div initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }} transition={{ type: 'spring', stiffness: 260, damping: 24 }} className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <h4 className="font-semibold text-slate-900">Request a demo</h4>
                <button onClick={() => setDemoOpen(false)} className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100"><X className="h-5 w-5" /></button>
              </div>
              <form onSubmit={submitDemoForm} className="px-5 py-5">
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
                    <textarea name="message" rows={4} className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/30" placeholder="What would you like to achieve with Blovi?" />
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-end gap-3 border-t border-slate-200 pt-4">
                  <button type="button" onClick={() => setDemoOpen(false)} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Cancel</button>
                  <button type="submit" disabled={submitting} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-60">{submitting ? 'Sending…' : 'Send request'}</button>
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
