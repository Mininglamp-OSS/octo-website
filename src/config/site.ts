export const siteConfig = {
  name: "Octo",
  tagline: "AI 与人，共事于此",
  description:
    "不是 AI 工具，而是 AI 同事。Octo 让 AI Agent 走进你的工作空间。",
  url: "https://octo.dev",

  nav: {
    links: [
      { label: "功能", href: "#features" },
      { label: "场景", href: "#scenarios" },
      { label: "开源", href: "#open-source" },
    ],
    cta: { label: "申请内测", href: "#cta" },
  },
};

export type SiteConfig = typeof siteConfig;
