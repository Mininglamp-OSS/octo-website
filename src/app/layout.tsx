import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
      className={`${spaceGrotesk.variable} ${jetbrains.variable} h-full antialiased`}
      style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
    >
      <body className="min-h-full flex flex-col" style={{ background: "#020508" }}>
        {children}
      </body>
    </html>
  );
}
