import { Montserrat, JetBrains_Mono, Anton } from "next/font/google";

// Brand display font — Blackland-Regular.ttf is already in public/fonts,
// so it's loaded directly instead of the Anton placeholder that was
// previously standing in for it.
export const dynastyDisplay = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dynasty-display",
  display: "swap",
  preload: true,
});

export const dynastyBody = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dynasty-body",
  display: "swap",
  preload: true,
});

export const dynastyMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dynasty-mono",
  display: "swap",
  preload: false,
});
