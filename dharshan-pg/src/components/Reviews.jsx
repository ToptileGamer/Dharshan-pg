import { reviews } from '../data/reviewsData'

export default function Reviews() {
  return (
    <section className="section reviews-section" id="reviews">
      <div className="section-label">Testimonials</div>
      <h2 className="section-title">
        What Our <span className="text-gold">Residents</span> Say
      </h2>

      <div className="reviews-header glass-card">
        <div className="rating-summary">
          <span className="rating-num">4.8</span>
          <div className="rating-details">
            <div className="rating-stars">★★★★★</div>
            <div className="rating-sub">
              TrustScore based on 100+ reviews
            </div>
          </div>
        </div>
        <div className="google-badge">Verified Resident Reviews</div>
      </div>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card glass-card">
            <div className="quote-icon">{"\u201C"}</div>
            <p className="review-text">{review.text}</p>
            <div className="review-footer">
              <div className="author-avatar">
                {review.author.charAt(0)}
              </div>
              <div className="author-info">
                <div className="review-author">{review.author}</div>
                <div className="review-stars">★★★★★</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
