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
    "flex w-full min-w-[200px] h-[88px] items-center gap-3 rounded-xl p-4 border-[#E5E7EB] shadow-md";

  return (
    <section
      className="relative pb-12 pt-12 sm:pb-24 sm:pt-24 px-4 sm:px-6 lg:px-8"
      id="vs-traditional-ugc"
    >
      {/* Gradient backgrounds */}
      <div
        className="absolute left-[65%] -top-64 h-[589px] w-[589px] -translate-x-1/2 pointer-events-none"
        style={{
          borderRadius: "589px",
          background:
            "radial-gradient(81.91% 83.08% at 27.66% 27.09%, rgba(255, 45, 146, 0.18) 0%, rgba(245, 63, 67, 0.18) 71.35%, rgba(253, 131, 44, 0.18) 100%)",
          WebkitFilter: "blur(120px)",
          filter: "blur(120px)",
          zIndex: 0,
          willChange: "transform",
        }}
      />

      <div
        className="absolute left-1/2 top-1/2 h-[733px] w-[733px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          borderRadius: "733px",
          background:
            "radial-gradient(95.2% 97.67% at 7.09% 23.91%, rgba(59, 188, 255, 0.18) 0%, rgba(147, 109, 255, 0.18) 100%)",
          WebkitFilter: "blur(120px)",
          filter: "blur(120px)",
          zIndex: 0,
          willChange: "transform",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2
            className="mb-4 text-3xl font-bold tracking-tight bg-clip-text text-transparent sm:text-4xl"
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 600,
              letterSpacing: "2px",
              background:
                "var(--gradient-12, linear-gradient(94.18deg, #3BBCFF -3.9%, #936DFF 113.55%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Save your precious time and money
          </h2>
          <p
            className="text-black font-normal"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "22px",
              letterSpacing: "0%",
              color: "#2D2D2D",
            }}
          >
            Using this is no rocket science
          </p>
        </div>

        {/* Traditional Workflow */}
        <div className="mb-24">
          <h3
            className="mb-6 text-lg font-medium text-gray-700"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "24px",
              letterSpacing: "0%",
              color: "#2D2D2D",
            }}
          >
            Traditional UGC Workflow
          </h3>
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:gap-0">
            <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 lg:flex lg:flex-1 lg:gap-2">
              {traditionalSteps.map((step, index) => (
                <div
                  key={step.id}
                  className="relative flex flex-1 items-center"
                >
                  <div
                    className={stepBoxClasses}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.70)",
                    }}
                  >
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full p-px"
                      style={{
                        background:
                          "var(--gradient1, radial-gradient(95.2% 97.67% at 7.09% 23.91%, #3bbcff 0%, #936dff 100%))",
                      }}
                    >
                      <div
                        className="flex h-full w-full items-center justify-center rounded-full text-sm font-noraml text-black"
                        style={{
                          backgroundColor: "#EEF7FF",
                        }}
                      >
                        {step.id}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p
                        className="text-sm font-normal text-black leading-tight"
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 400,
                          fontSize: "15px",
                          lineHeight: "22px",
                          letterSpacing: "0%",
                          color: "#2D2D2D",
                        }}
                      >
                        {step.title}
                      </p>
                      <p
                        className="text-xs text-black"
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "22px",
                          letterSpacing: "-2%",
                          color: "#2D2D2D",
                        }}
                      >
                        {step.duration}
                      </p>
                    </div>
                  </div>
                  {/* Arrow for Mobile (1 column grid) */}
                  {index < traditionalSteps.length - 1 && (
                    <div
                      className={`block sm:hidden absolute -bottom-6 ${
                        index % 2 === 0 ? "left-0" : "right-0"
                      } z-10`}
                    >
                      <Image
                        src="/assets/arrow-down.svg"
                        alt="Next step"
                        width={34}
                        height={18}
                        className={`rotate-90 ${
                          index % 2 === 0 ? "" : "-scale-y-100"
                        }`}
                      />
                    </div>
                  )}
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
            <div className="flex shrink-0 items-center justify-center py-4 lg:px-2 lg:py-0">
              <Image
                src="/assets/arrow-right.svg"
                alt="Transition"
                width={24}
                height={24}
                className="rotate-90 lg:rotate-0 shrink-0"
              />
            </div>

            {/* Traditional Summary */}
            <div
              className="flex w-full max-w-[300px] h-[100px] items-center rounded-2xl p-[2px] shadow-sm"
              style={{
                background:
                  "linear-gradient(92deg, #FF2D92 6.52%, #F53F43 74.23%, #FD832C 102.13%)",
              }}
            >
              <div className="flex w-full h-full items-center rounded-2xl bg-white p-6">
                <div className="w-full space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span
                      className="font-normal text-base bg-clip-text text-transparent"
                      style={{
                        fontFamily: "var(--font-inter)",
                        background:
                          "linear-gradient(92deg, #FF2D92 6.52%, #F53F43 74.23%, #FD832C 102.13%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Total Time:
                    </span>
                    <span
                      className="font-normal bg-clip-text text-base text-transparent"
                      style={{
                        fontFamily: "var(--font-inter)",
                        background:
                          "linear-gradient(92deg, #FF2D92 6.52%, #F53F43 74.23%, #FD832C 102.13%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      2-3 weeks
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className="font-normal text-base bg-clip-text text-transparent"
                      style={{
                        fontFamily: "var(--font-inter)",
                        background:
                          "linear-gradient(92deg, #FF2D92 6.52%, #F53F43 74.23%, #FD832C 102.13%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Total Cost:
                    </span>
                    <span
                      className="font-normal text-base bg-clip-text text-transparent"
                      style={{
                        fontFamily: "var(--font-inter)",
                        background:
                          "linear-gradient(92deg, #FF2D92 6.52%, #F53F43 74.23%, #FD832C 102.13%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      <span className="font-normal text-lg flex items-center gap-1">
                        <Image
                          src="/icon/dollar-sign.svg"
                          alt="dollar"
                          width={20}
                          height={20}
                        />{" "}
                        300-500
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FastFluence Workflow */}
        <div>
          <h3 className="mb-6 text-lg font-medium text-gray-700">
            FastFluence Fast workflow
          </h3>
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:gap-0">
            <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 lg:flex lg:flex-1 lg:gap-2">
              {fastSteps.map((step, index) => (
                <div
                  key={step.id}
                  className="relative flex flex-1 items-center"
                >
                  <div
                    className={stepBoxClasses}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.70)",
                    }}
                  >
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full p-px"
                      style={{
                        background:
                          "var(--gradient1, radial-gradient(95.2% 97.67% at 7.09% 23.91%, #3bbcff 0%, #936dff 100%))",
                      }}
                    >
                      <div
                        className="flex h-full w-full items-center justify-center rounded-full text-sm font-noraml text-black"
                        style={{
                          backgroundColor: "#EEF7FF",
                        }}
                      >
                        {step.id}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p
                        className="text-sm font-normal text-black leading-tight"
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 400,
                          fontSize: "15px",
                          lineHeight: "22px",
                          letterSpacing: "0%",
                          color: "#2D2D2D",
                        }}
                      >
                        {step.title}
                      </p>
                      <p
                        className="text-xs text-black"
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "22px",
                          letterSpacing: "-2%",
                          color: "#2D2D2D",
                        }}
                      >
                        {step.duration}
                      </p>
                    </div>
                  </div>
                  {/* Arrow for Mobile (1 column grid) */}
                  {index < fastSteps.length - 1 && (
                    <div
                      className={`block sm:hidden absolute -bottom-6 ${
                        index % 2 === 0 ? "left-0" : "right-0"
                      } z-10`}
                    >
                      <Image
                        src="/assets/arrow-down.svg"
                        alt="Next step"
                        width={34}
                        height={18}
                        className={`rotate-90 ${
                          index % 2 === 0 ? "" : "-scale-y-100"
                        }`}
                      />
                    </div>
                  )}
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
            <div className="flex shrink-0 items-center justify-center py-4 lg:px-2 lg:py-0">
              <Image
                src="/assets/arrow-right.svg"
                alt="Transition"
                width={24}
                height={24}
                className="rotate-90 lg:rotate-0 shrink-0"
              />
            </div>

            {/* Fast Summary */}
            <div
              className="flex w-full max-w-[300px] h-[100px] items-center rounded-2xl p-6 text-black shadow-xl shadow-blue-200/50"
              style={{
                background: "linear-gradient(135deg, #3BBCFF 0%, #936DFF 100%)",
                fontFamily: "var(--font-inter)",
                boxShadow: "0 16px 40.8px 0 rgba(101, 150, 255, 0.54)",
              }}
            >
              <div className="w-full space-y-1 ">
                <div className="flex justify-between items-center text-xs opacity-90">
                  <span className="font-normal text-base">Total Time:</span>
                  <span className="font-normal text-base">3 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-normal text-base">Total Cost:</span>
                  <span className="font-medium text-base flex items-center gap-2">
                    <Image
                      src="/icon/dollar-black.svg"
                      alt="dollar"
                      width={20}
                      height={20}
                    />{" "}
                    15-30
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
