import Image from "next/image";
import Link from "next/link";
import Container from "../layout/container";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

export default function Header() {
  return (
    <header
      className="fixed top-[34px] left-0 flex justify-center bg-transparent  z-50 w-full  transition-colors duration-300"
    >
      <div className="w-[1348px] -ml-12 pl-12 flex bg-white  h-[70px] rounded-[72px] ">
        <Container className="flex items-center justify-between py-6">
          <div className="flex items-center gap-[14px]">
            <Link href="/">
              <Image src="/logo1.png" alt="Logo" width={167} height={45.55} />
            </Link>
            <div></div>
          </div>

          <nav className="flex items-center gap-6">
            <ul className="flex items-center gap-6 text-sm font-medium text-white">
              <li><Link href="/about" className="text-[#091F35] font-medium text-base leading-[1.15] tracking-[0.02em] text-center">About</Link></li>
              <li><div className="w-[1px] h-[13px] bg-black/10"></div></li>
              <li><Link href="/services" className="text-[#091F35] font-medium text-base leading-[1.15] tracking-[0.02em] text-center">Services</Link></li>
              <li><div className="w-[1px] h-[13px] bg-black/10"></div></li>
              <li><Link href="/subscription" className="text-[#091F35] font-medium text-base leading-[1.15] tracking-[0.02em] text-center">Subscription</Link></li>
              <li><div className="w-[1px] h-[13px] bg-black/10"></div></li>
              <li><Link href="/portfolio" className="text-[#091F35] font-medium text-base leading-[1.15] tracking-[0.02em] text-center">Portfolio</Link></li>
            </ul> 
          </nav>
          <div className="flex items-center gap-3 pr-4">
            <SecondaryButton text="Contact" href="#" variant="soft" />
            <PrimaryButton text="Free Quote" href="#" variant="blue" />
          </div>
        </Container>
      </div>
    </header>
  );
}
