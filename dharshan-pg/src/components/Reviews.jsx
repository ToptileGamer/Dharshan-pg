import { reviews } from '../data/reviewsData'
import { MAPS_URL } from '../data/contactInfo'
import Reveal from './Reveal'

export default function Reviews() {
  return (
    <section className="section reviews-section" id="reviews">
      <div className="section-head section-head--center">
        <Reveal>
          <div className="label-pill">Resident Reviews</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title">
            Loved by residents at{' '}
            <span className="text-accent-italic">TCS, Infosys & more</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-sub">
            Don't take our word for it — here's what the women living with us
            have to say.
          </p>
        </Reveal>
      </div>

      <div className="reviews-grid">
        {reviews.map((review, i) => (
          <Reveal key={i} delay={(i % 4) * 0.07}>
            <div className="review-card">
              <div className="quote-icon" aria-hidden="true">“</div>
              <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p className="review-text">{review.text}</p>
              <div className="review-footer">
                <div className="author-avatar" aria-hidden="true">
                  {review.author.charAt(0)}
                </div>
                <div className="author-info">
                  <div className="review-author">{review.author}</div>
                  <div className="review-meta">{review.meta}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="reviews-footer">
          <div className="google-pill">
            <span aria-hidden="true" style={{ color: 'var(--gold)' }}>★★★★★</span>
            4.8 · 100+ reviews on Google
          </div>
          <a
            className="btn btn-outline btn-sm"
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read all reviews on Google Maps
          </a>
        </div>
      </Reveal>
    </section>
  )
}
