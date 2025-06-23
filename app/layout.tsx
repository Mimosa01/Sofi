import type { Metadata } from "next";
import "./globals.css";
import { wixMadeforDisplay } from "./fonts";
import Footer from "@/components/footer/widgets/Footer";
import Header from "@/components/header/widgets/Header";
import { Toaster } from "sonner";
import ModalClient from "@/components/modal/widgets/ModalClient";

export const metadata: Metadata = {
  title: "<codereview/> — вакансии, стажировки и карьерные возможности для разработчиков",
  description:
    "<codereview/> помогает начинающим и опытным разработчикам найти лучшие вакансии, стажировки и пройти собеседование успешно. Вакансии, тесты, вопросы — всё в одном месте.",
  metadataBase: new URL("https://localhost:3000"), // 🔁 Замени на свой настоящий домен
  openGraph: {
    title: "<codereview/> — вакансии и собеседования для разработчиков",
    description:
      "Карьерный рост с <codereview/>: вакансии, вопросы с собеседований, тестовые задания. Всё, чтобы успешно пройти отбор.",
    url: "https://codereview.dev",
    siteName: "<codereview/>",
    images: [
      {
        url: "/og-image.png", // 👉 желательно 1200x630
        width: 1200,
        height: 630,
        alt: "Логотип <codereview/> на фоне кода",
      },
    ],
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "<codereview/> — вакансии и собеседования для разработчиков",
    description:
      "Найди работу своей мечты. Вакансии, тесты и вопросы — всё на <codereview/>.",
    images: ["/og-image.png"],
    creator: "@codereview", // если нет Twitter — можно убрать
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${wixMadeforDisplay.variable}`}>
      <body>
        <Toaster position="top-right" richColors />
        <Header />
        {children}
        <ModalClient />
        <Footer />
      </body>
    </html>
  );
}
