import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.25),_rgba(99,102,241,0)_40%),_radial-gradient(circle_at_70%_30%,_rgba(236,72,153,0.15),_rgba(236,72,153,0)_35%),_radial-gradient(circle_at_30%_70%,_rgba(14,165,233,0.15),_rgba(14,165,233,0)_35%)]" />
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
          AI Voice Agent for modern businesses
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
          Never miss a call again.
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          Blovi answers, understands intent, books appointments, and routes calls 24/7.
          A premium AI receptionist that feels human and scales effortlessly.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 font-medium hover:shadow-lg transition">
            Launch dashboard
            <ArrowRight size={16} />
          </Link>
          <a href="/test" className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/20 transition">
            Test backend
          </a>
        </div>
      </div>
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-slate-950 via-indigo-950/60 to-slate-950" />
    </section>
  )
}
