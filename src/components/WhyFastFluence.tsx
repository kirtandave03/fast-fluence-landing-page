import Image from "next/image";

export default function WhyFastFluence() {
  const features = [
    {
      id: 1,
      title: "AI Avatars & Local Voices",
      description:
        "Authentic AU/NZ accents included with diverse avatar options for every brand personality.",
      icon: "/images/whyus/Icon-1.svg",
      visual: "/images/whyus/img-1.png",
    },
    {
      id: 2,
      title: "Script Guidance",
      description:
        "Built-in hook → body → CTA frameworks that follow proven conversion patterns.",
      icon: "/images/whyus/icon-2.svg",
      visual: "/images/whyus/img-2.png",
    },
    {
      id: 3,
      title: "Platform Presets",
      description:
        "TikTok, IG Reels, Meta, LinkedIn exports and more optimised for each platform's requirements.",
      icon: "/images/whyus/icon-3.svg",
      visual: "/images/whyus/img-3.png",
    },
    {
      id: 4,
      title: "Usage Caps",
      description:
        "Transparent subscription tiers with clear limits and upgrade paths.",
      icon: "/images/whyus/icon-4.svg",
      visual: "/images/whyus/img-4.png",
    },
    {
      id: 5,
      title: "Instant Rendering",
      description:
        "From idea to ad in minutes with our optimised AI processing pipeline.",
      icon: "/images/whyus/icon-5.svg",
      visual: "/images/whyus/img-5.png",
    },
    {
      id: 6,
      title: "Brand Customization",
      description:
        "Upload brand assets, set color schemes, and maintain consistent visual identity.",
      icon: "/images/whyus/icon-6.svg",
      visual: "/images/whyus/img-6.png",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl">
            Why{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                background:
                  "var(--gradient-12, linear-gradient(94deg, #3BBCFF -3.9%, #936DFF 113.55%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              FastFluence
            </span>
          </h2>
          <p className="text-black font-normal text-lg">
            Everything you need to create professional UGC ads that convert
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col rounded-2xl p-px shadow-sm"
              style={{
                background:
                  "var(--StrokeShadow, linear-gradient(143deg, #936DFF -53.02%, #EBE4FF 86.41%))",
              }}
            >
              <div
                className="flex flex-col h-full rounded-2xl bg-white p-6 relative overflow-hidden"
                style={{
                  fontFamily: "var(--font-inter)",
                }}
              >
                {/* Gradient effect in bottom right corner */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    right: "-30.656px",
                    bottom: "-124.771px",
                    width: "303px",
                    height: "303px",
                    opacity: 0.3,
                    background:
                      "var(--gradient-12, linear-gradient(94deg, #3BBCFF -3.9%, #936DFF 113.55%))",
                    borderRadius: "50%",
                    filter: "blur(100px)",
                  }}
                ></div>
                {/* Icon */}
                <div className="flex items-start justify-start gap-4 ">
                  <div className="relative mb-4 h-12 w-12 rounded-xl">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {feature?.id === 1 && (
                    <div className="text-2xl flex items-center justify-start gap-2 mt-2.5">
                      🇦🇺 🇳🇿
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-medium text-black">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm text-black leading-relaxed">
                  {feature.description}
                </p>

                {/* Visuals */}
                <div
                  className="mt-auto relative w-full"
                  style={{ minHeight: "120px" }}
                >
                  <Image
                    src={feature.visual}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
