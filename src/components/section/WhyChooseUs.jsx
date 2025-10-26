import Container from '../layout/container'
import Image from 'next/image'
import Badge from '../ui/Badge'
import features from '../../data/whyChooseFeatures'
import PrimaryButton from '../ui/PrimaryButton'

export default function WhyChooseUs() {
  return (
    <section className="py-[120px]">
      <Container className="flex gap-[98px] h-full">
        <div className="relative w-1/2  overflow-hidden rounded-[12px]">
          <Image
            src="/home/why-choose-us/why-choose-us.webp"
            alt="Why Choose Us"
            fill
            className="object-cover"
          />

          <div
            className="absolute bottom-[26px] left-[26px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[45px] rounded-[4px] flex items-center  w-fit
                        text-white pl-1 pr-4 py-2"
          >
            <div className="relative w-full  sm:max-w-[132px] aspect-[132/47]  overflow-hidden h-[47px]">
              <Image
                src="/home/why-choose-us/customers.png"
                fill
                alt="Customers"
                className="object-contain  h-[47px] w-full"
              />
            </div>
            <div className=" font-medium text-base leading-[16px] tracking-[0] w-full">
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
              <h6 className="text-sm leading-[16px]">1000+ Satisfied Customers</h6>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-9">
          <div className="flex flex-col gap-[26px]">
            <Badge>Why Choose Portage Creek</Badge>
            <h2 className=" text-primary-dark font-semibold text-[60px] leading-[1.1] tracking-[0em] ">
              A Studio That Flows With You.{' '}
            </h2>
            <p className="text-primary-dark text-lg leading-[1.4] tracking-[0em]">
              We’re not just developers — we’re partners in your growth. From the first sketch to
              launch day and beyond, Portage Creek Web Designs focuses on clarity, speed, and
              craftsmanship that stands the test of time. Every project is guided by precision,
              transparency, and genuine care for your success.
            </p>
          </div>
          <div className="border border-black/10"></div>
          <div className="grid grid-cols-2 gap-2.5">
            {features.map((f) => (
              <div
                key={f.id}
                className="bg-[rgba(240,244,255,1)] rounded-[13px] p-[16px] flex flex-col justify-between h-[130px]"
              >
                <div className="flex gap-4 items-center">
                  <Image src={f.icon} alt={`Icon ${f.id}`} width={30} height={30}  style={{ 
    filter: 'invert(18%) sepia(99%) saturate(6527%) hue-rotate(228deg) brightness(102%) contrast(108%)' 
  }} />
                  <h6 className="font-semibold text-xl leading-[110%] tracking-[0]">{f.title}</h6>
                </div>
                <p className="text-sm font-medium leading-[1.3]">{f.description}</p>
              </div>
            ))}
          </div>
          <PrimaryButton text="Schedule A Call" href="/contact" variant="blue" icon={true} />
        </div>
      </Container>
    </section>
  )
}
