import Image from "next/image"
import Container from "../layout/container"
import Badge from "../ui/Badge"
import PrimaryButton from "../ui/PrimaryButton"
import plans from "../../data/pricingPlans";

export default function Pricing() {
    return (
        <section className="py-[120px] bg-[#F3F3F3]">
              <Container className="flex flex-col gap-[72px]">
                <div className="flex flex-col items-center gap-[26px]">
                  <Badge>Subscription Plan</Badge>
                  <h2 className="max-w-[748px] text-primary-dark font-semibold text-[60px] leading-[1.1] tracking-[0em] text-center">Flexible Pricing for Every Stage of Growth</h2>
                  <p className="text-center text-primary-dark max-w-[748px] text-lg leading-[1.4] tracking-[0em]">Whether you’re launching your first website or need ongoing support, our plans are built to fit your goals. No hidden fees, no confusing tiers — just clear value and dependable results.</p>
                </div>
                <div className="flex gap-5 h-full">
                  {plans.map((plan) => (
                    <div key={plan.id} className="relative w-1/3 rounded-[12px] bg-white flex flex-col gap-[24px] px-6 py-8 "  
                     style={plan.id === 2 ? { backgroundImage: "url('/home/hero/background.webp')", backgroundColor: 'rgba(0,70,255,0.62)' } : {}}
                    >
                        {plan.id === 2 && (<div className="absolute rounded-[12px] inset-0 z-[5] pointer-events-none overflow-hidden" style={{ backgroundColor: 'rgba(0,70,255,0.62)' }} aria-hidden />)}  
                  
                      <div className="flex flex-col gap-4 z-10">
                       <p
  className={`font-semibold text-[13px] leading-[110%] uppercase ${
    plan.id === 2 ? "text-white" : "text-primary-dark"
  }`}
>
  {plan.name}
</p>

                        <div className="flex items-end gap-4">
                          <p
  className={`font-semibold text-[48px] leading-[100%] tracking-[-0.05em] capitalize ${
    plan.id === 2 ? "text-white" : "text-primary-dark"
  }`}
>
 {plan.price}
</p>

                          
                        <p
  className={`font-[Inter] font-normal text-[14.89px] leading-[130%] tracking-[-0.005em] ${
    plan.id === 2 ? "text-[#FFFFFFB8]" : "text-primary-dark"
  }`}
>
  {plan.cadence}
</p>

                        </div>
                      <p
  className={`font-normal text-[15px] leading-[130%] tracking-[0] ${
    plan.id === 2 ? "text-white" : "text-primary-dark"
  }`}
>
  {plan.description}
</p>

                      </div>

                      <div className="border border-[#15162F26]"></div>

                      <div className="flex flex-col gap-3 z-10">
                      <p
  className={`text-[15px] leading-[130%] tracking-[0] ${
    plan.id === 2 ? "text-white" : "text-primary-dark"
  }`}
>
  What’s Included:
</p>

                        <div>
                          <ul className="flex flex-col gap-3">
                            {plan.features.map((f, idx) => (
                              <li key={idx} className="flex gap-4 items-start">
                              <div
  className={`w-[20px] h-[20px] rounded-full flex items-center justify-center ${
    f.included
      ? plan.id === 2
        ? "bg-white"
        : "bg-[#0046FF]"
      : "bg-[#FF0000]"
  }`}
>
  <Image
    src={
      f.included
        ? plan.id === 2
          ? "/home/pricing/check-mark-primary.png" 
          : "/home/pricing/check-mark.png"
        : "/home/pricing/cancel.png"
    }
    alt={f.included ? "Check" : "Cancel"}
    width={f.included ? 9 : 8}
    height={f.included ? 8 : 8}
  />
</div>

                            <p
  className={`font-medium italic text-[13.96px] leading-[130%] tracking-[-0.005em] ${
    plan.id === 2 ? "text-white" : "text-primary-dark"
  }`}
>
  {f.label}
</p>

                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-auto z-10">
                        <PrimaryButton text="Let’s Get Started" variant={plan.id === 2 ? "default" : "border"} className="mx-auto" />
                      </div>
                    </div>
                  ))}
                </div>
                
                </Container>
        </section>
    )
    
    
}