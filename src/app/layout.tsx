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

export const metadata: Metadata = {
  title: {
    default: "DYNASTY — Built Different",
    template: "%s | DYNASTY",
  },
  description:
    "DYNASTY — Tech & Gadgets from Mar del Plata, Argentina. Built Different. Audio, gaming, energy, and more for your setup.",
  keywords: [
    "dynasty",
    "tecnologia",
    "gadgets",
    "audio",
    "gaming",
    "argentina",
    "mar del plata",
    "setup",
  ],
  authors: [{ name: "DYNASTY" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://dynasty.ar",
    siteName: "DYNASTY",
    title: "DYNASTY — Built Different",
    description:
      "Tech & Gadgets from Mar del Plata. Built Different.",
    images: [
      {
        url: "/brand/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "DYNASTY — Built Different",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DYNASTY — Built Different",
    description:
      "Tech & Gadgets from Mar del Plata. Built Different.",
  },
  robots: {
    index: true,
    follow: true,
  },
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