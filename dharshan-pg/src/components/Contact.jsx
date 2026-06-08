import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { contactInfo, PHONE_NUMBER } from '../data/contactInfo'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    room: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) return

    setLoading(true)
    setError(false)

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          company: form.company || 'Not specified',
          phone: form.phone,
          room: form.room || 'Not specified',
          message: form.message || 'No special requests',
          admin_email: import.meta.env.VITE_ADMIN_EMAIL || 'admin@dharshanpg.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      if (result.status === 200) {
        setSent(true)
      } else {
        setError(true)
      }
    } catch (err) {
      console.error('Email send failed:', err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-container glass-card">
        <div className="contact-info">
          <div className="section-label">Reservation</div>
          <h2 className="section-title">
            Start Your{' '}
            <span className="text-gold">New Journey</span>
          </h2>
          <p className="contact-desc">
            We'd love to show you around. Schedule a visit or enquire about
            current availability and move-in specials.
          </p>

          <div className="info-list">
            {contactInfo.map((item) => (
              <div key={item.label} className="info-item">
                <div className="info-icon-wrap">
                  <span className="info-icon">{item.icon}</span>
                </div>
                <div>
                  <div className="info-label">{item.label}</div>
                  <div className="info-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-help">
            <p>Prefer to talk?</p>
            <a href={`tel:${PHONE_NUMBER}`} className="phone-link">
              {PHONE_NUMBER}
            </a>
          </div>
        </div>

        <div className="contact-form-wrap">
          {sent ? (
            <div className="success-box">
              <div className="success-icon-wrap">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <p className="success-title">Thank You!</p>
              <p className="success-sub">
                Your enquiry has been received. Our manager will contact you
                within the next 2 hours.
              </p>
              <button className="btn-gold" onClick={() => setSent(false)}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    className="form-input"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={update('name')}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    className="form-input"
                    placeholder="+91"
                    value={form.phone}
                    onChange={update('phone')}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="room">
                  Preferred Accommodation
                </label>
                <div className="select-wrap">
                  <select
                    id="room"
                    className="form-input"
                    value={form.room}
                    onChange={update('room')}
                  >
                    <option value="">Select a room type</option>
                    <option value="single">Single Occupancy</option>
                    <option value="double">Double Sharing</option>
                    <option value="triple">Triple Sharing</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Special Requests / Questions
                </label>
                <textarea
                  id="message"
                  className="form-input form-textarea"
                  placeholder="Tell us anything we should know..."
                  value={form.message}
                  onChange={update('message')}
                />
              </div>

              <button
                type="submit"
                className="btn-gold form-submit"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Confirm Interest'}
              </button>

              {error && (
                <p className="form-error">
                  Failed to send. Please try again or call us directly.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
