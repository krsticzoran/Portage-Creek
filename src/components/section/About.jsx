import Container from '../layout/container'
import Badge from '../ui/Badge'
import PrimaryButton from '../ui/PrimaryButton'
import SecondaryButton from '../ui/SecondaryButton'
import aboutCards from '../../data/aboutCards'
import Image from 'next/image'

export default function About() {
  return (
    <section className="py-[70px] lg:py-[120px] dark:bg-primary-dark transition-colors duration-200 overflow-hidden">
      <Container className="flex flex-col gap-[42px] lg:gap-[72px]">
        <div className="flex flex-col lg:flex-row gap-[42px] lg:gap-0 justify-between  items-center">
          <div className="flex flex-col gap-[18px] sm:gap-8">
            <div className="flex flex-col gap-[18px] sm:gap-[26px]">
              <Badge variant="filled">About Portage Creek</Badge>
              <h2 className="max-w-[469px] text-primary-dark font-semibold text-[30px] sm:text-[60px] leading-[1.1] tracking-[0em] dark:text-white transition-colors duration-200">
                Where Design Meets <span className="text-muted-gray">Precision.</span>
              </h2>
            </div>
            <p className="text-primary-dark max-w-[556px] sm:text-lg leading-[1.4] tracking-[0em] dark:text-white transition-colors duration-200">
              We’re a web development studio dedicated to bringing digital ideas to life through
              elegant code and purposeful design. Inspired by the calm yet powerful flow of a creek,
              our work embodies clarity, adaptability, and momentum.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <PrimaryButton text="Schedule A Call" href="/contact" variant="blue" icon={true} />
              <SecondaryButton
                text="Explore Subscription"
                href="/pricing"
                variant="outline"
                className="w-fit"
              />
            </div>
          </div>
          <div>
            <Image
              src="/home/about/performance.webp"
              alt="About Portage Creek"
              width={670}
              height={492}
              sizes="(max-width: 1200px) calc(100vw - 70px), 650px"
              loading="lazy"
              className='rounded-[13px]'
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-2.5 sm:gap-4 p-2.5 rounded-[10px] bg-[#F6F6F6]">
          {aboutCards.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-[0px_4px_4px_0px_#00000014] rounded-[13px] h-[170px] sm:h-[210px] p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between">
                  <p className="font-semibold text-[30px] sm:text-[52px] leading-[110%] tracking-[0]">
                    {card.value}
                  </p>
                  <div className="flex gap-[6.9px] justify-center items-center">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className={`${
                          i === card.id - 1 ? 'bg-primary-blue' : 'bg-[#F0F4FF]'
                        } h-[10.2px] w-[10.2px] rounded-full`}
                      />
                    ))}
                  </div>
                </div>
                <p className="font-semibold text-[15px] leading-[120%] tracking-[0]">
                  {card.subheading}
                </p>
              </div>
              <p className="font-medium text-[15px] leading-[140%] tracking-[0]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
