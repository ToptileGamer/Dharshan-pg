import { services } from '../data/servicesData'

export default function Services() {
  return (
    <section className="section orders-section" id="orders">
      <div className="section-label">Guest Services</div>
      <h2 className="section-title">
        Everything You Need,{' '}
        <span className="text-gold">At Your Command</span>
      </h2>
      <p className="section-sub">
        Manage your stay and order additional services with just a few clicks.
        Premium living made effortless.
      </p>

      <div className="orders-grid">
        {services.map((service) => (
          <div key={service.id} className="order-card glass-card">
            {service.popular && (
              <div className="order-badge">Resident's Choice</div>
            )}
            <div className="order-icon">{service.icon}</div>
            <h3 className="order-name">{service.title}</h3>
            <p className="order-desc">{service.desc}</p>
            <div className="order-footer">
              <span className="order-price">{service.price}</span>
              <button className="order-btn">
                {service.price === 'Included' ? 'Active' : 'Order Now'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="order-cta-box glass-card">
        <div className="cta-content">
          <h3>Need something special?</h3>
          <p>
            Our concierge is available 24/7 to assist with your custom
            requirements.
          </p>
        </div>
        <button className="btn-gold">Chat with Support</button>
      </div>
    </section>
  )
}
