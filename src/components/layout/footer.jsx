import Container from './container'
import Image from 'next/image'
import SocialIcons from './SocialIcons'
import Link from 'next/link'
import headerLinks from '@/data/headerLinks'

export default function Footer() {
  return (
    <footer className="pt-[70px] lg:pt-[120px] pb-9 w-full overflow-hidden">
      <Container className="flex flex-col gap-6 lg:gap-[96px]">
        <div className="flex justify-between flex-col lg:flex-row gap-[42px] lg:gap-0">
          <div className="flex flex-col gap-[26px] max-w-[392px]">
            <Image
              src="/logo2.png"
              alt="Portage Creek Web Designs"
              width={254}
              height={70}
              className="object-contain w-[219px] sm:w-[254px] h-auto"
              
            />
            <p className="text-[15px] sm:text-base leading-[140%] tracking-[0]">
              Building high-performance, custom websites for small businesses and academics across
              Canada.
            </p>
            <SocialIcons className="flex gap-5" size={20} />
          </div>
          <nav aria-label="Footer navigation" className="flex flex-col sm:flex-row gap-6 sm:gap-[64px]">
            <div className="flex flex-col gap-[37px]">
              <p className="font-medium text-xl sm:text-[24px] leading-[100%] tracking-[0]">Quick Links</p>
              <div className="flex flex-col gap-[18px]">
                {headerLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[15px] sm:text-base leading-[16px] tracking-[0]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[37px]">
              <p className="font-medium text-xl sm:text-[24px] leading-[100%] tracking-[0]">Company</p>
              <div className="flex flex-col gap-[18px]">
                <Link href={'/terms-of-use'} className="text-[15px] sm:text-base leading-[16px] tracking-[0]">
                  Terms of Use
                </Link>
                <Link href={'/privacy-policy'} className="text-[15px] sm:text-base leading-[16px] tracking-[0]">
                  Privacy Policy
                </Link>
                <Link href={'/legals'} className="text-[15px] sm:text-base leading-[16px] tracking-[0]">
                  Legals
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-[37px]">
              <p className="font-medium text-xl sm:text-[24px] leading-[100%] tracking-[0]">Get in touch</p>
              <div className="flex flex-col gap-[18px]">
                <a
                  href={'tel:+14165550142'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] sm:text-base leading-[16px] tracking-[0] flex gap-[14px] items-center"
                  aria-label="Call Portage Creek at +1 (416) 555-0142"
                >
                  <Image src="/footer/call.png" alt="Phone icon" width={24} height={24} />
                  <span>+1 (416) 555-0142</span>
                </a>
                <a
                  href={'mailto:hello@portagecreek.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] sm:text-base leading-[16px] tracking-[0] flex gap-[14px] items-center"
                  aria-label="Email Portage Creek at hello@portagecreek.com"
                >
                  <Image src="/footer/message.png" alt="Email icon" width={24} height={24} />
                  <span>hello@portagecreek.com</span>
                </a>

                <a
                  href={'https://maps.google.com?q=Toronto'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] sm:text-base leading-[16px] tracking-[0] flex gap-[14px] items-center"
                  aria-label="View Portage Creek location on Google Maps"
                >
                  <Image src="/footer/location.png" alt="Location icon" width={24} height={24} />
                  <span>Toronto, Canada</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div>
          <div className="border border-black opacity-[0.1]"></div>
          <p className="pt-9 text-[15px] sm:text-base leading-base tracking-[0] text-center">
            © 2025 Portage Creek Web Designs. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
