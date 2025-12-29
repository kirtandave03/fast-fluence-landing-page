"use client";

import { useState } from "react";
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
import ScrollFadeIn from "@/components/ScrollFadeIn";
import WaitlistSuccessModal from "@/components/WaitlistSuccessModal";
import Toast from "@/components/Toast";

export default function Home() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  return (
    <div className="min-h-screen w-full bg-white font-sans overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <ScrollFadeIn>
          <Hero />
        </ScrollFadeIn>
        <ScrollFadeIn delay={100}>
          <HowItWorks />
        </ScrollFadeIn>
        <ScrollFadeIn delay={200}>
          <Comparison />
        </ScrollFadeIn>
        <ScrollFadeIn delay={100}>
          <WhyFastFluence />
        </ScrollFadeIn>
        <ScrollFadeIn delay={200}>
          <Create />
        </ScrollFadeIn>
        <ScrollFadeIn delay={100}>
          <WhosItFor />
        </ScrollFadeIn>
        <ScrollFadeIn delay={200}>
          <MoreUseCases />
        </ScrollFadeIn>
        <ScrollFadeIn delay={100}>
          <FaqQuestions />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <Footer
            onWaitlistSuccess={() => setShowSuccessModal(true)}
            onWaitlistError={(message) => setToast({ message, type: "error" })}
          />
        </ScrollFadeIn>
      </div>
      {showSuccessModal && (
        <WaitlistSuccessModal onClose={() => setShowSuccessModal(false)} />
      )}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
