"use client";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";

export default function CTASection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cta"
      className="section-pad"
      style={{ background: "var(--accent-blue)", textAlign: "center" }}
    >
      <div className="reveal" ref={contentRef}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(60px, 8vw, 120px)",
            color: "#fff",
            lineHeight: 0.92,
            marginBottom: "24px",
            whiteSpace: "pre-line",
          }}
        >
          {siteConfig.cta.headline}
        </h2>
        <p
          style={{
            fontSize: "18px",
            fontWeight: 300,
            color: "rgba(255,255,255,0.72)",
            maxWidth: "520px",
            margin: "0 auto 40px",
            lineHeight: 1.65,
            fontFamily: "var(--font-body)",
          }}
        >
          {siteConfig.cta.sub}
        </p>
        <div
          className="cta-buttons"
          style={{ display: "flex", gap: "16px", justifyContent: "center", alignItems: "center" }}
        >
          <a
            href={siteConfig.cta.primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white"
            style={{
              background: "#fff",
              color: "var(--text)",
              padding: "14px 32px",
              borderRadius: "4px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              transition: "opacity 0.2s, transform 0.2s",
              display: "inline-block",
            }}
          >
            {siteConfig.cta.primary.label}
          </a>
          <a
            href={siteConfig.cta.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white"
            style={{
              background: "transparent",
              color: "#fff",
              padding: "13px 31px",
              borderRadius: "4px",
              border: "1.5px solid #fff",
              fontSize: "15px",
              fontWeight: 500,
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              transition: "background 0.2s, transform 0.2s",
              display: "inline-block",
            }}
          >
            {siteConfig.cta.secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
