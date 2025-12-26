"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const carouselImages = [
  "/images/cor-1.png",
  "/images/cor-2.png",
  "/images/cor-3.png",
  "/images/cor-4.png",
  "/images/cor-5.png",
  "/images/cor-6.png",
  "/images/cor-7.png",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [, forceUpdate] = useState({});

  // Create infinite loop by tripling the images
  const infiniteImages = [
    ...carouselImages,
    ...carouselImages,
    ...carouselImages,
  ];

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const singleSetWidth = container.scrollWidth / 3;
    const currentScroll = container.scrollLeft;

    // Infinite scroll logic - jump to equivalent position in middle set
    if (currentScroll < singleSetWidth * 0.5) {
      container.scrollLeft = currentScroll + singleSetWidth;
    } else if (currentScroll > singleSetWidth * 2.5) {
      container.scrollLeft = currentScroll - singleSetWidth;
    }

    forceUpdate({});
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial scroll to start of middle set (no animation)
    const singleSetWidth = container.scrollWidth / 3;
    container.scrollLeft = singleSetWidth;

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const getCardStyle = (index: number) => {
    if (!containerRef.current) return {};

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    const item = itemRefs.current[index];
    if (!item) return {};

    const itemRect = item.getBoundingClientRect();
    const itemCenter = itemRect.left + itemRect.width / 2;
    const distanceFromCenter = itemCenter - containerCenter;

    // Normalize distance based on container width
    const normalizedDistance = distanceFromCenter / (containerRect.width / 2);

    // Rotation: Left images tilt right (+Y rotation), Right images tilt left (-Y rotation)
    // Negative sign makes left tilt right and right tilt left
    const rotationY = -normalizedDistance * 30; // Max ±30 degrees

    // Scale: Center is SMALLER, edges are LARGER (valley effect)
    const scale = 0.8 + Math.abs(normalizedDistance) * 0.2;
    const clampedScale = Math.max(0.8, Math.min(1, scale));

    // Height: Center is SHORTER (farther), edges are TALLER (closer)
    const baseHeight = 260;
    const maxHeightIncrease = 60;
    const height =
      baseHeight + Math.abs(normalizedDistance) * maxHeightIncrease;
    const clampedHeight = Math.max(260, Math.min(320, height));

    // Z-index: Center items appear on top
    const zIndex = Math.round(50 - Math.abs(normalizedDistance * 20));

    return {
      height: `${clampedHeight}px`,
      transform: `perspective(1200px) rotateY(${rotationY}deg) scale(${clampedScale})`,
      transformStyle: "preserve-3d" as const,
      zIndex: zIndex,
      transition: "transform 0.15s ease-out, height 0.15s ease-out",
    };
  };

  return (
    <section className="relative overflow-hidden py-12 sm:py-20" id="ugc">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Half Ellipse Background */}
        <div
          className="absolute left-0 top-0 h-[571px] w-[571px] -translate-x-1/2 -translate-y-1/2"
          style={{
            borderRadius: "571px",
            background:
              "radial-gradient(95.2% 97.67% at 7.09% 23.91%, rgba(59, 188, 255, 0.20) 0%, rgba(147, 109, 255, 0.20) 100%)",
            filter: "blur(100px)",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Heading and Subheading */}
          <div className="mb-12 text-center">
            <h1
              className="mb-4 text-3xl font-semibold leading-tight text-black sm:text-3xl md:text-4xl lg:text-5xl md:max-w-5xl mx-auto"
              style={{
                fontFamily: "var(--font-sora)",
                letterSpacing: "9px",
              }}
            >
              Create{" "}
              <span
                className="inline-block font-bold"
                style={{
                  background:
                    "linear-gradient(94deg, #3bbcff -3.9%, #936dff 113.55%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  backgroundSize: "100%",
                }}
              >
                UGC Ads in Minutes
              </span>{" "}
              Not Weeks.
            </h1>
            <p
              className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl"
              style={{
                fontFamily: "var(--font-inter)",
                letterSpacing: "0px",
              }}
            >
              AI avatars, localized voices, and guided scripts help you launch
              authentic short-form ads at a fraction of the cost.
            </p>
          </div>

          {/* Join Waitlist Button */}
          <div className="flex flex-col items-center justify-center relative z-10">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const waitlistSection =
                  document.getElementById("waitlist-section");
                if (waitlistSection) {
                  waitlistSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const waitlistSection =
                  document.getElementById("waitlist-section");
                if (waitlistSection) {
                  waitlistSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-4 text-base text-white transition-opacity hover:opacity-90 active:opacity-80 cursor-pointer"
              style={{
                borderRadius: "30px",
                fontFamily: "var(--font-sora)",
                letterSpacing: "2%",
                border: "1px solid #FFF",
                fontWeight: 700,
                background:
                  "radial-gradient(76.09% 76.09% at 7.09% 23.91%, #3BBCFF 0%, #936DFF 100%)",
                position: "relative",
                zIndex: 10,
                pointerEvents: "auto",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              Join waitlist
            </button>
          </div>

          {/* 3D Perspective Carousel */}
          {/* <div className="relative overflow-visible py-12">
          <div
            ref={containerRef}
            className="flex items-end overflow-x-auto overflow-y-hidden scrollbar-hide"
            style={{
              perspective: "1200px",
              scrollbarWidth: "none",
              gap: "0.5rem",
              minHeight: "360px",
            }}
          >
            {infiniteImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="flex-shrink-0 select-none"
                style={{
                  width: "280px",
                  minWidth: "280px",
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  ...getCardStyle(index),
                }}
              >
                <div
                  className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl"
                  style={{
                    pointerEvents: "none",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                  }}
                >
                  <Image
                    src={image}
                    alt={`UGC ad ${(index % carouselImages.length) + 1}`}
                    fill
                    className="pointer-events-none select-none object-cover"
                    draggable={false}
                    style={{
                      userSelect: "none",
                      WebkitUserSelect: "none",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div> */}
        </div>
      </div>
      {/* Hero Image Carousel */}
      {/* <div className="relative mx-auto max-w-7xl overflow-hidden py-12">
        <div className="flex items-center justify-start overflow-x-auto px-4 scrollbar-hide pb-4">
          {carouselImages.slice(0, 6).map((image, index) => (
            <div
              key={index}
              className="relative shrink-0 w-[280px] h-[320px] rounded-2xl overflow-hidden shadow-xl"
              style={{
                marginLeft: index > 0 ? "-20px" : "0",
                zIndex: carouselImages.length - index,
              }}
            >
              <Image
                src={image}
                alt={`UGC ad ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div> */}

      {/* Hero Image */}
      <div className="relative mx-auto w-full overflow-hidden">
        <div className="flex items-center justify-center">
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            width={1200}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
