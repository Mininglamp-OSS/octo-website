"use client";

import { useEffect, useState } from "react";

const members = [
  { name: "小明", role: "产品经理", type: "human" as const, emoji: "👨‍💼", top: 80, left: 120 },
  { name: "小红", role: "设计师", type: "human" as const, emoji: "👩‍🎨", top: 280, left: 80 },
  { name: "DataBot", role: "数据分析", type: "bot" as const, emoji: "🤖", top: 60, left: 480 },
  { name: "DocBot", role: "文档助手", type: "bot" as const, emoji: "📝", top: 300, left: 520 },
];

const bubbles = [
  { from: "DataBot", text: "日报已生成 ✅", type: "bot" as const, top: 40, left: 280 },
  { from: "小明", text: "已收到，感谢！", type: "human" as const, top: 200, left: 300 },
  { from: "DocBot", text: "文档已更新 📄", type: "bot" as const, top: 260, left: 420 },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: "#080B14" }}>
      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-dot-grid" style={{ opacity: 0.4 }} />

      {/* Blue glow orb — top-left */}
      <div
        className="absolute animate-pulse-glow"
        style={{
          top: "-10%",
          left: "-5%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      {/* Cyan glow orb — bottom-right */}
      <div
        className="absolute animate-pulse-glow"
        style={{
          bottom: "-5%",
          right: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          filter: "blur(100px)",
          animationDelay: "2s",
        }}
      />

      {/* Hero text */}
      <div className="relative z-20 flex flex-col items-center text-center pt-32 pb-20 px-6">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            borderColor: "rgba(59,130,246,0.3)",
            background: "rgba(59,130,246,0.08)",
            color: "#60a5fa",
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: "#3B82F6",
              boxShadow: "0 0 8px rgba(59,130,246,0.6)",
              animation: "pulse-glow 2s ease-in-out infinite",
            }}
          />
          现已开放内测申请
        </div>

        {/* H1 */}
        <h1
          className={`text-gradient-blue transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(44px, 7vw, 88px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: 24,
          }}
        >
          AI 与人，共事于此
        </h1>

        {/* Subtitle */}
        <p
          className={`transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ fontSize: 18, color: "#8B949E", marginBottom: 40, maxWidth: 480 }}
        >
          不是 AI 工具，而是 AI 同事。Octo 让 AI Agent 走进你的工作空间。
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#cta"
            className="text-white font-medium px-8 py-3 rounded-xl transition-all"
            style={{
              background: "#3B82F6",
              boxShadow: "0 0 30px rgba(59,130,246,0.4)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = "0 0 50px rgba(59,130,246,0.7)";
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = "0 0 30px rgba(59,130,246,0.4)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            申请内测 →
          </a>
          <a
            href="https://github.com/Mininglamp-OSS"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium px-8 py-3 rounded-xl transition-all"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#F0F6FF",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Isometric Workspace Canvas */}
      <div
        className={`relative z-10 flex justify-center px-6 transition-all duration-1000 delay-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div
          style={{
            width: 860,
            height: 480,
            position: "relative",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              transform: "perspective(1400px) rotateX(52deg) rotateZ(-45deg)",
              transformOrigin: "center center",
              position: "relative",
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Member Cards */}
            {members.map((member, i) => {
              const isBot = member.type === "bot";
              return (
                <div
                  key={member.name}
                  className="absolute animate-float"
                  style={{
                    top: member.top,
                    left: member.left,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${4 + i * 0.4}s`,
                  }}
                >
                  <div
                    className={`glass-card rounded-xl px-4 py-3 flex items-center gap-3 ${
                      isBot ? "shadow-[0_0_20px_rgba(6,182,212,0.2)]" : ""
                    }`}
                    style={
                      isBot
                        ? { borderColor: "rgba(6,182,212,0.3)" }
                        : undefined
                    }
                  >
                    <span className="text-2xl">{member.emoji}</span>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#F0F6FF" }}>
                        {member.name}
                      </p>
                      <p className="text-xs" style={{ color: "#8B949E" }}>
                        {member.role}
                      </p>
                    </div>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: isBot ? "#06B6D4" : "#22c55e",
                        boxShadow: isBot
                          ? "0 0 6px rgba(6,182,212,0.6)"
                          : "0 0 6px rgba(34,197,94,0.6)",
                      }}
                    />
                  </div>
                </div>
              );
            })}

            {/* Message Bubbles */}
            {bubbles.map((msg, i) => {
              const isBot = msg.type === "bot";
              return (
                <div
                  key={i}
                  className="absolute animate-float-slow"
                  style={{
                    top: msg.top,
                    left: msg.left,
                    animationDelay: `${i * 0.6 + 0.3}s`,
                    animationDuration: `${5 + i * 0.4}s`,
                  }}
                >
                  <div
                    className={`glass-card rounded-lg px-3 py-2 text-xs ${
                      isBot ? "text-cyan-300" : ""
                    }`}
                    style={{
                      borderColor: isBot
                        ? "rgba(6,182,212,0.25)"
                        : "rgba(255,255,255,0.1)",
                      color: isBot ? undefined : "#F0F6FF",
                    }}
                  >
                    <span className={isBot ? "text-cyan-400 font-medium" : "text-blue-400 font-medium"}>
                      {msg.from}
                    </span>
                    : {msg.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-20 flex justify-center pb-8 mt-8">
        <div className="flex flex-col items-center gap-2 animate-bounce" style={{ color: "#8B949E" }}>
          <span className="text-xs">向下滚动</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
