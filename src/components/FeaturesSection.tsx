"use client";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";

export default function FeaturesSection() {
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    rowsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="section-pad" style={{ background: "var(--bg)" }}>
      <div
        style={{
          fontSize: "11px",
          letterSpacing: "0.15em",
          color: "var(--accent-blue)",
          textTransform: "uppercase",
          marginBottom: "16px",
          fontFamily: "var(--font-body)",
        }}
      >
        FEATURES
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
        BUILT FOR
        <br />
        REAL TEAMS
      </h2>

      {siteConfig.features.map((f, i) => (
        <div
          key={f.num}
          className="reveal features-row-grid"
          ref={(el) => { rowsRef.current[i] = el; }}
          style={{
            padding: "28px 0",
            borderTop: i === 0 ? "1px solid var(--line)" : undefined,
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "28px",
              color: "var(--accent-blue)",
              lineHeight: 1,
            }}
          >
            {f.num}
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "var(--text)",
              fontFamily: "var(--font-body)",
            }}
          >
            {f.name}
          </div>
          <div
            className="f-desc"
            style={{
              fontSize: "15px",
              fontWeight: 300,
              color: "var(--text-2)",
              fontFamily: "var(--font-body)",
              lineHeight: 1.6,
            }}
          >
            {f.desc}
          </div>
          <div
            className="f-arrow"
            aria-hidden="true"
            style={{ fontSize: "18px", color: "var(--text-2)", textAlign: "right" }}
          >
            →
          </div>
        </div>
      ))}
    </section>
  );
}
