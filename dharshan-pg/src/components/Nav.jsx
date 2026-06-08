import { useState, useEffect } from 'react'
import { navLinks } from '../data/navLinks'

export default function Nav({ scrollTo }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (id) => {
    scrollTo(id)
    setMenuOpen(false)
  }

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => window.scrollTo(0, 0)}>
          DHARSHAN <span className="logo-accent">PG</span>
        </div>

        <div className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="nav-link"
              onClick={() => handleNav(link.id)}
            >
              {link.label}
            </button>
          ))}
          <button
            className="nav-cta nav-cta--mobile"
            onClick={() => handleNav('contact')}
          >
            Book Now
          </button>
        </div>

        <div className="nav-actions">
          <button
            className="nav-cta nav-cta--desktop"
            onClick={() => handleNav('contact')}
          >
            Book Now
          </button>
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <div className={`hamburger-box ${menuOpen ? 'active' : ''}`}>
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
}
