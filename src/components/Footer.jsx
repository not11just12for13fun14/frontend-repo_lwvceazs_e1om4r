export default function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-center">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Blovi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
