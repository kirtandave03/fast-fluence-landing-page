"use client";

import { useEffect } from "react";

interface WaitlistSuccessModalProps {
  onClose: () => void;
}

export default function WaitlistSuccessModal({
  onClose,
}: WaitlistSuccessModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{
        zIndex: 9999,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-2xl p-8 relative"
        style={{
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow:
            "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Green Checkmark Icon */}
        <div className="flex flex-col items-center">
          <div
            className="mb-6 flex h-24 w-24 items-center justify-center rounded-full"
            style={{
              background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
              boxShadow: "0 4px 20px rgba(16, 185, 129, 0.3)",
            }}
          >
            <svg
              className="h-14 w-14 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Main Heading */}
          <h2
            className="mb-3 text-center text-3xl font-bold"
            style={{
              fontFamily: "var(--font-sora)",
              color: "#2D2D2D",
            }}
          >
            You&apos;re on the list.
          </h2>

          {/* Subheading */}
          <p
            className="mb-6 text-center text-base"
            style={{
              fontFamily: "var(--font-inter)",
              color: "#6B7280",
            }}
          >
            Thanks for signing up for early access to{" "}
            <span style={{ fontWeight: 700, color: "#2D2D2D" }}>
              FastFluence
            </span>
            .
          </p>

          {/* Confirmation Details */}
          <div className="mb-2 w-full">
            <p
              className="mb-6 text-center text-base"
              style={{
                fontFamily: "var(--font-inter)",
                color: "#4B5563",
              }}
            >
              We&apos;ve saved your details and confirmed your place in our
              private beta queue. We&apos;ll reach out as soon as access opens.
            </p>

            {/* What happens next section */}
            <div className="mb-6 text-left">
              <h3
                className="mb-4 flex items-center gap-2 text-lg font-semibold"
                style={{
                  fontFamily: "var(--font-sora)",
                  color: "#2D2D2D",
                }}
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ color: "#F59E0B" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                What happens next?
              </h3>

              <div className="space-y-3">
                {/* Confirmed */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-3 w-3 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p
                    className="text-base"
                    style={{
                      fontFamily: "var(--font-inter)",
                      color: "#4B5563",
                    }}
                  >
                    Your spot is <strong>confirmed</strong>
                  </p>
                </div>

                {/* Secure */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100">
                    <svg
                      className="h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      style={{ color: "#F59E0B" }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p
                    className="text-base"
                    style={{
                      fontFamily: "var(--font-inter)",
                      color: "#4B5563",
                    }}
                  >
                    Your details are secure and <strong>never shared</strong>
                  </p>
                </div>

                {/* Invite */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100">
                    <svg
                      className="h-3 w-3 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p
                    className="text-base"
                    style={{
                      fontFamily: "var(--font-inter)",
                      color: "#4B5563",
                    }}
                  >
                    You&apos;ll receive an invite as soon as{" "}
                    <strong>beta access is ready</strong>
                  </p>
                </div>
              </div>

              <p
                className="mt-4 text-sm"
                style={{ fontFamily: "var(--font-inter)", color: "#6B7280" }}
              >
                No spam. No noise. Just a heads-up when it&apos;s time.
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="rounded-full px-8 py-3 text-base font-medium transition-opacity hover:opacity-80 cursor-pointer"
            style={{
              background:
                "radial-gradient(95.2% 97.67% at 7.09% 23.91%, #3BBCFF 0%, #936DFF 100%)",
              color: "white",
              fontFamily: "var(--font-sora)",
            }}
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}
