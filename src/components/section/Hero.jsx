import Image from 'next/image'
import Container from '../layout/container'
import Badge from '../ui/Badge'
import PrimaryButton from '../ui/PrimaryButton'
import SecondaryButton from '../ui/SecondaryButton'

export default function Hero() {
  return (
    <section className="h-[920px] relative flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/home/hero/background.webp')" }}
        aria-hidden
      />
      <Container className="flex items-center justify-between h-full">
        <div className="mt-[104px] h-full flex items-center">
          <div className="max-w-[532px]  flex flex-col text-white gap-[92px]">
            <div className="flex flex-col gap-[26px]">
              <Badge dot>Available For Project</Badge>
              <h1 className="font-semibold text-[64px] leading-[110%]">
                Custom Websites Built for Speed & Precision.
              </h1>
              <p className="font-medium text-[32px] leading-[110%]">CUSTOM DESIGN. CUSTOM CODE.</p>
              <p className="font-normal text-[18px] leading-[140%]">
                We design and develop fast, responsive, and handcrafted websites that help Canadian
                small businesses and academics grow with confidence.
              </p>
              <div className="flex gap-3">
                <PrimaryButton text="Get Started" href="#" />

                <SecondaryButton text="About us" href="#" />
              </div>
            </div>
            <div className="flex items-center gap-4 h-[47px]">
              <div className="relative w-full  sm:max-w-[132px] aspect-[132/47]  overflow-hidden">
                <Image
                  src="/home/hero/customers.png"
                  fill
                  alt="Customers"
                  className="object-contain scale-125"
                />
              </div>
              <div className="font-medium text-base leading-[16px] tracking-[0]">
                <div className="flex items-center gap-2 ">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  {/* Rating */}
                  <span className="text-sm leading-[16px]">4.9/5.0</span>
                </div>
                <h6 className="text-sm leading-[16px]">Trusted by 10,840 Designers</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[616px] flex  items-end justify-center gap-4">
          <div className="absolute top-0 left-0 h-[69px] w-[616px] bg-gradient-to-b from-[#000818] to-transparent pointer-events-none z-10"></div>

          <div className="absolute bottom-0 left-0 w-[616px] h-[69px] bg-gradient-to-b from-transparent to-[#001F75] pointer-events-none z-10"></div>
          <div className="w-1/2 flex flex-col gap-[14px]">
            <div className="w-full">
              <Image
                src="/home/hero/hero1.webp"
                alt="Hero 1"
                width={301}
                height={308}
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="w-full">
              <Image
                src="/home/hero/hero2.webp"
                alt="Hero 2"
                width={301}
                height={308}
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="w-full">
              <Image
                src="/home/hero/hero3.webp"
                alt="Hero 3"
                width={301}
                height={308}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-[14px]">
            <div className="w-full">
              <Image
                src="/home/hero/hero4.webp"
                alt="Hero 4"
                width={301}
                height={198}
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="w-full">
              <Image
                src="/home/hero/hero5.webp"
                alt="Hero 5"
                width={301}
                height={308}
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="w-full">
              <Image
                src="/home/hero/hero6.webp"
                alt="Hero 6"
                width={301}
                height={308}
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="w-full">
              <Image
                src="/home/hero/hero7.webp"
                alt="Hero 7"
                width={301}
                height={64}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
