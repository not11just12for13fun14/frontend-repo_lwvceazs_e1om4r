export default function CalendarPage() {
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
  const now = new Date()
  return (
    <div className="min-h-[60vh] py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-2xl font-semibold">Booking calendar</h2>
        <div className="mt-6 grid grid-cols-7 gap-2">
          {days.map((d) => (
            <div key={d} className="text-center text-white/60 text-sm">{d}</div>
          ))}
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-3 text-white/80 text-xs">
              <div className="flex justify-between">
                <span>{i + 1}</span>
                {i + 1 === now.getDate() && <span className="text-[10px] text-emerald-300">today</span>}
              </div>
              <div className="mt-2 space-y-1">
                {i % 7 === 1 && (
                  <div className="rounded-lg bg-emerald-400/20 text-emerald-100 px-2 py-1">Dental checkup · 2:00p</div>
                )}
                {i % 9 === 2 && (
                  <div className="rounded-lg bg-indigo-400/20 text-indigo-100 px-2 py-1">Repair consult · 11:30a</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
