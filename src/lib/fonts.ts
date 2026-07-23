import { Montserrat, JetBrains_Mono, Anton } from "next/font/google";

// Using Anton as a display font stand-in until Blackland-Regular.ttf is provided.
// Anton has a similar bold, impactful, condensed gothic feel.
// To switch to Blackland: replace this with localFont({ src: '../../public/fonts/Blackland-Regular.ttf', ... })
export const dynastyDisplay = Anton({
  subsets: ["latin"],
  weight: "400",
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
