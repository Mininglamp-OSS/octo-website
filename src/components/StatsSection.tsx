"use client";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";

export default function StatsSection() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="section-pad"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="stats-grid">
        {siteConfig.stats.map((stat, i) => (
          <div
            key={stat.label}
            className="reveal"
            ref={(el) => { itemsRef.current[i] = el; }}
            style={{
              padding: i === 0 ? "0 48px 0 0" : "0 48px",
              borderRight: i < siteConfig.stats.length - 1 ? "1px solid var(--line)" : "none",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 72px)",
                color: "var(--text)",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: 400,
                color: "var(--text-2)",
                marginTop: "8px",
                fontFamily: "var(--font-body)",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
