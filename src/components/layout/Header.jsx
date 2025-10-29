import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../layout/container'
import PrimaryButton from '../ui/PrimaryButton'
import ThemeToggle from '@/components/ui/ThemeToggle'

import headerLinks from '@/data/headerLinks'
import MobileMenu from './MobileMenu'

export default function Header() {
  return (
    <header className="fixed top-7 lg:top-[34px] left-0 flex justify-center bg-transparent  z-50 w-full  transition-colors duration-300">
      <div className="w-[calc(100%-35px)] xl:w-[1348px] xl:-ml-12 xl:pl-12 flex bg-white h-[64px] lg:h-[70px] rounded-[54px] xl:rounded-[72px] border border-[#0046FF0F] shadow-[0_4px_39.4px_0_#00000017]">
        <Container className="flex items-center justify-between py-6 !pl-[28px] !pr-[12.5px] xl:!px-0">
          <div className="flex items-center gap-[14px]">
            <Link href="/">
              <Image
                src="/logo1.png"
                alt="Logo"
                width={167}
                height={45.55}
                className="w-[125px] h-[34px] lg:w-[167px] lg:h-[45.55px]"
              />
            </Link>
          </div>

          <nav className="lg:flex items-center gap-6 hidden">
            <ul className="flex items-center gap-6 text-sm font-medium text-white">
              {headerLinks.map((item, i) => (
                <Fragment key={item.href}>
                  <li>
                    <Link
                      href={item.href}
                      className="text-[#091F35] font-medium text-base leading-[1.15] tracking-[0.02em] text-center"
                    >
                      {item.label}
                    </Link>
                  </li>

                  {i < headerLinks.length - 1 && (
                    <li>
                      <div className="w-[1px] h-[13px] bg-black/10" />
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-3 xl:pr-4">
            <PrimaryButton text="Get Started" href="/contact" variant="blue" />
              <ThemeToggle />
          </div>

          {/* Mobile menu component */}
          <MobileMenu />
        </Container>
      </div>
    </header>
  )
}
