"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // N5: close drawer when viewport grows above mobile breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // N6: close drawer on Escape key; return focus to hamburger
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    hamburgerRef.current?.focus();
  };

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
        {/* Logo */}
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

        {/* Right side: CTA + hamburger */}
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

          {/* Hamburger button — hidden on desktop, shown on mobile via CSS */}
          <button
            ref={hamburgerRef}
            className="hamburger-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              color: "var(--text)",
            }}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer — hidden on desktop via CSS */}
      {menuOpen && (
        <div
          id="mobile-nav-drawer"
          role="region"
          aria-label="Navigation menu"
          className="mobile-menu"
          style={{
            background: "rgba(245,243,238,0.98)",
            borderTop: "1px solid var(--line)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {siteConfig.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={closeMenu}
              style={{
                color: "var(--text)",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: 500,
                fontFamily: "var(--font-body)",
                padding: "12px 0",
                borderBottom: "1px solid var(--line)",
                display: "block",
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
