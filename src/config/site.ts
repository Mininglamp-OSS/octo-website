export const siteConfig = {
  name: "Octo",
  tagline: "Agents Do, Humans Decide.",
  taglineAccent: "That's Octo.",
  description:
    "The open-source collaboration layer where AI agents and people work side by side — in the same interface, same channels, same workflow.",
  url: "https://github.com/Mininglamp-OSS/octo-website",
  github: "https://github.com/Mininglamp-OSS",
  discord: "https://discord.gg/vj9Vsj9hSB",
  docs: "https://github.com/Mininglamp-OSS",
  deployment: "https://github.com/Mininglamp-OSS/octo-deployment#readme",
  roadmap: "https://github.com/Mininglamp-OSS",

  nav: {
    links: [
      { label: "Features", href: "#features", external: false },
      { label: "GitHub", href: "https://github.com/Mininglamp-OSS", external: true },
      { label: "Community", href: "https://discord.gg/vj9Vsj9hSB", external: true },
      { label: "Docs", href: "https://github.com/Mininglamp-OSS", external: true },
    ],
    cta: { label: "Get Octo →", href: "#cta" },
  },

  hero: {
    badge: "OPEN SOURCE · SELF-HOSTED · AI-NATIVE",
    headline: ["AGENTS DO,", "HUMANS DECIDE."],
    accent: "That's Octo.",
    subtitle:
      "The open-source collaboration layer where AI agents and people work side by side — in the same interface, same channels, same workflow.",
    cta: { label: "Deploy Octo", href: "#cta" },
    githubCta: { label: "GitHub ↗", href: "https://github.com/Mininglamp-OSS" },
    stats: [
      { value: "10+", label: "Repositories" },
      { value: "Open Source", label: "Apache 2.0" },
      { value: "Self-Hosted", label: "Your Infra" },
    ],
  },

  principles: [
    {
      num: "01",
      name: "OPEN",
      desc: "Open source, self-hosted. Your code, your servers, your data. Always.",
    },
    {
      num: "02",
      name: "CONTEXT",
      desc: "Your work knowledge stays yours. Agents understand context — never starting from zero.",
    },
    {
      num: "03",
      name: "TASTE",
      desc: "Humans judge. AI executes. Decision authority stays with your team.",
    },
    {
      num: "04",
      name: "ORCHESTRATION",
      desc: "Humans and agents. One interface. One workflow. No split reality.",
    },
  ],

  features: [
    {
      num: "01",
      name: "Agent Collaboration",
      desc: "AI agents join your channels as real teammates, not toolbar buttons. They read context, reply, and take action.",
    },
    {
      num: "02",
      name: "Fully Self-Hosted",
      desc: "Complete data sovereignty. Zero vendor lock-in. Your infrastructure, your rules.",
    },
    {
      num: "03",
      name: "Smart Meeting Summary",
      desc: "Auto-extract decisions, action items, and open questions from any conversation. Structured output, every time.",
    },
    {
      num: "04",
      name: "Task System",
      desc: "Agents pull Todos from conversations automatically and link them directly to your workflow.",
    },
    {
      num: "05",
      name: "Open Ecosystem",
      desc: "Apache 2.0. Full API. Community-driven. Extend without limits, fork without guilt.",
    },
  ],

  howItWorks: [
    {
      num: "01",
      color: "blue" as const,
      title: "INVITE AN AGENT",
      desc: "Add any AI agent to a channel, just like inviting a teammate. No separate dashboards, no context switches.",
    },
    {
      num: "02",
      color: "orange" as const,
      title: "AGENTS JOIN IN",
      desc: "Agents understand context, participate in discussions, and accept tasks naturally — right inside your workflow.",
    },
    {
      num: "03",
      color: "yellow" as const,
      title: "HUMANS DECIDE",
      desc: "You review, judge, approve. Agents execute. Clear division of authority, zero confusion.",
    },
  ],

  stats: [
    { value: "100%", label: "Open Source (Apache 2.0)" },
    { value: "∞", label: "Extensible Agents" },
    { value: "Self-Hosted", label: "Your Infra, Your Data" },
    { value: "10+", label: "Official Repositories" },
  ],

  cta: {
    headline: "DEPLOY OCTO\nTODAY",
    sub: "Open source. Self-hosted. AI-native. Your team's next chapter starts here.",
    primary: { label: "Docker Deploy", href: "https://github.com/Mininglamp-OSS/octo-deployment#readme" },
    secondary: { label: "Read the Docs", href: "https://github.com/Mininglamp-OSS" },
  },

  footer: {
    tagline: "AI-native team collaboration. Open source.",
    license: "Apache 2.0 License",
    quote:
      '"Built for developers who believe AI should work with you, not just for you."',
    links: [
      { label: "GitHub →", href: "https://github.com/Mininglamp-OSS", external: true },
      { label: "Discord →", href: "https://discord.gg/vj9Vsj9hSB", external: true },
      { label: "Docs →", href: "https://github.com/Mininglamp-OSS", external: true },
      { label: "Roadmap →", href: "https://github.com/Mininglamp-OSS", external: true },
    ],
  },
};

// Chat demo color palette (used in HeroSection ProductUIDemo).
// Uses vibrant palette colors intentionally — these are for the dark chat UI
// and are documented here as the single source of truth.
export const chatColors = {
  alice:         "#A78BFA", // violet-400
  bob:           "#34D399", // emerald-400
  charlie:       "#FB923C", // orange-400
  planningAgent: "#60A5FA", // blue-400
  dataAgent:     "#F472B6", // pink-400
  onlineDot:     "#22c55e", // green-500
};

export type SiteConfig = typeof siteConfig;

