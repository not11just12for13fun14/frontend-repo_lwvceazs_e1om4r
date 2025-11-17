import { useState } from 'react'

export default function SettingsPage() {
  const [form, setForm] = useState({
    businessName: 'Acme Clinic',
    hours: 'Mon–Fri 9am–6pm',
    bookingRules: '30 min slots, 24h notice',
    faq: 'Do you accept new patients? Yes.',
    instructions: 'Be friendly, concise, always offer to book.',
    routing: 'Sales -> John, Support -> Team',
    notifications: true,
  })

  return (
    <div className="min-h-[60vh] py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-2xl font-semibold">Settings</h2>
        <div className="mt-6 space-y-4">
          {[
            { key: 'businessName', label: 'Business name', type: 'text' },
            { key: 'hours', label: 'Opening hours', type: 'text' },
            { key: 'bookingRules', label: 'Booking rules', type: 'text' },
            { key: 'faq', label: 'FAQ answers', type: 'textarea' },
            { key: 'instructions', label: 'AI instructions', type: 'textarea' },
            { key: 'routing', label: 'Departments / routing', type: 'text' },
          ].map((f) => (
            <div key={f.key} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
              <label className="text-sm text-white/70">{f.label}</label>
              {f.type === 'textarea' ? (
                <textarea
                  value={form[f.key]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="mt-1 w-full rounded-xl bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/30"
                  rows={4}
                />
              ) : (
                <input
                  value={form[f.key]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="mt-1 w-full rounded-xl bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/30"
                />
              )}
            </div>
          ))}

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 flex items-center justify-between">
            <div>
              <div className="text-sm text-white/70">Notification settings</div>
              <div className="text-white/90 text-sm">Email alerts for new calls, bookings, and missed calls</div>
            </div>
            <button
              onClick={() => setForm({ ...form, notifications: !form.notifications })}
              className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${form.notifications ? 'bg-emerald-400/20 text-emerald-200' : 'bg-white/10 text-white/70'}`}
            >
              {form.notifications ? 'Enabled' : 'Disabled'}
            </button>
          </div>

          <div className="flex justify-end">
            <button className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-2.5 font-medium hover:shadow-lg">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}
