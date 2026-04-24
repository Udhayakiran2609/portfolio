import { Link, useParams } from 'react-router-dom'
import { useRef } from 'react'
import '../App.css'
import { getProjectBySlug } from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function ProjectDetails() {
  const rootRef = useRef<HTMLDivElement | null>(null)
  useScrollReveal(rootRef)

  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined
  const isDownloadFile = project?.liveUrl?.toLowerCase().endsWith('.exe')

  if (!project) {
    return (
      <div className="page">
        <div className="container" ref={rootRef}>
          <h1 className="headline" data-reveal>
            Project not found
          </h1>
          <p className="subhead" data-reveal>
            The project you’re looking for doesn’t exist.
          </p>
          <div style={{ marginTop: 18 }}>
            <Link to="/projects" className="btn primary">
              Back to projects
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="container" ref={rootRef}>
        <div
          style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}
          data-reveal
        >
          <Link to="/projects" className="btn">
            ← Projects
          </Link>
          {project.liveUrl ? (
            <a
              className="btn primary"
              href={project.liveUrl}
              target={isDownloadFile ? undefined : '_blank'}
              rel={isDownloadFile ? undefined : 'noreferrer'}
              download={isDownloadFile ? '' : undefined}
            >
              {isDownloadFile ? 'Download' : 'Link ↗'}
            </a>
          ) : null}
          {project.repoUrl ? (
            <a className="btn" href={project.repoUrl} target="_blank" rel="noreferrer">
              Repo
            </a>
          ) : null}
        </div>

        <h1 className="headline" data-reveal>
          {project.title}
        </h1>
        <p className="subhead" data-reveal>
          {project.description}
        </p>

        <div className="splitHero">
          <section className="card" data-reveal>
            <div className="sectionTitle">
              <h2>Highlights</h2>
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, color: 'rgba(255,255,255,0.78)' }}>
              {project.highlights.map((h) => (
                <li key={h} style={{ marginBottom: 10 }}>
                  {h}
                </li>
              ))}
            </ul>
          </section>

          <aside className="card" data-reveal>
            <div className="sectionTitle">
              <h2>Tech</h2>
            </div>
            <div className="pillRow">
              {project.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

