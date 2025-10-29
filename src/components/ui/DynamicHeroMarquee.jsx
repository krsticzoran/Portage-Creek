'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const HeroImageMarquee = dynamic(() => import('./HeroImageMarquee'), {
  ssr: false,
  loading: () => <div className="h-[400px] lg:hidden" />,
})

export default function DynamicHeroMarquee({ images, duration = 28 }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const loadMarquee = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setShow(true), { timeout: 1000 })
      } else {
        setTimeout(() => setShow(true), 300)
      }
    }

    if (document.readyState === 'complete') {
      loadMarquee()
    } else {
      window.addEventListener('load', loadMarquee)
      return () => window.removeEventListener('load', loadMarquee)
    }
  }, [])

  if (!show) return <div className="h-[400px] lg:hidden" />

  return <HeroImageMarquee images={images} duration={duration} />
}
