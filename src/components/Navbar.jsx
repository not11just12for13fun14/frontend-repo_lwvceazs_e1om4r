import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, Calendar, Settings, Sandwich, LayoutDashboard, Shield } from 'lucide-react'

export default function Navbar() {
  const navItem = ({ to, label, icon: Icon }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'bg-white/80 text-gray-900 shadow-sm' : 'text-white/80 hover:text-white hover:bg-white/10'
        }`
      }
    >
      <Icon size={18} />
      {label}
    </NavLink>
  )

  return (
    <div className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-3">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-orange-400 shadow ring-2 ring-white/30" />
            <span className="text-white font-semibold tracking-tight">Blovi</span>
          </Link>
          <div className="hidden md:flex items-center gap-2">
            {navItem({ to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard })}
            {navItem({ to: '/calls', label: 'Calls', icon: Phone })}
            {navItem({ to: '/calendar', label: 'Calendar', icon: Calendar })}
            {navItem({ to: '/settings', label: 'Settings', icon: Settings })}
            {navItem({ to: '/admin', label: 'Admin', icon: Shield })}
          </div>
          <div className="md:hidden">
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/10">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
