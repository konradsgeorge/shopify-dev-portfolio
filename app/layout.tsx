import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "George Allen Donayre — Shopify Frontend Developer",
  description:
    "Custom Shopify storefronts built with Liquid, sections, metafields, and clean frontend code. Based in the Philippines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Light-theme favicons (default / prefers-color-scheme: light) */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-light-16x16.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-light-32x32.png"
          media="(prefers-color-scheme: light)"
        />

        {/* Dark-theme favicons */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-dark-16x16.png"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-dark-32x32.png"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
