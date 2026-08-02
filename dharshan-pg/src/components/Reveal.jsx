import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-triggered reveal wrapper.
 * Fades + slides content in the first time it enters the viewport.
 *
 * Performance note: this deliberately avoids the `motion` library.
 * The hidden state only applies when `html.js` is set (i.e. JS loaded),
 * so pre-rendered HTML always shows the content — good for LCP and SEO.
 */
export default function Reveal({ children, delay = 0, y = 26, className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} reveal${shown ? ' reveal-in' : ''}`.trim()}
      style={{ ['--reveal-y']: `${y}px`, ['--reveal-delay']: `${delay}s` }}
    >
      {children}
    </div>
  )
}
