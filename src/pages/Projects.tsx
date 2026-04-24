import { Link } from 'react-router-dom'
import { useRef } from 'react'
import '../App.css'
import { projects } from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Projects() {
  const rootRef = useRef<HTMLDivElement | null>(null)
  useScrollReveal(rootRef)

  return (
    <div className="page">
      <div className="container" ref={rootRef}>
        <h1 className="headline" data-reveal>
          Projects
        </h1>
        <p className="subhead" data-reveal>
          Real-world projects built with modern technologies and best practices.
        </p>

        <div className="grid" style={{ marginTop: 18 }}>
          {projects.map((p) => {
            const isDownloadFile = p.liveUrl?.toLowerCase().endsWith('.exe')
            return (
              <article
                key={p.slug}
                className="card"
                style={{ gridColumn: 'span 6' }}
                data-reveal
              >
                <h3 style={{ marginTop: 2 }}>{p.title}</h3>
                <p className="muted">{p.description}</p>

                <div className="pillRow">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 16 }}>
                  <Link to={`/projects/${p.slug}`} className="btn primary">
                    Details
                  </Link>
                  {p.repoUrl ? (
                    <a className="btn" href={p.repoUrl} target="_blank" rel="noreferrer">
                      Repo
                    </a>
                  ) : null}
                  {p.liveUrl ? (
                    <a
                      className="btn"
                      href={p.liveUrl}
                      target={isDownloadFile ? undefined : '_blank'}
                      rel={isDownloadFile ? undefined : 'noreferrer'}
                      download={isDownloadFile ? '' : undefined}
                    >
                      {isDownloadFile ? 'Download' : 'Link ↗'}
                    </a>
                  ) : null}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}

