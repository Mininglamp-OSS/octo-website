"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: "💬",
    title: "@mention 即指令",
    desc: "在对话中 @Bot，它就开始工作——无需学习任何命令。",
  },
  {
    icon: "⚡",
    title: "秒级响应",
    desc: "Bot 实时处理任务，结果直接推送到频道，无需等待。",
  },
  {
    icon: "🔄",
    title: "上下文贯通",
    desc: "Bot 共享频道上下文，理解前因后果，不再重复沟通。",
  },
];

const chatMessages = [
  { type: "user" as const, sender: "产品经理小明", text: "@DataBot 上周 DAU 趋势？" },
  { type: "bot-typing" as const, sender: "DataBot", text: "正在查询..." },
  { type: "bot" as const, sender: "DataBot", text: "上周 DAU 环比增长 23%，峰值在周三下午 3 点 📈" },
  { type: "bot" as const, sender: "DataBot", text: "✅ 已生成图表，周报草稿已推送至 #weekly-report" },
  { type: "user" as const, sender: "小明", text: "太快了！👍" },
];

export default function ScrollNarrative() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-6" style={{ background: "#080B14" }}>
      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Left column — 5/12 */}
        <div className="md:col-span-5">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 48,
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#F0F6FF",
              marginBottom: 32,
            }}
          >
            这就是 AI 时代的团队协作
          </motion.h2>

          <div className="space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="flex items-start gap-4"
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <p className="font-semibold text-[#F0F6FF] mb-1">{f.title}</p>
                  <p className="text-sm" style={{ color: "#8B949E" }}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right column — 7/12: macOS window */}
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="rounded-xl overflow-hidden"
            style={{
              background: "rgba(13,17,23,0.9)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
            }}
          >
            {/* Window chrome */}
            <div
              className="flex items-center gap-2 px-4 h-10"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F56" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#27C93F" }} />
              <span className="ml-4 text-xs" style={{ color: "#8B949E" }}>#weekly-report</span>
            </div>

            {/* Chat messages */}
            <div className="p-5 space-y-4" style={{ minHeight: 320 }}>
              {chatMessages.map((msg, i) => {
                const isUser = msg.type === "user";
                const isTyping = msg.type === "bot-typing";

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
                    className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    {!isUser && (
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0"
                        style={{
                          background: "rgba(6,182,212,0.15)",
                          border: "1px solid rgba(6,182,212,0.3)",
                        }}
                      >
                        🤖
                      </div>
                    )}
                    <div
                      className="max-w-[75%] px-4 py-3 rounded-2xl text-sm"
                      style={
                        isUser
                          ? {
                              background: "rgba(255,255,255,0.06)",
                              color: "#F0F6FF",
                              borderRadius: "16px 16px 4px 16px",
                            }
                          : {
                              background: "rgba(6,182,212,0.06)",
                              border: "1px solid rgba(6,182,212,0.15)",
                              color: "#F0F6FF",
                              borderRadius: "16px 16px 16px 4px",
                            }
                      }
                    >
                      {!isUser && (
                        <p className="text-xs font-medium mb-1" style={{ color: "#06B6D4" }}>
                          {msg.sender}
                        </p>
                      )}
                      {isTyping ? (
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs" style={{ color: "#8B949E" }}>
                            {msg.text}
                          </span>
                          <span className="flex gap-0.5">
                            {[0, 1, 2].map(d => (
                              <span
                                key={d}
                                className="w-1.5 h-1.5 rounded-full"
                                style={{
                                  background: "#06B6D4",
                                  animation: "typing-dot 1.4s ease-in-out infinite",
                                  animationDelay: `${d * 0.2}s`,
                                }}
                              />
                            ))}
                          </span>
                        </div>
                      ) : (
                        <span>{msg.text}</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
