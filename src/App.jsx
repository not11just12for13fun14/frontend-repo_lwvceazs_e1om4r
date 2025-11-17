export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      {/* Subtle background gradient and shapes */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(99,102,241,0.25)_0%,rgba(99,102,241,0)_60%)]" />
        <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-500/25 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-400/20 via-indigo-500/20 to-fuchsia-500/20 blur-3xl" />
      </div>

      {/* Minimal brand mark in the top-left (no bar) */}
      <div className="fixed left-4 top-4 z-20 select-none">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-400 shadow-lg ring-1 ring-white/20">
            <span className="font-semibold text-white">B</span>
          </div>
          <span className="text-white/80 font-medium tracking-tight">Blovi</span>
        </div>
      </div>

      {/* Page container */}
      <main className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 pt-28 pb-24">
        {/* Hero */}
        <section className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            Minimal. Modern. Effortless.
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight">Blovi</h1>
          <p className="mt-3 text-lg sm:text-xl text-white/70">Your AI Voice Agent</p>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            A refined, human-like voice agent that answers instantly, understands intent, collects details, and
            books appointments around the clock—so you never miss an important call.
          </p>
        </section>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* 1. What Blovi Is */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. What Blovi Is</h2>
          <p className="text-white/70">
            Blovi is an AI voice agent that answers calls 24/7. It understands what callers need, responds naturally,
            books appointments, and forwards the right information to your team—ensuring your business is always
            responsive and professional.
          </p>
        </section>

        {/* 2. Core Capabilities */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">2. Core Capabilities</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              'Understanding caller intent',
              'Natural conversations',
              'Instant answering',
              'Collecting info',
              'Seamless booking',
              'Acts as a receptionist for clinics, restaurants, salons, etc.',
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 backdrop-blur"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 3. What Makes Blovi Different */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">3. What Makes Blovi Different</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              'Lightning-fast response time',
              'Human-like voice',
              'High accuracy',
              'Industry flexibility',
              'Runs 24/7 without breaks',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4 text-white/80 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* 4. Use Cases */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">4. Use Cases</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Clinics',
              'Beauty & wellness',
              'Restaurants',
              'Service businesses',
              'Gyms and physiotherapists',
              'Auto repair and more',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* 5. How Blovi Works */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">5. How Blovi Works</h2>
          <p className="mt-4 text-white/70">
            Caller → Blovi answers → Understands → Responds → Books/Collects info → Sends to the business.
          </p>
          <div className="mt-6 grid grid-cols-6 items-center gap-2 text-xs text-white/60">
            {['Caller', 'Answers', 'Understands', 'Responds', 'Books / Collects', 'Business'].map((step, i) => (
              <div
                key={step}
                className={`rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center ${
                  i === 0 || i === 5 ? 'text-white/80' : ''
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        </section>

        {/* 6. Contact / CTA */}
        <section className="mt-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
            <h3 className="text-xl font-semibold">6. Contact</h3>
            <p className="mx-auto mt-3 max-w-2xl text-white/70">
              For more information or custom integration, please reach out.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pb-10">
        <div className="mx-auto max-w-5xl px-5 text-center text-sm text-white/60">
          Blovi © 2025. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
