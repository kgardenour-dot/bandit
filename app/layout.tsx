import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bandit Innovations | Where Ideas Come to Play",
  description: "Inventing apps with heart, humor, and purpose. Discover PACE, Echotag, and Poofling - creative apps built by Bandit Innovations.",
  keywords: ["Bandit Innovations", "PACE", "Echotag", "Poofling", "app development", "creative apps"],
  authors: [{ name: "Kristy Gardenour" }],
  creator: "Kristy Gardenour",
  openGraph: {
    title: "Bandit Innovations",
    description: "Where ideas come to play. Inventing apps with heart, humor, and purpose.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
