import { Link } from 'react-router-dom'
import { useRef } from 'react'
import '../App.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function NotFound() {
  const rootRef = useRef<HTMLDivElement | null>(null)
  useScrollReveal(rootRef)

  return (
    <div className="page">
      <div className="container" ref={rootRef}>
        <h1 className="headline" data-reveal>
          404
        </h1>
        <p className="subhead" data-reveal>
          That page doesn’t exist.
        </p>
        <div
          style={{ marginTop: 18, display: 'flex', gap: 10, flexWrap: 'wrap' }}
          data-reveal
        >
          <Link to="/" className="btn primary">
            Go home
          </Link>
          <Link to="/projects" className="btn">
            View projects
          </Link>
        </div>
      </div>
    </div>
  )
}

