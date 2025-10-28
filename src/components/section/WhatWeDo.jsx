'use client'
import React, { useState, useRef, useEffect } from 'react'
import Container from '../layout/container'
import Badge from '../ui/Badge'
import Image from 'next/image'
import PrimaryButton from '../ui/PrimaryButton'
import cards from '../../data/cards'

export default function WhatWeDo() {
  // defaultActive: the card that is active when nothing is hovered
  const defaultActive = cards.find((c) => c.variant === 'accent')?.id || cards[0]?.id
  const [active, setActive] = useState(defaultActive)
  const hoverTimeout = useRef(null)

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    }
  }, [])
  // Use the accent card's background image for any active card so hovered cards match the first
  const accentBgImage = cards.find((c) => c.variant === 'accent')?.bgImage || ''

  return (
    <section className="py-[70px] lg:py-[120px] bg-[#F3F3F3] overflow-hidden">
      <Container className="flex flex-col gap-[72px]">
        <div className="flex flex-col items-center gap-[18px] sm:gap-[26px]">
          <Badge>What We Do Best</Badge>
          <h2 className="max-w-[748px] text-primary-dark font-semibold text-[30px] sm:text-[60px] leading-[1.1] tracking-[0em] text-center">
            Building Digital Experiences <span className="text-muted-gray">That Perform.</span>
          </h2>
          <p className="text-center text-primary-dark max-w-[526px] sm:text-lg leading-[1.4] tracking-[0em]">
            Every website we build is designed to perform — fast loading, secure, accessible, and
            SEO-optimized from day one.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:!grid-cols-3  gap-5">
          {cards.map((card) => {
            const isActive = active === card.id

            return (
              <div
                key={card.id}
                onMouseEnter={() => {
                  if (hoverTimeout.current) {
                    clearTimeout(hoverTimeout.current)
                    hoverTimeout.current = null
                  }
                  setActive(card.id)
                }}
                onMouseLeave={() => {
                  // delay resetting to default to avoid flicker when moving between siblings
                  if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
                  hoverTimeout.current = setTimeout(() => {
                    setActive(defaultActive)
                    hoverTimeout.current = null
                  }, 120)
                }}
                onFocus={() => {
                  if (hoverTimeout.current) {
                    clearTimeout(hoverTimeout.current)
                    hoverTimeout.current = null
                  }
                  setActive(card.id)
                }}
                onBlur={() => {
                  if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
                  hoverTimeout.current = setTimeout(() => {
                    setActive(defaultActive)
                    hoverTimeout.current = null
                  }, 120)
                }}
                className={`relative rounded-[11px] p-[22px] sm:rounded-[18px] sm:py-[30px] sm:px-[26px] flex flex-col gap-[32px] justify-between sm:h-[514px] overflow-hidden ${
                  isActive ? 'text-white' : 'bg-white text-primary-dark'
                }`}
              >
                {/* background image (uses accent image) */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-300"
                  style={{
                    backgroundImage: `url('${accentBgImage || card.bgImage || ''}')`,
                    opacity: isActive ? 1 : 0,
                  }}
                  aria-hidden
                />

                {/* blue overlay */}
                <div
                  className="absolute inset-0 z-[5] pointer-events-none transition-opacity duration-300"
                  style={{ backgroundColor: 'rgba(0,70,255,0.62)', opacity: isActive ? 1 : 0 }}
                  aria-hidden
                />

                {/* icon circle */}
                <div
                  className={`w-[60px] h-[60px] sm:w-[98px] sm:h-[98px] rounded-full flex items-center justify-center relative z-10 transition-colors duration-200 ${
                    isActive ? 'bg-white' : 'bg-primary-dark'
                  }`}
                >
                  <div
                    aria-hidden
                    className='scale-[0.7] sm:scale-100'
                    style={{
                      width: card.width ? `${card.width}px` : '40px',
                      height: card.height ? `${card.height}px` : '40px',
                      backgroundColor: isActive ? '#0046FF' : '#FFFFFF',
                      WebkitMaskImage: `url('${card.icon}')`,
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('${card.icon}')`,
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                      transition: 'background-color 220ms ease, opacity 220ms ease',
                    }}
                  />
                </div>

                <div className="flex flex-col gap-5 sm:gap-[26px] relative z-10">
                  <div className='flex flex-col gap-2.5 sm:gap-[26px]'>
                  <h3 className="font-semibold text-lg sm:text-[32px] leading-[1.1] tracking-[0em]">
                    {card.title}
                  </h3>
                  <p className="text-[15px] sm:text-lg leading-[1.4] tracking-[0em]">{card.description}</p>
                  </div>
                  <PrimaryButton
                    text="Get Started"
                    href={isActive ? '/contact' : '#'}
                    variant={isActive ? undefined : 'border'}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
