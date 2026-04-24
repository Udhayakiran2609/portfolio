import type { FormEvent } from 'react'
import { useRef, useState } from 'react'
import '../App.css'
import { toast } from '@udhayakiran/toast-message'
import { useScrollReveal } from '../hooks/useScrollReveal'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const INITIAL: FormState = { name: '', email: '', subject: '', message: '' }

export function Contact() {
  const rootRef = useRef<HTMLDivElement | null>(null)
  useScrollReveal(rootRef)

  const [form, setForm] = useState<FormState>(INITIAL)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)

    const formElement = event.currentTarget
    const formData = new FormData(formElement)
    formData.set(
      '_subject',
      form.subject ? `Portfolio: ${form.subject}` : 'Portfolio: New message',
    )

    try {
      const response = await fetch('https://formsubmit.co/ajax/udhayakiran2609@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        toast.error(data?.message ?? 'Unable to send message. Please try again.')
      } else {
        setForm(INITIAL)
        toast.success('Message sent successfully')
      }
    } catch (error) {
      toast.error('Network error sending message.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page">
      <div className="container" ref={rootRef}>
        <h1 className="headline" data-reveal>
          Contact
        </h1>
        <p className="subhead" data-reveal>
          Send me a message. Submissions go directly to my email.
        </p>

        <div className="splitHero">
          <section className="card" data-reveal>
            <div className="sectionTitle">
              <h2>Message</h2>
            </div>

            <form onSubmit={handleSubmit} style={{ marginTop: 10 }}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_subject"
                value={form.subject ? `Portfolio: ${form.subject}` : 'Portfolio: New message'}
              />

              <div className="formGrid">
                <label>
                  <div className="muted" style={{ fontSize: 13, marginBottom: 6 }}>
                    Name
                  </div>
                  <input
                    className="input"
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    placeholder="Your name"
                    required
                  />
                </label>
                <label>
                  <div className="muted" style={{ fontSize: 13, marginBottom: 6 }}>
                    Email
                  </div>
                  <input
                    className="input"
                    name="email"
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    placeholder="you@email.com"
                    inputMode="email"
                    type="email"
                    required
                  />
                </label>
              </div>

              <div style={{ marginTop: 12 }}>
                <label>
                  <div className="muted" style={{ fontSize: 13, marginBottom: 6 }}>
                    Subject
                  </div>
                  <input
                    className="input"
                    name="subject"
                    value={form.subject}
                    onChange={(e) => setForm((s) => ({ ...s, subject: e.target.value }))}
                    placeholder="Project / Hiring / Collaboration"
                  />
                </label>
              </div>

              <div style={{ marginTop: 12 }}>
                <label>
                  <div className="muted" style={{ fontSize: 13, marginBottom: 6 }}>
                    Message
                  </div>
                  <textarea
                    className="textarea"
                    name="message"
                    value={form.message}
                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                    placeholder="Tell me about your project…"
                    required
                  />
                </label>
              </div>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 14 }}>
                <button className="btn primary" type="submit" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send'}
                </button>
                <button className="btn" type="button" onClick={() => setForm(INITIAL)}>
                  Reset
                </button>
                <a className="btn" href="mailto:udhayakiran2609@gmail.com">
                  Or email directly
                </a>
              </div>

              <p className="muted" style={{ marginTop: 12, fontSize: 13 }}>
                Note: First time you submit, FormSubmit may ask you to confirm via email.
              </p>
            </form>
          </section>

          <aside className="card" data-reveal>
            <div className="sectionTitle">
              <h2>Direct</h2>
            </div>
            <p className="muted">Prefer links? Use any of these.</p>
            <div style={{ display: 'grid', gap: 10, marginTop: 14 }}>
              <a className="btn" href="mailto:udhayakiran2609@gmail.com">
                udhayakiran2609@gmail.com
              </a>
              <a
                className="btn"
                href="https://github.com/Udhayakiran2609"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="btn"
                href="https://www.linkedin.com/in/udhaya-kiran-01b55b288/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

