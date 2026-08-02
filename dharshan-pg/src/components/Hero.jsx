import { PHONE_NUMBER, WA_DEFAULT } from '../data/contactInfo'
import { WhatsAppIcon } from './Nav'

const HERO_BASE =
  'https://images.unsplash.com/photo-1567016432779-094069958ea5'

// Responsive sources — the LCP hero image. The smallest sizes are what
// phones actually use, so mobile visitors don't download a 1800px image.
const HERO_SRCSET = [
  `${HERO_BASE}?auto=format&fit=crop&w=480&q=75 480w`,
  `${HERO_BASE}?auto=format&fit=crop&w=800&q=75 800w`,
  `${HERO_BASE}?auto=format&fit=crop&w=1200&q=75 1200w`,
  `${HERO_BASE}?auto=format&fit=crop&w=1800&q=75 1800w`,
].join(', ')

export default function Hero({ scrollTo }) {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src={`${HERO_BASE}?auto=format&fit=crop&w=800&q=75`}
          srcSet={HERO_SRCSET}
          sizes="100vw"
          alt="Bright, comfortable room at Dharshan PG for Ladies"
          width="1800"
          height="1200"
          fetchpriority="high"
          decoding="async"
        />
        <div className="hero-overlay" />
        <div className="hero-overlay-top" />
      </div>

      <div className="hero-content">
        <div className="hero-badge anim-up" style={{ ['--d']: '0s' }}>
          <span className="star">★★★★★</span>
          Rated 4.8 by 100+ residents · Electronic City, Bengaluru
        </div>

        <h1 className="hero-title anim-up" style={{ ['--d']: '0.05s' }}>
          A safe, homely stay
          <br />
          next to <span className="em">TCS & Infosys</span>
        </h1>

        <p className="hero-desc anim-up" style={{ ['--d']: '0.24s' }}>
          Ladies-only PG with home-cooked meals, 24/7 security, high-speed
          Wi-Fi and housekeeping — 3 minutes from your office. Visit today,
          move in tomorrow.
        </p>

        <div className="hero-actions anim-up" style={{ ['--d']: '0.36s' }}>
          <button className="btn btn-primary btn-lg btn-shine" onClick={() => scrollTo('contact')}>
            Book a Free Visit
            <svg className="btn-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <a className="btn btn-whatsapp btn-lg" href={WA_DEFAULT} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={19} />
            WhatsApp Us
          </a>
          <a className="btn btn-white btn-lg" href={`tel:${PHONE_NUMBER}`}>
            Call Now
          </a>
        </div>

        <div className="hero-stats anim-up" style={{ ['--d']: '0.55s' }}>
          <div className="stat-item">
            <span className="stat-num">500<span className="plus">+</span></span>
            <span className="stat-label">Happy Residents</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">4.8<span className="plus">★</span></span>
            <span className="stat-label">Google Rating</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">24<span className="plus">/</span>7</span>
            <span className="stat-label">CCTV & Security</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">3<span className="plus">min</span></span>
            <span className="stat-label">Walk to TCS</span>
          </div>
        </div>
      </div>

      <div className="hero-rating-card anim-pop" style={{ ['--d']: '0.9s' }}>
        <div className="g-logo">G</div>
        <div>
          <div className="rating-big">4.8 / 5</div>
          <div className="rating-stars">★★★★★</div>
          <div className="rating-sub">100+ verified reviews</div>
        </div>
      </div>

      <div
        className="hero-scroll-hint"
        onClick={() => scrollTo('why-us')}
        role="button"
        aria-label="Scroll to explore"
      >
        <div className="mouse">
          <div className="wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
