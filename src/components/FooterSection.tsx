"use client";
import { siteConfig } from "@/config/site";

export default function FooterSection() {
  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--line)",
        padding: "60px 80px 0",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "48px",
          paddingBottom: "48px",
          borderBottom: "1px solid var(--line)",
        }}
      >
        {/* Left */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "24px",
              color: "var(--text)",
              marginBottom: "10px",
            }}
          >
            🐙 OCTO
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "var(--text-2)",
              fontFamily: "var(--font-body)",
              marginBottom: "14px",
            }}
          >
            {siteConfig.footer.tagline}
          </div>
          <span
            style={{
              display: "inline-block",
              border: "1px solid var(--line)",
              fontSize: "11px",
              padding: "3px 8px",
              borderRadius: "2px",
              color: "var(--text-2)",
              fontFamily: "var(--font-body)",
            }}
          >
            {siteConfig.footer.license}
          </span>
        </div>

        {/* Links */}
        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-2)",
              marginBottom: "16px",
              fontFamily: "var(--font-body)",
            }}
          >
            Links
          </div>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {siteConfig.footer.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  style={{
                    color: "var(--text)",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontFamily: "var(--font-body)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent-blue)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text)")
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quote */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "16px",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            {siteConfig.footer.quote}
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          padding: "20px 0",
          fontSize: "12px",
          color: "var(--text-2)",
          fontFamily: "var(--font-body)",
        }}
      >
        {siteConfig.footer.copy}
      </div>
    </footer>
  );
}
