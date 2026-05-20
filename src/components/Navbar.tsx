"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(8,11,20,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.12)"
          : "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
            🐙 Octo
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full border text-cyan-400"
            style={{ borderColor: "rgba(6,182,212,0.4)", background: "rgba(6,182,212,0.08)" }}>
            Open Source
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Mininglamp-OSS" target="_blank" rel="noopener noreferrer"
            className="text-sm text-[#8B949E] hover:text-white transition-colors">
            GitHub
          </a>
          <a href="#cta"
            className="text-sm font-medium px-4 py-2 rounded-lg text-white transition-all"
            style={{
              background: "#3B82F6",
              boxShadow: "0 0 20px rgba(59,130,246,0.3)",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 30px rgba(59,130,246,0.6)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 20px rgba(59,130,246,0.3)")}>
            申请内测
          </a>
        </div>
      </div>
    </nav>
  );
}
