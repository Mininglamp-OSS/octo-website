import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Octo — AI 与人，共事于此",
  description: "不是 AI 工具，而是 AI 同事。Octo 让 AI Agent 走进你的工作空间，开源、自托管、AI 原生。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="zh-CN"
      className={`${dmSans.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ background: "#07080f", fontFamily: "var(--font-heading), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
