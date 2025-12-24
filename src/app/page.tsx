import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import Footer from "@/components/Footer";
import MoreUseCases from "@/components/MoreUseCases";
import FaqQuestions from "@/components/FaqQuestions";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Comparison />
      <MoreUseCases/>
      <FaqQuestions/>
      <Footer />
    </div>
  );
}
