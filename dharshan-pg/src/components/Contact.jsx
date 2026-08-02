import { useState } from 'react'
import { contactInfo, PHONE_NUMBER, WA_DEFAULT, waLink } from '../data/contactInfo'
// @emailjs/browser is imported lazily inside handleSubmit — this keeps the
// build-time pre-render (SSR) safe and shrinks the initial JS bundle.
import { WhatsAppIcon } from './Nav'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
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
      const { default: emailjs } = await import('@emailjs/browser')
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          phone: form.phone,
          room: form.room || 'Not specified',
          message: form.message || 'No special requests',
          company: 'Website enquiry',
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
      <div className="container" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="contact-wrap">
          <div className="contact-left">
            <div className="label-pill">Book Your Visit</div>
            <h2 className="section-title">
              Ready to move in?{' '}
              <span className="text-accent-italic" style={{ color: '#EFC95B' }}>
                Let's talk.
              </span>
            </h2>
            <p className="section-sub">
              Send an enquiry or message us on WhatsApp — we usually reply
              within minutes. Walk-ins are welcome all day, every day.
            </p>

            <div className="contact-info-list">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact-info-item">
                  <div className="ci-icon" aria-hidden="true">{item.icon}</div>
                  <div>
                    <div className="ci-label">{item.label}</div>
                    <div className="ci-value">{item.value}</div>
                  </div>
                </div>
              ))}
              <div className="contact-info-item">
                <div className="ci-icon" aria-hidden="true">📞</div>
                <div>
                  <div className="ci-label">Call / WhatsApp</div>
                  <a className="ci-value" href={`tel:${PHONE_NUMBER}`}>
                    +91 98436 81449
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-quick">
              <a
                className="btn btn-whatsapp"
                href={waLink('Hi Dharshan PG! I would like to schedule a visit. What time works best?')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={18} />
                WhatsApp
              </a>
              <a className="btn btn-white" href={`tel:${PHONE_NUMBER}`}>
                Call Now
              </a>
            </div>
          </div>

          <div className="contact-form-card">
            {sent ? (
              <div className="success-box">
                <div className="success-icon-wrap">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="success-title">Enquiry received!</h3>
                <p className="success-sub">
                  Our manager will call you shortly. Need an instant reply?
                  Message us on WhatsApp now.
                </p>
                <a
                  className="btn btn-whatsapp"
                  href={WA_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '100%' }}
                >
                  <WhatsAppIcon size={18} />
                  Continue on WhatsApp
                </a>
                <button
                  className="btn btn-outline"
                  onClick={() => setSent(false)}
                  style={{ width: '100%', marginTop: '0.7rem' }}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h3>Check availability</h3>
                <p className="form-intro">
                  Fill this in and we'll call you back within the hour.
                </p>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      className="form-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={update('name')}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      className="form-input"
                      placeholder="+91"
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="room">Preferred Accommodation</label>
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
                      <option value="four">Four Sharing</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Questions / Special Requests</label>
                  <textarea
                    id="message"
                    className="form-input form-textarea"
                    placeholder="e.g. When can I visit? Do you have rooms available near the gate?"
                    value={form.message}
                    onChange={update('message')}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg form-submit btn-shine" disabled={loading}>
                  {loading ? 'Sending…' : 'Request a Call Back'}
                </button>

                {error && (
                  <p className="form-error">
                    Something went wrong. Please call us directly at +91 98436 81449.
                  </p>
                )}

                <p className="form-note">
                  No spam, no obligation. We'll only contact you about your stay.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
