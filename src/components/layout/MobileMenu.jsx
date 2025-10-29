'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Container from '../layout/container'
import PrimaryButton from '../ui/PrimaryButton'
import headerLinks from '@/data/headerLinks'
import SocialIcons from './SocialIcons'
import ThemeToggle from '../ui/ThemeToggle'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* mobile menu open button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="w-[50.5px] h-[50.5px] bg-primary-dark flex flex-col items-center justify-center gap-[9px] rounded-full lg:hidden cursor-pointer"
      >
        <span className="block w-[24px] h-[2px] bg-white"></span>
        <span className="block w-[24px] h-[2px] bg-white"></span>
      </button>

      {/* Mobile menu overlay */}
      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 z-50 bg-black/40  lg:hidden">
          <div className="absolute inset-0 overflow-auto">
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full sm:max-w-md bg-white h-full sm:ml-auto"
            >
              <Container className="flex flex-col gap-6 py-6 h-full">
                <div className="flex items-center justify-between">
                  {/* close button */}
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="w-[50.5px] h-[50.5px] bg-primary-dark flex items-center justify-center rounded-full cursor-pointer"
                  >
                    <span className="block w-[18px] h-[2px] bg-white rotate-45 transform origin-center"></span>
                    <span className="block w-[18px] h-[2px] bg-white -rotate-45 transform origin-center absolute"></span>
                  </button>
                  <ThemeToggle className="h-[50.5px]" />
                </div>

                <nav className="flex flex-col flex-1">
                  {headerLinks.map((item) => (
                    <div key={item.href} className="flex flex-col">
                      {/* separator before each link */}
                      <div className="w-full h-[1px] bg-black/10 my-3" />
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="py-3 leading-[115%] tracking-[0.02em] font-medium text-primary-dark"
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}

                  <div className="mt-6">
                    <PrimaryButton text="Get Started" href="/contact" variant="blue" size="big" />
                  </div>
                  <SocialIcons className="mb-6 mt-auto flex gap-5" size={20} />
                </nav>
              </Container>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
