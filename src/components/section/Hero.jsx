import Link from "next/link";
import Image from "next/image";
import Container from "../layout/container";
import Badge from "../ui/Badge";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center">
       {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('home/hero/background.webp')" }}
        aria-hidden
      />
    <Container className="flex items-center justify-between ">
     
      <div className="max-w-[532px]  flex flex-col text-white gap-[92px]">
        <div className="flex flex-col gap-[26px]">
          <Badge>Available For Project</Badge>
          <h1 className="font-semibold text-[64px] leading-[110%]">Custom Websites Built for Speed & Precision.</h1>
          <p className="font-medium text-[32px] leading-[110%]">CUSTOM DESIGN. CUSTOM CODE.</p>
          <p className="font-normal text-[18px] leading-[140%]">We design and develop fast, responsive, and handcrafted websites that help Canadian small businesses and academics grow with confidence.</p>
          <div className="flex gap-3">
            <PrimaryButton text="Get Started" href="#" />

            <SecondaryButton text="About us" href="#" />
          </div>
        </div>
        <div className="flex items-center gap-4 h-[47px]">
         <div className="relative w-full  sm:max-w-[132px] aspect-[132/47]  overflow-hidden">
  <Image 
    src="/home/hero/customers.png" 
    fill 
    alt="Customers" 
    className="object-contain scale-125" 
  />
</div>
         <div className="font-medium text-base leading-[16px] tracking-[0]">
  <div className="flex items-center gap-2 ">
    {/* Stars */}
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
    {/* Rating */}
    <span >4.9/5.0</span>
  </div>
  <h6 >Trusted by 10,840 Designers</h6>
</div>
        </div>
      </div>

      <div className="max-w-[616px]">s</div>
    </Container>
    </section>
  );
}
