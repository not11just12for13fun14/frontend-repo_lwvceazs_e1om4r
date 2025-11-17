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
      {/* Premium ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* deep radial base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-20%,rgba(120,120,255,0.35)_0%,rgba(15,23,42,0.1)_40%,rgba(2,6,23,1)_85%)]" />

        {/* soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_120%,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0)_60%)]" />

        {/* subtle grid lines with mask for depth */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.12) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* animated glow sweep */}
        <motion.div
          initial={{ x: '-20%' }}
          animate={{ x: '120%' }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-0 h-24 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl"
        />

        {/* color orbs (very soft) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.45, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="absolute -bottom-24 -left-24 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-cyan-400/25 via-indigo-500/20 to-fuchsia-500/20 blur-3xl"
        />

        {/* noise texture for material feel */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\' viewBox=\'0 0 800 600\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.35\'/></svg>")',
            backgroundSize: 'cover',
          }}
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
        <motion.section variants={stagger} initial="hidden" animate="show" className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Headline */}
            <div className="lg:col-span-7">
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl font-semibold tracking-tight">
                The AI voice agent that answers every call
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg text-white/70">
                Blovi handles your phone line with human-quality conversations, captures details, and books appointments—instantly and reliably, 24/7.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="group inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow/50 shadow-black/20 transition hover:shadow-black/40">
                  Get a demo
                  <ArrowRight className="ml-2 h-4 w-4 transition -translate-x-0.5 group-hover:translate-x-0" />
                </a>
                <a href="#about" className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur transition hover:bg-white/10">Learn more</a>
              </motion.div>
              {/* quick highlights */}
              <motion.ul variants={fadeUp} className="mt-8 grid max-w-xl grid-cols-1 gap-2 text-sm text-white/70 sm:grid-cols-3">
                {[
                  { icon: Clock, label: 'Picks up in under a second' },
                  { icon: Brain, label: 'Understands intent' },
                  { icon: Calendar, label: 'Books for you' },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
                    <Icon className="h-4 w-4 text-indigo-300" /> {label}
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Visual */}
            <div className="lg:col-span-5">
              <motion.div
                variants={fadeUp}
                className="relative overflow-hidden rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur"
              >
                {/* faux interface */}
                <div className="flex items-center justify-between text-xs text-white/60">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-400/80" />
                    Live call
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-white/10 px-2 py-0.5">00:23</span>
                    <Shield className="h-3.5 w-3.5 text-white/50" />
                  </div>
                </div>
                <div className="mt-4 rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                  <div className="text-sm text-white/80">Blovi</div>
                  <p className="mt-1 text-sm text-white/65">Hi—how can I help you today?</p>
                </div>
                <div className="mt-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <div className="text-sm text-white/80">Caller</div>
                  <p className="mt-1 text-sm text-white/70">I’d like to book an appointment next Tuesday around noon.</p>
                </div>
                <div className="mt-3 rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                  <div className="text-sm text-white/80">Blovi</div>
                  <p className="mt-1 text-sm text-white/65">Great—can I have your name and phone number to confirm?</p>
                </div>

                {/* reflective sheen */}
                <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-1/2 -rotate-6 bg-gradient-to-r from-white/10 to-transparent blur-2xl" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* About / What Blovi Is */}
        <motion.section id="about" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          <motion.h2 variants={fadeUp} className="text-2xl font-semibold">What is Blovi?</motion.h2>
          <motion.p variants={fadeUp} className="mt-3 max-w-3xl text-white/70">
            Blovi is an AI voice receptionist for modern businesses. It answers every call instantly, speaks naturally, understands what people need, collects the right details, and schedules appointments—all without putting anyone on hold.
          </motion.p>
        </motion.section>

        {/* Core Capabilities */}
        <motion.section id="capabilities" className="mt-14" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          <motion.h2 variants={fadeUp} className="text-2xl font-semibold">Core capabilities</motion.h2>
          <motion.ul variants={stagger} className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: PhoneCall, title: 'Instant pickup', desc: 'No voicemails. No missed calls.' },
              { icon: Brain, title: 'Natural conversations', desc: 'Understands context and intent.' },
              { icon: Calendar, title: 'Scheduling', desc: 'Books and confirms in your calendar.' },
              { icon: Shield, title: 'Reliable', desc: 'Consistent quality, 24/7 availability.' },
              { icon: Zap, title: 'Fast + accurate', desc: 'Optimized for speed and clarity.' },
              { icon: Waves, title: 'Human-like voice', desc: 'Polished, friendly and on-brand.' },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.li variants={fadeUp} key={title} className="group rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/[0.1]">
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

        {/* What Makes Blovi Different */}
        <motion.section id="different" className="mt-14" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          <motion.h2 variants={fadeUp} className="text-2xl font-semibold">Why teams choose Blovi</motion.h2>
          <motion.div variants={stagger} className="mt-6 grid gap-5 sm:grid-cols-2">
            {[
              { title: 'Lightning fast', desc: 'Immediate response creates a premium experience.' },
              { title: 'Feels human', desc: 'Warm tone with smart timing, clarifications and empathy.' },
              { title: 'High accuracy', desc: 'Understands messy inputs and confirms key details.' },
              { title: 'Works across industries', desc: 'Clinics, restaurants, salons, services and more.' },
            ].map(({ title, desc }) => (
              <motion.div variants={fadeUp} key={title} className="rounded-2xl bg-gradient-to-br from-white/10 to-white/0 p-6 ring-1 ring-white/10 backdrop-blur">
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

        {/* Contact / CTA */}
        <motion.section id="contact" className="mt-16" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
          <motion.div variants={fadeUp} className="relative overflow-hidden rounded-3xl bg-white/[0.06] p-8 text-center ring-1 ring-white/10 backdrop-blur">
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
            {/* sheen */}
            <div className="pointer-events-none absolute -left-16 -top-8 h-48 w-2/3 -rotate-6 bg-gradient-to-r from-white/10 to-transparent blur-2xl" />
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
