"use client";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";

const colorMap = {
  blue:   { bg: "var(--accent-blue)",   color: "#fff" },
  orange: { bg: "var(--accent-orange)", color: "#fff" },
  yellow: { bg: "var(--accent-yellow)", color: "var(--text)" },
};

export default function HowItWorks() {
  // Safe: items derive from static siteConfig so array length never changes at runtime
  const blocksRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    blocksRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-pad" style={{ background: "var(--bg-2)" }}>
      <div
        style={{
          fontSize: "11px",
          letterSpacing: "0.15em",
          color: "var(--accent-orange)",
          textTransform: "uppercase",
          marginBottom: "16px",
          fontFamily: "var(--font-body)",
        }}
      >
        HOW IT WORKS
      </div>
      <h2
        className="section-title"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(48px, 6vw, 80px)",
          color: "var(--text)",
          marginBottom: "48px",
          lineHeight: 0.95,
        }}
      >
        THREE STEPS.
        <br />
        ONE TEAM.
      </h2>

      <div className="steps-grid">
        {siteConfig.howItWorks.map((step, i) => {
          const colors = colorMap[step.color];
          return (
            <div
              key={step.num}
              className="reveal"
              ref={(el) => { blocksRef.current[i] = el; }}
              style={{
                background: colors.bg,
                color: colors.color,
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(48px, 7vw, 80px)",
                  lineHeight: 1,
                  opacity: 0.35,
                }}
              >
                {step.num}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  lineHeight: 1,
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 300,
                  lineHeight: 1.65,
                  fontFamily: "var(--font-body)",
                  opacity: 0.85,
                }}
              >
                {step.desc}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
