import type { Metadata } from "next";
import { dynastyDisplay, dynastyBody, dynastyMono } from "@/lib/fonts";
import { ToastProvider } from "@/components/ui/Toast";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { CRTPreloader } from "@/components/layout/CRTPreloader";
import "./globals.css";

const siteUrl = "https://rodrigo1234321.github.io/dynasty";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DYNASTY — Tecnología & Setup Built Different | Mar del Plata",
    template: "%s | DYNASTY Tecnología",
  },
  description:
    "DYNASTY — Tecnología y gadgets retro-tácticos en Mar del Plata, Argentina. Elevá tu setup con los mejores productos de audio, gaming, energía y accesorios.",
  keywords: [
    "dynasty",
    "tecnologia",
    "tecnología",
    "gadgets",
    "audio",
    "gaming",
    "argentina",
    "mar del plata",
    "setup",
    "tecnologia mar del plata",
  ],
  authors: [{ name: "DYNASTY" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "DYNASTY",
    title: "DYNASTY — Tecnología & Setup Built Different | Mar del Plata",
    description:
      "Tecnología y gadgets retro-tácticos en Mar del Plata, Argentina. Elevá tu setup.",
    images: [
      {
        url: `${siteUrl}/brand/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "DYNASTY — Tecnología Built Different",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DYNASTY — Tecnología & Setup Built Different | Mar del Plata",
    description:
      "Tecnología y gadgets retro-tácticos en Mar del Plata, Argentina.",
    images: [`${siteUrl}/brand/og-default.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DYNASTY",
  image: `${siteUrl}/brand/og-default.jpg`,
  description: "Tech & gadgets con criterio retro-táctico en Mar del Plata, Argentina.",
  url: siteUrl,
  telephone: "+5492236751309",
  address: {
    "@type": "PostalAddress",
    streetAddress: "39 y Edison",
    addressLocality: "Mar del Plata",
    addressRegion: "Buenos Aires",
    postalCode: "7600",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -38.0055,
    longitude: -57.5426,
  },
  sameAs: [
    "https://instagram.com/dynasty.arg",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dynastyDisplay.variable} ${dynastyBody.variable} ${dynastyMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface-0 text-text-primary antialiased font-body">
        <ToastProvider>
          <CRTPreloader />
          <Navbar />
          <MobileMenu />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </ToastProvider>
      </body>
    </html>
  );
}