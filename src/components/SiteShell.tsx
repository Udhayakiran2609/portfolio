import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function SiteShell() {
  return (
    <div style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

