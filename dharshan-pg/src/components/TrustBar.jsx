export default function TrustBar() {
  const items = [
    { icon: '👩‍👧‍👦', label: 'Ladies-Only PG', sub: 'Safe for working women & students' },
    { icon: '📹', label: 'CCTV Surveillance', sub: '24/7 monitored premises' },
    { icon: '🍲', label: '3 Homely Meals a Day', sub: 'North & South Indian menu' },
    { icon: '🚶‍♀️', label: 'Walk to Work', sub: '3 min to TCS · 5 min to Infosys' },
  ]

  return (
    <div className="trustbar">
      <div className="trustbar-inner">
        {items.map((item) => (
          <div key={item.label} className="trust-item">
            <div className="t-icon">{item.icon}</div>
            <div>
              <div className="t-label">{item.label}</div>
              <div className="t-sub">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
