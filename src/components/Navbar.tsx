"use client";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        height: scrolled ? "52px" : "64px",
        background: "rgba(245,243,238,0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--line)",
        transition: "height 0.3s ease",
      }}
    >
      {/* Logo */}
      <a
        href="/"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "22px",
          letterSpacing: "0.04em",
          color: "var(--text)",
          textDecoration: "none",
        }}
      >
        🐙 OCTO
      </a>

      {/* Links */}
      <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        {siteConfig.nav.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            style={{
              color: "var(--text-2)",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 400,
              fontFamily: "var(--font-body)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-2)")
            }
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href={siteConfig.nav.cta.href}
        style={{
          background: "var(--accent-blue)",
          color: "#fff",
          padding: "10px 22px",
          borderRadius: "4px",
          fontSize: "14px",
          fontWeight: 600,
          textDecoration: "none",
          fontFamily: "var(--font-body)",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        {siteConfig.nav.cta.label}
      </a>
    </nav>
  );
}
