import { whyUsCards } from '../data/whyUsData'

export default function WhyUs() {
  return (
    <section className="section whyus-section">
      <div className="whyus-header">
        <div className="section-label">Why Choose Us</div>
        <h2 className="section-title">
          Built for Your <span className="text-gold">Success</span>
        </h2>
      </div>

      <div className="whyus-grid">
        {whyUsCards.map((card) => (
          <div key={card.title} className="whyus-card glass-card">
            <div className="whyus-icon">{card.icon}</div>
            <h3 className="whyus-title">{card.title}</h3>
            <p className="whyus-desc">{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="marquee-items">
              <span>Ladies Only Living</span>
              <span className="marquee-dot">◆</span>
              <span>Next to TCS</span>
              <span className="marquee-dot">◆</span>
              <span>Premium Homely Food</span>
              <span className="marquee-dot">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
