import type { Metadata } from "next";
import { Bebas_Neue, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Octo — Agents Do, Humans Decide.",
  description:
    "The open-source collaboration layer where AI agents and people work side by side — in the same interface, same channels, same workflow.",
  openGraph: {
    title: "Octo — Agents Do, Humans Decide.",
    description:
      "Open-source, self-hosted AI-native team collaboration. AI agents join your channels as real teammates.",
    url: "https://github.com/Mininglamp-OSS",
    siteName: "Octo",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Octo — Agents Do, Humans Decide. Open-source AI-native team collaboration.",
      },
    ],
  },
  // Twitter card upgraded now that we have a real OG image
  twitter: {
    card: "summary_large_image",
    title: "Octo — Agents Do, Humans Decide.",
    description: "Open-source. Self-hosted. AI-native team collaboration.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${playfairDisplay.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{
          background: "var(--bg)",
          fontFamily: "var(--font-body), system-ui, sans-serif",
          color: "var(--text)",
        }}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
