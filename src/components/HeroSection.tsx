"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ── Canvas particle field ── */
function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d")!;
    let raf: number;
    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
    resize(); window.addEventListener("resize", resize);
    const N = 55;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * c.width, y: Math.random() * c.height,
      vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25,
    }));
    const tick = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > c.width) p.vx *= -1;
        if (p.y < 0 || p.y > c.height) p.vy *= -1;
      }
      for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
        if (d < 130) { ctx.beginPath(); ctx.strokeStyle = `rgba(139,92,246,${(1-d/130)*0.18})`; ctx.lineWidth = .6; ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.stroke(); }
      }
      for (const p of pts) { ctx.beginPath(); ctx.arc(p.x,p.y,1.1,0,Math.PI*2); ctx.fillStyle="rgba(139,92,246,0.45)"; ctx.fill(); }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none", opacity:.8 }} />;
}

/* ── Product mock ── */
const MOCK_MESSAGES = [
  { id:1, sender:"Alex", role:"PM", bot:false, avatar:"👨‍💼", text:"@DataBot 上周 DAU 趋势和转化漏斗？" },
  { id:2, sender:"DataBot", role:"Bot", bot:true, avatar:"🤖", text:"正在查询数据库..." },
  { id:3, sender:"DataBot", role:"Bot", bot:true, avatar:"🤖", text:"DAU 环比 +23%，周三峰值。转化率 18.4%，比上周 +2.1pp 📈", highlight:true },
  { id:4, sender:"DataBot", role:"Bot", bot:true, avatar:"🤖", text:"✅ 报告已推送 #weekly-digest，含可视化图表" },
  { id:5, sender:"Alex", role:"PM", bot:false, avatar:"👨‍💼", text:"完美，谢谢！节省了我 2 小时 🙌" },
];

function ProductMock() {
  const [vis, setVis] = useState(0);
  useEffect(() => {
    const timers = MOCK_MESSAGES.map((_,i) => setTimeout(() => setVis(i+1), 800 + i*700));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div style={{
      borderRadius: "16px",
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(10,11,20,0.95)",
      boxShadow: "0 0 0 1px rgba(139,92,246,0.15), 0 40px 100px rgba(0,0,0,0.7), 0 0 80px rgba(139,92,246,0.08)",
    }}>
      {/* Title bar */}
      <div style={{
        height:"44px", display:"flex", alignItems:"center", padding:"0 16px", gap:"10px",
        background:"rgba(14,15,28,0.99)", borderBottom:"1px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{ display:"flex", gap:"6px" }}>
          {["#ff5f56","#ffbd2e","#27c93f"].map(c => <div key={c} style={{ width:12, height:12, borderRadius:"50%", background:c, opacity:.85 }} />)}
        </div>
        <div style={{ flex:1, display:"flex", justifyContent:"center", alignItems:"center", gap:"8px" }}>
          <span style={{ fontSize:"13px", fontWeight:600, color:"rgba(255,255,255,0.7)" }}>🐙 Octo</span>
          <span style={{ fontSize:"12px", color:"rgba(255,255,255,0.25)" }}>—</span>
          <span style={{ fontSize:"12px", color:"rgba(255,255,255,0.35)" }}>#general</span>
        </div>
        <div style={{ display:"flex", gap:"8px" }}>
          {["Members","Search","Settings"].map(t => (
            <span key={t} style={{ fontSize:"11px", color:"rgba(255,255,255,0.2)", padding:"3px 8px", borderRadius:"4px", border:"1px solid rgba(255,255,255,0.08)" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div style={{ display:"flex", height:"340px" }}>
        {/* Sidebar */}
        <div style={{ width:"190px", borderRight:"1px solid rgba(255,255,255,0.07)", padding:"12px 0", background:"rgba(9,10,18,0.6)", flexShrink:0 }}>
          {/* Workspace */}
          <div style={{ padding:"4px 12px 14px", borderBottom:"1px solid rgba(255,255,255,0.06)", marginBottom:"10px", display:"flex", alignItems:"center", gap:"8px" }}>
            <div style={{ width:26, height:26, borderRadius:"8px", background:"linear-gradient(135deg,#7c3aed,#2563eb)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13 }}>🐙</div>
            <div>
              <div style={{ fontSize:12, fontWeight:700, color:"rgba(255,255,255,0.85)", lineHeight:1.2 }}>Octo Dev</div>
              <div style={{ fontSize:10, color:"rgba(255,255,255,0.3)" }}>4 online</div>
            </div>
          </div>

          {/* Channels */}
          <div style={{ fontSize:10, color:"rgba(255,255,255,0.25)", padding:"0 12px 6px", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase" }}>Channels</div>
          {[
            {name:"announcements", icon:"📢"},
            {name:"general", icon:"💬", active:true},
            {name:"pr-feed", icon:"🔀"},
            {name:"issue-feed", icon:"🐛"},
            {name:"weekly-digest", icon:"📊"},
          ].map(ch => (
            <div key={ch.name} style={{
              display:"flex", alignItems:"center", gap:"7px", padding:"5px 12px",
              fontSize:12,
              background:ch.active ? "rgba(124,58,237,0.2)" : "transparent",
              color:ch.active ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.38)",
              fontWeight:ch.active ? 600 : 400,
            }}>
              <span style={{ fontSize:11 }}>{ch.icon}</span>
              <span># {ch.name}</span>
              {ch.active && <span style={{ marginLeft:"auto", background:"#7c3aed", color:"#fff", borderRadius:8, padding:"1px 5px", fontSize:9, fontWeight:700 }}>2</span>}
            </div>
          ))}

          {/* Members */}
          <div style={{ fontSize:10, color:"rgba(255,255,255,0.25)", padding:"14px 12px 6px", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase" }}>Members</div>
          {[
            {name:"Alex", color:"#22c55e"},
            {name:"DataBot 🤖", color:"#7c3aed", bot:true},
            {name:"DocBot 📝", color:"#7c3aed", bot:true},
          ].map(m => (
            <div key={m.name} style={{ display:"flex", alignItems:"center", gap:"8px", padding:"4px 12px", fontSize:12, color:"rgba(255,255,255,0.4)" }}>
              <div style={{ width:7, height:7, borderRadius:"50%", background:m.color, boxShadow:m.bot?`0 0 6px ${m.color}`:"none", flexShrink:0 }} />
              <span>{m.name}</span>
            </div>
          ))}
        </div>

        {/* Chat */}
        <div style={{ flex:1, display:"flex", flexDirection:"column", padding:"16px 20px", gap:0, overflowY:"hidden" }}>
          {/* Channel header */}
          <div style={{ paddingBottom:12, borderBottom:"1px solid rgba(255,255,255,0.07)", marginBottom:14, display:"flex", alignItems:"center", gap:8 }}>
            <span style={{ fontSize:16 }}>💬</span>
            <span style={{ fontWeight:700, fontSize:14, color:"rgba(255,255,255,0.9)" }}>#general</span>
            <span style={{ color:"rgba(255,255,255,0.2)", fontSize:12, marginLeft:4 }}>AI 协作频道 · 3 成员在线</span>
          </div>

          {/* Messages */}
          <div style={{ flex:1, display:"flex", flexDirection:"column", gap:12, justifyContent:"flex-end" }}>
            {MOCK_MESSAGES.slice(0, vis).map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity:0, y:8 }}
                animate={{ opacity:1, y:0 }}
                transition={{ duration:.3 }}
                style={{ display:"flex", gap:10, alignItems:"flex-start" }}
              >
                <div style={{
                  width:30, height:30, borderRadius:"50%", flexShrink:0,
                  display:"flex", alignItems:"center", justifyContent:"center", fontSize:15,
                  background:msg.bot ? "rgba(124,58,237,0.25)" : "rgba(99,102,241,0.2)",
                  border:msg.bot ? "1px solid rgba(124,58,237,0.5)" : "1px solid rgba(99,102,241,0.3)",
                  boxShadow:msg.bot ? "0 0 12px rgba(124,58,237,0.3)" : "none",
                }}>
                  {msg.avatar}
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:4 }}>
                    <span style={{ fontSize:12, fontWeight:700, color:msg.bot ? "#a78bfa" : "#c7d2fe" }}>{msg.sender}</span>
                    {msg.bot && <span style={{ fontSize:9, padding:"1px 5px", borderRadius:4, background:"rgba(124,58,237,0.2)", border:"1px solid rgba(124,58,237,0.35)", color:"#a78bfa", fontWeight:700 }}>BOT</span>}
                    <span style={{ fontSize:10, color:"rgba(255,255,255,0.18)" }}>14:{30 + msg.id}</span>
                  </div>
                  <div style={{
                    fontSize:13, lineHeight:1.65, color:"rgba(255,255,255,0.8)",
                    padding:msg.bot ? "8px 12px" : "0",
                    background:msg.bot ? (msg.highlight ? "rgba(124,58,237,0.12)" : "rgba(255,255,255,0.04)") : "transparent",
                    border:msg.bot ? (msg.highlight ? "1px solid rgba(124,58,237,0.3)" : "1px solid rgba(255,255,255,0.07)") : "none",
                    borderRadius:msg.bot ? "4px 10px 10px 10px" : 0,
                    display:"inline-block", maxWidth:"100%",
                  }}>
                    {msg.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input */}
          <div style={{
            marginTop:14, padding:"10px 14px", borderRadius:"10px",
            background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.09)",
            display:"flex", alignItems:"center", gap:10,
          }}>
            <span style={{ fontSize:13, color:"rgba(255,255,255,0.2)", flex:1 }}>发消息到 #general，或 @ Bot...</span>
            <div style={{ display:"flex", gap:8 }}>
              {["🤖","📎","😊"].map(e => <span key={e} style={{ fontSize:14, opacity:.4 }}>{e}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main ── */
export default function HeroSection() {
  const [on, setOn] = useState(false);
  useEffect(() => { setTimeout(() => setOn(true), 80); }, []);

  return (
    <section style={{ position:"relative", minHeight:"100vh", overflow:"hidden", background:"#07080f" }}>
      <Particles />

      {/* Purple glow center-top */}
      <div style={{
        position:"absolute", top:"-20%", left:"50%", transform:"translateX(-50%)",
        width:"800px", height:"800px", borderRadius:"50%",
        background:"radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 65%)",
        pointerEvents:"none",
        animation:"pulse-glow 6s ease-in-out infinite",
      }} />
      {/* Blue bottom-right */}
      <div style={{
        position:"absolute", bottom:"-10%", right:"-10%",
        width:"600px", height:"600px", borderRadius:"50%",
        background:"radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 65%)",
        pointerEvents:"none",
        animation:"pulse-glow 6s ease-in-out 2s infinite",
      }} />

      {/* Content */}
      <div style={{ position:"relative", zIndex:10, maxWidth:"1200px", margin:"0 auto", padding:"140px 32px 80px" }}>

        {/* Hero text */}
        <div style={{ textAlign:"center", maxWidth:"760px", margin:"0 auto 64px" }}>
          {/* Eyebrow */}
          <motion.div initial={{ opacity:0, y:12 }} animate={on?{opacity:1,y:0}:{}} transition={{ duration:.6, delay:.1 }} style={{ marginBottom:24 }}>
            <span style={{
              display:"inline-flex", alignItems:"center", gap:8,
              padding:"6px 16px", borderRadius:100,
              border:"1px solid rgba(124,58,237,0.4)", background:"rgba(124,58,237,0.08)",
              fontSize:12, color:"#c4b5fd", fontWeight:600, letterSpacing:"0.04em",
            }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"#7c3aed", boxShadow:"0 0 8px #7c3aed", display:"inline-block", animation:"pulse-glow 2s ease-in-out infinite" }} />
              Open Source · AI-Native · Self-hosted
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity:0, y:28 }} animate={on?{opacity:1,y:0}:{}} transition={{ duration:.85, delay:.2, ease:[.16,1,.3,1] }}
            style={{
              fontSize:"clamp(52px,7.5vw,96px)", fontWeight:700,
              lineHeight:1.05, letterSpacing:"-0.03em", marginBottom:24,
              fontFamily:"var(--font-heading), sans-serif",
            }}
          >
            <span style={{ color:"#fff" }}>AI 与人，</span>
            <br />
            <span style={{
              background:"linear-gradient(135deg, #a78bfa 0%, #818cf8 40%, #38bdf8 100%)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
            }}>
              共事于此
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity:0, y:20 }} animate={on?{opacity:1,y:0}:{}} transition={{ duration:.7, delay:.35 }}
            style={{ fontSize:17, color:"rgba(255,255,255,0.45)", lineHeight:1.75, maxWidth:480, margin:"0 auto 44px" }}
          >
            不是 AI 工具，而是 AI 同事。<br />
            Bot 加入你的工作空间，共享上下文，实时协作完成任务。
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity:0, y:16 }} animate={on?{opacity:1,y:0}:{}} transition={{ duration:.7, delay:.5 }}
            style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}
          >
            <a href="#cta" style={{
              padding:"13px 32px", borderRadius:10,
              background:"linear-gradient(135deg,#7c3aed,#2563eb)",
              color:"#fff", fontWeight:600, fontSize:14, textDecoration:"none",
              boxShadow:"0 0 32px rgba(124,58,237,0.45), 0 4px 20px rgba(37,99,235,0.3)",
              transition:"all .2s ease", display:"inline-block",
            }}
            onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.boxShadow="0 0 60px rgba(124,58,237,0.65), 0 8px 28px rgba(37,99,235,0.5)"; el.style.transform="translateY(-2px)"; }}
            onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.boxShadow="0 0 32px rgba(124,58,237,0.45), 0 4px 20px rgba(37,99,235,0.3)"; el.style.transform="translateY(0)"; }}>
              申请内测 →
            </a>
            <a href="https://github.com/Mininglamp-OSS" target="_blank" rel="noopener noreferrer" style={{
              padding:"13px 32px", borderRadius:10,
              border:"1px solid rgba(255,255,255,0.13)", background:"rgba(255,255,255,0.04)",
              color:"rgba(255,255,255,0.7)", fontWeight:500, fontSize:14, textDecoration:"none",
              transition:"all .2s ease", display:"inline-block",
            }}
            onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="rgba(255,255,255,0.25)"; el.style.background="rgba(255,255,255,0.08)"; el.style.color="#fff"; el.style.transform="translateY(-2px)"; }}
            onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="rgba(255,255,255,0.13)"; el.style.background="rgba(255,255,255,0.04)"; el.style.color="rgba(255,255,255,0.7)"; el.style.transform="translateY(0)"; }}>
              Star on GitHub ↗
            </a>
          </motion.div>
        </div>

        {/* Product mock — the centrepiece */}
        <motion.div
          initial={{ opacity:0, y:56, scale:.97 }} animate={on?{opacity:1,y:0,scale:1}:{}} transition={{ duration:1, delay:.6, ease:[.16,1,.3,1] }}
        >
          <ProductMock />
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity:0 }} animate={on?{opacity:1}:{}} transition={{ duration:.8, delay:1.1 }}
          style={{ display:"flex", gap:48, justifyContent:"center", flexWrap:"wrap", marginTop:48 }}
        >
          {[{v:"81+",l:"GitHub Stars"},{v:"9",l:"开源仓库"},{v:"∞",l:"可接入 Bot"}].map(({v,l})=>(
            <div key={l} style={{ textAlign:"center" }}>
              <div style={{ fontSize:28, fontWeight:700, color:"#a78bfa", letterSpacing:"-0.02em", lineHeight:1 }}>{v}</div>
              <div style={{ fontSize:11, color:"rgba(255,255,255,0.25)", marginTop:5, letterSpacing:"0.06em", textTransform:"uppercase" }}>{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:160, background:"linear-gradient(to bottom, transparent, #07080f)", pointerEvents:"none", zIndex:8 }} />
    </section>
  );
}
