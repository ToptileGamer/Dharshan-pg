import { amenities } from '../data/amenitiesData'

export default function Amenities() {
  return (
    <section className="section amenities-section" id="amenities">
      <div className="section-label">Prime Amenities</div>
      <h2 className="section-title">
        Designed for <span className="text-gold">Modern Living</span>
      </h2>
      <p className="section-sub">
        We provide more than just a room. Enjoy a lifestyle curated for the
        modern professional and student.
      </p>

      <div className="amenities-grid">
        {amenities.map((item) => (
          <div key={item.name} className="amenity-card glass-card">
            <div className="amenity-icon-wrap">
              <span className="amenity-icon">{item.icon}</span>
            </div>
            <h3 className="amenity-name">{item.name}</h3>
            <p className="amenity-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
