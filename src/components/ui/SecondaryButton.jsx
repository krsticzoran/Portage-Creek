import Link from 'next/link'

export default function SecondaryButton({
  text = 'Secondary',
  href = '#',
  variant = 'dark',
  className = '',
}) {
  const base =
    'inline-flex items-center gap-[10.11px] rounded-[42.45px] px-[24.25px] py-[14.15px] text-[15.16px] leading-[120%] capitalize transition-colors duration-300'

  const variants = {
    dark: `${base} text-white bg-primary-dark hover:bg-white hover:text-primary-dark`,
    soft: `${base} text-primary-dark bg-[var(--soft-blue-100)] hover:bg-primary-dark hover:text-white`,
    outline: `${base} bg-transparent text-primary-dark border border-[1px] border-primary-dark hover:bg-primary-dark hover:text-white`,
  }

  const classes = `${variants[variant] ?? variants.dark} ${className}`

  return (
    <Link href={href} className={classes}>
      {text}
    </Link>
  )
}
