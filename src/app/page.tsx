import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyFastFluence from "@/components/WhyFastFluence";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import Create from "@/components/Create";
import WhosItFor from "@/components/WhosItFor";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <HowItWorks />
        <Comparison />
        <WhyFastFluence />
        <Create />
        <WhosItFor />
      </div>
    </div>
  );
}
