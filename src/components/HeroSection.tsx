"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CHANNELS = [
  { name: "welcome", icon: "👋", active: false },
  { name: "announcements", icon: "📢", active: false },
  { name: "general", icon: "💬", active: true },
  { name: "pr-feed", icon: "🔀", active: false },
  { name: "issue-feed", icon: "🐛", active: false },
  { name: "dev-discussion", icon: "🛠️", active: false },
];

const MEMBERS = [
  { name: "产品经理", color: "#22c55e", bot: false },
  { name: "DataBot", color: "#06B6D4", bot: true },
  { name: "DocBot", color: "#06B6D4", bot: true },
];

const MESSAGES = [
  { id: 1, sender: "产品经理", avatar: "👨‍💼", bot: false, text: "@DataBot 上周 DAU 趋势？", time: "14:32" },
  { id: 2, sender: "DataBot", avatar: "🤖", bot: true, text: null, typing: true, time: "14:32" },
  { id: 3, sender: "DataBot", avatar: "🤖", bot: true, text: "上周 DAU 环比增长 23%，峰值在周三下午 3 点 📈", time: "14:32" },
  { id: 4, sender: "DataBot", avatar: "🤖", bot: true, text: "✅ 周报草稿已推送至 #weekly-report，附带图表", time: "14:33" },
  { id: 5, sender: "产品经理", avatar: "👨‍💼", bot: false, text: "太快了，感谢 👍", time: "14:33" },
];

function TypingDots() {
  return (
    <div style={{ display: "flex", gap: "4px", alignItems: "center", padding: "4px 2px" }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: "6px", height: "6px", borderRadius: "50%",
            background: "#06B6D4",
            animation: `typing-dot 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setMounted(true);
    const timers = MESSAGES.map((_, i) =>
      setTimeout(() => setVisibleCount(i + 1), 1800 + i * 900)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#080B14", minHeight: "100vh" }}
    >
      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Blue glow orb TL ── */}
      <div
        className="absolute pointer-events-none animate-pulse-glow"
        style={{
          top: "-250px", left: "-150px",
          width: "900px", height: "900px",
          background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />

      {/* ── Cyan glow orb BR ── */}
      <div
        className="absolute pointer-events-none animate-pulse-glow"
        style={{
          bottom: "-150px", right: "-200px",
          width: "700px", height: "700px",
          background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 65%)",
          borderRadius: "50%",
          animationDelay: "2s",
        }}
      />

      {/* ── Main content ── */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6"
        style={{ paddingTop: "140px", paddingBottom: "80px" }}
      >
        {/* ── Hero text ── */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}
          >
            <div
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "6px 16px", borderRadius: "100px",
                border: "1px solid rgba(59,130,246,0.4)",
                background: "rgba(59,130,246,0.08)",
              }}
            >
              <span
                style={{
                  width: "7px", height: "7px", borderRadius: "50%",
                  background: "#3B82F6",
                  boxShadow: "0 0 8px #3B82F6",
                  animation: "pulse-glow 2s ease-in-out infinite",
                }}
              />
              <span style={{ fontSize: "13px", color: "#93c5fd", fontWeight: 500 }}>
                现已开放内测申请
              </span>
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: "clamp(52px, 7.5vw, 96px)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.04,
              marginBottom: "28px",
              background: "linear-gradient(140deg, #ffffff 0%, #bfdbfe 38%, #06B6D4 78%, #0e7490 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI 与人，<br />共事于此
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: "18px", color: "#8B949E", lineHeight: 1.7,
              maxWidth: "500px", margin: "0 auto 44px",
            }}
          >
            不是 AI 工具，而是 AI 同事。<br />
            Bot 加入你的团队，共享上下文，协作完成任务。
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}
          >
            <a
              href="#cta"
              style={{
                padding: "14px 32px", borderRadius: "12px",
                background: "#3B82F6", color: "#fff",
                fontWeight: 600, fontSize: "15px",
                textDecoration: "none",
                boxShadow: "0 0 32px rgba(59,130,246,0.45), 0 4px 20px rgba(59,130,246,0.3)",
                transition: "all 0.2s ease",
                display: "inline-block",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 56px rgba(59,130,246,0.65), 0 8px 28px rgba(59,130,246,0.45)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(59,130,246,0.45), 0 4px 20px rgba(59,130,246,0.3)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              申请内测 →
            </a>
            <a
              href="https://github.com/Mininglamp-OSS"
              target="_blank" rel="noopener noreferrer"
              style={{
                padding: "14px 32px", borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.04)",
                color: "#F0F6FF", fontWeight: 600, fontSize: "15px",
                textDecoration: "none",
                transition: "all 0.2s ease",
                display: "inline-block",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
              }}
            >
              GitHub ↗
            </a>
          </motion.div>
        </div>

        {/* ── Product Mock Window ── */}
        <motion.div
          initial={{ opacity: 0, y: 56 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: "960px", margin: "0 auto" }}
        >
          {/* Outer glow ring */}
          <div
            style={{
              borderRadius: "18px",
              padding: "1px",
              background: "linear-gradient(135deg, rgba(59,130,246,0.35) 0%, rgba(6,182,212,0.2) 50%, rgba(59,130,246,0.1) 100%)",
              boxShadow: "0 0 80px rgba(59,130,246,0.12), 0 60px 120px rgba(0,0,0,0.6)",
            }}
          >
            {/* Window */}
            <div
              style={{
                borderRadius: "17px",
                overflow: "hidden",
                background: "rgba(10,13,24,0.97)",
              }}
            >
              {/* Title bar */}
              <div
                style={{
                  height: "42px",
                  background: "rgba(14,18,32,1)",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  display: "flex", alignItems: "center",
                  padding: "0 16px", gap: "12px",
                  userSelect: "none",
                }}
              >
                <div style={{ display: "flex", gap: "7px" }}>
                  {["#FF5F56", "#FFBD2E", "#27C93F"].map((c) => (
                    <div key={c} style={{ width: "12px", height: "12px", borderRadius: "50%", background: c, opacity: 0.9 }} />
                  ))}
                </div>
                <div style={{ flex: 1, textAlign: "center", fontSize: "13px", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
                  🐙 Octo  ·  #general
                </div>
                <div style={{ width: "60px" }} />
              </div>

              {/* Body */}
              <div style={{ display: "flex", height: "420px" }}>
                {/* Sidebar */}
                <div
                  style={{
                    width: "210px", flexShrink: 0,
                    borderRight: "1px solid rgba(255,255,255,0.06)",
                    padding: "14px 8px",
                    background: "rgba(10,13,22,0.6)",
                    overflowY: "hidden",
                  }}
                >
                  {/* Workspace name */}
                  <div
                    style={{
                      display: "flex", alignItems: "center", gap: "8px",
                      padding: "6px 10px 12px",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "28px", height: "28px", borderRadius: "8px",
                        background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "14px",
                      }}
                    >
                      🐙
                    </div>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#F0F6FF" }}>Octo 开发社区</span>
                  </div>

                  {/* Channel label */}
                  <div style={{ fontSize: "11px", color: "#8B949E", textTransform: "uppercase", letterSpacing: "0.08em", padding: "4px 10px 6px", fontWeight: 700 }}>
                    频道
                  </div>

                  {/* Channels */}
                  {CHANNELS.map((ch) => (
                    <div
                      key={ch.name}
                      style={{
                        display: "flex", alignItems: "center", gap: "7px",
                        padding: "6px 10px", borderRadius: "7px",
                        fontSize: "13px",
                        background: ch.active ? "rgba(59,130,246,0.18)" : "transparent",
                        color: ch.active ? "#F0F6FF" : "#8B949E",
                        marginBottom: "1px",
                        fontWeight: ch.active ? 600 : 400,
                      }}
                    >
                      <span style={{ fontSize: "12px" }}>{ch.icon}</span>
                      <span># {ch.name}</span>
                      {ch.active && (
                        <span
                          style={{
                            marginLeft: "auto", fontSize: "10px", fontWeight: 700,
                            background: "#3B82F6", color: "#fff",
                            borderRadius: "10px", padding: "1px 6px",
                          }}
                        >
                          3
                        </span>
                      )}
                    </div>
                  ))}

                  {/* Members label */}
                  <div style={{ fontSize: "11px", color: "#8B949E", textTransform: "uppercase", letterSpacing: "0.08em", padding: "14px 10px 6px", fontWeight: 700 }}>
                    成员 — {MEMBERS.length}
                  </div>

                  {/* Members */}
                  {MEMBERS.map((m) => (
                    <div
                      key={m.name}
                      style={{
                        display: "flex", alignItems: "center", gap: "8px",
                        padding: "5px 10px", fontSize: "13px", color: "#8B949E",
                      }}
                    >
                      <div
                        style={{
                          width: "8px", height: "8px", borderRadius: "50%",
                          background: m.color,
                          boxShadow: m.bot ? `0 0 6px ${m.color}` : "none",
                        }}
                      />
                      <span>{m.bot ? "🤖 " : ""}{m.name}</span>
                    </div>
                  ))}
                </div>

                {/* Chat area */}
                <div
                  style={{
                    flex: 1, padding: "16px 20px",
                    overflowY: "hidden",
                    display: "flex", flexDirection: "column", gap: "4px",
                  }}
                >
                  {/* Channel header */}
                  <div
                    style={{
                      paddingBottom: "12px",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      marginBottom: "8px",
                      display: "flex", alignItems: "center", gap: "8px",
                    }}
                  >
                    <span style={{ fontSize: "18px" }}>💬</span>
                    <span style={{ fontWeight: 700, fontSize: "15px", color: "#F0F6FF" }}>#general</span>
                    <span style={{ color: "#8B949E", fontSize: "13px" }}>— 团队日常沟通 & AI 协作频道</span>
                  </div>

                  {/* Messages */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-end" }}>
                    <AnimatePresence>
                      {MESSAGES.slice(0, visibleCount).map((msg) => (
                        <motion.div
                          key={msg.id}
                          initial={{ opacity: 0, y: 10, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
                        >
                          {/* Avatar */}
                          <div
                            style={{
                              width: "34px", height: "34px", borderRadius: "50%",
                              flexShrink: 0,
                              display: "flex", alignItems: "center", justifyContent: "center",
                              fontSize: "17px",
                              background: msg.bot
                                ? "linear-gradient(135deg, rgba(6,182,212,0.25), rgba(6,182,212,0.1))"
                                : "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(99,102,241,0.1))",
                              border: msg.bot
                                ? "1px solid rgba(6,182,212,0.35)"
                                : "1px solid rgba(99,102,241,0.25)",
                              boxShadow: msg.bot ? "0 0 12px rgba(6,182,212,0.2)" : "none",
                            }}
                          >
                            {msg.avatar}
                          </div>

                          {/* Content */}
                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", gap: "8px", alignItems: "baseline", marginBottom: "5px" }}>
                              <span
                                style={{
                                  fontSize: "13px", fontWeight: 700,
                                  color: msg.bot ? "#06B6D4" : "#a5b4fc",
                                }}
                              >
                                {msg.sender}
                              </span>
                              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)" }}>{msg.time}</span>
                              {msg.bot && (
                                <span
                                  style={{
                                    fontSize: "10px", fontWeight: 600,
                                    background: "rgba(6,182,212,0.15)",
                                    color: "#06B6D4",
                                    border: "1px solid rgba(6,182,212,0.3)",
                                    borderRadius: "4px", padding: "1px 5px",
                                  }}
                                >
                                  BOT
                                </span>
                              )}
                            </div>
                            <div
                              style={{
                                fontSize: "14px", lineHeight: 1.65,
                                color: "#e2e8f0",
                                padding: msg.bot ? "10px 14px" : "0",
                                background: msg.bot ? "rgba(6,182,212,0.06)" : "transparent",
                                border: msg.bot ? "1px solid rgba(6,182,212,0.15)" : "none",
                                borderRadius: msg.bot ? "4px 12px 12px 12px" : "0",
                                display: "inline-block",
                                maxWidth: "100%",
                              }}
                            >
                              {msg.typing && visibleCount === msg.id ? <TypingDots /> : msg.text}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Input bar */}
                  <div
                    style={{
                      marginTop: "12px",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex", alignItems: "center", gap: "10px",
                    }}
                  >
                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.25)", flex: 1 }}>
                      发送消息至 #general，或 @提及 Bot...
                    </span>
                    <div style={{ display: "flex", gap: "6px" }}>
                      {["😊", "📎", "🤖"].map((icon) => (
                        <span key={icon} style={{ fontSize: "15px", opacity: 0.4, cursor: "pointer" }}>{icon}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div
            style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: "120px",
              background: "linear-gradient(to bottom, transparent, #080B14)",
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ delay: 2.5, duration: 0.8 }}
        style={{
          position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
        }}
      >
        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div
          style={{
            width: "1px", height: "40px",
            background: "linear-gradient(to bottom, rgba(59,130,246,0.5), transparent)",
            animation: "float-slow 2s ease-in-out infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
