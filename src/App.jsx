import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import DashboardShell from './components/DashboardShell'
import CallsPage from './components/CallsPage'
import CalendarPage from './components/CalendarPage'
import SettingsPage from './components/SettingsPage'
import AdminPage from './components/AdminPage'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Stats />
              <DashboardShell />
            </>
          }
        />
        <Route path="/dashboard" element={<DashboardShell />} />
        <Route path="/calls" element={<CallsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  )
}
