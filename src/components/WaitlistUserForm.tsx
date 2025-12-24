"use client";

import { useState } from "react";
import Toast from "./Toast";

export default function WaitlistUserForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    industry: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setToast(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setToast({ message: "Thank you! You've been added to the waitlist.", type: "success" });
        setFormData({ firstName: "", lastName: "", email: "", industry: "" });
      } else {
        setStatus("error");
        setToast({ message: data.message || "Something went wrong. Please try again.", type: "error" });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setToast({ message: "Failed to connect to the server.", type: "error" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative mx-auto" style={{ maxWidth: "1024px", width: "100%" }}>
      <div
        className="relative flex flex-col overflow-hidden"
        style={{
          width: "100%",
          maxWidth: "900px",
          minHeight: "450px",
          borderRadius: "20px",
          borderTop: "1px solid rgba(255, 255, 255, 0.79)",
          borderLeft: "1px solid rgba(255, 255, 255, 0.79)",
          background:
            "linear-gradient(118deg, rgba(1, 72, 253, 0.08) 2.73%, rgba(1, 72, 253, 0.00) 100%), rgba(173, 173, 173, 0.06)",
          backdropFilter: "blur(16px)",
          boxShadow: "0px 26px 30px 0px #D9D9D933",
        }}
      >
        {/* Gradient Background - Top Right */}
        <div
          className="absolute right-0 top-0 h-40 w-40"
          style={{
            background: "linear-gradient(94deg, #3BBCFF -3.9%, #936DFF 113.55%)",
            filter: "blur(60px)",
            borderRadius: "50%",
            transform: "translate(20%, -20%)",
          }}
        />

        {/* Gradient Background - Bottom Left */}
        <div
          className="absolute bottom-0 left-0 h-40 w-40"
          style={{
            opacity: 0.2,
            background:
              "linear-gradient(92deg, #FF2D92 6.52%, #F53F43 74.23%, #FD832C 102.13%)",
            filter: "blur(60px)",
            borderRadius: "50%",
            transform: "translate(-20%, 20%)",
          }}
        />

        {/* Inner Box 1 - Padding Container */}
        <div
          className="relative flex flex-col items-center"
          style={{
            width: "100%",
            height: "fit-content",
            paddingLeft: "32px",
            paddingRight: "32px",
            gap: "10px",
            paddingTop: "32px",
            paddingBottom: "32px",
          }}
        >
          {/* Inner Box 2 - Form Container */}
          <div
            className="flex flex-col"
            style={{
              width: "70%",
              height: "fit-content",
              borderRadius: "15px",
              gap: "8px",
              padding: "12px",
            }}
          >
            {/* Heading */}
            <h2
              className="mb-1 text-center"
              style={{
                fontFamily: "var(--font-sora)",
                fontSize: "28px",
                fontWeight: 600,
                lineHeight: "124%",
                letterSpacing: "2px",
                color: "#2D2D2D",
              }}
            >
              Join the waitlist for{" "}
              <span
                style={{
                  background:
                    "radial-gradient(95.2% 97.67% at 7.09% 23.91%, #3BBCFF 0%, #936DFF 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "var(--font-sora)",
                  fontSize: "28px",
                  fontWeight: 800,
                  lineHeight: "124%",
                  letterSpacing: "1px",
                }}
              >
                Best and quickest UGC platform
              </span>
            </h2>

            {/* Tagline */}
            <p
              className="mb-4 text-center"
              style={{
                fontFamily: "var(--font-sora), sans-serif",
                color: "#2D2D2D",
                fontWeight: 400,
                fontSize: "13px",
                lineHeight: "160%",
                letterSpacing: "0px",
              }}
            >
              Creative freedom paired with expert AI guidance
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mb-3">
              <div className="flex flex-col gap-4">
                {/* Name Row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                    className="w-full rounded-[20px] border border-[#E2E8F0] bg-white/80 px-5 py-3 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-[#3BBCFF] focus:ring-4 focus:ring-[#3BBCFF]/10"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                    className="w-full rounded-[20px] border border-[#E2E8F0] bg-white/80 px-5 py-3 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-[#3BBCFF] focus:ring-4 focus:ring-[#3BBCFF]/10"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  />
                </div>

                {/* Email and Industry Row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    required
                    className="w-full rounded-[20px] border border-[#E2E8F0] bg-white/80 px-5 py-3 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-[#3BBCFF] focus:ring-4 focus:ring-[#3BBCFF]/10"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  />
                  <input
                    type="text"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    placeholder="Industry / Profession"
                    required
                    className="w-full rounded-[20px] border border-[#E2E8F0] bg-white/80 px-5 py-3 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-[#3BBCFF] focus:ring-4 focus:ring-[#3BBCFF]/10"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`mx-auto w-fit px-8 py-4 text-base font-medium text-white transition-all cursor-pointer hover:opacity-90 active:scale-[0.98] ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  style={{
                    borderRadius: "30px",
                    border: "1px solid #FFF",
                    letterSpacing: "2%",
                    background:
                      "radial-gradient(95.2% 97.67% at 7.09% 23.91%, #3BBCFF 0%, #936DFF 100%)",
                  }}
                >
                  {status === "loading" ? "Joining..." : "Join waitlist"}
                </button>
              </div>
            </form>

            {/* Instructional Text */}
            <p
              className=" text-center"
              style={{
                fontFamily: "var(--font-sora), sans-serif",
                color: "#2D2D2D",
                fontWeight: 300,
                fontSize: "11px",
                lineHeight: "160%",
                letterSpacing: "0px",
              }}
            >
              Fill in your details to join the waitlist. We will let you know as
              soon as we launch!
            </p>

            {/* Benefits List */}
            <div className="flex flex-wrap justify-center gap-[20px] text-sm">
              <div
                className="flex items-center gap-1"
                style={{
                  fontFamily: "var(--font-sora), sans-serif",
                  color: "#2D2D2D",
                }}
              >
                <span>✓</span>
                <span>Priority download access</span>
              </div>
              <div
                className="flex items-center gap-1"
                style={{
                  fontFamily: "var(--font-sora), sans-serif",
                  color: "#2D2D2D",
                }}
              >
                <span>✓</span>
                <span>Get update when we are live</span>
              </div>
              <div
                className="flex items-center gap-1"
                style={{
                  fontFamily: "var(--font-sora), sans-serif",
                  color: "#2D2D2D",
                }}
              >
                <span>✓</span>
                <span>No Spams</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

