import { PlayCircle, PhoneOff, PhoneIncoming, Clock3 } from 'lucide-react'

const calls = [
  { id: 1, name: 'Jane Doe', number: '+1 555-123-9876', time: '09:14', duration: '03:12', status: 'answered' },
  { id: 2, name: null, number: '+1 555-221-4455', time: '10:02', duration: '00:00', status: 'missed' },
  { id: 3, name: 'Tom R.', number: '+1 555-111-8899', time: '11:27', duration: '07:45', status: 'answered' },
  { id: 4, name: 'Clinic', number: '+1 555-990-3344', time: '12:08', duration: '02:04', status: 'escalated' },
]

export default function CallsPage() {
  return (
    <div className="min-h-[60vh] py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-2xl font-semibold">Call logs</h2>
        <div className="mt-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur overflow-hidden">
          <table className="min-w-full text-sm text-white/90">
            <thead className="bg-white/5 text-white/70">
              <tr>
                <th className="text-left px-4 py-3">Caller</th>
                <th className="text-left px-4 py-3">Number</th>
                <th className="text-left px-4 py-3">Time</th>
                <th className="text-left px-4 py-3">Duration</th>
                <th className="text-left px-4 py-3">Status</th>
                <th className="text-right px-4 py-3">Audio</th>
              </tr>
            </thead>
            <tbody>
              {calls.map((c) => (
                <tr key={c.id} className="border-t border-white/10">
                  <td className="px-4 py-3">{c.name || 'Unknown'}</td>
                  <td className="px-4 py-3 text-white/70">{c.number}</td>
                  <td className="px-4 py-3 text-white/70">{c.time}</td>
                  <td className="px-4 py-3 text-white/70">{c.duration}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs ${
                      c.status === 'answered' ? 'bg-emerald-400/15 text-emerald-300' :
                      c.status === 'missed' ? 'bg-rose-400/15 text-rose-300' :
                      'bg-amber-400/15 text-amber-300'
                    }`}>
                      {c.status === 'answered' && <PhoneIncoming size={14} />}
                      {c.status === 'missed' && <PhoneOff size={14} />}
                      {c.status === 'escalated' && <Clock3 size={14} />}
                      {c.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 px-3 py-1.5">
                      <PlayCircle size={16} />
                      Play
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
