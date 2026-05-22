"use client";
import { siteConfig, chatColors } from "@/config/site";

const { hero } = siteConfig;

/* ── Product UI Demo ── */
function ProductUIDemo() {
  return (
    <div
      className="product-ui"
      style={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        maxWidth: "520px",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow:
          "0 24px 80px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.06)",
        display: "flex",
        transform: "perspective(1200px) rotateY(-4deg) rotateX(1deg)",
        transition: "transform 0.4s ease",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "28%",
          background: "var(--chat-sidebar-bg)",
          padding: "16px 0",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            padding: "0 14px 12px",
            fontSize: "12px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.9)",
            fontFamily: "var(--font-body)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            marginBottom: "8px",
          }}
        >
          Octo Workspace
        </div>

        {[
          { name: "# general", active: false },
          { name: "# product-planning", active: true },
          { name: "# engineering", active: false },
          { name: "# design", active: false },
        ].map((ch) => (
          <div
            key={ch.name}
            style={{
              padding: "5px 14px",
              fontSize: "11px",
              color: ch.active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.4)",
              fontFamily: "var(--font-body)",
              background: ch.active ? "rgba(0,0,255,0.12)" : "transparent",
              borderLeft: ch.active ? "2px solid #0000FF" : "2px solid transparent",
            }}
          >
            {ch.name}
          </div>
        ))}

        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.07)",
            margin: "10px 14px",
          }}
        />

        {[
          { icon: "🤖", name: "Planning Agent" },
          { icon: "📊", name: "Data Agent" },
        ].map((agent) => (
          <div
            key={agent.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              padding: "5px 14px",
              fontSize: "11px",
              color: "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-body)",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: chatColors.onlineDot,
                flexShrink: 0,
                display: "inline-block",
              }}
            />
            {agent.icon} {agent.name}
          </div>
        ))}
      </div>

      {/* Chat area */}
      <div
        style={{
          flex: 1,
          background: "var(--chat-area-bg)",
          display: "flex",
          flexDirection: "column",
          minHeight: "380px",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "10px 14px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#fff",
              fontFamily: "var(--font-body)",
            }}
          >
            # product-planning
          </span>
          <span
            style={{
              fontSize: "10px",
              color: "rgba(255,255,255,0.3)",
              fontFamily: "var(--font-body)",
            }}
          >
            5 members
          </span>
        </div>

        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflow: "hidden",
            padding: "12px 14px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {/* Alice */}
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "2px" }}>
              <span style={{ fontSize: "12px", fontWeight: 600, color: chatColors.alice, fontFamily: "var(--font-body)" }}>Alice Smith</span>
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)", fontWeight: 300 }}>10:23</span>
            </div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-body)", lineHeight: 1.5 }}>
              Can someone pull together the Q3 backlog priorities?
            </div>
          </div>

          {/* Planning Agent */}
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "2px" }}>
              <span style={{ fontSize: "12px", fontWeight: 600, color: chatColors.planningAgent, fontFamily: "var(--font-body)" }}>
                <span aria-hidden="true">🤖</span> Planning Agent
              </span>
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)", fontWeight: 300 }}>10:23</span>
            </div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-body)", lineHeight: 1.5 }}>
              On it. Scanning Notion + last retro...
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                borderLeft: "2px solid " + chatColors.planningAgent,
                borderRadius: "4px",
                padding: "8px 12px",
                fontFamily: "monospace",
                fontSize: "11px",
                color: "rgba(255,255,255,0.75)",
                marginTop: "6px",
                lineHeight: 1.7,
              }}
            >
              <span aria-hidden="true">✅</span>&nbsp; 3 carry-over items<br />
              <span aria-hidden="true">🔥</span>&nbsp; 5 high-priority issues<br />
              <span aria-hidden="true">⏳</span>&nbsp; 12 backlog items<br />
              <br />
              Shall I draft a Sprint plan?
            </div>
          </div>

          {/* Bob */}
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "2px" }}>
              <span style={{ fontSize: "12px", fontWeight: 600, color: chatColors.bob, fontFamily: "var(--font-body)" }}>Bob Chen</span>
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)", fontWeight: 300 }}>10:24</span>
            </div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-body)", lineHeight: 1.5 }}>
              Yes — also flag any blockers.
            </div>
          </div>

          {/* Data Agent */}
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "2px" }}>
              <span style={{ fontSize: "12px", fontWeight: 600, color: chatColors.dataAgent, fontFamily: "var(--font-body)" }}>
                <span aria-hidden="true">📊</span> Data Agent
              </span>
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)", fontWeight: 300 }}>10:25</span>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderLeft: "2px solid " + chatColors.dataAgent,
                borderRadius: "4px",
                padding: "8px 12px",
                fontSize: "11px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
                fontFamily: "var(--font-body)",
              }}
            >
              <span aria-hidden="true">⚠️</span> Blocker: PR #42 (Auth service)<br />
              &nbsp;&nbsp;&nbsp;Open 6 days, no reviewer assigned.
            </div>
          </div>

          {/* Charlie */}
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "2px" }}>
              <span style={{ fontSize: "12px", fontWeight: 600, color: chatColors.charlie, fontFamily: "var(--font-body)" }}>Charlie Dev</span>
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)", fontWeight: 300 }}>10:25</span>
            </div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-body)", lineHeight: 1.5 }}>
              @Bob that one&apos;s yours <span aria-hidden="true">👆</span>
            </div>
          </div>

          {/* Bob reply */}
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "2px" }}>
              <span style={{ fontSize: "12px", fontWeight: 600, color: chatColors.bob, fontFamily: "var(--font-body)" }}>Bob Chen</span>
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)", fontWeight: 300 }}>10:25</span>
            </div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-body)", lineHeight: 1.5 }}>
              On it! <span aria-hidden="true">🙌</span>
            </div>
          </div>
        </div>

        {/* Typing indicator */}
        <div
          style={{
            padding: "8px 14px 10px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "10px",
            color: "rgba(255,255,255,0.32)",
            fontFamily: "var(--font-body)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <span aria-hidden="true">🤖</span> Planning Agent is typing
          <span style={{ display: "flex", gap: "3px", alignItems: "center" }} aria-hidden="true">
            <span className="typing-dot" />
            <span className="typing-dot" />
            <span className="typing-dot" />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Hero Section ── */
export default function HeroSection() {
  return (
    <section
      className="grid-bg section-pad"
      style={{ minHeight: "calc(100vh - 64px)", position: "relative" }}
    >
      <div className="hero-grid">
        {/* ── Left ── */}
        <div className="hero-left-pad">
          {/* Badge — CSS animation, no JS FOUC */}
          <span
            className="hero-animate hero-animate-1"
            style={{
              display: "inline-block",
              background: "var(--accent-yellow)",
              color: "#000",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              borderRadius: "2px",
              padding: "4px 10px",
              marginBottom: "28px",
              fontFamily: "var(--font-body)",
            }}
          >
            {hero.badge}
          </span>

          {/* Headline */}
          <h1
            className="hero-title hero-animate hero-animate-2"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(72px, 11vw, 185px)",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              color: "var(--text)",
              margin: 0,
            }}
          >
            {hero.headline[0]}
            <br />
            {hero.headline[1]}
          </h1>

          {/* Accent */}
          <em
            className="hero-accent hero-animate hero-animate-3"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(28px, 3.5vw, 52px)",
              color: "var(--accent-orange)",
              display: "block",
              marginTop: "16px",
            }}
          >
            {hero.accent}
          </em>

          {/* Subtitle */}
          <p
            className="hero-animate hero-animate-4"
            style={{
              fontSize: "18px",
              fontWeight: 300,
              color: "var(--text-2)",
              maxWidth: "480px",
              lineHeight: 1.65,
              marginTop: "24px",
              fontFamily: "var(--font-body)",
            }}
          >
            {hero.subtitle}
          </p>

          {/* CTA */}
          <div
            className="hero-animate hero-animate-5"
            style={{ display: "flex", gap: "20px", alignItems: "center", marginTop: "36px" }}
          >
            <a
              href={hero.cta.href}
              className="btn-primary"
              style={{
                background: "var(--accent-blue)",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "4px",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                transition: "opacity 0.2s, transform 0.2s",
                display: "inline-block",
              }}
            >
              Deploy Octo
            </a>
            <a
              href={hero.githubCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{
                color: "var(--text)",
                fontSize: "15px",
                fontWeight: 500,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                fontFamily: "var(--font-body)",
                transition: "color 0.2s",
              }}
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Stats */}
          <div
            className="hero-animate hero-animate-6"
            style={{ display: "flex", marginTop: "48px", borderTop: "1px solid var(--line)" }}
          >
            {hero.stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding: "16px 32px 0 0",
                  marginRight: "32px",
                  borderRight: i < 2 ? "1px solid var(--line)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "34px",
                    color: "var(--text)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--text-2)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginTop: "4px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Product UI ── */}
        <div className="hero-right-col">
          {/* Deco: IKB blue rect */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              width: "80px",
              height: "200px",
              background: "var(--accent-blue)",
              right: "-12px",
              bottom: "20px",
              zIndex: 0,
            }}
          />
          {/* Deco: orange square */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              width: "40px",
              height: "40px",
              background: "var(--accent-orange)",
              right: "-4px",
              top: "20px",
              zIndex: 0,
            }}
          />
          <ProductUIDemo />
        </div>
      </div>
    </section>
  );
}
