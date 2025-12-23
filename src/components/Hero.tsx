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
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
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
          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
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
              UGC Ads in Minutes
            </span>{" "}
            Not Weeks.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
            AI avatars, localized voices, and guided scripts help you launch
            authentic short-form ads at a fraction of the cost.
          </p>
        </div>

        {/* Join Waitlist Button */}
        <div className="mb-8 flex flex-col items-center justify-center">
          <button
            onClick={() => {
              const waitlistSection = document.getElementById("waitlist-section");
              waitlistSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 text-base font-medium text-white transition-opacity hover:opacity-90"
            style={{
              borderRadius: "30px",
              border: "1px solid #FFF",
              background:
                "radial-gradient(95.2% 97.67% at 7.09% 23.91%, #3BBCFF 0%, #936DFF 100%)",
            }}
          >
            Join waitlist
          </button>
        </div>

        {/* 3D Perspective Carousel */}
        <div className="relative overflow-visible py-12">
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
