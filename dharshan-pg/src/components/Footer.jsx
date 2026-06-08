export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            DHARSHAN <span className="logo-accent">PG</span>
          </div>
          <p className="footer-about">
            Redefining shared living with luxury, safety, and comfort for the
            modern professional.
          </p>
        </div>

        <div className="footer-links-group">
          <div className="footer-link-col">
            <h4>Quick Links</h4>
            <a href="#amenities">Amenities</a>
            <a href="#rooms">Rooms</a>
            <a href="#orders">Services</a>
          </div>
          <div className="footer-link-col">
            <h4>Support</h4>
            <a href="#contact">Contact Us</a>
            <a href="#reviews">Reviews</a>
            <a href="#location">Location</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          &copy; {year} Dharshan PG Luxury Living. All rights reserved.
        </div>
        <div className="footer-meta">
          <span>Ladies-only</span>
          <span className="dot" />
          <span>Electronic City Phase II</span>
          <span className="dot" />
          <span>Bengaluru</span>
        </div>
      </div>
    </footer>
  )
}
