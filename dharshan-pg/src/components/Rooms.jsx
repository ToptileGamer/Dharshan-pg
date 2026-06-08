import { rooms } from '../data/roomsData'

export default function Rooms({ scrollTo }) {
  return (
    <section className="section rooms-section" id="rooms">
      <div className="section-label">Luxury Accommodation</div>
      <h2 className="section-title">
        Designed for <span className="text-gold">Comfort</span>
      </h2>
      <p className="section-sub">
        Choose from our meticulously curated living spaces, each designed to
        balance privacy, community, and productivity.
      </p>

      <div className="rooms-grid">
        {rooms.map((room) => (
          <div
            key={room.name}
            className={`room-card glass-card${room.featured ? ' room-card--featured' : ''}`}
          >
            {room.featured && (
              <div className="room-featured-badge">Most Exclusive</div>
            )}
            <div className="room-header">
              <span className="room-type">{room.type}</span>
              <h3 className="room-name">{room.name}</h3>
            </div>

            <div className="gold-divider" />

            <ul className="room-perks">
              {room.perks.map((perk) => (
                <li key={perk}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="check-icon"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {perk}
                </li>
              ))}
            </ul>

            <button
              className={`room-cta ${room.featured ? 'btn-gold' : 'btn-outline'}`}
              onClick={() => scrollTo('contact')}
            >
              Check Availability
            </button>
          </div>
        ))}
      </div>

      <div className="rooms-contact-prompt">
        <h3 className="prompt-title">
          Inquire About Pricing & Availability
        </h3>
        <p className="prompt-desc">
          Our rates vary based on tenure and exact room specifications. Contact
          us directly for a custom quote.
        </p>
        <button
          className="btn-outline prompt-btn"
          onClick={() => scrollTo('contact')}
        >
          Contact Management
        </button>
      </div>
    </section>
  )
}
