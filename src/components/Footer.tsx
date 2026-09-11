import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24">
          
          <div className="md:col-span-1">
            <Link href="/" className="mb-6 block">
              <Image
                src="/logoparasite/exta%20logo.webp"
                alt="Exata Regularização"
                width={160}
                height={42}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-white/80 text-sm font-light leading-relaxed">
              Inteligência em regularização<br />imobiliária e patrimonial.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-6">Navegação</h4>
            <ul className="space-y-4 text-sm font-light text-white/80">
              <li><Link href="/#escopo-tecnico" className="hover:text-white transition-colors">Como Trabalhamos</Link></li>
              <li><Link href="/diagnostico" className="hover:text-white transition-colors">Diagnóstico</Link></li>
              <li><Link href="/empresa" className="hover:text-white transition-colors">Empresa</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-6">Contato</h4>
            <ul className="space-y-4 text-sm font-light text-white/80">
              <li><a href="https://wa.me/5545991344907?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20regulariza%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">(45) 99134-4907</a></li>
              <li><a href="https://wa.me/5545991344907?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20regulariza%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">(45) 99114-5155</a></li>
              <li><a href="mailto:administrativo@exataregularizacao.com.br" className="hover:text-white transition-colors">E-mail Comercial</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-6">Escritório</h4>
            <p className="text-sm font-light text-white/80 leading-relaxed">
              Sede Alvorada, Cascavel/PR<br />
              Rua Edgar Franke, n° 190<br />
              CEP 85822-000
            </p>
          </div>

        </div>

        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] font-light text-white/70">
          <p className="text-white/70">
            Creative Studio{" "}
            <a 
              href="https://oxuidesign.com.br" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors underline-offset-2 hover:underline"
            >
              oxuidesign.com.br
            </a>{" "}
            | © {new Date().getFullYear()} Exata. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
            <Link href="/termos" className="hover:text-white transition-colors">Termos</Link>
          </div>
        </div>
      </div>

      {/* Botão Flutuante de Contato WhatsApp */}
      <a
        href="https://wa.me/5545991344907?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20com%20a%20equipe%20da%20Exata%20Regulariza%C3%A7%C3%A3o."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Exata no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#139446] hover:bg-[#0f7a39] text-white px-4 py-3 rounded-full shadow-lg shadow-[#139446]/30 hover:scale-105 active:scale-95 transition-all duration-200 group"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-sm font-medium pr-1 hidden sm:inline">
          Falar no WhatsApp
        </span>
      </a>
    </footer>
  );
}
