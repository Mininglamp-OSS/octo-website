"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: "🤖",
    title: "AI Bot 即同事",
    desc: "Bot 工坊快速创建，邀请即协同，独立身份与状态",
    accent: "#3B82F6",
  },
  {
    icon: "💼",
    title: "工作空间协同",
    desc: "任务流转、文件共享、@提醒与通知汇总",
    accent: "#3B82F6",
  },
  {
    icon: "🔒",
    title: "私有化部署",
    desc: "数据留在你的部署环境，满足合规与治理需求",
    accent: "#06B6D4",
  },
  {
    icon: "📱",
    title: "多端协同",
    desc: "Web、Android 已上线，iOS 开发中，协作状态实时同步",
    accent: "#3B82F6",
  },
  {
    icon: "🔌",
    title: "开放 Bot API",
    desc: "标准 HTTP API + Webhook，兼容主流 AI Agent 框架",
    accent: "#06B6D4",
  },
  {
    icon: "👥",
    title: "人机混合协作",
    desc: "人与多个 Bot 共享上下文，自然分配任务与汇总结果",
    accent: "#3B82F6",
  },
];

export default function FeaturesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-24 md:py-32 px-6" style={{ background: "#080B14" }}>
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-gradient-blue mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
            }}
          >
            为团队协作而生
          </h2>
          <p style={{ color: "#8B949E", fontSize: 18 }}>
            从权限管控到私有化部署，每一处都为真实场景打造
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-xl cursor-default"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-6px)";
                el.style.borderColor = `${feature.accent}59`;
                el.style.boxShadow = `0 0 40px ${feature.accent}26, 0 20px 60px rgba(0,0,0,0.3)`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.boxShadow = "none";
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-lg mb-4"
                style={{
                  background: `linear-gradient(135deg, ${feature.accent}33, ${feature.accent}11)`,
                }}
              >
                {feature.icon}
              </div>
              <h3
                className="mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#F0F6FF",
                }}
              >
                {feature.title}
              </h3>
              <p style={{ fontSize: 14, color: "#8B949E", lineHeight: 1.6 }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
