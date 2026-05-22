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
        background: "rgba(245,243,238,0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        className="navbar-inner"
        style={{ height: scrolled ? "52px" : "64px" }}
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
          <span aria-hidden="true">🐙</span> OCTO
        </a>

        {/* Links */}
        <div className="navbar-links">
          {siteConfig.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="nav-link"
              style={{
                color: "var(--text-2)",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 400,
                fontFamily: "var(--font-body)",
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={siteConfig.nav.cta.href}
          className="nav-cta"
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
        >
          {siteConfig.nav.cta.label}
        </a>
      </div>
    </nav>
  );
}
