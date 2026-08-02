import { PHONE_NUMBER, WA_DEFAULT, MAPS_URL } from '../data/contactInfo'
import { WhatsAppIcon } from './Nav'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            Dharshan <span className="logo-accent">PG</span>
          </div>
          <p className="footer-about">
            A safe, homely ladies-only paying guest accommodation in
            Electronic City, Bengaluru — right next to TCS and Infosys.
          </p>
          <div className="footer-cta">
            <a className="btn btn-whatsapp btn-sm" href={WA_DEFAULT} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={16} />
              WhatsApp Us
            </a>
            <a className="btn btn-white btn-sm" href={`tel:${PHONE_NUMBER}`}>
              Call +91 98436 81449
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#amenities">Amenities</a></li>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get In Touch</h4>
          <ul>
            <li>
              <a href={`tel:${PHONE_NUMBER}`}>+91 98436 81449</a>
            </li>
            <li>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                Gate No. 1, Sathish Reddy Layout,
                <br />
                Electronic City Phase II, Bengaluru – 560100
              </a>
            </li>
            <li><a href="#contact">Book a Visit</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          © {year} Dharshan PG for Ladies. All rights reserved.
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
