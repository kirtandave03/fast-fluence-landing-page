import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Write your script",
    description:
      "Few prompts and AI generate a captivating script that encourages call to action towards your brand.",
    image: "/images/steps/step-1.png",
  },
  {
    id: 2,
    title: "Pick your avatar",
    description:
      "Choose from a diverse library of lifelike AI avatars, each crafted to match different tones, styles, and industries.",
    image: "/images/steps/step-2.png",
  },
  {
    id: 3,
    title: "Generate your video",
    description:
      "In browser editor to personalise the video and generate it as per your preferred format.",
    image: "/images/steps/step-3.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Gradients */}
      {/* Top Right Gradient */}
      <div
        className="absolute -right-64 -top-96 h-[589px] w-[589px]"
        style={{
          borderRadius: "589px",
          background:
            "radial-gradient(81.91% 83.08% at 27.66% 27.09%, rgba(255, 45, 146, 0.20) 0%, rgba(245, 63, 67, 0.20) 71.35%, rgba(253, 131, 44, 0.20) 100%)",
          filter: "blur(250px)",
        }}
      />

      {/* Bottom Center Gradient */}
      <div
        className="absolute left-1/2 -bottom-96 h-[589px] w-[589px] -translate-x-1/2"
        style={{
          borderRadius: "589px",
          background:
            "radial-gradient(81.91% 83.08% at 27.66% 27.09%, rgba(255, 45, 146, 0.20) 0%, rgba(245, 63, 67, 0.20) 71.35%, rgba(253, 131, 44, 0.20) 100%)",
          filter: "blur(250px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl md:text-6xl">
            Create{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                background:
                  "linear-gradient(94deg, #3BBCFF -3.9%, #936DFF 113.55%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI UGC
            </span>{" "}
            video
            <br className="hidden sm:block" /> in minutes
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative flex flex-col rounded-[32px] border border-[#936DFF] bg-white/50 p-6 transition-all hover:shadow-lg backdrop-blur-sm"
              style={{
                borderColor: "rgba(147, 109, 255, 0.2)",
              }}
            >
              <div className="relative mb-8 aspect-4/3 w-full overflow-hidden rounded-2xl bg-white">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="mb-3 text-xl font-bold text-[#111827]">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-[#4B5563]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
