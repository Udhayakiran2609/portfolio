import { useRef } from 'react'
import '../App.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const skillsData = {
  frontend: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Angular.js',
    'TypeScript',
    'Responsive Design',
  ],
  backend: ['Laravel', 'SQL', 'Firebase'],
  desktop: ['Electron.js', 'DNS filtering'],
  browser: ['Chrome Extensions', 'Browser APIs', 'Content Scripts'],
  libraries: ['Quill.js', 'WaveSurfer.js', 'Jitsi Meet', 'GSAP'],
  other: ['HTML5 Canvas', 'Video Rendering', 'Lua'],
}

export function About() {
  const rootRef = useRef<HTMLDivElement | null>(null)
  useScrollReveal(rootRef)

  return (
    <div className="page">
      <div className="container" ref={rootRef}>
        <h1 className="headline" data-reveal>
          About
        </h1>
        <p className="subhead" data-reveal>
          I'm Udhayakiran M G — a frontend developer who builds responsive, user-friendly web apps and desktop applications using modern technologies.
        </p>

        <div className="splitHero">
          <section className="card" data-reveal>
            <div className="sectionTitle">
              <h2>Bio</h2>
            </div>
            <p className="muted">
              I enjoy turning designs into clean, interactive UIs and building features that feel fast and intuitive. With expertise in full-stack development, I've built desktop applications, browser extensions, and web platforms using React, Angular, Laravel, and Electron.js.
            </p>
          </section>

          <aside className="card" data-reveal>
            <div className="sectionTitle">
              <h2>Quick info</h2>
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, color: 'rgba(255,255,255,0.78)' }}>
              <li style={{ marginBottom: 10 }}>
                <strong style={{ color: 'rgba(255,255,255,0.92)' }}>Location:</strong>{' '}
                Your City
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong style={{ color: 'rgba(255,255,255,0.92)' }}>Experience:</strong>{' '}
                2.2 years
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong style={{ color: 'rgba(255,255,255,0.92)' }}>Role:</strong> Frontend
                Developer
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong style={{ color: 'rgba(255,255,255,0.92)' }}>Interests:</strong>{' '}
                UI engineering, animations, performance, desktop & web apps
              </li>
            </ul>
          </aside>
        </div>

        <section className="card" data-reveal style={{ marginTop: 18 }}>
          <div className="sectionTitle">
            <h2>Skills</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category}>
                <h3 style={{ marginTop: 0, marginBottom: 10, fontSize: 14, textTransform: 'capitalize', color: 'rgba(255,255,255,0.78)' }}>
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="pillRow">
                  {skills.map((skill) => (
                    <span key={skill} className="chip" style={{ fontSize: 13 }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

