"use client";

import Image from "next/image";
import WaitlistUserForm from "./WaitlistUserForm";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const socialMediaLinks = [
    {
      name: "Google",
      icon: "/footer/G.png",
      href: "#",
    },
    {
      name: "Twitter",
      icon: "/footer/twitter.png",
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: "/footer/linkedin-02.png",
      href: "#",
    },
    {
      name: "Instagram",
      icon: "/footer/instagram.png",
      href: "#",
    },
  ];

  const handleLogoClick = () => {
    const element = document.getElementById("ugc");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="waitlist-section"
      className="bg-white py-12 sm:py-24 md:py-24 w-full"
    >
      <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
        {/* Waitlist Form */}
        <div className="mb-24 flex w-full justify-center">
          <div
            className="relative"
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              width: "100%",
              maxWidth: "1000px",
            }}
          >
            {/* Top border with gradient - hidden on small screens */}
            <div
              className="hidden md:block"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background:
                  "linear-gradient(90deg, rgba(9, 121, 240, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)",
                borderRadius: "20px 20px 0 20px",
              }}
            />
            {/* Left border with gradient - hidden on small screens */}
            <div
              className="hidden md:block"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                width: "1px",
                background:
                  "linear-gradient(180deg, rgba(9, 121, 240, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)",
                borderRadius: "20px 0 0 20px",
              }}
            />
            {/* Corner border effect - hidden on small screens */}
            <div
              className="hidden md:block"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "20px",
                height: "20px",
                borderTop: "1px solid rgba(9, 121, 240, 0.1)",
                borderLeft: "1px solid rgba(9, 121, 240, 0.1)",
                borderTopLeftRadius: "20px",
              }}
            />
            <div className="px-4 sm:p-6 md:p-10 flex justify-center">
              <WaitlistUserForm />
            </div>
          </div>
        </div>
        <div
          className="mb-14 flex items-center justify-center gap-6 cursor-pointer"
          onClick={handleLogoClick}
        >
          <Image
            src="/footer/Logo.png"
            alt="FastFluence Logo"
            width={90}
            height={90}
            className="h-[90px] w-[90px]"
          />
          <span
            style={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "34.24px",
              lineHeight: "124%",
              letterSpacing: "2%",
            }}
          >
            FastFluence
          </span>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-4">
          {socialMediaLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="relative flex h-[40px] w-[40px] items-center justify-center transition-opacity hover:opacity-80"
              // style={{
              //   background:
              //     "var(--Stroke, linear-gradient(118deg, rgba(1, 72, 253, 0.08) 2.73%, rgba(1, 72, 253, 0.00) 100%), rgba(173, 173, 173, 0.06))",
              //   backdropFilter: "blur(16px)",
              //   border: "1px solid rgba(255, 255, 255, 0.2)",
              //   boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
              // }}
              aria-label={social.name}
            >
              <Image src={social.icon} alt={social.name} fill />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
