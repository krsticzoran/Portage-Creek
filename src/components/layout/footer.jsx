import Container from './container'
import Image from 'next/image'
import Link from 'next/link'
import headerLinks from '@/data/headerLinks'

export default function Footer() {
  return (
    <footer className="pt-[120px] pb-9 ">
      <Container className="flex flex-col gap-[96px]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-[26px] max-w-[392px]">
            <Image
              src="/logo2.png"
              alt="Portage Creek Web Designs"
              width={254}
              height={70}
              className="object-contain"
            />
            <p className="text-base leading-[140%] tracking-[0]">
              Building high-performance, custom websites for small businesses and academics across
              Canada.
            </p>
            <div className="flex gap-5">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Portage Creek on X / Twitter"
              >
                <Image
                  src="/footer/icon1.png"
                  alt="X / Twitter - Portage Creek"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Portage Creek on LinkedIn"
              >
                <Image
                  src="/footer/icon2.png"
                  alt="LinkedIn - Portage Creek"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Portage Creek website"
              >
                <Image
                  src="/footer/icon3.png"
                  alt="Website - Portage Creek"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Portage Creek on Instagram"
              >
                <Image
                  src="/footer/icon4.png"
                  alt="Instagram - Portage Creek"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
          <nav aria-label="Footer navigation" className="flex gap-[64px]">
            <div className="flex flex-col gap-[37px]">
              <p className="font-medium text-[24px] leading-[100%] tracking-[0]">Quick Links</p>
              <div className="flex flex-col gap-[18px]">
                {headerLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base leading-[16px] tracking-[0]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[37px]">
              <p className="font-medium text-[24px] leading-[100%] tracking-[0]">Company</p>
              <div className="flex flex-col gap-[18px]">
                <Link href={'/terms-of-use'} className="text-base leading-[16px] tracking-[0]">
                  Terms of Use
                </Link>
                <Link href={'/privacy-policy'} className="text-base leading-[16px] tracking-[0]">
                  Privacy Policy
                </Link>
                <Link href={'/legals'} className="text-base leading-[16px] tracking-[0]">
                  Legals
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-[37px]">
              <p className="font-medium text-[24px] leading-[100%] tracking-[0]">Get in touch</p>
              <div className="flex flex-col gap-[18px]">
                <a
                  href={'tel:+14165550142'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base leading-[16px] tracking-[0] flex gap-[14px] items-center"
                  aria-label="Call Portage Creek at +1 (416) 555-0142"
                >
                  <Image src="/footer/call.png" alt="Phone icon" width={24} height={24} />
                  <span>+1 (416) 555-0142</span>
                </a>
                <a
                  href={'mailto:hello@portagecreek.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base leading-[16px] tracking-[0] flex gap-[14px] items-center"
                  aria-label="Email Portage Creek at hello@portagecreek.com"
                >
                  <Image src="/footer/message.png" alt="Email icon" width={24} height={24} />
                  <span>hello@portagecreek.com</span>
                </a>

                <a
                  href={'https://maps.google.com?q=Toronto'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base leading-[16px] tracking-[0] flex gap-[14px] items-center"
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
          <p className="pt-9 text-[16px] leading-base tracking-[0] text-center">
            © 2025 Portage Creek Web Designs. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
