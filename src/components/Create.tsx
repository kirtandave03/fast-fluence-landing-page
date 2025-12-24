import Image from "next/image";

export default function Create() {
  const images = [
    {
      id: 1,
      src: "/images/create/img-1.png",
      alt: "TikTok UGC example",
    },
    {
      id: 2,
      src: "/images/create/div-2.png",
      alt: "Instagram UGC example",
    },
    {
      id: 3,
      src: "/images/create/div-3.png",
      alt: "YouTube UGC example",
    },
    {
      id: 4,
      src: "/images/create/div-4.png",
      alt: "Facebook UGC example",
    },
    {
      id: 5,
      src: "/images/create/img-5.png",
      alt: "Instagram Stories UGC example",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl">
            See what you can{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                background:
                  "var(--gradient-12, linear-gradient(94deg, #3BBCFF -3.9%, #936DFF 113.55%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              create
            </span>
          </h2>
          <p className="text-black font-normal text-lg max-w-3xl mx-auto">
            Experience how your user-generated content looks across different
            social media platforms with our interactive demo.
          </p>
        </div>

        {/* Images Grid */}
        <div className="space-y-6">
          {/* First Row - 3 images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.slice(0, 3).map((image) => (
              <div
                key={image.id}
                className="relative w-full rounded-2xl overflow-hidden"
                style={{ aspectRatio: "8/12" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>

          {/* Second Row - 2 images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
            {images.slice(3, 5).map((image) => (
              <div
                key={image.id}
                className="relative w-full rounded-2xl overflow-hidden"
                style={{ aspectRatio: "4/3", minHeight: "400px" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
