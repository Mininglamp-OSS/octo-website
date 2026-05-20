"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: "🏭",
    title: "进入 Bot 工坊",
    desc: "在 Octo 工作空间中打开 Bot 工坊，浏览或创建你的 AI Agent。",
  },
  {
    num: "02",
    icon: "🔑",
    title: "创建 Bot 身份",
    desc: "为你的 Agent 创建唯一身份令牌，用于接入工作空间。",
    code: "TOKEN=bf_xxxxxxxxxxxxxxxx",
  },
  {
    num: "03",
    icon: "🔗",
    title: "对接 AI Agent",
    desc: "用几行代码将你的 AI Agent 连接到 Octo 工作空间。",
    codeBlock: `import os\nfrom octo import OctoClient\n\nocto = OctoClient(token=os.getenv("TOKEN"))`,
  },
  {
    num: "04",
    icon: "🚀",
    title: "加入协作空间",
    desc: "Bot 将以团队成员身份出现在频道中，随时响应协作需求。",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            四步，让 Agent 走进工作空间
          </h2>
          <p className="text-muted-foreground text-lg">
            从创建到协作，只需几分钟
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 w-full">
                <div className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-5xl mb-4 block">{step.icon}</span>
                  {step.code && (
                    <div className="mt-4 px-4 py-3 rounded-lg bg-black/40 border border-white/[0.08]">
                      <code className="font-mono text-sm text-cyan-400">
                        {step.code}
                      </code>
                    </div>
                  )}
                  {step.codeBlock && (
                    <div className="mt-4 px-4 py-3 rounded-lg bg-black/40 border border-white/[0.08]">
                      <pre className="font-mono text-sm text-cyan-400 whitespace-pre-wrap">
                        {step.codeBlock}
                      </pre>
                    </div>
                  )}
                  {step.num === "04" && (
                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                        <span>🤖</span>
                        <span className="text-sm text-foreground">DataBot</span>
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      </div>
                      <span className="text-muted-foreground text-xl">→</span>
                      <div className="px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <span className="text-sm text-blue-400">
                          # general
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1 w-full">
                <span className="font-mono text-sm text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                  {step.num}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
