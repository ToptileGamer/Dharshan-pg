import { whyUsCards } from '../data/whyUsData'
import Reveal from './Reveal'

export default function WhyUs() {
  return (
    <section className="section whyus-section" id="why-us">
      <div className="section-head">
        <Reveal>
          <div className="label-pill">Why Choose Us</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title">
            A place that feels like{' '}
            <span className="text-accent-italic">home</span>, built for your
            peace of mind
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-sub">
            Every detail of Dharshan PG is designed around what working women
            and students need most — safety, comfort, great food, and a short
            commute.
          </p>
        </Reveal>
      </div>

      <div className="whyus-grid">
        {whyUsCards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.08}>
            <div className="whyus-card">
              <div className="whyus-icon">{card.icon}</div>
              <h3 className="whyus-title">{card.title}</h3>
              <p className="whyus-desc">{card.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
