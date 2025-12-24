import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyFastFluence from "@/components/WhyFastFluence";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import Footer from "@/components/Footer";
import MoreUseCases from "@/components/MoreUseCases";
import FaqQuestions from "@/components/FaqQuestions";
import Create from "@/components/Create";
import WhosItFor from "@/components/WhosItFor";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white font-sans overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <HowItWorks />
        <Comparison />
        <WhyFastFluence />
        <Create />
        <WhosItFor />
        <MoreUseCases />
        <FaqQuestions />
        <Footer />
      </div>
    </div>
  );
}
