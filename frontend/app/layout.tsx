import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aether Botanica | Sculptural Flora for Modern Spaces",
  description:
    "Luxury botanic architecture, living archive, and sculptural floral assemblages crafted with hyper-local botanical specimens.",
  icons: {
    icon: [
      { url: "/icon.svg?v=3", type: "image/svg+xml" },
    ],
    shortcut: ["/icon.svg?v=3"],
    apple: ["/icon.svg?v=3"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable}`}
    >
      <head>
        <link rel="icon" href="/icon.svg?v=3" type="image/svg+xml" />
      </head>
      <body className="min-h-screen font-sans antialiased bg-black text-white selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
