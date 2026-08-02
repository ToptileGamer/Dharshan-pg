import { amenities } from '../data/amenitiesData'
import Reveal from './Reveal'

export default function Amenities() {
  return (
    <section className="section amenities-section" id="amenities">
      <div className="section-head section-head--center">
        <Reveal>
          <div className="label-pill label-pill--gold">Premium Amenities</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title">
            Everything you need, <span className="text-accent-italic">already included</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-sub">
            Move in with just your bags. Rooms, meals, Wi-Fi, laundry and
            housekeeping — all part of one simple monthly rent.
          </p>
        </Reveal>
      </div>

      <div className="amenities-grid">
        {amenities.map((item, i) => (
          <Reveal key={item.name} delay={(i % 3) * 0.07}>
            <div className="amenity-card">
              <div className="amenity-icon-wrap">
                <span aria-hidden="true">{item.icon}</span>
              </div>
              <h3 className="amenity-name">{item.name}</h3>
              <p className="amenity-desc">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
