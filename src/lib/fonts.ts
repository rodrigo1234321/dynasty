import { Montserrat, JetBrains_Mono, Anton } from "next/font/google";

export const dynastyDisplay = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dynasty-display",
  display: "swap",
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
