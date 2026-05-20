"use client";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ background: "#080B14", minHeight: "100vh" }}
    >
      {/* Concentric portal circles */}
      {/* Outer */}
      <div
        className="absolute animate-portal-pulse"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          border: "1px solid rgba(59,130,246,0.1)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          transformOrigin: "0 0",
          animationDelay: "0s",
        }}
      />
      {/* Mid */}
      <div
        className="absolute animate-portal-pulse"
        style={{
          width: 380,
          height: 380,
          borderRadius: "50%",
          border: "1px solid rgba(59,130,246,0.2)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          transformOrigin: "0 0",
          animationDelay: "0.8s",
        }}
      />
      {/* Inner */}
      <div
        className="absolute animate-portal-pulse"
        style={{
          width: 180,
          height: 180,
          borderRadius: "50%",
          border: "1px solid rgba(59,130,246,0.5)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          transformOrigin: "0 0",
          animationDelay: "1.6s",
        }}
      />

      {/* Center radial glow */}
      <div
        className="absolute"
        style={{
          width: 300,
          height: 300,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Cyan glow */}
      <div
        className="absolute"
        style={{
          width: 200,
          height: 200,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        <h2
          className="text-gradient-blue mb-6"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(48px, 8vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.1,
          }}
        >
          准备好了吗？
        </h2>

        <p className="mb-10" style={{ color: "#8B949E", fontSize: 18 }}>
          Octo 内测申请中 · 邀请制 · 支持私有化部署
        </p>

        <a
          href="#"
          className="animate-glow-pulse text-white font-semibold text-lg rounded-xl transition-all"
          style={{
            background: "#3B82F6",
            padding: "16px 40px",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          申请进入 →
        </a>

        {/* Badge row */}
        <div
          className="flex items-center gap-3 mt-8 text-xs"
          style={{ color: "#8B949E" }}
        >
          <span
            className="px-3 py-1 rounded-full"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            Android 已上线
          </span>
          <span
            className="px-3 py-1 rounded-full"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            iOS 开发中
          </span>
          <span
            className="px-3 py-1 rounded-full"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            私有化部署
          </span>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8">
        <div
          className="max-w-6xl mx-auto pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="flex items-center justify-between text-sm" style={{ color: "#8B949E" }}>
            <span>© 2025 Mininglamp OSS</span>
            <div className="flex items-center gap-4">
              <a
                href="https://discord.gg/vj9Vsj9hSB"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Discord
              </a>
              <a
                href="https://github.com/Mininglamp-OSS"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a href="#" className="hover:text-white transition-colors">
                联系我们
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
