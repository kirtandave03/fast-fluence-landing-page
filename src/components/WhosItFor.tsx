import Image from "next/image";

export default function WhosItFor() {
  const personas = [
    {
      id: 1,
      image: "/images/whos-it-for/img-1.svg",
      role: "SME Owner",
      businessType: "Fitness Studio",
      challenge:
        "Need weekly promotional content for class bookings and trial offers, but budget is tight.",
      solution:
        "Creates 4 videos per week showcasing different classes and special offers.",
    },
    {
      id: 2,
      image: "/images/whos-it-for/img-2.svg",
      role: "E-commerce Marketer",
      businessType: "Fashion Brand",
      challenge:
        "Ad fatigue killing performance. Need fresh creative weekly to maintain ROAS.",
      solution:
        "tests 3-5 video variations per product launch across platforms.",
    },
    {
      id: 3,
      image: "/images/whos-it-for/img-3.svg",
      role: "Agency Manager",
      businessType: "Digital Marketing Agency",
      challenge:
        "Managing UGC for 12 clients. Turnaround times affecting client satisfaction.",
      solution:
        "Client-specific dashboards with brand guidelines and automated workflows.",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2
            className="mb-4 text-4xl font-bold tracking-tight bg-clip-text text-transparent sm:text-5xl"
            style={{
              background:
                "var(--gradient1, radial-gradient(95.2% 97.67% at 7.09% 23.91%, #3BBCFF 0%, #936DFF 100%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Who's it for?
          </h2>
          <p className="text-black font-normal text-lg max-w-3xl mx-auto">
            See how different businesses can use FastFluence AI to drive results
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((persona) => (
            <div
              key={persona.id}
              className="flex flex-col rounded-2xl p-px"
              style={{
                background:
                  "var(--gradient1, radial-gradient(95.2% 97.67% at 7.09% 23.91%, #3BBCFF 0%, #936DFF 100%))",
              }}
            >
              <div
                className="flex flex-col h-full rounded-2xl bg-white p-6"
                style={{
                  fontFamily: "var(--font-inter)",
                }}
              >
                {/* Profile Picture and Role Section */}
                <div className="mb-4 flex items-start gap-4">
                  <div className="relative h-16 w-16 shrink-0 rounded-full overflow-hidden">
                    <Image
                      src={persona.image}
                      alt={persona.role}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black mb-1">
                      {persona.role}
                    </h3>
                    <p className="text-sm text-black opacity-60">
                      {persona.businessType}
                    </p>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-black mb-2">
                    Challenge:
                  </p>
                  <p className="text-sm text-black leading-relaxed opacity-60">
                    {persona.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mt-auto pt-4 pb-2 px-4 rounded-xl bg-[#EEF7FF]">
                  <p className="text-sm font-medium text-black mb-2">
                    Solution:
                  </p>
                  <p className="text-sm text-black leading-relaxed opacity-60">
                    {persona.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
