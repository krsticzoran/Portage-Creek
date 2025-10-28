'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'


export default function HeroImageMarquee({ images = [], duration = 28 }) {
  const trackARef = useRef(null)
  const trackBRef = useRef(null)

  useEffect(() => {
    const tA = trackARef.current
    const tB = trackBRef.current
    if (!tA || !tB) return

    const totalWidthA = tA.scrollWidth
    const totalWidthB = tB.scrollWidth
    const shiftA = totalWidthA / 2
    const shiftB = totalWidthB / 2

    tA.style.setProperty('--shift', `${shiftA}px`)
    tA.style.setProperty('--marquee-duration', `${duration}s`)
    tB.style.setProperty('--shift', `${shiftB}px`)
    tB.style.setProperty('--marquee-duration', `${duration + 6}s`)

    // force reflow to apply CSS variables
    void tA.offsetWidth
    void tB.offsetWidth
  }, [images, duration])

  if (!images || images.length === 0) return null

  return (
    <div className="w-full lg:hidden">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(var(--shift) * -1)); }
        }
        .him-track {
          display:flex;
          gap:0.75rem;
          width:max-content;
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: var(--marquee-duration, 28s);
          will-change: transform;
        }
      `}</style>

      {/* Row A */}
      <div className="overflow-hidden">
        <div ref={trackARef} className="him-track">
          {[...images, ...images].map((src, i) => (
            <div
              key={`a-${i}`}
              className="flex-shrink-0 w-[188px] h-[193px] rounded-md overflow-hidden"
            >
              <Image
                src={src}
                alt={`hero-${i}`}
                width={188}
                height={193}
                className="object-cover w-full h-full"
                 loading="lazy"
                 quality={60}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row B (reverse direction slightly slower) */}
      <div className="mt-3 overflow-hidden">
        <div ref={trackBRef} className="him-track" style={{ animationDirection: 'reverse' }}>
          {[...images, ...images].map((src, i) => (
            <div
              key={`b-${i}`}
              className="flex-shrink-0 w-[188px] h-[193px] rounded-md overflow-hidden"
            >
              <Image
                src={src}
                alt={`hero-b-${i}`}
                width={188}
                height={193}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
