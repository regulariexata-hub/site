import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : null) ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://exataregularizacao.com.br");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Exata Regularização | Inteligência em Regularização Imobiliária",
  description:
    "A Exata diagnostica, estrutura e conduz processos de regularização de imóveis rurais e urbanos, transformando situações técnicas e documentais complexas em uma rota clara de solução.",
  icons: {
    icon: [
      { url: "/fiveicon.webp", type: "image/webp" },
      { url: "/fiveicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/fiveicon.webp",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://exataregularizacao.com.br",
    siteName: "Exata Regularização",
    title: "Exata Regularização | Inteligência em Regularização Imobiliária",
    description:
      "A Exata diagnostica, estrutura e conduz processos de regularização de imóveis rurais e urbanos, transformando situações técnicas e documentais complexas em uma rota clara de solução.",
    images: [
      {
        url: "/fotocapa.png",
        width: 478,
        height: 583,
        alt: "Exata Regularização",
      },
      {
        url: "/fotocapa.webp",
        width: 478,
        height: 583,
        alt: "Exata Regularização",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exata Regularização | Inteligência em Regularização Imobiliária",
    description:
      "A Exata diagnostica, estrutura e conduz processos de regularização de imóveis rurais e urbanos, transformando situações técnicas e documentais complexas em uma rota clara de solução.",
    images: ["/fotocapa.png"],
  },
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
