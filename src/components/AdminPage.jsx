export default function AdminPage() {
  const cards = [
    { label: 'Active clients', value: 42 },
    { label: 'Total calls (30d)', value: '58,201' },
    { label: 'Bookings (30d)', value: '4,392' },
    { label: 'MRR', value: '$28,450' },
  ]
  return (
    <div className="min-h-[60vh] py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-2xl font-semibold">Admin</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((c) => (
            <div key={c.label} className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur p-5 text-white">
              <div className="text-3xl font-semibold">{c.value}</div>
              <div className="mt-1 text-sm text-white/70">{c.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-white/10 border border-white/10 backdrop-blur p-6 text-white">
          <div className="text-white/80 text-sm">Clients</div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl bg-white/5 p-4">
                <div className="text-white/90">Acme Co. #{i + 1}</div>
                <div className="text-white/60 text-sm">Plan: Pro · Calls: {1000 + i * 42}/mo</div>
                <div className="mt-2 text-white/70 text-xs">Notes: Custom AI prompt active, setup fee paid.</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
