"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      ref={ref}
      id="cta"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#080B14",
        overflow: "hidden",
      }}
    >
      {/* ── Dot grid ── */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Portal rings (3 concentric) ── */}
      {[
        { size: 640, color: "rgba(59,130,246,0.10)", delay: "0s" },
        { size: 420, color: "rgba(59,130,246,0.20)", delay: "0.7s" },
        { size: 220, color: "rgba(59,130,246,0.40)", delay: "1.4s" },
      ].map(({ size, color, delay }, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            width: `${size}px`, height: `${size}px`,
            marginTop: `-${size / 2}px`, marginLeft: `-${size / 2}px`,
            borderRadius: "50%",
            border: `1px solid ${color}`,
            animation: `portal-ring 3.5s ease-in-out ${delay} infinite`,
          }}
        />
      ))}

      {/* Portal ring keyframe (inline style workaround) */}
      <style>{`
        @keyframes portal-ring {
          0% { transform: scale(0.94); opacity: 0.5; }
          50% { transform: scale(1.06); opacity: 1; }
          100% { transform: scale(0.94); opacity: 0.5; }
        }
      `}</style>

      {/* ── Center glow blue ── */}
      <div
        style={{
          position: "absolute", top: "50%", left: "50%",
          width: "320px", height: "320px",
          marginTop: "-160px", marginLeft: "-160px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          animation: "pulse-glow 4s ease-in-out infinite",
        }}
      />
      {/* ── Center glow cyan (smaller) ── */}
      <div
        style={{
          position: "absolute", top: "50%", left: "50%",
          width: "160px", height: "160px",
          marginTop: "-80px", marginLeft: "-80px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.30) 0%, transparent 70%)",
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position: "relative", zIndex: 10,
          textAlign: "center", padding: "0 24px",
          maxWidth: "680px",
        }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "24px" }}
        >
          <span
            style={{
              fontSize: "12px", letterSpacing: "0.14em",
              textTransform: "uppercase", fontWeight: 700,
              color: "#06B6D4",
            }}
          >
            Open Source · Self-hosted · AI-Native
          </span>
        </motion.div>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1 }}
          style={{
            fontSize: "clamp(48px, 7vw, 80px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: "24px",
            background: "linear-gradient(140deg, #ffffff 0%, #bfdbfe 45%, #06B6D4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          准备好了吗？
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: "18px", color: "#8B949E", lineHeight: 1.7, marginBottom: "44px" }}
        >
          Octo 内测申请中 · 邀请制开放 · 支持私有化部署
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ marginBottom: "32px" }}
        >
          <a
            href="#"
            className="animate-glow-pulse"
            style={{
              display: "inline-block",
              padding: "18px 48px",
              borderRadius: "14px",
              background: "#3B82F6",
              color: "#fff",
              fontWeight: 700,
              fontSize: "16px",
              textDecoration: "none",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04) translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1) translateY(0)"; }}
          >
            申请进入 →
          </a>
        </motion.div>

        {/* Platform badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}
        >
          {["Android 已上线", "iOS 开发中", "Web 已上线", "私有化部署"].map((label) => (
            <span
              key={label}
              style={{
                fontSize: "12px", color: "#8B949E",
                padding: "5px 12px", borderRadius: "100px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              {label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Footer ── */}
      <div
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          padding: "24px 48px",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px", margin: "0 auto",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: "12px",
          }}
        >
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.2)" }}>
            © 2025 Mininglamp OSS. Open Source under MIT.
          </span>
          <div style={{ display: "flex", gap: "24px" }}>
            {[
              { label: "Discord", href: "https://discord.gg/vj9Vsj9hSB" },
              { label: "GitHub", href: "https://github.com/Mininglamp-OSS" },
              { label: "联系我们", href: "mailto:contact@mininglamp.com" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "13px", color: "#8B949E",
                  textDecoration: "none", transition: "color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#F0F6FF"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#8B949E"; }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
