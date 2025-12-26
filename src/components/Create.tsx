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
      src: "/images/create/img-2.png",
      alt: "Instagram UGC example",
    },
    {
      id: 3,
      src: "/images/create/img-3.png",
      alt: "YouTube UGC example",
    },
    {
      id: 4,
      src: "/images/create/img-4.png",
      alt: "Facebook UGC example",
    },
    {
      id: 5,
      src: "/images/create/img-5.png",
      alt: "Instagram Stories UGC example",
    },
  ];

  return (
    <section className="relative py-12 sm:py-24 px-4 sm:px-6 lg:px-8" id="use-cases">
      <div className="relative mx-auto max-w-7xl">
        {/* Title */}
        <div
          className="absolute left-[-200px] top-[300px] h-[571px] w-[571px] -translate-x-1 -translate-y-1 "
          style={{
            borderRadius: "571px",
            background:
              "radial-gradient(95.2% 97.67% at 7.09% 23.91%, rgba(59, 188, 255, 0.20) 0%, rgba(147, 109, 255, 0.20) 100%)",
            filter: "blur(116px)",
          }}
        />
        <div className="mb-12 text-center">
          <h2
            className="mb-4 text-3xl text-black sm:text-4xl lg:text-4xl"
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 700,
              lineHeight: "124%",
              letterSpacing: "2px",
            }}
          >
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
          <p className="text-black font-normal text-lg max-w-2xl mx-auto">
            Experience how your user-generated content looks across different
            social media platforms with our interactive demo.
          </p>
        </div>

        {/* Images Grid */}
        <div className="space-y-6">
          {/* First Row - 3 images */}
          <div className="grid grid-cols-1 md:grid-cols-3 relative z-10">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative z-10">
            {images.slice(3, 5).map((image) => (
              <div
                key={image.id}
                className="relative w-full rounded-2xl overflow-hidden min-h-[250px] sm:min-h-[300px]"
                style={{
                  aspectRatio: "4/3",
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  style={{
                    boxShadow: "0 10px 15px 0 rgba(101, 97, 97, 0.10)",
                  }}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className="absolute right-[-200px] top-[971px] h-[571px] w-[571px] -translate-x-1 -translate-y-1 "
          style={{
            borderRadius: "571px",
            background:
              "radial-gradient(70.9% 70.9% at 27.66% 27.09%, rgba(255, 45, 146, 0.1) 0%, rgba(245, 63, 67, 0.1) 71.35%, rgba(253, 131, 44, 0.1) 100%)",
            filter: "blur(116px)",
          }}
        />
      </div>
    </section>
  );
}
