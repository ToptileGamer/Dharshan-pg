import { useState } from 'react'
import { faqs } from '../data/faqData'
import { WA_DEFAULT, PHONE_NUMBER } from '../data/contactInfo'
import Reveal from './Reveal'
import { WhatsAppIcon } from './Nav'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section faq-section" id="faq">
      <div className="faq-layout">
        <Reveal>
          <div className="faq-cta-card">
            <h3>Still have questions?</h3>
            <p>
              Talk to our manager directly — we reply quickly on WhatsApp and
              can arrange a visit any time of day.
            </p>
            <a
              className="btn btn-whatsapp"
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
              Chat on WhatsApp
            </a>
            <a className="btn-phone" href={`tel:${PHONE_NUMBER}`}>
              📞 +91 98436 81449
            </a>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="label-pill label-pill--gold">Quick Answers</div>
            <h2 className="section-title" style={{ marginBottom: '1.8rem' }}>
              Frequently asked <span className="text-accent-italic">questions</span>
            </h2>
          </Reveal>

          <div className="faq-list">
            {faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <Reveal key={faq.q} delay={i * 0.04}>
                  <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
                    <button
                      className="faq-q"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span className="faq-icon" aria-hidden="true">+</span>
                    </button>
                    <div className="faq-a-wrap">
                      <div className="faq-a">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
