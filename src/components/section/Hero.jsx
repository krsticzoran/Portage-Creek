import Section from "../layout/Section";

export default function Hero() {
  return (
    <Section className="min-h-screen flex items-center justify-between">
<div className="max-w-[532px] gap-[46px] flex flex-col">
    <div className="flex flex-col gap-26px">
        <div className="bg-[#15162F] opacity-100 rounded-[23px] border border-white/10 px-5 py-2.5 gap-2.5 flex items-center w-fit">
 <div className="w-2 h-2 bg-[#0046FF] rounded-full"></div>
 <p className="font-switzer font-normal text-sm leading-[120%] text-white">
 Available For Project
</p>
</div>
    </div>
    <div></div>
    </div>  
     
 <div className="max-w-[616px]"></div> 
    </Section>
  );
}
