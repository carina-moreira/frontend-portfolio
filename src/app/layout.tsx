import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// Single font for entire project
const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carina Moreira | Frontend Developer",
  description:
    "Portfolio of Carina Moreira, a frontend developer and communication designer based in Porto, Portugal. View selected projects, experience, and contact information.",
  keywords:
    "Carina Moreira, frontend developer, front-end, web developer, design, design engineer, React, Next.js, UI, UX, Figma, portfolio, Porto, Portugal",
  authors: [{ name: "Carina Moreira" }],
  openGraph: {
    type: "website",
    url: "https://portfolio-seven-bice-85.vercel.app/",
    title: "Carina Moreira | Frontend Developer",
    description:
      "Frontend Developer based in Porto, Portugal. Explore my web projects and design work.",
    siteName: "Carina Moreira Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Carina Moreira Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carina Moreira | Frontend Developer",
    description:
      "Frontend Developer based in Porto, Portugal. Explore my web projects and design work.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = "G-DMHMWKMX13";

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-background">{children}</body>
    </html>
  );
}
