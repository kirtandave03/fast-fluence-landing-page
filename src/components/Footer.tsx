"use client";

import Image from "next/image";
import WaitlistUserForm from "./WaitlistUserForm";

export default function Footer() {
    return (
        <footer className="bg-white py-12 sm:py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Waitlist Form */}
                <div className="mb-12">
                    <WaitlistUserForm />
                </div>
                <div className="mb-12 flex items-center justify-center gap-3">
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

                {/* Social Media Icons */}
                <div className="flex items-center justify-center gap-2">
                    {/* Google */}
                    <a
                        href="#"
                        className="flex h-[52px] w-[52px] items-center justify-center rounded-[20px] transition-opacity hover:opacity-80"
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
                        className="flex h-[52px] w-[52px] items-center justify-center rounded-[20px] transition-opacity hover:opacity-80"
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
                        className="flex h-[52px] w-[52px] items-center justify-center rounded-[20px] transition-opacity hover:opacity-80"
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
                        className="flex h-[52px] w-[52px] items-center justify-center rounded-[20px] transition-opacity hover:opacity-80"
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
