"use client";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";

export default function ManifestoSection() {
  const rowsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.12 }
    );
    rowsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: "#0A0A0A",
        padding: "80px",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          letterSpacing: "0.15em",
          color: "var(--accent-orange)",
          textTransform: "uppercase",
          marginBottom: "48px",
          fontFamily: "var(--font-body)",
        }}
      >
        OUR PRINCIPLES
      </div>

      {siteConfig.principles.map((p, i) => (
        <div
          key={p.num}
          className="reveal"
          ref={(el) => { if (el) rowsRef.current[i] = el; }}
          style={{
            display: "grid",
            gridTemplateColumns: "100px 280px 1fr",
            alignItems: "center",
            padding: "40px 0",
            borderTop: i === 0 ? "1px solid rgba(255,255,255,0.08)" : undefined,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "80px",
              color: "var(--accent-orange)",
              lineHeight: 1,
            }}
          >
            {p.num}
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "52px",
              color: "#fff",
              lineHeight: 1,
              letterSpacing: "0.02em",
            }}
          >
            {p.name}
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.65,
              fontFamily: "var(--font-body)",
            }}
          >
            {p.desc}
          </div>
        </div>
      ))}
    </section>
  );
}
