import heroBg from '/src/assets/hero.png'

export default function Hero({ scrollTo }) {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={heroBg} alt="Premium PG Interior" />
        <div className="hero-overlay" />
        <div className="hero-overlay-gradient" />
      </div>

      <div className="hero-content">
        <div className="hero-text-wrap">
          <div className="hero-badge animate-1">
            Luxury Student & Professional Living
          </div>
          <h1 className="hero-title animate-2">
            Your Premium{' '}
            <span className="text-gradient-gold">Sanctuary</span>
            <br />
            in Electronic City
          </h1>
          <p className="hero-desc animate-3">
            Experience a new standard of living with chef-prepared meals,
            resort-style amenities, and a community that genuinely feels like
            home.
          </p>
          <div className="hero-actions animate-4">
            <button
              className="btn-gold btn-hover-effect"
              onClick={() => scrollTo('contact')}
            >
              <span>Reserve Your Space</span>
              <svg
                className="btn-arrow"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <button
              className="btn-outline btn-hover-effect"
              onClick={() => scrollTo('rooms')}
            >
              <span>View Rooms</span>
            </button>
          </div>
        </div>

        <div className="hero-stats animate-5">
          <div className="stat-item">
            <span className="stat-num">
              500<span className="text-gold">+</span>
            </span>
            <span className="stat-label">Happy Residents</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">
              4.8<span className="text-gold">★</span>
            </span>
            <span className="stat-label">Google Rating</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">
              24<span className="text-gold">/</span>7
            </span>
            <span className="stat-label">Secure Access</span>
          </div>
        </div>
      </div>

      <div
        className="hero-scroll-hint animate-6"
        onClick={() => scrollTo('amenities')}
      >
        <div className="mouse">
          <div className="wheel" />
        </div>
        <span className="scroll-text">Scroll to Explore</span>
      </div>

      <div className="floating-shape shape-1" />
      <div className="floating-shape shape-2" />
    </section>
  )
}
