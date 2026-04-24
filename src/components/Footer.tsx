export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '18px 0',
          gap: 12,
          flexWrap: 'wrap',
        }}
      >
        <div style={{ color: 'rgba(255,255,255,0.62)', fontSize: 14 }}>
          © {year} Udhayakiran M G. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a
            href="https://github.com/Udhayakiran2609"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'rgba(255,255,255,0.72)', fontSize: 14 }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/udhaya-kiran-01b55b288/"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'rgba(255,255,255,0.72)', fontSize: 14 }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:udhayakiran2609@gmail.com"
            style={{ color: 'rgba(255,255,255,0.72)', fontSize: 14 }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

