import type { Metadata, Viewport } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SeoSchema from "@/components/SeoSchema";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL_OBJECT } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#311B92',
};

export const metadata: Metadata = {
  metadataBase: SITE_URL_OBJECT,
  title: {
    default: SITE_TITLE,
    template: "%s | CETRA",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans bg-base-white text-base-black antialiased flex flex-col min-h-screen">
        <SeoSchema />
        <Navbar />
        <main className="relative z-0 flex-grow">
          {children}
        </main>
        <Footer />

        {/* Anime.js library for animations */}
        <script src="https://cdn.jsdelivr.net/npm/animejs@4.5.0/lib/anime.min.js" />
      </body>
    </html>
  );
}
