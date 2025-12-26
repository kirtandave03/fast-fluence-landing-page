"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Set initial scroll state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "How it works", href: "#how-it-works" },
    { label: "vs traditional UGC", href: "#vs-traditional-ugc" },
    { label: "Why", href: "#why" },
    { label: "Use Cases", href: "#use-cases" },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    const element = document.getElementById("ugc");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 transition-all duration-300"
      style={{
        background:
          mounted && isScrolled
            ? "linear-gradient(180deg, rgba(255, 255, 255, 0.70) -20.06%, rgba(255, 255, 255, 0.40) 186.86%)"
            : "linear-gradient(180deg, rgba(255, 255, 255, 0.40) -20.06%, rgba(255, 255, 255, 0.00) 186.86%)",
        backdropFilter: mounted && isScrolled ? "blur(40px)" : "blur(30px)",
        borderBottom:
          mounted && isScrolled
            ? "1px solid rgba(255, 255, 255, 0.2)"
            : "1px solid transparent",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <div className="mx-auto max-w-[1340px]">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <Image
              src="/footer/Logo.png"
              alt="FastFluence Logo"
              width={44}
              height={44}
              className="h-11 w-11"
            />
            <span
              // className="text-xl font-bold text-gray-900 sm:text-2xl"
              style={{
                fontFamily: "var(--font-sora)",
                fontWeight: 700,
                fontSize: "18.24px",
                lineHeight: "124%",
                letterSpacing: "2%",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                textRendering: "optimizeLegibility",
              }}
            >
              FastFluence
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-700"
                style={{
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                  textRendering: "optimizeLegibility",
                }}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                const waitlistSection =
                  document.getElementById("waitlist-section");
                waitlistSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{
                fontWeight: 700,
                fontFamily: "var(--font-sora)",
                letterSpacing: "2%",
                borderRadius: "30px",
                border: "1px solid #FFF",
                background:
                  "radial-gradient(76.09% 76.09% at 7.09% 23.91%, #3BBCFF 0%, #936DFF 100%)",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                textRendering: "optimizeLegibility",
              }}
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-gray-900 transition-all ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-gray-900 transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-gray-900 transition-all ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-700"
                  style={{
                    fontFamily: "var(--font-inter)",
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                    textRendering: "optimizeLegibility",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  const waitlistSection =
                    document.getElementById("waitlist-section");
                  waitlistSection?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="w-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{
                  borderRadius: "30px",
                  background:
                    "radial-gradient(95.2% 97.67% at 7.09% 23.91%, #3BBCFF 0%, #936DFF 100%)",
                  fontFamily: "var(--font-sora)",
                  fontWeight: 700,
                  letterSpacing: "2%",
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                  textRendering: "optimizeLegibility",
                }}
              >
                Join Waitlist
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
