import Image from "next/image";

const faqData = [
  {
    question: "Are the videos watermarked on free tier?",
    answer:
      "Yes, free tier videos include a small FastFluence watermark. All paid plans remove the watermark and provide clean HD exports.",
  },
  {
    question: "How long does video generation take?",
    answer:
      "Most videos render in 2-3 minutes. Complex scripts or premium avatars may take up to 5 minutes. You'll get a notification when ready.",
  },
  {
    question: "Can I upload my own avatar?",
    answer:
      "Custom avatar training is available on Pro and Agency plans. This feature is on our roadmap for Q2 2025 with advanced customization options.",
  },

  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, all plans are month-to-month with no long-term contracts. Cancel anytime from your account dashboard. Unused video credits don't roll over.",
  },
  {
    question: "Do you support LinkedIn/TikTok exports?",
    answer:
      "Yes! We have built-in presets for TikTok (9:16), Instagram Reels, Meta Ads, LinkedIn video posts, and YouTube Shorts with optimal dimensions and formats.",
  },
  {
    question: "What if I need more videos?",
    answer:
      "You can upgrade your plan anytime or purchase additional video packs. Agency plans include volume discounts for high-usage scenarios.",
  },
  {
    question: "Are voices localized?",
    answer:
      "Absolutely! We launch with authentic Australian and New Zealand accents. UK voices coming Q2 2025, US regional dialects in Q3 2025.",
  },
  {
    question: "Is there API access?",
    answer:
      "API access is available on Agency plans for custom integrations. Full documentation and webhook support included for seamless workflow integration.",
  },
];

export default function FaqQuestions() {
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="relative mx-auto max-w-5xl">
        {/* Title */}
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "var(--font-sora)",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "124%",
            letterSpacing: "2px",
            background:
              "linear-gradient(94.18deg, #3BBCFF -3.9%, #936DFF 113.55%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Frequently Asked Questions
        </h2>

        {/* Subtitle */}
        <p
          className="text-center mb-12"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "24px",
            letterSpacing: "0%",
            color: "#1B263B",
          }}
        >
          Everything you need to know about FastFluence
        </p>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="flex gap-3 p-4 bg-[#FCFCFC]"
              style={{
                width: "100%",
                maxWidth: "432px",
                minWidth: "280px",
                height: "144px",
                borderRadius: "8px",
                border: "0px solid rgb(255, 255, 255)",
                boxShadow: "0px 26px 30px 0px #D9D9D933",
              }}
            >
              {/* Question and Answer */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center align-middle gap-1">
                  <div className="shrink-0 mt-1">
                    <Image
                      src="/faq/questionmark.svg"
                      alt="Question mark"
                      width={24}
                      height={24}
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 440,
                      fontSize: "16px",
                      lineHeight: "22px",
                      letterSpacing: "0%",
                      color: "#2D2D2D",
                    }}
                  >
                    {faq.question}
                  </h3>
                </div>
                <p className="w-[90%] mr-auto"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 350,
                    fontSize: "14px",
                    lineHeight: "22px",
                    letterSpacing: "-2%",
                    color: "#1B263B",

                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
