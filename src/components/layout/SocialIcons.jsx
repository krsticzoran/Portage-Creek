import Image from 'next/image'

// invertInDark: when true (default) apply dark-mode filter so icons become white in dark mode.
// When false, icons keep their original color in both themes (used by MobileMenu).
export default function SocialIcons({
  className = 'flex gap-5',
  size = 20,
  invertInDark = true,
} = {}) {
  const iconClass = invertInDark ? 'filter dark:brightness-0 dark:invert' : ''

  return (
    <div className={className}>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Portage Creek on X / Twitter"
      >
        <Image
          src="/footer/icon2.png"
          alt="X / Twitter - Portage Creek"
          width={size}
          height={size}
          className={iconClass}
        />
      </a>

      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Portage Creek on Instagram"
      >
        <Image
          src="/footer/icon1.png"
          alt="Instagram - Portage Creek"
          width={size}
          height={size}
          className={iconClass}
        />
      </a>

      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Portage Creek on LinkedIn"
      >
        <Image
          src="/footer/icon3.png"
          alt="LinkedIn - Portage Creek"
          width={size}
          height={size}
          className={iconClass}
        />
      </a>

      <a
        href="https://www.threads.net/@portage_creek"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Threads"
      >
        <Image
          src="/footer/icon4.png"
          alt="Threads - Portage Creek"
          width={size}
          height={size}
          className={iconClass}
        />
      </a>
    </div>
  )
}
