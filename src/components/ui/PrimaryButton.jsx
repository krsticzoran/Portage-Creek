import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PrimaryButton({ text = "Get Started", href = "#", variant = "default", className = "" }) {
  const base = "inline-flex items-center gap-[10.11px] rounded-[42.45px] px-[24.25px] py-[14.15px] text-[15.16px] leading-[120%] capitalize transition-colors duration-300";

  const variants = {
    default: `${base} bg-white text-primary-dark group-hover:bg-primary-dark group-hover:text-white`,
    blue: `${base} bg-primary-blue text-white group-hover:bg-primary-dark group-hover:text-white`,
  };

  const outer = `flex group cursor-pointer ${className}`;

  return (
    <div className={outer}>
      <Link href={href} className={`${variants[variant] ?? variants.default}`}>
        {text}
      </Link>

      <div className={`rounded-full h-[46.49px] w-[46.49px] inline-flex items-center justify-center transition-colors duration-300 ${variant === 'blue' ? 'bg-primary-blue text-white group-hover:bg-primary-dark' : 'bg-white text-primary-dark group-hover:bg-primary-dark group-hover:text-white'}`}>
        <ArrowRight className="w-[18px] h-[22px] scale-x-125 transition-colors duration-300 group-hover:text-white -rotate-45" />
      </div>
    </div>
  );
}
