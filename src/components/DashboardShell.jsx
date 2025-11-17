import { useEffect, useState } from 'react'
import { Phone, Calendar, MessageSquareText, Activity } from 'lucide-react'

export default function DashboardShell() {
  const [metrics, setMetrics] = useState({ callsToday: 0, answered: 0, missed: 0, bookings: 0, score: 0 })

  useEffect(() => {
    // Placeholder static data; wire to backend later
    setMetrics({ callsToday: 128, answered: 117, missed: 11, bookings: 23, score: 92 })
  }, [])

  const cards = [
    { icon: Phone, label: 'Calls today', value: metrics.callsToday },
    { icon: Activity, label: 'Answered', value: metrics.answered },
    { icon: MessageSquareText, label: 'Missed', value: metrics.missed },
    { icon: Calendar, label: 'Bookings', value: metrics.bookings },
  ]

  return (
    <div className="min-h-[60vh] py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-2xl font-semibold">Overview</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((c) => (
            <div key={c.label} className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur p-5 text-white">
              <div className="flex items-center gap-3">
                <c.icon size={18} className="text-white/80" />
                <span className="text-white/70 text-sm">{c.label}</span>
              </div>
              <div className="mt-3 text-3xl font-semibold">{c.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 rounded-2xl bg-white/10 border border-white/10 backdrop-blur p-6 text-white min-h-[220px]">
            <div className="text-white/80 text-sm">Recent transcripts</div>
            <div className="mt-3 space-y-3 text-sm text-white/70">
              <div className="rounded-xl bg-white/5 p-3">Caller: Jane Doe · "Hi, I need to reschedule my appointment for Friday..."</div>
              <div className="rounded-xl bg-white/5 p-3">Caller: +1 555-123-4567 · "Do you have availability for next Tuesday afternoon?"</div>
              <div className="rounded-xl bg-white/5 p-3">Caller: Tom R. · "How much is the initial consultation fee?"</div>
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur p-6 text-white">
            <div className="text-white/80 text-sm">AI performance</div>
            <div className="mt-3">
              <div className="text-5xl font-semibold">{metrics.score}<span className="text-xl align-top">/100</span></div>
              <div className="mt-2 text-white/60 text-sm">Response quality based on intent detection, resolution, and CSAT signals.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
