"use client";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative py-32 md:py-40 px-6 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[600px] h-[600px] rounded-full animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(6,182,212,0.05) 40%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
          准备好了吗？
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          让 AI Agent 走进你的团队，开启全新的协作方式
        </p>
        <a
          href="#"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-blue-500/25"
        >
          申请进入 →
        </a>
      </div>

      <footer className="relative z-10 mt-32 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-4">
          <span>© 2025 Mininglamp OSS</span>
          <span>·</span>
          <a
            href="https://discord.gg/vj9Vsj9hSB"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Discord
          </a>
          <span>·</span>
          <a href="#" className="hover:text-foreground transition-colors">
            GitHub
          </a>
        </div>
      </footer>
    </section>
  );
}
