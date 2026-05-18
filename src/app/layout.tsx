import type { Metadata } from "next";
import { Geist, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google';
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { ScrollToTop } from "@/components/scroll-to-top";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify",
  weight: ["400", "500", "600", "700"],
});

// ============================================
// GLOBAL SEO METADATA
// ============================================
// This is the default metadata for ALL pages
// Individual pages can override this
// ============================================

export const metadata: Metadata = {
  title: {
    default: "Oden | Product marketing that compounds",
    template: "%s | Oden"  // How page titles are formatted
  },
  description: "Oden is the operating system for product marketing. PMM authors the company's story on top of every buyer and market signal, so every artifact comes out current and sourced.",
  authors: [{ name: "Oden", url: "https://getoden.com" }],
  creator: "Oden",
  publisher: "Oden",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://getoden.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Oden | Product marketing that compounds",
    description: "Oden is the operating system for product marketing. PMM authors the company's story on top of every buyer and market signal, so every artifact comes out current and sourced.",
    url: 'https://getoden.com',
    siteName: 'Oden',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Oden | Product marketing that compounds',
        type: 'image/png',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Oden | Product marketing that compounds",
    description: "Oden is the operating system for product marketing. PMM authors the company's story on top of every buyer and market signal, so every artifact comes out current and sourced.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  classification: 'Business Software',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(geist.variable, pixelifySans.variable)} suppressHydrationWarning>
      <body className={cn(geist.className, "font-sans antialiased text-foreground min-h-dvh flex flex-col overflow-x-hidden")} suppressHydrationWarning>
        <ScrollToTop />
        <GoogleTagManager gtmId="GTM-WT5MN49P" />

        <Navigation />

        {/* Progressive blur — stacked layers fade blur from strong at top to none */}
        <div className="pointer-events-none fixed inset-x-0 top-0 z-[49]" aria-hidden>
          <div style={{ height: 80, backdropFilter: 'blur(1px)',  WebkitBackdropFilter: 'blur(1px)',  maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, height: 64, backdropFilter: 'blur(2px)',  WebkitBackdropFilter: 'blur(2px)',  maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, height: 48, backdropFilter: 'blur(4px)',  WebkitBackdropFilter: 'blur(4px)',  maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, height: 32, backdropFilter: 'blur(8px)',  WebkitBackdropFilter: 'blur(8px)',  maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, height: 16, backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' }} />
        </div>

        <main className="flex-1 w-full">
          {children}
        </main>

        <Footer />

        <CookieBanner />
      </body>
    </html>
  );
}
