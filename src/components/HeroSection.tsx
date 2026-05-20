"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ─── Particle field canvas ─── */
function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 88;
    type Particle = { x: number; y: number; vx: number; vy: number; r: number };
    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.5 + 0.5,
    }));

    const LINK = 160;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      // Links
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            const alpha = (1 - d / LINK) * 0.35;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59,130,246,0.6)";
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.7,
      }}
    />
  );
}

/* ─── Floating UI cards ─── */
const CARDS = [
  {
    delay: 0,
    top: "18%", left: "5%",
    rotate: -6,
    content: (
      <div style={{ padding: "14px 16px", minWidth: "200px" }}>
        <div style={{ fontSize: "11px", color: "#06B6D4", fontWeight: 700, marginBottom: "10px", letterSpacing: "0.08em" }}>
          AGENT ACTIVITY
        </div>
        {["DataBot 完成日报 ✅", "DocBot 更新知识库 📚", "AlertBot 发出告警 🚨"].map((t, i) => (
          <div key={i} style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "8px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#06B6D4", boxShadow: "0 0 6px #06B6D4", flexShrink: 0 }} />
            <span style={{ fontSize: "12px", color: "#8B949E" }}>{t}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    delay: 0.4,
    top: "12%", right: "6%",
    rotate: 5,
    content: (
      <div style={{ padding: "14px 16px", minWidth: "180px" }}>
        <div style={{ fontSize: "11px", color: "#3B82F6", fontWeight: 700, marginBottom: "10px", letterSpacing: "0.08em" }}>
          WORKSPACE
        </div>
        <div style={{ display: "flex", gap: "6px", marginBottom: "8px" }}>
          {["👨‍💼", "👩‍🎨", "🤖", "📝"].map((e, i) => (
            <div key={i} style={{
              width: "28px", height: "28px", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "14px",
              background: i >= 2 ? "rgba(6,182,212,0.15)" : "rgba(99,102,241,0.15)",
              border: i >= 2 ? "1px solid rgba(6,182,212,0.4)" : "1px solid rgba(99,102,241,0.3)",
              boxShadow: i >= 2 ? "0 0 8px rgba(6,182,212,0.3)" : "none",
            }}>
              {e}
            </div>
          ))}
          <div style={{ width: "28px", height: "28px", borderRadius: "50%", border: "1px dashed rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", color: "#8B949E" }}>+</div>
        </div>
        <div style={{ fontSize: "12px", color: "#8B949E" }}>4 人 + 2 Bot 在线</div>
      </div>
    ),
  },
  {
    delay: 0.8,
    bottom: "22%", right: "4%",
    rotate: 4,
    content: (
      <div style={{ padding: "14px 16px", minWidth: "200px" }}>
        <div style={{ fontSize: "11px", color: "#3B82F6", fontWeight: 700, marginBottom: "8px", letterSpacing: "0.08em" }}>
          BOT API
        </div>
        <div style={{
          fontFamily: "monospace",
          fontSize: "11px",
          color: "#06B6D4",
          background: "rgba(6,182,212,0.06)",
          border: "1px solid rgba(6,182,212,0.15)",
          borderRadius: "6px",
          padding: "8px 10px",
          lineHeight: 1.8,
        }}>
          <span style={{ color: "#8B949E" }}>POST</span> /v1/message<br />
          <span style={{ color: "#8B949E" }}>Auth:</span> Bearer bf_***<br />
          <span style={{ color: "#22c55e" }}>200</span> <span style={{ color: "#8B949E" }}>OK ✓</span>
        </div>
      </div>
    ),
  },
];

/* ─── Main ─── */
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#060912",
      }}
    >
      {/* Particle canvas */}
      <ParticleField />

      {/* Radial vignette — keep center clean */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, rgba(6,9,18,0.85) 100%)",
      }} />

      {/* Center blue glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        width: "600px", height: "600px",
        marginTop: "-300px", marginLeft: "-300px",
        background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 65%)",
        borderRadius: "50%", pointerEvents: "none",
        animation: "pulse-glow 5s ease-in-out infinite",
      }} />

      {/* ── Floating cards ── */}
      {CARDS.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: card.delay + 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            top: card.top,
            bottom: (card as { bottom?: string }).bottom,
            left: (card as { left?: string }).left,
            right: (card as { right?: string }).right,
            transform: `rotate(${card.rotate}deg)`,
            borderRadius: "14px",
            background: "rgba(10,14,28,0.85)",
            border: "1px solid rgba(255,255,255,0.09)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
            zIndex: 5,
            animation: `float ${4.5 + i * 0.7}s ease-in-out ${i * 0.5}s infinite`,
          }}
        >
          {card.content}
        </motion.div>
      ))}

      {/* ── Hero text (center, z=10) ── */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: "900px" }}>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: "28px" }}
        >
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "5px 14px", borderRadius: "100px",
            border: "1px solid rgba(59,130,246,0.3)",
            background: "rgba(59,130,246,0.07)",
            fontSize: "12px", color: "#93c5fd", fontWeight: 600,
            letterSpacing: "0.05em",
          }}>
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: "#3B82F6", boxShadow: "0 0 8px #3B82F6",
              display: "inline-block",
              animation: "pulse-glow 2s ease-in-out infinite",
            }} />
            Open Source · AI-Native · Self-hosted
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(56px, 8.5vw, 108px)",
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            marginBottom: "28px",
            background: "linear-gradient(160deg, #ffffff 0%, #e2e8f0 25%, #93c5fd 55%, #06B6D4 85%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          AI 与人，<br />共事于此
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontSize: "18px", color: "#94a3b8",
            lineHeight: 1.75, maxWidth: "480px",
            margin: "0 auto 48px",
          }}
        >
          不是 AI 工具，而是 AI 同事。<br />
          Bot 与人类共享一个工作空间，协作完成任务。
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="#cta"
            style={{
              padding: "15px 36px", borderRadius: "12px",
              background: "linear-gradient(135deg, #3B82F6 0%, #2563eb 100%)",
              color: "#fff", fontWeight: 700, fontSize: "15px",
              textDecoration: "none",
              boxShadow: "0 0 40px rgba(59,130,246,0.5), 0 4px 20px rgba(37,99,235,0.4)",
              transition: "all 0.2s ease",
              display: "inline-block",
              letterSpacing: "-0.01em",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = "0 0 60px rgba(59,130,246,0.7), 0 8px 28px rgba(37,99,235,0.5)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = "0 0 40px rgba(59,130,246,0.5), 0 4px 20px rgba(37,99,235,0.4)";
              el.style.transform = "translateY(0)";
            }}
          >
            申请内测 →
          </a>
          <a
            href="https://github.com/Mininglamp-OSS"
            target="_blank" rel="noopener noreferrer"
            style={{
              padding: "15px 36px", borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              color: "#e2e8f0", fontWeight: 600, fontSize: "15px",
              textDecoration: "none",
              transition: "all 0.2s ease",
              display: "inline-block",
              letterSpacing: "-0.01em",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.25)";
              el.style.background = "rgba(255,255,255,0.08)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.12)";
              el.style.background = "rgba(255,255,255,0.04)";
              el.style.transform = "translateY(0)";
            }}
          >
            GitHub ↗
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{
            marginTop: "56px",
            display: "flex", gap: "40px", justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "81+", label: "GitHub Stars" },
            { num: "9", label: "开源仓库" },
            { num: "∞", label: "Bot 可接入" },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "28px", fontWeight: 800,
                background: "linear-gradient(135deg, #fff, #93c5fd)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                letterSpacing: "-0.03em",
              }}>
                {num}
              </div>
              <div style={{ fontSize: "12px", color: "#64748b", marginTop: "4px", letterSpacing: "0.04em" }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "180px",
        background: "linear-gradient(to bottom, transparent, #080B14)",
        pointerEvents: "none", zIndex: 8,
      }} />

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: "absolute", bottom: "32px", left: "50%",
          transform: "translateX(-50%)", zIndex: 10,
          display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
        }}
      >
        <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.18)", letterSpacing: "0.15em" }}>SCROLL</span>
        <div style={{
          width: "1px", height: "36px",
          background: "linear-gradient(to bottom, rgba(59,130,246,0.6), transparent)",
          animation: "float-slow 2.5s ease-in-out infinite",
        }} />
      </motion.div>
    </section>
  );
}
