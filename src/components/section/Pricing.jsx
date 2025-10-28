'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Container from '../layout/container'
import Badge from '../ui/Badge'
import PrimaryButton from '../ui/PrimaryButton'
import plans from '../../data/pricingPlans'

export default function Pricing() {
  const defaultActive = plans.find((p) => p.id === 2)?.id || plans[0]?.id
  const [active, setActive] = useState(defaultActive)
  const hoverTimeout = useRef(null)

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    }
  }, [])

  const accentBg = '/home/hero/background.webp'

  return (
    <section className="py-[70px] lg:py-[120px] bg-[#F3F3F3] overflow-hidden">
      <Container className="flex flex-col gap-[72px]">
        <div className="flex flex-col items-center gap-[26px]">
          <Badge>Pricing</Badge>
          <h2 className="max-w-[748px] text-primary-dark font-semibold text-[30px] sm:text-[60px] leading-[1.1] tracking-[0em] text-center">
            Flexible Pricing for Every Stage of Growth
          </h2>
          <p className="text-center text-primary-dark max-w-[748px] sm:text-lg leading-[1.4] tracking-[0em]">
            Whether you’re launching your first website or need ongoing support, our plans are built
            to fit your goals. No hidden fees, no confusing tiers — just clear value and dependable
            results.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 h-full">
          {plans.map((plan) => {
            const isActive = active === plan.id

            return (
              <div
                key={plan.id}
                onMouseEnter={() => {
                  if (hoverTimeout.current) {
                    clearTimeout(hoverTimeout.current)
                    hoverTimeout.current = null
                  }
                  setActive(plan.id)
                }}
                onMouseLeave={() => {
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
                  setActive(plan.id)
                }}
                onBlur={() => {
                  if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
                  hoverTimeout.current = setTimeout(() => {
                    setActive(defaultActive)
                    hoverTimeout.current = null
                  }, 120)
                }}
                className={`relative lg:w-1/3 rounded-[12px] flex flex-col gap-[24px] px-6 py-8 overflow-hidden ${
                  isActive ? 'text-white' : 'bg-white text-primary-dark'
                }`}
              >
                {/* background image + blue overlay (fade) */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-300"
                  style={{ backgroundImage: `url('${accentBg}')`, opacity: isActive ? 1 : 0 }}
                  aria-hidden
                />
                <div
                  className="absolute rounded-[12px] inset-0 z-[5] pointer-events-none overflow-hidden transition-opacity duration-300"
                  style={{ backgroundColor: 'rgba(0,70,255,0.62)', opacity: isActive ? 1 : 0 }}
                  aria-hidden
                />

                <div className="flex flex-col gap-4 z-10">
                  <p
                    className={`font-semibold text-[12px] sm:text-[13px] leading-[110%] uppercase ${
                      isActive ? 'text-white' : 'text-primary-dark'
                    }`}
                  >
                    {plan.name}
                  </p>

                  <div className="flex items-end gap-4">
                    <p
                      className={`font-semibold text-[64px] sm:text-[48px] leading-[100%] tracking-[-0.05em] capitalize ${
                        isActive ? 'text-white' : 'text-primary-dark'
                      }`}
                    >
                      {plan.price}
                    </p>

                    <p
                      className={`font-[Inter] font-normal text-[12px] sm:text-[14.89px] leading-[130%] tracking-[-0.005em] ${
                        isActive ? 'text-[#FFFFFFB8]' : 'text-primary-dark'
                      }`}
                    >
                      {plan.cadence}
                    </p>
                  </div>
                  <p
                    className={`font-normal text-[15px] leading-[130%] tracking-[0] ${
                      isActive ? 'text-white' : 'text-primary-dark'
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div
                  className={`${isActive ? 'border border-white' : 'border border-[#15162F26]'}`}
                />

                <div className="flex flex-col gap-3 z-10">
                  <p
                    className={`text-[15px] leading-[130%] tracking-[0] ${
                      isActive ? 'text-white' : 'text-primary-dark'
                    }`}
                  >
                    What’s Included:
                  </p>

                  <div>
                    <ul className="flex flex-col gap-3">
                      {plan.features.map((f, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                          <div
                            className={`w-[17.5px] h-[17.5px] sm:w-[20px] sm:h-[20px] rounded-full flex items-center justify-center ${
                              f.included ? (isActive ? 'bg-white' : 'bg-[#0046FF]') : 'bg-[#FF0000]'
                            }`}
                          >
                            <Image
                              src={
                                f.included
                                  ? isActive
                                    ? '/home/pricing/check-mark-primary.png'
                                    : '/home/pricing/check-mark.png'
                                  : '/home/pricing/cancel.png'
                              }
                              alt={f.included ? 'Check' : 'Cancel'}
                              width={f.included ? 9 : 8}
                              height={f.included ? 8 : 8}
                              loading="lazy"
                            />
                          </div>

                          <p
                            className={`font-medium italic text-[13.96px] leading-[130%] tracking-[-0.005em] ${
                              isActive ? 'text-white' : 'text-primary-dark'
                            }`}
                          >
                            {f.label}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-auto z-10">
                  <PrimaryButton
                    text="Get Started"
                    variant={isActive ? 'default' : 'border'}
                    className="mx-auto"
                    href="/contact"
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
