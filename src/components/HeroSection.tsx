"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const members = [
  { name: "小明", role: "产品经理", type: "human" as const, emoji: "👨‍💼" },
  { name: "小红", role: "设计师", type: "human" as const, emoji: "👩‍🎨" },
  { name: "DataBot", role: "数据分析", type: "bot" as const, emoji: "🤖" },
  { name: "DocBot", role: "文档助手", type: "bot" as const, emoji: "🤖" },
];

const cardPositions: CSSProperties[] = [
  { top: "15%", left: "8%" },
  { top: "58%", left: "15%" },
  { top: "18%", right: "8%" },
  { top: "60%", right: "12%" },
];

const bubbles = [
  { from: "DataBot", text: "日报已生成 ✅" },
  { from: "小明", text: "收到，辛苦了" },
  { from: "DocBot", text: "知识库已更新" },
];

const bubblePositions: CSSProperties[] = [
  { top: "38%", left: "32%" },
  { top: "48%", left: "40%" },
  { top: "28%", right: "32%" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[100px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          现已开放内测申请
        </div>

        <h1
          className={`font-heading text-[40px] md:text-[72px] font-bold leading-[1.1] tracking-tight text-foreground mb-6 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          AI 与人，共事于此
        </h1>

        <p
          className={`text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          不是 AI 工具，而是 AI 同事
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#cta"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            申请内测 →
          </a>
          <a
            href="#"
            className="border border-white/10 hover:border-white/20 text-foreground font-medium px-8 py-3 rounded-xl transition-all hover:bg-white/5"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div
        className={`relative z-10 mt-20 px-6 w-full max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative w-full h-[300px] md:h-[360px]" style={{ perspective: "1200px" }}>
          <div
            className="absolute inset-0 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
            style={{ transform: "rotateX(8deg) rotateY(-2deg)" }}
          >
            {members.map((member, i) => (
              <div
                key={member.name}
                className="absolute animate-float"
                style={{
                  ...cardPositions[i],
                  animationDelay: `${i * 0.6}s`,
                  animationDuration: `${3.5 + i * 0.5}s`,
                }}
              >
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm">
                  <span className="text-2xl">{member.emoji}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {member.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      member.type === "bot" ? "bg-cyan-400" : "bg-green-400"
                    }`}
                  />
                </div>
              </div>
            ))}

            {bubbles.map((msg, i) => (
              <div
                key={i}
                className="absolute animate-float-slow hidden md:block"
                style={{
                  ...bubblePositions[i],
                  animationDelay: `${i * 0.8 + 0.3}s`,
                  animationDuration: `${4 + i * 0.5}s`,
                }}
              >
                <div className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-muted-foreground">
                  <span className="text-blue-400 font-medium">{msg.from}</span>
                  : {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
