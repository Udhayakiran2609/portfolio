import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function cx(isActive: boolean) {
  return {
    textDecoration: 'none',
    padding: '10px 12px',
    borderRadius: 12,
    border: `1px solid ${
      isActive ? 'color-mix(in oklab, var(--accent) 70%, rgba(255,255,255,0.18) 30%)' : 'rgba(255,255,255,0.12)'
    }`,
    background: isActive
      ? 'color-mix(in oklab, var(--accent) 22%, rgba(255,255,255,0.06) 78%)'
      : 'rgba(255,255,255,0.04)',
    boxShadow: isActive ? '0 10px 30px rgba(236,72,153,0.18)' : 'none',
    color: isActive ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.90)',
    fontWeight: 650 as const,
    letterSpacing: '0.2px',
  }
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="siteHeader">
      <div className="container navRow">
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <div className="brandBlock">
            <div aria-hidden="true" className="brandIcon">
              UK
            </div>
            <div className="brandText">
              <div className="brandName">Udhayakiran M G</div>
              <div className="brandRole">Frontend Developer</div>
            </div>
          </div>
        </NavLink>

        <button
          type="button"
          className="menuToggle"
          aria-expanded={isMenuOpen}
          aria-controls="site-nav"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="site-nav" className={`siteNav ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" style={({ isActive }) => cx(isActive)}>
            Home
          </NavLink>
          <NavLink to="/projects" style={({ isActive }) => cx(isActive)}>
            Projects
          </NavLink>
          <NavLink to="/about" style={({ isActive }) => cx(isActive)}>
            About
          </NavLink>
          <NavLink to="/contact" style={({ isActive }) => cx(isActive)}>
            Contact
          </NavLink>
          <a
            className="btn primary"
            href="/resume.pdf"
            download
            style={{ textDecoration: 'none' }}
          >
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  )
}

