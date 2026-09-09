"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // O cabeçalho só é transparente (com texto branco) na home quando não houve scroll.
  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Como Trabalhamos", href: "/#escopo-tecnico" },
    { name: "Diagnóstico", href: "/diagnostico" },
    { name: "Empresa", href: "/empresa" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isTransparent
            ? "bg-black/10 backdrop-blur-sm border-b border-white/10 py-5"
            : "bg-white/90 backdrop-blur-md border-b border-subtle py-3 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logoparasite/exta%20logo.webp"
              alt="Exata Regularização"
              width={160}
              height={42}
              className={`h-8 md:h-9 w-auto object-contain transition-all duration-300 ${
                isTransparent ? "" : "brightness-0"
              }`}
              priority
            />
          </Link>

          {/* Nav Minimalista */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[13px] font-medium transition-colors flex items-center gap-1 ${
                  isTransparent 
                    ? "text-white/80 hover:text-white" 
                    : "text-text-muted hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Minimalista */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/diagnostico"
              className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all ${
                isTransparent
                  ? "bg-white/20 text-white hover:bg-white/30 backdrop-blur-md border border-white/30"
                  : "bg-primary text-white hover:bg-secondary"
              }`}
            >
              Analisar meu caso
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 -mr-2 transition-colors ${
              isTransparent ? "text-white" : "text-primary"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Simples e Limpo */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-white lg:hidden overflow-y-auto">
          <nav className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-semibold text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8 mt-4 border-t border-subtle">
              <Link
                href="/diagnostico"
                className="block bg-primary text-white text-center px-6 py-4 rounded-2xl font-medium text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Analisar meu caso
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
