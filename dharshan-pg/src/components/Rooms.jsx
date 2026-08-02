import { rooms } from '../data/roomsData'
import { waLink } from '../data/contactInfo'
import Reveal from './Reveal'
import { WhatsAppIcon } from './Nav'

export default function Rooms({ scrollTo }) {
  return (
    <section className="section rooms-section" id="rooms">
      <div className="section-head">
        <Reveal>
          <div className="label-pill">Rooms & Sharing Options</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title">
            Pick the room that <span className="text-accent-italic">suits your life</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-sub">
            From a private single to a lively four-sharing, every room comes
            fully furnished with meals, Wi-Fi and housekeeping included.
          </p>
        </Reveal>
      </div>

      <div className="rooms-grid">
        {rooms.map((room, i) => (
          <Reveal key={room.name} delay={(i % 4) * 0.07}>
            <div className={`room-card${room.featured ? ' room-card--featured' : ''}`}>
              <div className="room-media">
                {room.featured && <div className="room-featured-badge">Most Popular</div>}
                <img
                  src={room.img}
                  alt={room.alt}
                  width="900"
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="room-body">
                <span className="room-type">{room.type}</span>
                <h3 className="room-name">{room.name}</h3>
                <p className="room-desc">{room.desc}</p>

                <ul className="room-perks">
                  {room.perks.map((perk) => (
                    <li key={perk}>
                      <svg
                        className="check-icon"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {perk}
                    </li>
                  ))}
                </ul>

                <div className="room-cta-row">
                  <a
                    className="btn btn-whatsapp btn-sm"
                    href={waLink(`Hi Dharshan PG! I'm interested in the ${room.name}. Is it available for viewing?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon size={15} />
                    Check Availability
                  </a>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => scrollTo('contact')}
                  >
                    Enquire
                  </button>
                </div>
                <p className="room-price-note">
                  Best rates on direct enquiry · No brokerage · Move-in same day
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
