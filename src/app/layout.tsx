import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "1000 Ways to Save the Planet",
  description: "A colourful, scroll-through guide to saving the Earth — one action at a time.",
  openGraph: {
    title: "1000 Ways to Save the Planet",
    description: "Scroll through 1000 ways to make the world greener.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
