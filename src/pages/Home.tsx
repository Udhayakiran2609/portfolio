import { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import profileImg from '../assets/profile.png'
import { projects } from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Home() {
  const featured = projects.slice(0, 2)
  const rootRef = useRef<HTMLDivElement | null>(null)
  useScrollReveal(rootRef)

  return (
    <div className="page">
      <div className="container" ref={rootRef}>
        <div className="twoCol">
          <section>
            <p className="chip" data-reveal>
              Available for freelance / full-time
            </p>
            <h1 className="headline" style={{ marginTop: 14 }} data-reveal>
              Hi, I’m{' '}
              <span style={{ color: 'rgba(255,255,255,0.98)' }}>Udhayakiran M G</span>.
              <br />
              I build fast, modern web apps.
            </h1>
            <p className="subhead" data-reveal>
              Frontend developer focused on clean UI, performance, and solid UX. Browse my
              projects, learn about me, or send a message.
            </p>

            <div className="heroActions" data-reveal>
              <Link
                to="/projects"
                className="btn primary"
                style={{ textDecoration: 'none' }}
              >
                View projects
              </Link>
              <Link to="/contact" className="btn" style={{ textDecoration: 'none' }}>
                Contact me
              </Link>
            </div>
          </section>

          <aside className="avatarWrap heroAvatar" data-reveal>
            <img className="avatar" src={profileImg} alt="Udhayakiran M G" loading="lazy" />
          </aside>
        </div>

        <div className="splitHero">
          <div className="card" data-reveal>
            <div className="sectionTitle">
              <h2>What I do</h2>
            </div>
            <div className="grid">
              <div className="card serviceCard" style={{ gridColumn: 'span 6' }} data-reveal>
                <h3>Desktop Applications</h3>
                <p className="muted">
                  Cross-platform desktop apps built with Electron.js for seamless user experiences.
                </p>
              </div>
              <div className="card serviceCard" style={{ gridColumn: 'span 6' }} data-reveal>
                <h3>Browser Extensions</h3>
                <p className="muted">
                  Extensions for Chrome, Firefox, and Safari with robust APIs and smooth performance.
                </p>
              </div>
              <div className="card serviceCard" style={{ gridColumn: 'span 6' }} data-reveal>
                <h3>Web Applications</h3>
                <p className="muted">
                  Modern web apps built with Angular and React for responsive, interactive interfaces.
                </p>
              </div>
              <div className="card serviceCard" style={{ gridColumn: 'span 6' }} data-reveal>
                <h3>Backend Development</h3>
                <p className="muted">Laravel, PHP, and SQL for robust server-side solutions and APIs.</p>
              </div>
            </div>
          </div>

          <aside className="card" data-reveal>
            <div className="sectionTitle">
              <h2>Featured</h2>
              <Link to="/projects" style={{ color: 'rgba(255,255,255,0.72)' }}>
                All →
              </Link>
            </div>
            <div style={{ display: 'grid', gap: 12 }}>
              {featured.map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="card interactiveCard"
                  data-reveal
                  style={{
                    textDecoration: 'none',
                    borderColor: 'rgba(255,255,255,0.14)',
                  }}
                >
                  <h3 style={{ marginBottom: 6 }}>{p.title}</h3>
                  <p className="muted">{p.description}</p>
                  <div className="kpiRow">
                    {p.tech.slice(0, 3).map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>

        <div style={{ marginTop: 18 }} className="grid">
          <section className="card skillsSection" style={{ gridColumn: 'span 7' }} data-reveal>
            <div className="sectionTitle">
              <h2>Skills snapshot</h2>
            </div>
            <p className="muted">
              Core technologies and frameworks I work with across web and desktop applications.
            </p>
            <div className="pillRow">
              {[
                'React',
                'TypeScript',
                'JavaScript',
                'HTML',
                'CSS',
                'Electron.js',
                'Node.js',
                'Chrome Extensions',
                'Firebase',
                'Laravel',
                'AngularJS',
                'Canvas',
                'GSAP',
              ].map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </section>

          <aside className="card statsSection" style={{ gridColumn: 'span 5' }} data-reveal>
            <div className="sectionTitle">
              <h2>Stats</h2>
            </div>
            <div className="grid">
              <div className="card statCard" style={{ gridColumn: 'span 6' }}>
                <h3 style={{ marginBottom: 6 }}>8</h3>
                <p className="muted">Projects built</p>
              </div>
              <div className="card statCard" style={{ gridColumn: 'span 6' }}>
                <h3 style={{ marginBottom: 6 }}>2.2</h3>
                <p className="muted">Years experience</p>
              </div>
            </div>
          </aside>
        </div>

        <section className="card" style={{ marginTop: 18 }} data-reveal>
          <div className="sectionTitle">
            <h2>Work experience</h2>
          </div>

          <div className="grid">
            <div className="card workCard" style={{ gridColumn: 'span 12' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: 12,
                  flexWrap: 'wrap',
                }}
              >
                <h3 style={{ marginBottom: 6 }}>
                  Netaxis IT Solutions Pvt Ltd — Associate Frontend Developer
                </h3>
                <span className="chip">Feb 2024 – Mar 2026</span>
              </div>

              <ul className="workList" style={{ margin: '10px 0 0', paddingLeft: 18, color: 'rgba(255,255,255,0.78)' }}>
                <li style={{ marginBottom: 10 }}>
                  Joined as a trainee on <strong style={{ color: 'rgba(255,255,255,0.92)' }}>Sep 25, 2023</strong> and
                  officially onboarded as full‑time in <strong style={{ color: 'rgba(255,255,255,0.92)' }}>Feb 2024</strong>.
                </li>
                <li style={{ marginBottom: 10 }}>
                  Built cross‑platform desktop apps using <strong style={{ color: 'rgba(255,255,255,0.92)' }}>Electron.js</strong>{' '}
                  (first 2 months).
                </li>
                <li style={{ marginBottom: 10 }}>
                  Developed and maintained <strong style={{ color: 'rgba(255,255,255,0.92)' }}>Chrome Extensions</strong>{' '}
                  (~1 year) focusing on performance, usability, and compatibility.
                </li>
                <li style={{ marginBottom: 10 }}>
                  Transitioned to <strong style={{ color: 'rgba(255,255,255,0.92)' }}>Frontend/Web Development</strong>{' '}
                  and delivered responsive, interactive web applications.
                </li>
                <li style={{ marginBottom: 10 }}>
                  Worked with <strong style={{ color: 'rgba(255,255,255,0.92)' }}>HTML, CSS, JavaScript, Angular</strong>{' '}
                  to build dynamic user interfaces.
                </li>
                <li style={{ marginBottom: 10 }}>
                  Integrated backend services using <strong style={{ color: 'rgba(255,255,255,0.92)' }}>Laravel</strong>{' '}
                  and implemented real‑time features with <strong style={{ color: 'rgba(255,255,255,0.92)' }}>Firebase</strong>.
                </li>
                <li style={{ marginBottom: 10 }}>
                  Used <strong style={{ color: 'rgba(255,255,255,0.92)' }}>HTML5 Canvas</strong> for custom UI components and
                  interactive features.
                </li>
                <li style={{ marginBottom: 0 }}>
                  Collaborated with the team to deliver scalable, user‑friendly solutions within deadlines.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

