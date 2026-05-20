"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const chatMessages = [
  { type: "user" as const, text: "@DataBot 上周 DAU 趋势？" },
  {
    type: "bot" as const,
    sender: "DataBot",
    text: "正在查询... ⏳",
  },
  {
    type: "bot" as const,
    sender: "DataBot",
    text: "上周 DAU 环比增长 23%，峰值在周三下午 3 点",
  },
  {
    type: "bot" as const,
    sender: "DataBot",
    text: "✅ 已生成图表，周报草稿已推送至 #weekly-report",
  },
  { type: "user" as const, text: "太快了！" },
];

export default function ScrollNarrative() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div
        ref={ref}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            这就是 AI 时代的
            <br />
            团队协作
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            在 Octo
            工作空间中，AI&nbsp;Agent&nbsp;如同真实同事一样参与协作——接收任务、回复消息、产出结果。无需切换工具，一切就在对话中完成。
          </p>
        </motion.div>

        <div className="space-y-3">
          {chatMessages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
              className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                  msg.type === "user"
                    ? "bg-blue-500 text-white rounded-br-md"
                    : "bg-white/[0.05] border border-white/[0.08] text-foreground rounded-bl-md"
                }`}
              >
                {msg.type === "bot" && (
                  <p className="text-xs text-cyan-400 font-medium mb-1">
                    🤖 {msg.sender}
                  </p>
                )}
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
