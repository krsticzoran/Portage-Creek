import Image from 'next/image'

export default function SocialIcons({ className = 'flex gap-5', size = 20 } = {}) {
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
        />
      </a>

      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Portage Creek on Instagram"
      >
        <Image src="/footer/icon1.png" alt="Instagram - Portage Creek" width={size} height={size} />
      </a>

      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Portage Creek on LinkedIn"
      >
        <Image src="/footer/icon3.png" alt="LinkedIn - Portage Creek" width={size} height={size} />
      </a>

      <a
        href="https://www.threads.net/@portage_creek"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Follow us on Threads"
>
  <Image src="/footer/icon4.png" alt="Threads - Portage Creek" width={size} height={size} />
</a>
    </div>
  )
}
