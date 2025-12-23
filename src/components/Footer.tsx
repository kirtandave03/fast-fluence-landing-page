"use client";

import Image from "next/image";
import WaitlistUserForm from "./WaitlistUserForm";

export default function Footer() {
    return (
        <footer id="waitlist-section" className="bg-white py-8 sm:py-8 md:py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Waitlist Form */}
                <div
                    className="mb-12 mx-auto w-full max-w-[900px] relative"
                    style={{
                        borderRadius: "20px",
                        overflow: "hidden",
                    }}
                >
                    {/* Top border with gradient */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "1px",
                            background: "linear-gradient(90deg, rgba(9, 121, 240, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)",
                            borderRadius: "20px 20px 0 20px",
                        }}
                    />
                    {/* Left border with gradient */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            width: "1px",
                            background: "linear-gradient(180deg, rgba(9, 121, 240, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)",
                            borderRadius: "20px 0 0 20px",
                        }}
                    />
                    <div className="p-10 flex justify-center">
                        <WaitlistUserForm />
                    </div>
                </div>
                <div className="mb-5 flex items-center justify-center gap-6">
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
                            letterSpacing: "5%",
                        }}
                    >
                        FastFluence
                    </span>
                </div>


                {/* Social Media Icons */}
                <div className="flex items-center justify-center gap-2">
                    {/* Google */}
                    <a
                        href="#"
                        className="flex h-[45px] w-[45px] items-center justify-center rounded-[20px] transition-opacity hover:opacity-80"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(59, 188, 255, 0.2) 0%, rgba(147, 109, 255, 0.2) 100%)",
                        }}
                        aria-label="Google"
                    >
                        <Image
                            src="/footer/G.svg"
                            alt="Google"
                            width={24}
                            height={24}
                        />
                    </a>

                    {/* Twitter */}
                    <a
                        href="#"
                        className="flex h-[45px] w-[45px] items-center justify-center rounded-[20px] transition-opacity hover:opacity-80"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(59, 188, 255, 0.2) 0%, rgba(147, 109, 255, 0.2) 100%)",
                        }}
                        aria-label="Twitter"
                    >
                        <Image
                            src="/footer/twitter.svg"
                            alt="Twitter"
                            width={24}
                            height={24}
                        />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="#"
                        className="flex h-[45px] w-[45px] items-center justify-center rounded-[20px] transition-opacity hover:opacity-80"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(59, 188, 255, 0.2) 0%, rgba(147, 109, 255, 0.2) 100%)",
                        }}
                        aria-label="LinkedIn"
                    >
                        <Image
                            src="/footer/linkedin-02.svg"
                            alt="LinkedIn"
                            width={24}
                            height={24}
                        />
                    </a>

                    {/* Instagram */}
                    <a
                        href="#"
                        className="flex h-[45px] w-[45px] items-center justify-center rounded-[20px] transition-opacity hover:opacity-80"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(59, 188, 255, 0.2) 0%, rgba(147, 109, 255, 0.2) 100%)",
                        }}
                        aria-label="Instagram"
                    >
                        <Image
                            src="/footer/instagram.svg"
                            alt="Instagram"
                            width={24}
                            height={24}
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
