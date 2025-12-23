"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <nav
      className="w-full px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.40) -20.06%, rgba(255, 255, 255, 0.00) 186.86%)",
        backdropFilter: "blur(30px)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/icon/logo.svg"
              alt="FastFluence Logo"
              width={44}
              height={44}
              className="h-11 w-11"
            />
            <span className="text-xl font-bold text-gray-900 sm:text-2xl">
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
              >
                {link.label}
              </Link>
            ))}
            <button
              className="px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{
                borderRadius: "200px",
                border: "0 solid #EEF7FF",
                background:
                  "radial-gradient(95.2% 97.67% at 7.09% 23.91%, #3BBCFF 0%, #936DFF 100%)",
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
                >
                  {link.label}
                </Link>
              ))}
              <button
                className="w-full px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{
                  borderRadius: "200px",
                  border: "0 solid #EEF7FF",
                  background:
                    "radial-gradient(95.2% 97.67% at 7.09% 23.91%, #3BBCFF 0%, #936DFF 100%)",
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
