"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        background: "rgba(245,243,238,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        className="navbar-inner"
        style={{ height: scrolled ? "52px" : "64px" }}
      >
        {/* Logo — using next/link for internal route */}
        <Link
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
        </Link>

        {/* Desktop links */}
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

        {/* CTA (always visible) */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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

          {/* Hamburger — visible on mobile only */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            style={{
              display: "none", // shown via CSS on mobile
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              color: "var(--text)",
            }}
          >
            {menuOpen ? (
              // X icon
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </svg>
            ) : (
              // Hamburger icon
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            background: "rgba(245,243,238,0.98)",
            borderTop: "1px solid var(--line)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {siteConfig.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--text)",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: 500,
                fontFamily: "var(--font-body)",
                padding: "8px 0",
                borderBottom: "1px solid var(--line)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
