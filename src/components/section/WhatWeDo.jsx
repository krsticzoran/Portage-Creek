import Container from '../layout/container'
import Badge from '../ui/Badge'
import Image from 'next/image'
import PrimaryButton from '../ui/PrimaryButton'
import cards from '../../data/cards'

export default function WhatWeDo() {
  return (
    <section className="py-[120px] bg-[#F3F3F3]">
      <Container className="flex flex-col gap-[72px]">
        <div className="flex flex-col items-center gap-[26px]">
          <Badge>What We Do Best</Badge>
          <h2 className="max-w-[748px] text-primary-dark font-semibold text-[60px] leading-[1.1] tracking-[0em] text-center">
            Building Digital Experiences <span className="text-muted-gray">That Perform.</span>
          </h2>
          <p className="text-center text-primary-dark max-w-[526px] text-lg leading-[1.4] tracking-[0em]">
            Every website we build is designed to perform — fast loading, secure, accessible, and
            SEO-optimized from day one.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {cards.map((card) =>
            card.variant === 'accent' ? (
              <div
                key={card.id}
                className="relative rounded-[18px] py-[30px] px-[26px] flex flex-col justify-between text-white h-[514px] overflow-hidden"
              >
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${card.bgImage}')` }}
                  aria-hidden
                />
                <div
                  className="absolute inset-0 z-[5] pointer-events-none"
                  style={{ backgroundColor: 'rgba(0,70,255,0.62)' }}
                  aria-hidden
                />
                <div className="w-[98px] h-[98px] bg-white rounded-full flex items-center justify-center relative z-10">
                  <Image src={card.icon} alt={card.title} width={card.width} height={card.height} />
                </div>
                <div className="flex flex-col gap-[26px] relative z-10">
                  <h3 className="font-semibold text-[32px] leading-[1.1] tracking-[0em]">
                    {card.title}
                  </h3>
                  <p className="text-lg leading-[1.4] tracking-[0em]">{card.description}</p>
                  <PrimaryButton text="Get Started" href="#" />
                </div>
              </div>
            ) : (
              <div
                key={card.id}
                className="bg-white rounded-[18px] py-[30px] px-[26px] flex flex-col justify-between text-primary-dark h-[514px] overflow-hidden"
              >
                <div className="w-[98px] h-[98px] bg-primary-dark rounded-full flex items-center justify-center relative z-10">
                  <Image src={card.icon} alt={card.title} width={card.width} height={card.height} />
                </div>
                <div className="flex flex-col gap-[26px] relative z-10">
                  <h3 className="font-semibold text-[32px] leading-[1.1] tracking-[0em]">
                    {card.title}
                  </h3>
                  <p className="text-lg leading-[1.4] tracking-[0em]">{card.description}</p>
                  <PrimaryButton text="Get Started" href="#" variant="border" />
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  )
}
