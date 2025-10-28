import Container from '../layout/container'
import Badge from '../ui/Badge'
import ScrollTimeline from '../ui/ScrollTimeline'
import Image from 'next/image'

export default function HowWeWork() {
  return (
    <section className="bg-[#F3F3F3] py-[70px] lg:py-[120px] overflow-hidden">
      <Container className="flex flex-col gap-[72px]">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-[26px] items-center">
            <Badge>How We Work</Badge>
            <h2 className="max-w-[748px] text-primary-dark font-semibold text-[30px] sm:text-[60px] leading-[1.1] tracking-[0em] text-center">
              Our Working Process
            </h2>
          </div>
          <p className="text-center text-primary-dark max-w-[556px] sm:text-lg leading-[1.4] tracking-[0em]">
            Whether you're launching your first website or need ongoing support, our plans are built
            to fit your goals. No hidden fees, no confusing tiers — just clear value and dependable
            results.
          </p>
        </div>
        <div className="relative max-w-[462px] lg:max-w-full pl-[38px] lg:pl-0 mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1075px] mx-auto lg:mt-10" >
            <div className="max-w-[462px] lg:w-[45%] flex flex-col gap-6 bg-white p-3 lg:bg-transparent p-0 rounded-[9.3px]">
              <div className="flex justify-center items-center bg-primary-dark w-[44px] h-[44px] sm:w-[57px] sm:h-[57px] text-white font-medium text-[14.5px] sm:text-[18.61px] leading-[110%] tracking-[0] text-center rounded-full">
                01
              </div>
              <div className="flex flex-col gap-[26px]">
                <h3 className="font-semibold text-xl sm:text-[24px] leading-[110%] tracking-[0]">
                  Discover & Plan
                </h3>
                <p className="text-[15px] sm:text-base leading-[140%] tracking-[0]">
                  We start by understanding your goals, audience, and brand vision. Through research
                  and strategy sessions, we define a clear roadmap that ensures your website meets
                  your business objectives from day one.
                </p>
              </div>
            </div>
            <div className='lg:w-[45%] mt-8 lg:mt-0'>
              <Image
                src="/home/how-we-work/illustration1.png"
                alt="Discover & Plan"
                width={423}
                height={289}
                 sizes="(max-width: 1200px) calc(100vw - 70px), 650px"
                 loading="lazy"
              />
            </div>
          </div>
           <div className="flex flex-col-reverse lg:flex-row justify-between items-center max-w-[1075px] mx-auto lg:mt-40">
            <div className='lg:w-[45%] mt-8 lg:mt-0'>
              <Image
                src="/home/how-we-work/illustration2.png"
                alt="Discover & Plan"
                width={443}
                height={359}
                 sizes="(max-width: 1200px) calc(100vw - 70px), 650px"
                 loading="lazy"
              />
            </div>
            <div className="max-w-[462px] lg:w-[45%] flex flex-col gap-6 mt-8 lg:mt-0 bg-white p-3 lg:bg-transparent p-0 rounded-[9.3px]">
              <div className="flex justify-center items-center bg-primary-dark w-[44px] h-[44px] sm:w-[57px] sm:h-[57px] text-white font-medium text-[14.5px] sm:text-[18.61px] leading-[110%] tracking-[0] text-center rounded-full">
                02
              </div>
              <div className="flex flex-col gap-[26px]">
                <h3 className="font-semibold text-xl sm:text-[24px] leading-[110%] tracking-[0]">
                 Design & Develop
                </h3>
                <p className="text-[15px] sm:text-base leading-[140%] tracking-[0]">
                 Our team crafts wireframes and visual layouts before bringing them to life with clean, responsive code. Every detail — from typography to page speed — is optimized for performance and usability.
                </p>
              </div>
            </div>
            
          </div>
           <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1075px] mx-auto mt-8 lg:mt-40">
            <div className="max-w-[462px] lg:w-[45%] flex flex-col gap-6 bg-white p-3 lg:bg-transparent p-0 rounded-[9.3px]">
              <div className="flex justify-center items-center bg-primary-dark w-[44px] h-[44px] sm:w-[57px] sm:h-[57px] text-white font-medium text-[14.5px] sm:text-[18.61px] leading-[110%] tracking-[0] text-center rounded-full">
                03
              </div>
              <div className="flex flex-col gap-[26px]">
                <h3 className="font-semibold text-xl sm:text-[24px] leading-[110%] tracking-[0]">
                 Launch & Support
                </h3>
                <p className="text-[15px] sm:text-base leading-[140%] tracking-[0]">
                 Once everything is tested and approved, your site goes live. But our work doesn’t end there — we continue to monitor, maintain, and refine your site so it keeps performing beautifully.
                </p>
              </div>
            </div>
            <div className='lg:w-[45%] mt-8 lg:mt-0'>
              <Image
                src="/home/how-we-work/illustration3.png"
                alt="Discover & Plan"
                width={380}
                height={288}
                 sizes="(max-width: 1200px) calc(100vw - 70px), 650px"
                 loading="lazy"
              />
            </div>
          </div>
          <ScrollTimeline />
        </div>
      </Container>
    </section>
  )
}
