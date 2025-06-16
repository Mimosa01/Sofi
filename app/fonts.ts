import { Wix_Madefor_Text, Wix_Madefor_Display } from "next/font/google";

export const wixMadeforText = Wix_Madefor_Text({
  subsets: ['cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-wix-text',
  display: 'swap',
});

export const wixMadeforDisplay = Wix_Madefor_Display({
  subsets: ['cyrillic'],
  weight: ['500', '700', '800'],
  variable: '--font-wix-display',
  display: 'swap',
});