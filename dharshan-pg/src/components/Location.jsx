import { nearbyPlaces } from '../data/nearbyPlaces'
import { MAPS_URL } from '../data/contactInfo'
import Reveal from './Reveal'

export default function Location() {
  return (
    <section className="section location-section" id="location">
      <div className="location-grid">
        <div className="location-content">
          <Reveal>
            <div className="label-pill">Prime Location</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">
              The heart of{' '}
              <span className="text-accent-italic">Electronic City</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-sub" style={{ marginBottom: '2rem' }}>
              Save hours of commuting every week. Dharshan PG sits right next
              to the city's biggest IT campuses — walk to work, not crawl in
              traffic.
            </p>
          </Reveal>

          <div className="nearby-list">
            {nearbyPlaces.map((place, i) => (
              <Reveal key={place.name} delay={i * 0.06}>
                <div className="nearby-card">
                  <span className="nearby-icon" aria-hidden="true">{place.icon}</span>
                  <div className="nearby-info">
                    <div className="nearby-name">{place.name}</div>
                    <div className="nearby-dist">{place.dist}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="map-card">
            <div className="map-placeholder">
              <div className="map-marker-pulse" />
              <div className="map-marker" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="var(--green)">
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
                className="btn btn-primary"
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                Get Directions on Google Maps
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
