'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function ThemeToggle({ className = '' }) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggle = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  // default dimensions and styling; can be overridden by passing `className`
  const baseClasses =
    'h-[46.49px] inline-flex items-center gap-3 rounded-[42.45px] px-[14px] bg-primary-dark cursor-pointer'

  return (
    <button onClick={toggle} aria-label="Toggle theme" className={`${baseClasses} ${className}`}>
      {/* Light icon */}
      <span
        className={`rounded-full w-9 h-9 inline-flex items-center justify-center transition-colors duration-200 ${
          resolvedTheme === 'light' ? 'bg-primary-blue' : 'bg-transparent'
        }`}
      >
        <Image
          src="/light.png"
          alt="Light"
          width={18}
          height={18}
          className={`transition-opacity duration-200 ${
            resolvedTheme === 'light'
              ? 'opacity-100 filter brightness-0 invert'
              : 'opacity-60 filter brightness-0 invert'
          }`}
        />
      </span>

      {/* Dark icon  */}
      <span
        className={`rounded-full w-9 h-9 inline-flex items-center justify-center transition-colors duration-200 ${
          resolvedTheme === 'dark' ? 'bg-primary-blue' : 'bg-transparent'
        }`}
      >
        <Image
          src="/dark.png"
          alt="Dark"
          width={18}
          height={18}
          className={`transition-opacity duration-200 ${
            resolvedTheme === 'dark'
              ? 'opacity-100 filter brightness-0 invert'
              : 'opacity-60 filter brightness-0 invert'
          }`}
        />
      </span>
    </button>
  )
}
