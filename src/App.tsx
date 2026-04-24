import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteShell } from './components/SiteShell'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { ProjectDetails } from './pages/ProjectDetails'
import { Projects } from './pages/Projects'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
