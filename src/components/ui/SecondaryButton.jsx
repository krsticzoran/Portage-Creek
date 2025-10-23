import Link from "next/link";

export default function SecondaryButton({ text = "Secondary", href = "#", className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-[10.11px] rounded-[42.45px] px-[24.25px] py-[14.15px] text-[15.16px] leading-[120%] capitalize text-white bg-primary-dark hover:bg-white hover:text-primary-dark transition-colors duration-300 ${className}`}
    >
      {text}
    </Link>
  );
}
