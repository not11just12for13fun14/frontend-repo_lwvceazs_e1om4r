export default function Stats() {
  const stats = [
    { label: 'Total calls today', value: '128' },
    { label: 'Answered', value: '117' },
    { label: 'Missed', value: '11' },
    { label: 'Bookings', value: '23' },
  ]
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur p-5 text-white">
              <div className="text-3xl font-semibold">{s.value}</div>
              <div className="mt-1 text-sm text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
