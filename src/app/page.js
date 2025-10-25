import Hero from "../components/section/Hero";
import WhatWeDo from "@/components/section/WhatWeDo";
import WhyChooseUs from "@/components/section/WhyChooseUs";
import Pricing from "@/components/section/Pricing";
import About from "@/components/section/About";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <WhyChooseUs />
      <Pricing />
      <About />
    </>
  );
}
