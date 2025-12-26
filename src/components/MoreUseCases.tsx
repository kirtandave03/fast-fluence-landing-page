import Image from "next/image";

export default function MoreUseCases() {
  const useCases = [
    {
      title: "Retail",
      icon: "/whositfor/retail.svg",
      examples: [
        "Product launches",
        "seasonal promotions",
        "customer testimonials",
      ],
    },
    {
      title: "Food & Beverage",
      icon: "/whositfor/food.svg",
      examples: ["Menu highlights", "special offers", "location promotions"],
    },
    {
      title: "Education",
      icon: "/whositfor/education.svg",
      examples: [
        "Course promotions",
        "student success stories",
        "enrollment drives",
      ],
    },
    {
      title: "Healthcare",
      icon: "/whositfor/health.svg",
      examples: [
        "service explanations",
        "appointment reminders",
        "wellness tips",
      ],
    },
  ];

  return (
    <section className="relative pt-12 pb-12 sm:pt-24 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-transparent flex flex-col items-center justify-center">
      <div className="relative mx-auto w-full h-full flex flex-col items-center justify-center">
        <h2
          className="mb-12"
          style={{
            fontFamily: "var(--font-sora), sans-serif",
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "32px",
            lineHeight: "124%",
            letterSpacing: "2px",
            textAlign: "center",
            background:
              "linear-gradient(94.18deg, #3BBCFF -3.9%, #936DFF 113.55%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          More Use Cases
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-start justify-center max-w-6xl mx-auto">
          {useCases.map((useCase, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center h-[206px] justify-start overflow-hidden rounded-3xl bg-white px-6 py-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100"
              >
                {/* Icon circle */}
                <div
                  className="mb-4 flex h-[64px] w-[64px] items-center justify-center rounded-full"
                  //   style={{
                  //     background:
                  //       "radial-gradient(95.2% 97.67% at 7.09% 23.91%, rgba(59, 188, 255, 0.15) 0%, rgba(147, 109, 255, 0.15) 100%)",
                  //     borderColor: "rgba(147, 109, 255, 0.2)",
                  //   }}
                >
                  <Image
                    src={useCase.icon}
                    alt={useCase.title}
                    width={38}
                    height={38}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3
                  className="mb-1 text-center"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "22px",
                    color: "#2D2D2D",
                  }}
                >
                  {useCase.title}
                </h3>

                {/* Description */}
                <p
                  className="text-center w-full"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 300,
                    fontSize: "12px",
                    lineHeight: "22px",
                    color: "#6B7280",
                    minHeight: "66px",
                  }}
                >
                  {index === 0 ? (
                    <>
                      Product launches, seasonal
                      <br />
                      promotions, customer
                      <br />
                      testimonials
                    </>
                  ) : index === 1 ? (
                    <>
                      Menu highlights, special offers,
                      <br />
                      location promotions
                    </>
                  ) : index === 2 ? (
                    <>
                      Course promotions, student
                      <br />
                      success stories, enrollment
                      <br />
                      drives
                    </>
                  ) : index === 3 ? (
                    <>
                      Service explanations, appointment
                      <br />
                      reminders, wellness tips
                    </>
                  ) : null}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
