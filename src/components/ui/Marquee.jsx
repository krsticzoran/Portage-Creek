'use client'

import { useEffect, useRef } from 'react'

export default function Marquee({ items = [], duration = 24, reverse = false }) {
  const containerRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    const container = containerRef.current
    if (!track || !container) return

  
    const totalWidth = track.scrollWidth
    const shift = totalWidth / 2

   
    track.style.setProperty('--shift', `${shift}px`)
    track.style.setProperty('--marquee-duration', `${duration}s`)

  
    void track.offsetWidth
  }, [items, duration])

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(var(--shift) * -1)); }
        }
        .marquee-track {
          display: flex;
          gap: 1rem;
          width: max-content;
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: var(--marquee-duration, 24s);
          will-change: transform;
        }
      `}</style>

      <div
        ref={trackRef}
        className="marquee-track"
        style={{ animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {[...items, ...items].map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="flex-none flex flex-col justify-between bg-white rounded-[12px] w-[421px] h-[188px] border border-[#E5E6E0] p-6"
          >
            <div className="flex gap-3">
              <img
                src={item.image}
                alt={item.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="font-[Instrument_Sans] font-medium text-[14px] leading-[20px] tracking-[0]">
                <p className="text-[#16170D]">{item.name}</p>
                <p className="text-muted-gray">{item.position}</p>
              </div>
            </div>
            <p className="font-normal text-base leading-[140%] tracking-[0]">{item.quote}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
