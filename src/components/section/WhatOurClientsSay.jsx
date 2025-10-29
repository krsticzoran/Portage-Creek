import Badge from '../ui/Badge'
import clientCards from '../../data/clientCards'
import Marquee from '../ui/Marquee'

export default function WhatOurClientsSay() {
  return (
    <section className="py-[120px] bg-[linear-gradient(180deg,#F0F4FF_0%,rgba(240,244,255,0)_100%)] flex flex-col gap-[56px] overflow-hidden">
      <div className="flex flex-col gap-[26px] justify-center items-center">
        <Badge variant="filled">Trusted by Professionals</Badge>
        <h2 className="text-center max-w-[578px] text-primary-dark font-semibold text-[60px] leading-[1.1] tracking-[0em]">
          What Our Clients Say About Us
        </h2>
      </div>
      <div className="flex flex-col gap-[18px]">
        <Marquee items={clientCards} duration={44} reverse={false} />
        <Marquee items={clientCards} duration={46} reverse={true} />
      </div>
    </section>
  )
}
