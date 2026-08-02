import { motion } from 'motion/react'
import { PHONE_NUMBER, WA_DEFAULT } from '../data/contactInfo'
import { WhatsAppIcon } from './Nav'

const HERO_IMG =
  'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1800&q=80'

const ease = [0.21, 0.65, 0.36, 1]

export default function Hero({ scrollTo }) {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src={HERO_IMG}
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
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="hero-badge">
            <span className="star">★★★★★</span>
            Rated 4.8 by 100+ residents · Electronic City, Bengaluru
          </div>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease }}
        >
          A safe, homely stay
          <br />
          next to <span className="em">TCS & Infosys</span>
        </motion.h1>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease }}
        >
          Ladies-only PG with home-cooked meals, 24/7 security, high-speed
          Wi-Fi and housekeeping — 3 minutes from your office. Visit today,
          move in tomorrow.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.36, ease }}
        >
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
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease }}
        >
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
        </motion.div>
      </div>

      <motion.div
        className="hero-rating-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9, ease }}
      >
        <div className="g-logo">G</div>
        <div>
          <div className="rating-big">4.8 / 5</div>
          <div className="rating-stars">★★★★★</div>
          <div className="rating-sub">100+ verified reviews</div>
        </div>
      </motion.div>

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
