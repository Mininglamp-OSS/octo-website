"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────
   CSS 3D rotating icosahedron wireframe
   ───────────────────────────────────────── */
function GeometricCore() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "320px",
        height: "320px",
        pointerEvents: "none",
        zIndex: 2,
      }}
    >
      {/* Outer pulsing ring */}
      <div
        style={{
          position: "absolute",
          inset: "-60px",
          borderRadius: "50%",
          border: "1px solid rgba(0,217,255,0.08)",
          animation: "portal-ring 4s ease-in-out 0s infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "-30px",
          borderRadius: "50%",
          border: "1px solid rgba(0,217,255,0.14)",
          animation: "portal-ring 4s ease-in-out 0.6s infinite",
        }}
      />

      {/* CSS 3D cube wireframe */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "160px",
          height: "160px",
          marginTop: "-80px",
          marginLeft: "-80px",
          transformStyle: "preserve-3d",
          animation: "spin-3d 14s linear infinite",
        }}
      >
        {/* 6 faces as wireframe borders only */}
        {[
          { transform: "translateZ(80px)" },
          { transform: "translateZ(-80px)" },
          { transform: "rotateY(90deg) translateZ(80px)" },
          { transform: "rotateY(-90deg) translateZ(80px)" },
          { transform: "rotateX(90deg) translateZ(80px)" },
          { transform: "rotateX(-90deg) translateZ(80px)" },
        ].map((style, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              border: "1px solid rgba(0,217,255,0.55)",
              background: "rgba(0,217,255,0.02)",
              ...style,
            }}
          />
        ))}
      </div>

      {/* Inner glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "180px",
          height: "180px",
          marginTop: "-90px",
          marginLeft: "-90px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,217,255,0.18) 0%, transparent 70%)",
          filter: "blur(20px)",
          animation: "pulse-glow 3s ease-in-out infinite",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Canvas particle network
   ───────────────────────────────────────── */
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

    const N = 70;
    type P = { x: number; y: number; vx: number; vy: number };
    const pts: P[] = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,217,255,${(1 - d / 140) * 0.22})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,217,255,0.5)";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}

/* ─────────────────────────────────────────
   Scan-line CRT overlay
   ───────────────────────────────────────── */
function ScanLines() {
  return (
    <div
      style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 3,
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
      }}
    />
  );
}

/* ─────────────────────────────────────────
   Main
   ───────────────────────────────────────── */
const STATS = [
  { val: "81+", label: "GitHub Stars" },
  { val: "9",   label: "开源仓库" },
  { val: "∞",   label: "可接入 Bot" },
];

export default function HeroSection() {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 120); return () => clearTimeout(t); }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#020508",
      }}
    >
      {/* keyframes */}
      <style>{`
        @keyframes spin-3d {
          from { transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg); }
          to   { transform: rotateX(20deg) rotateY(360deg) rotateZ(360deg); }
        }
        @keyframes portal-ring {
          0%,100% { transform: scale(0.96); opacity:.5; }
          50%      { transform: scale(1.04); opacity:1; }
        }
      `}</style>

      {/* Layer stack */}
      <ParticleField />
      <ScanLines />

      {/* Deep radial vignette */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 4,
        background: "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 20%, rgba(2,5,8,0.75) 100%)",
      }} />

      {/* Cyan center atmosphere */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        width: "700px", height: "700px",
        marginTop: "-350px", marginLeft: "-350px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,217,255,0.07) 0%, transparent 65%)",
        pointerEvents: "none", zIndex: 1,
        animation: "pulse-glow 5s ease-in-out infinite",
      }} />

      {/* 3D Geometric core */}
      <GeometricCore />

      {/* ── Content ── */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: "860px" }}>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={on ? { opacity: 1, letterSpacing: "0.14em" } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          style={{
            fontSize: "11px", fontWeight: 600, textTransform: "uppercase",
            color: "#00D9FF", letterSpacing: "0.14em",
            marginBottom: "32px",
          }}
        >
          Open Source · AI-Native Collaboration · Self-hosted
        </motion.p>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={on ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontSize: "clamp(60px, 9vw, 116px)",
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            marginBottom: "24px",
            color: "#fff",
          }}
        >
          AI 与人
          <br />
          <span style={{
            background: "linear-gradient(90deg, #00D9FF 0%, #7c3aed 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            共事于此
          </span>
        </motion.h1>

        {/* Sub — monospace typewriter feel */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={on ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "14px",
            color: "rgba(255,255,255,0.38)",
            letterSpacing: "0.02em",
            lineHeight: 1.8,
            marginBottom: "52px",
          }}
        >
          {"// 不是 AI 工具，而是 AI 同事"}<br />
          {"// Bot 加入团队，共享上下文，协作完成任务"}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={on ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
          style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "64px" }}
        >
          {/* Primary */}
          <a
            href="#cta"
            style={{
              padding: "14px 36px", borderRadius: "4px",
              background: "transparent",
              border: "1px solid #00D9FF",
              color: "#00D9FF",
              fontFamily: "var(--font-mono), monospace",
              fontWeight: 600, fontSize: "13px",
              textDecoration: "none",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              transition: "all 0.2s ease",
              boxShadow: "0 0 20px rgba(0,217,255,0.2), inset 0 0 20px rgba(0,217,255,0.03)",
              display: "inline-block",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(0,217,255,0.12)";
              el.style.boxShadow = "0 0 40px rgba(0,217,255,0.45), inset 0 0 40px rgba(0,217,255,0.08)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.boxShadow = "0 0 20px rgba(0,217,255,0.2), inset 0 0 20px rgba(0,217,255,0.03)";
              el.style.transform = "translateY(0)";
            }}
          >
            申请内测 _
          </a>

          {/* Secondary */}
          <a
            href="https://github.com/Mininglamp-OSS"
            target="_blank" rel="noopener noreferrer"
            style={{
              padding: "14px 36px", borderRadius: "4px",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.5)",
              fontFamily: "var(--font-mono), monospace",
              fontWeight: 500, fontSize: "13px",
              textDecoration: "none",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              transition: "all 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.35)";
              el.style.color = "rgba(255,255,255,0.85)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.15)";
              el.style.color = "rgba(255,255,255,0.5)";
              el.style.transform = "translateY(0)";
            }}
          >
            GitHub ↗
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={on ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ display: "flex", gap: "48px", justifyContent: "center", flexWrap: "wrap" }}
        >
          {STATS.map(({ val, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontSize: "32px", fontWeight: 700,
                color: "#00D9FF",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: "6px",
              }}>
                {val}
              </div>
              <div style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "11px", color: "rgba(255,255,255,0.25)",
                letterSpacing: "0.08em", textTransform: "uppercase",
              }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "200px",
        background: "linear-gradient(to bottom, transparent, #020508)",
        pointerEvents: "none", zIndex: 8,
      }} />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={on ? { opacity: 1 } : {}}
        transition={{ delay: 1.8, duration: 1 }}
        style={{
          position: "absolute", bottom: "28px", left: "50%",
          transform: "translateX(-50%)", zIndex: 10,
          display: "flex", flexDirection: "column", alignItems: "center", gap: "4px",
        }}
      >
        <span style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "9px", color: "rgba(0,217,255,0.3)",
          letterSpacing: "0.2em",
        }}>
          SCROLL
        </span>
        <div style={{
          width: "1px", height: "32px",
          background: "linear-gradient(to bottom, rgba(0,217,255,0.5), transparent)",
          animation: "float-slow 2.5s ease-in-out infinite",
        }} />
      </motion.div>
    </section>
  );
}
