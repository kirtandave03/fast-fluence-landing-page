import Image from "next/image";

export default function Comparison() {
  const traditionalSteps = [
    { id: 1, title: "Brief Creation", duration: "2-3 days" },
    { id: 2, title: "Creator Sourcing", duration: "3-5 days" },
    { id: 3, title: "Production & Editing", duration: "5-7 days" },
    { id: 4, title: "Revisions & Approval", duration: "2-4 days" },
  ];

  const fastSteps = [
    { id: 1, title: "Input Brief", duration: "30 seconds" },
    { id: 2, title: "AI Script Generation", duration: "10 seconds" },
    { id: 3, title: "Avatar & Voice Selection", duration: "30 seconds" },
    { id: 4, title: "Video Generation", duration: "~2 minutes" },
  ];

  const stepBoxClasses =
    "flex w-full min-w-[200px] h-[88px] items-center gap-3 rounded-xl bg-[#F8F9FB] p-4 border border-[#F1F2F4]";

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* ... gradients ... */}
      <div
        className="absolute left-1/2 -top-64 h-[589px] w-[589px] -translate-x-1/2"
        style={{
          borderRadius: "589px",
          background:
            "radial-gradient(81.91% 83.08% at 27.66% 27.09%, rgba(255, 45, 146, 0.20) 0%, rgba(245, 63, 67, 0.20) 71.35%, rgba(253, 131, 44, 0.20) 100%)",
          filter: "blur(250px)",
          zIndex: 0,
        }}
      />

      <div
        className="absolute left-1/2 top-1/2 h-[733px] w-[733px] -translate-x-1/2 -translate-y-1/2"
        style={{
          borderRadius: "733px",
          background:
            "radial-gradient(95.2% 97.67% at 7.09% 23.91%, rgba(59, 188, 255, 0.20) 0%, rgba(147, 109, 255, 0.20) 100%)",
          filter: "blur(200px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl">
            Save your{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                background:
                  "linear-gradient(94deg, #3BBCFF -3.9%, #936DFF 113.55%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              precious time and money
            </span>
          </h2>
          <p className="text-gray-500">Using this is no rocket science</p>
        </div>

        {/* Traditional Workflow */}
        <div className="mb-24">
          <h3 className="mb-8 text-lg font-medium text-gray-700">
            Traditional UGC Workflow
          </h3>
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:gap-0">
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:flex-1 lg:gap-2">
              {traditionalSteps.map((step, index) => (
                <div
                  key={step.id}
                  className="relative flex flex-1 items-center"
                >
                  <div className={stepBoxClasses}>
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-blue-200 text-sm font-medium text-blue-500">
                      {step.id}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 leading-tight">
                        {step.title}
                      </p>
                      <p className="text-xs text-gray-500">{step.duration}</p>
                    </div>
                  </div>
                  {/* Arrow for Desktop */}
                  {index < traditionalSteps.length - 1 && (
                    <div
                      className={`hidden lg:block absolute -right-5 z-10 ${
                        index === 1 ? "-top-4" : "-bottom-4"
                      }`}
                    >
                      <Image
                        src={
                          index === 1
                            ? "/assets/arrow-up.svg"
                            : "/assets/arrow-down.svg"
                        }
                        alt="Next step"
                        width={34}
                        height={18}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Transition Arrow */}
            <div className="flex flex-shrink-0 items-center justify-center py-4 lg:px-2 lg:py-0">
              <Image
                src="/assets/arrow-right.svg"
                alt="Transition"
                width={24}
                height={24}
                className="rotate-90 lg:rotate-0 flex-shrink-0"
              />
            </div>

            {/* Traditional Summary */}
            <div className="flex w-full max-w-[300px] h-[100px] items-center rounded-2xl border-2 border-[#FFDADA] p-6 bg-white shadow-sm">
              <div className="w-full space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#FF5C5C] font-medium">
                    Total Time:
                  </span>
                  <span className="text-[#FF5C5C] font-semibold">
                    2-3 weeks
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#FF5C5C] font-medium text-sm">
                    Total Cost:
                  </span>
                  <span className="text-[#FF5C5C] font-bold text-lg">
                    $ 300-500
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FastFluence Workflow */}
        <div>
          <h3 className="mb-8 text-lg font-medium text-gray-700">
            FastFluence Fast workflow
          </h3>
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:gap-0">
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:flex-1 lg:gap-2">
              {fastSteps.map((step, index) => (
                <div
                  key={step.id}
                  className="relative flex flex-1 items-center"
                >
                  <div className={stepBoxClasses}>
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-blue-200 text-sm font-medium text-blue-500">
                      {step.id}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 leading-tight">
                        {step.title}
                      </p>
                      <p className="text-xs text-gray-500">{step.duration}</p>
                    </div>
                  </div>
                  {/* Arrow for Desktop */}
                  {index < fastSteps.length - 1 && (
                    <div
                      className={`hidden lg:block absolute -right-5 z-10 ${
                        index === 1 ? "-top-4" : "-bottom-4"
                      }`}
                    >
                      <Image
                        src={
                          index === 1
                            ? "/assets/arrow-up.svg"
                            : "/assets/arrow-down.svg"
                        }
                        alt="Next step"
                        width={34}
                        height={18}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Transition Arrow */}
            <div className="flex flex-shrink-0 items-center justify-center py-4 lg:px-2 lg:py-0">
              <Image
                src="/assets/arrow-right.svg"
                alt="Transition"
                width={24}
                height={24}
                className="rotate-90 lg:rotate-0 flex-shrink-0"
              />
            </div>

            {/* Fast Summary */}
            <div
              className="flex w-full max-w-[300px] h-[100px] items-center rounded-2xl p-6 text-white shadow-xl shadow-blue-200/50"
              style={{
                background: "linear-gradient(135deg, #3BBCFF 0%, #936DFF 100%)",
              }}
            >
              <div className="w-full space-y-1">
                <div className="flex justify-between items-center text-xs opacity-90">
                  <span className="font-medium">Total Time:</span>
                  <span className="font-semibold">3 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">Total Cost:</span>
                  <span className="font-bold text-xl">$ 15-30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
