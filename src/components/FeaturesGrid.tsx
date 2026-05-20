"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: "🤖",
    title: "Bot 即成员",
    desc: "AI Agent 以真实成员身份加入，拥有头像、名字、角色，像同事一样协作。",
  },
  {
    icon: "💬",
    title: "自然语言交互",
    desc: "通过 @mention 直接对话，无需学习新命令或切换复杂界面。",
  },
  {
    icon: "🔗",
    title: "开放 API 接入",
    desc: "标准化 API 与 SDK，支持 Python、Node.js 等主流语言快速对接。",
  },
  {
    icon: "🛡️",
    title: "权限精细管控",
    desc: "基于角色的权限体系，精确控制 Bot 的数据访问与操作范围。",
  },
  {
    icon: "📊",
    title: "实时数据看板",
    desc: "内置数据分析能力，Bot 可自动查询、生成图表并推送报告。",
  },
  {
    icon: "🏠",
    title: "私有化部署",
    desc: "完全开源，支持自托管部署，数据安全牢牢掌握在自己手中。",
  },
];

export default function FeaturesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-24 md:py-32 px-6 bg-background">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            为团队协作而生
          </h2>
          <p className="text-muted-foreground text-lg">
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
              className="group relative p-6 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/[0.08] transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:border-white/[0.12]"
            >
              <span className="text-3xl mb-4 block">{feature.icon}</span>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
