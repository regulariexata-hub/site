import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exata Regularização | Inteligência em Regularização Imobiliária",
  description: "A Exata diagnostica, estrutura e conduz processos de regularização de imóveis rurais e urbanos, transformando situações técnicas e documentais complexas em uma rota clara de solução.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased text-text-main bg-background`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
