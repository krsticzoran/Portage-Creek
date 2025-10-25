'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function ScrollTimeline() {
  const timelineRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const element = timelineRef.current
      const rect = element.getBoundingClientRect()
      const elementHeight = element.offsetHeight
      const windowHeight = window.innerHeight

      // Calculate how much of the timeline is visible/scrolled
      const start = rect.top

      // Progress from 0 to 1 as user scrolls through the timeline
      let progress = 0
      if (start < windowHeight && rect.bottom > 0) {
        progress = Math.max(0, Math.min(1, (windowHeight - start) / (elementHeight + windowHeight)))
      }

      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() 

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
   <>
      <div
      ref={timelineRef}
        className="absolute top-0 bottom-0 left-1/2 w-[1px]"
        style={{
          background:
            'linear-gradient(180deg, #C4C4C4 0%, #CCCCCC 50%, rgba(204, 204, 204, 0.3) 85%, rgba(204, 204, 204, 0) 100%)',
          transform: 'translateX(-50%)',
        }}
      />

      {/* Blue progress line (grows with scroll) */}
      <div
        className="absolute top-0 left-1/2 w-[1px] bg-[#0046FF] transition-all duration-100 ease-out"
        style={{
          height: `${scrollProgress * 100}%`,
          transform: 'translateX(-50%)',
        }}
      />

      {/* Pointer image (moves with scroll)  */}
      <div
        className="absolute left-1/2 transition-all duration-100 ease-out z-10"
        style={{
          top: `${scrollProgress * 100}%`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Image
          src="/home/how-we-work/pointer.png"
          alt="Timeline pointer"
          width={20}
          height={20}
          className="drop-shadow-lg"
        />
      </div>
   </>
  )
}
