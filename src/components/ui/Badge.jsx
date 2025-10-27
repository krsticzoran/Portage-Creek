import Image from 'next/image'

export default function Badge({ children = 'Badge', className = '', dot = false, fire = false }) {
  return (
    <div
      className={`bg-primary-dark opacity-100 rounded-[23px] border border-white/10 px-[18px] sm:px-5 py-[9px] sm:py-2.5 gap-[9px] sm:gap-2.5 flex items-center w-fit text-white ${className}`}
    >
      {fire ? (
        <Image src="/fire.png" alt="fire" width={14} height={18} className="mr-3 object-contain" />
      ) : dot ? (
        <div className="w-2 h-2 bg-primary-blue rounded-full mr-3" />
      ) : (
        <span className="mr-3 text-sm leading-none">//</span>
      )}
      <p className="font-switzer font-normal text-sm leading-[120%] text-white">{children}</p>
    </div>
  )
}
