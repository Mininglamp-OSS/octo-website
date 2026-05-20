"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FEATURES = [
  {
    icon: "🤖",
    title: "AI Bot 即同事",
    desc: "Bot 工坊快速创建，邀请进入频道即可协同。独立身份与状态，像真实成员一样存在于工作空间。",
    accent: "blue",
  },
  {
    icon: "💼",
    title: "工作空间协同",
    desc: "任务流转、文件共享、@提醒与通知汇总。支撑团队日常协作所需的完整基础能力。",
    accent: "blue",
  },
  {
    icon: "🔒",
    title: "私有化部署",
    desc: "支持企业内网部署，数据默认留在你的环境中，满足合规与数据治理需求。",
    accent: "cyan",
  },
  {
    icon: "📱",
    title: "多端协同",
    desc: "Web、Android 已上线，iOS 开发中。协作状态跨端实时同步，无缝切换。",
    accent: "blue",
  },
  {
    icon: "🔌",
    title: "开放 Bot API",
    desc: "标准 HTTP API + Webhook 回调，兼容主流 AI Agent 框架，接入简洁直观。",
    accent: "cyan",
  },
  {
    icon: "👥",
    title: "人机混合协作",
    desc: "人类成员与多个 Bot 在同一空间协同，共享上下文，自然分配任务与汇总结果。",
    accent: "blue",
  },
];

const BLUE = { bg: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.25)", icon: "#3B82F6", glow: "rgba(59,130,246,0.15)" };
const CYAN = { bg: "rgba(6,182,212,0.12)", border: "rgba(6,182,212,0.25)", icon: "#06B6D4", glow: "rgba(6,182,212,0.15)" };

export default function FeaturesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        padding: "120px 24px",
        background: "#080B14",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial bg glow */}
      <div
        style={{
          position: "absolute", top: "50%", left: "50%",
          width: "800px", height: "800px",
          marginTop: "-400px", marginLeft: "-400px",
          background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 65%)",
          borderRadius: "50%", pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, color: "#06B6D4" }}>
              Core Features
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(36px, 4.5vw, 54px)",
              fontWeight: 900,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              marginBottom: "18px",
              background: "linear-gradient(140deg, #ffffff 0%, #bfdbfe 50%, #06B6D4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            为 AI 时代设计的协作底座
          </h2>
          <p style={{ fontSize: "17px", color: "#8B949E", maxWidth: "520px", margin: "0 auto" }}>
            完整的协作能力 × AI 原生接入——让人与多个 Bot 在同一个工作空间自然配合。
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          {FEATURES.map((f, i) => {
            const palette = f.accent === "cyan" ? CYAN : BLUE;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{
                  padding: "28px 28px 32px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  transition: "all 0.25s ease",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = palette.border;
                  el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 30px ${palette.glow}`;
                  el.style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.boxShadow = "none";
                  el.style.background = "rgba(255,255,255,0.02)";
                }}
              >
                {/* Corner accent */}
                <div
                  style={{
                    position: "absolute", top: 0, right: 0,
                    width: "120px", height: "120px",
                    background: `radial-gradient(circle at top right, ${palette.glow}, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: "44px", height: "44px", borderRadius: "12px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "20px", marginBottom: "20px",
                    background: palette.bg,
                    border: `1px solid ${palette.border}`,
                    boxShadow: `0 0 16px ${palette.glow}`,
                  }}
                >
                  {f.icon}
                </div>

                {/* Text */}
                <h3
                  style={{
                    fontSize: "17px", fontWeight: 700,
                    color: "#F0F6FF", marginBottom: "10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#8B949E", lineHeight: 1.7 }}>
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
