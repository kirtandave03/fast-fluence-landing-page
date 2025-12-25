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
    <section className="relative pt-24 pb-48 px-4 sm:px-6 lg:px-8 bg-transparent flex flex-col items-center justify-center h-[400px]">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-center justify-center max-w-6xl mx-auto">
          {useCases.map((useCase, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center h-[206px] justify-center overflow-hidden rounded-3xl bg-white px-6 py-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100"
              >
                {/* Icon circle */}
                <div className="mb-4 flex h-38 w-38 items-end justify-center rounded-full">
                  <Image
                    src={useCase.icon}
                    alt={useCase.title}
                    width={38}
                    height={38}
                  />
                </div>

                {/* Title */}
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "22px",
                    textAlign: "center",
                    color: "#2D2D2D",
                  }}
                >
                  {useCase.title}
                </h3>

                {/* Description */}
                <p
                  className={`${index === 2 ? "w-[85%]" : "w-[86.8%]"}`}
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 300,
                    fontSize: "12px",
                    lineHeight: "22px",
                    textAlign: "center",
                    color: "#6B7280",
                  }}
                >
                  {useCase.examples.join(", ")}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
