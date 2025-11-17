import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Sparkles, PhoneCall, Calendar, Shield, Zap, Brain, Waves, ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.73, 0.35, 1] } },
}

const stagger = { show: { transition: { staggerChildren: 0.08 } } }

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased selection:bg-indigo-500/30 selection:text-white">
      {/* Ambient background: gradient, grid, animated orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* soft radial gradient top */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(99,102,241,0.35)_0%,rgba(15,23,42,0.0)_60%)]" />
        {/* grid lines */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08] [mask-image:radial-gradient(ellipse_at_center,black,transparent_60%)]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.12) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        {/* animated color blobs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="absolute -bottom-24 -left-24 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-cyan-400/25 via-indigo-500/20 to-fuchsia-500/20 blur-3xl"
        />
      </div>

      {/* Brand mark */}
      <div className="fixed left-5 top-5 z-20 select-none">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-400 shadow-lg ring-1 ring-white/20">
            <span className="font-semibold text-white">B</span>
          </div>
          <span className="text-white/80 font-medium tracking-tight">Blovi</span>
        </div>
      </div>

      {/* Page container */}
      <main className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 pt-28 pb-24">
        {/* Hero */}
        <motion.section variants={stagger} initial="hidden" animate="show" className="text-center">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-indigo-300" />
            Minimal. Modern. Effortless.
          </motion.div>
          <motion.h1 variants={fadeUp} className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight">
            Blovi
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-3 text-lg sm:text-xl text-white/70">
            Your AI Voice Agent
          </motion.p>

          <motion.div variants={fadeUp} className="mx-auto mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="group inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow/50 shadow-black/20 transition hover:shadow-black/40">
              Get a demo
              <ArrowRight className="ml-2 h-4 w-4 transition -translate-x-0.5 group-hover:translate-x-0" />
            </a>
            <a href="#how" className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur transition hover:bg-white/10">How it works</a>
          </motion.div>

          {/* quick highlights */}
          <motion.ul variants={fadeUp} className="mx-auto mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3 text-sm text-white/70">
            {[
              { icon: Clock, label: 'Answers in <1s' },
              { icon: Brain, label: 'Understands intent' },
              { icon: Calendar, label: 'Books for you' },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
                <Icon className="h-4 w-4 text-indigo-300" /> {label}
              </li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* 1. What Blovi Is */}
        <motion.section id="what" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          <motion.h2 variants={fadeUp} className="text-2xl font-semibold">What Blovi Is</motion.h2>
          <motion.p variants={fadeUp} className="mt-3 max-w-3xl text-white/70">
            Blovi is an AI voice receptionist that answers every call, holds natural conversations, captures details, and books appointments. Always on. Always consistent.
          </motion.p>
        </motion.section>

        {/* 2. Core Capabilities */}
        <motion.section id="capabilities" className="mt-12" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          <motion.h2 variants={fadeUp} className="text-2xl font-semibold">Core Capabilities</motion.h2>
          <motion.ul variants={stagger} className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: PhoneCall, title: 'Instant pickup', desc: 'Every call answered in under a second.' },
              { icon: Brain, title: 'Natural conversations', desc: 'Understands context and intent.' },
              { icon: Calendar, title: 'Scheduling', desc: 'Books and confirms directly in your calendar.' },
              { icon: Shield, title: 'Reliable', desc: 'Consistent quality, no sick days.' },
              { icon: Zap, title: 'Fast + accurate', desc: 'Optimized for response speed and clarity.' },
              { icon: Waves, title: 'Human-like voice', desc: 'Polished, friendly tone that feels real.' },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.li variants={fadeUp} key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/[0.08] hover:border-white/20">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg bg-white/10 p-2 text-indigo-200 ring-1 ring-white/10">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="mt-1 text-sm text-white/70">{desc}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* 3. What Makes Blovi Different */}
        <motion.section id="different" className="mt-12" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          <motion.h2 variants={fadeUp} className="text-2xl font-semibold">What Makes Blovi Different</motion.h2>
          <motion.div variants={stagger} className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Lightning fast', desc: 'Immediate response creates a premium experience.' },
              { title: 'Feels human', desc: 'Warm, natural tone with smart interruptions and pacing.' },
              { title: 'High accuracy', desc: 'Understands messy inputs and clarifies when needed.' },
              { title: 'Any industry', desc: 'Clinics, restaurants, salons, services, and more.' },
            ].map(({ title, desc }) => (
              <motion.div variants={fadeUp} key={title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5 backdrop-blur">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-300" />
                  <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="mt-1 text-sm text-white/70">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 4. Use Cases */}
        <motion.section id="use-cases" className="mt-12" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          <motion.h2 variants={fadeUp} className="text-2xl font-semibold">Use Cases</motion.h2>
          <motion.div variants={stagger} className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {['Clinics', 'Beauty & wellness', 'Restaurants', 'Service businesses', 'Gyms / physio', 'Auto repair'].map((item) => (
              <motion.div variants={fadeUp} key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80 backdrop-blur">
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 5. How Blovi Works */}
        <motion.section id="how" className="mt-12" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          <motion.h2 variants={fadeUp} className="text-2xl font-semibold">How Blovi Works</motion.h2>
          <motion.p variants={fadeUp} className="mt-3 max-w-3xl text-white/70">
            Caller → Blovi answers → Understands → Responds → Books/Collects → Sends to your team.
          </motion.p>
          <motion.div variants={stagger} className="mt-6 grid grid-cols-6 items-center gap-2 text-xs text-white/70">
            {['Caller', 'Answers', 'Understands', 'Responds', 'Books / Collects', 'Business'].map((step, i) => (
              <motion.div
                variants={fadeUp}
                key={step}
                className={`rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center ${i === 0 || i === 5 ? 'text-white/80' : ''}`}
              >
                {step}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 6. Contact / CTA */}
        <motion.section id="contact" className="mt-16" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
            <h3 className="text-xl font-semibold">Let’s talk</h3>
            <p className="mx-auto mt-2 max-w-2xl text-white/70">Ready to automate your phone line with a human-quality agent?</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="mailto:hello@blovi.ai" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow/50 shadow-black/20 transition hover:shadow-black/40">
                Email us
              </a>
              <a href="#" className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur transition hover:bg-white/10">
                Book a demo
              </a>
            </div>
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="pb-10">
        <div className="mx-auto max-w-6xl px-5 text-center text-sm text-white/60">
          Blovi © 2025. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
