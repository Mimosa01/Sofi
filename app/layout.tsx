import type { Metadata } from "next";
import "./globals.css";
import { wixMadeforText, wixMadeforDisplay } from "./fonts";
import Modal from "@/features/modal/Modal";
import Footer from "@/components/footer/widgets/Footer";
import Header from "@/components/header/widgets/Header";

export const metadata: Metadata = {
  title: "<codereview/>",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${wixMadeforText.variable} ${wixMadeforDisplay.variable}`}>
      <body
        className={`font-wix-text bg-[url(/images/bgHero.png)] bg-no-repeat bg-contain text-neutral-800`}
      >
        <Header />
        {children}
        <Modal />
        <Footer />
      </body>
    </html>
  );
}
