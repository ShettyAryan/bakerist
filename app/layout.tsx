import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bakerist — In Bread We Trust",
  description:
    "Dubai's finest artisanal bakery. Slow fermentation, heritage grains, single-origin coffee.",
  openGraph: {
    title: "Bakerist — In Bread We Trust",
    description: "Dubai's finest artisanal bakery. Est. 2024.",
    siteName: "Bakerist",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="grain">{children}</body>
    </html>
  );
}
