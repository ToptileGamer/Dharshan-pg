import { nearbyPlaces } from '../data/nearbyPlaces'
import { MAPS_URL } from '../data/contactInfo'

export default function Location() {
  return (
    <section className="section location-section" id="location">
      <div className="location-grid">
        <div className="location-content">
          <div className="section-label">Prime Location</div>
          <h2 className="section-title">
            The Heart of{' '}
            <span className="text-gold">Electronic City</span>
          </h2>
          <p className="section-sub">
            Perfectly positioned for professionals. Save hours on commuting and
            spend more time on what matters to you.
          </p>

          <div className="nearby-grid">
            {nearbyPlaces.map((place) => (
              <div key={place.name} className="nearby-card glass-card">
                <span className="nearby-icon">{place.icon}</span>
                <div className="nearby-info">
                  <div className="nearby-name">{place.name}</div>
                  <div className="nearby-dist">{place.dist}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="location-visual">
          <div className="map-card glass-card">
            <div className="map-placeholder">
              <div className="map-marker-pulse" />
              <div className="map-marker">
                <svg
                  viewBox="0 0 24 24"
                  fill="var(--gold)"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
            </div>
            <div className="map-details">
              <h3>Dharshan PG for Ladies</h3>
              <p>
                Gate No. 1, Sathish Reddy Layout, Electronic City Phase II,
                Bengaluru – 560100
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
