import { NavLink } from 'react-router-dom'

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
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        backdropFilter: 'blur(10px)',
        background: 'rgba(11,16,32,0.65)',
        borderBottom: '1px solid rgba(255,255,255,0.10)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 0',
          gap: 14,
        }}
      >
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              aria-hidden="true"
              style={{
                width: 34,
                height: 34,
                borderRadius: 12,
                background:
                  'linear-gradient(135deg, rgba(236,72,153,0.95), rgba(139,92,246,0.9))',
                boxShadow: '0 14px 40px rgba(0,0,0,0.35)',
                border: '1px solid rgba(255,255,255,0.16)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                fontWeight: 800,
                color: 'rgba(255,255,255,0.96)',
              }}
            >
              UK
            </div>
            <div style={{ lineHeight: 1.05 }}>
              <div style={{ color: 'rgba(255,255,255,0.96)', fontWeight: 800 }}>
                Udhayakiran M G
              </div>
              <div style={{ color: 'rgba(255,255,255,0.60)', fontSize: 13 }}>
                Frontend Developer
              </div>
            </div>
          </div>
        </NavLink>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
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

