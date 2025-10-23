import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PrimaryButton({ text = "Get Started", href = "#", className = "" }) {
  return (
    <div className={`flex group cursor-pointer ${className}`}>
      <Link
        href={href}
        className="inline-flex items-center gap-[10.11px] rounded-[42.45px] px-[24.25px] py-[14.15px] text-[15.16px] leading-[120%] capitalize bg-white text-primary-dark transition-colors duration-300 group-hover:bg-primary-dark group-hover:text-white"
      >
        {text}
      </Link>

      <div className="rounded-full h-[46.49px] w-[46.49px] bg-white text-primary-dark inline-flex items-center justify-center transition-colors duration-300 group-hover:bg-primary-dark group-hover:text-white">
        <ArrowRight className="w-[18px] h-[22px] scale-x-125 transition-colors duration-300 group-hover:text-white -rotate-45" />
      </div>
    </div>
  );
}
