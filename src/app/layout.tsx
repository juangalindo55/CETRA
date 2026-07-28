import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SeoSchema from "@/components/SeoSchema";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL_OBJECT } from "@/lib/site";
import "./globals.css";

/**
 * Fuentes auto-hospedadas por next/font: se sirven desde /_next/static/media,
 * lo que respeta la CSP (`font-src 'self'`) y evita una petición a Google.
 * Las variables CSS que exponen aquí son las que consume el bloque `@theme`
 * de globals.css. Antes se declaraban solo por nombre de familia, así que la
 * tipografía únicamente cargaba si el visitante ya la tenía instalada.
 */
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

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
    images: ["/images/Hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/Hero.webp"],
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
    <html lang="es" className={`${dmSans.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans bg-base-white text-base-black antialiased flex flex-col min-h-screen">
        <SeoSchema />
        <Navbar />
        <main className="relative z-0 flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
