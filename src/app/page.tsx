"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Compass, 
  Layers, 
  FileText,
  Tag,
  Users,
  CreditCard 
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef} className="flex flex-col w-full bg-white">

      {/* ════════════════════════════════════════
          SEÇÃO 01 — HERO (Apple Style: Clean, Massive Typography)
         ════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-12 px-6 lg:px-8 overflow-hidden">
        {/* Vídeo de Fundo Responsivo */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videofundo/Video%20para%20fundo.mp4" type="video/mp4" />
        </video>

        {/* Camada 1: Gradiente elegante (mais claro e suave) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60 z-0"></div>
        
        {/* Camada 2: Película de Vidro (Blur) + Pattern de micro-pontos */}
        <div 
          className="absolute inset-0 z-0 backdrop-blur-[3px]"
          style={{
            backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 1px)",
            backgroundSize: "4px 4px"
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="reveal text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.05] mb-8">
            Seu imóvel pode valer muito.
            <br />
            <span className="text-white/70">Uma pendência pode impedir a próxima decisão.</span>
          </h1>

          <p className="reveal stagger-1 text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light tracking-tight leading-relaxed">
            A Exata diagnostica, estrutura e conduz processos de regularização de imóveis rurais e urbanos. Transformamos complexidade em uma rota clara.
          </p>

          <div className="reveal stagger-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/diagnostico"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              Solicitar análise do meu caso
            </Link>
            <Link
              href="#escopo-tecnico"
              className="text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Como trabalhamos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SEÇÃO 02 — O PROBLEMA & MAPA DE INFORMAÇÃO (Minimalista Editorial)
         ════════════════════════════════════════ */}
      {/* ════════════════════════════════════════
          SEÇÃO 02 — O PROBLEMA & MAPA DE INFORMAÇÃO (Conforme Referência Visual)
         ════════════════════════════════════════ */}
      <section className="py-28 lg:py-36 px-6 lg:px-8 border-b border-subtle bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            
            {/* Coluna Esquerda: Tese e Síntese de Impacto */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="reveal inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-800 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Diagnóstico Inicial
              </span>

              <h2 className="reveal stagger-1 text-[2.6rem] md:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-primary mb-8">
                Regularização não começa no documento.
                <br />
                <span className="text-neutral-900 font-normal">Começa entendendo a situação.</span>
              </h2>

              <p className="reveal stagger-2 text-base md:text-lg font-light text-text-muted leading-relaxed">
                Imóveis frequentemente carregam divergências invisíveis a um primeiro olhar. Limites reais que não batem com o registro, cadastros desatualizados ou dependências técnicas que travam vendas, partilhas ou financiamentos.
              </p>
            </div>

            {/* Coluna Direita: Os 2 Cards Empilhados (Mapa + Divergências) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Card 1: Mapa de Inconsistências */}
              <div className="reveal bg-[#ecf7ef] border border-[#d6ecdc] rounded-3xl p-6 sm:p-8 space-y-7 shadow-xs">
                <div>
                  <div className="flex items-center justify-between pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                      Mapa de Inconsistências
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">
                      3 camadas de verificação
                    </span>
                  </div>
                  {/* Barra segmentada em 3 etapas */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-1.5 rounded-full bg-[#139446]"></div>
                    <div className="h-1.5 rounded-full bg-[#139446]"></div>
                    <div className="h-1.5 rounded-full bg-[#cce6d3]"></div>
                  </div>
                </div>

                {/* Linha técnica vertical condutora */}
                <div className="relative pl-8 md:pl-10 space-y-7 before:absolute before:left-3 md:before:left-4 before:top-3 before:bottom-3 before:w-[1.5px] before:bg-[#c7e5cf]">
                  
                  {/* Estação 01: Camada Física */}
                  <div className="relative group">
                    <div className="absolute -left-8 md:-left-10 top-0.5 w-6 md:w-8 h-6 md:h-8 rounded-full bg-white border border-[#c7e5cf] flex items-center justify-center text-[#139446] shadow-xs">
                      <Compass className="w-3 md:w-4 h-3 md:h-4 stroke-[1.8]" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                        Camada Física
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">
                        Divergências de área e limites
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                        A demarcação no solo (cercas, divisas e confrontações reais) não coincide com as medidas e confrontações averbadas na matrícula.
                      </p>
                    </div>
                  </div>

                  {/* Estação 02: Camada Fiscal e Ambiental */}
                  <div className="relative group">
                    <div className="absolute -left-8 md:-left-10 top-0.5 w-6 md:w-8 h-6 md:h-8 rounded-full bg-white border border-[#c7e5cf] flex items-center justify-center text-[#139446] shadow-xs">
                      <Layers className="w-3 md:w-4 h-3 md:h-4 stroke-[1.8]" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                        Camada Fiscal e Ambiental
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">
                        Cadastros inconsistentes (CCIR, ITR, CAR)
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                        Descompasso de informações entre órgãos governamentais (INCRA, Receita Federal e Meio Ambiente), gerando bloqueios cruzados e impedindo certidões.
                      </p>
                    </div>
                  </div>

                  {/* Estação 03: Camada Registral */}
                  <div className="relative group">
                    <div className="absolute -left-8 md:-left-10 top-0.5 w-6 md:w-8 h-6 md:h-8 rounded-full bg-white border border-[#c7e5cf] flex items-center justify-center text-[#139446] shadow-xs">
                      <FileText className="w-3 md:w-4 h-3 md:h-4 stroke-[1.8]" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                        Camada Registral
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">
                        Documentação incompleta
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                        Falta de averbação de edificações, ausência de habite-se, inventários não concluídos ou instrumentos de cessão não registrados em cartório.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Card 2: Onde essas divergências travam a decisão */}
              <div className="reveal stagger-1 bg-white border border-neutral-200/80 rounded-3xl p-6 sm:p-8 shadow-md shadow-black/[0.03] space-y-6">
                
                {/* Título com pontinho verde */}
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#139446]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                    Onde essas divergências travam a decisão
                  </span>
                </div>

                {/* 3 Colunas com divisores verticais */}
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 pt-1">
                  
                  {/* 01 Vendas */}
                  <div className="sm:pr-5 pb-4 sm:pb-0">
                    <Tag className="w-5 h-5 text-neutral-600 stroke-[1.5] mb-3" />
                    <h4 className="text-sm font-bold text-neutral-900 mb-1">Vendas</h4>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed">
                      Insegurança na titularidade afasta compradores.
                    </p>
                  </div>

                  {/* 02 Partilhas */}
                  <div className="sm:px-5 py-4 sm:py-0">
                    <Users className="w-5 h-5 text-neutral-600 stroke-[1.5] mb-3" />
                    <h4 className="text-sm font-bold text-neutral-900 mb-1">Partilhas</h4>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed">
                      Inventários e divisões entram em impasse.
                    </p>
                  </div>

                  {/* 03 Financiamentos */}
                  <div className="sm:pl-5 pt-4 sm:pt-0">
                    <CreditCard className="w-5 h-5 text-neutral-600 stroke-[1.5] mb-3" />
                    <h4 className="text-sm font-bold text-neutral-900 mb-1">Financiamentos</h4>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed">
                      Bancos rejeitam o imóvel como garantia.
                    </p>
                  </div>

                </div>

                {/* Botão Diagnóstico largo em verde */}
                <Link 
                  href="/diagnostico"
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#139446] hover:bg-[#0f7a39] text-white font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-sm group"
                >
                  Diagnóstico <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SEÇÃO 03 — DIAGNÓSTICO (Bento Grid Style)
         ════════════════════════════════════════ */}
      <section className="py-32 px-6 lg:px-8 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="reveal text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight text-primary mb-6">
              O Diagnóstico Exata.
            </h2>
            <p className="reveal stagger-1 text-xl font-light text-text-muted">
              Não entregamos orçamentos vazios. Transformamos o entendimento da sua situação em clareza técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="reveal bg-white rounded-3xl p-10 lg:p-14 border border-subtle h-full">
              <p className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">Etapa 1</p>
              <h3 className="text-3xl font-semibold text-primary mb-4 tracking-tight">Contexto e Pendências</h3>
              <p className="text-lg text-text-muted font-light leading-relaxed">
                Análise minuciosa da documentação existente e identificação imediata de inconsistências cadastrais ou legais que bloqueiam o seu patrimônio.
              </p>
            </div>
            <div className="reveal stagger-1 bg-white rounded-3xl p-10 lg:p-14 border border-subtle h-full">
              <p className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">Etapa 2</p>
              <h3 className="text-3xl font-semibold text-primary mb-4 tracking-tight">Definição da Rota</h3>
              <p className="text-lg text-text-muted font-light leading-relaxed">
                Estruturação de uma sequência lógica e técnica de ações necessárias para atingir a conformidade legal sem retrabalho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SEÇÃO 04 — CAPACIDADES (9-Card Grid)
         ════════════════════════════════════════ */}
      <section id="escopo-tecnico" className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative mb-6">
            <div className="max-w-xl pb-6 md:pb-16 lg:pb-20 pt-4">
              <h2 className="reveal text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight text-primary mb-6">
                Escopo Técnico
              </h2>
              <p className="reveal stagger-1 text-lg md:text-xl font-light text-text-muted leading-relaxed max-w-lg">
                Nossa equipe executa diretamente as etapas documentais e de engenharia necessárias para a sua regularização.
              </p>
            </div>

            {/* Imagem da Especialista alinhada exatamente sobre a caixa de Desmembramento e Remembramento */}
            <div className="hidden md:block absolute right-0 -bottom-6 pointer-events-none z-10">
              <Image
                src="/image/mulherlateral.webp"
                alt="Especialista Exata com tablet de regularização"
                width={480}
                height={420}
                className="w-[320px] md:w-[380px] lg:w-[440px] h-auto object-contain object-bottom select-none"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1 */}
            <div className="reveal bg-white border border-subtle rounded-3xl p-8 flex flex-col hover:border-primary/20 transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-4 bg-surface w-fit px-3 py-1 rounded-full">Rural e Urbano</span>
              <h3 className="text-xl font-semibold text-primary tracking-tight">Levantamento Topográfico</h3>
              <p className="text-sm text-text-muted mt-3 font-light leading-relaxed">Planialtimétrico cadastral, com curvas de nível e locação de coordenadas</p>
            </div>

            {/* 2 */}
            <div className="reveal stagger-1 bg-white border border-subtle rounded-3xl p-8 flex flex-col hover:border-primary/20 transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-4 bg-surface w-fit px-3 py-1 rounded-full">Rural e Urbano</span>
              <h3 className="text-xl font-semibold text-primary tracking-tight">Retificação de Área</h3>
            </div>

            {/* 3 */}
            <div className="reveal stagger-2 bg-white border border-subtle rounded-3xl p-8 flex flex-col hover:border-primary/20 transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-4 bg-surface w-fit px-3 py-1 rounded-full">Rural e Urbano</span>
              <h3 className="text-xl font-semibold text-primary tracking-tight">Desmembramento e Remembramento</h3>
            </div>

            {/* 4 */}
            <div className="reveal bg-white border border-subtle rounded-3xl p-8 flex flex-col hover:border-primary/20 transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-4 bg-emerald-50 w-fit px-3 py-1 rounded-full">Rural</span>
              <h3 className="text-xl font-semibold text-primary tracking-tight">Georreferenciamento</h3>
              <p className="text-sm text-text-muted mt-3 font-light leading-relaxed">Com certificação no INCRA</p>
            </div>

            {/* 5 */}
            <div className="reveal stagger-1 bg-white border border-subtle rounded-3xl p-8 flex flex-col hover:border-primary/20 transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-4 bg-emerald-50 w-fit px-3 py-1 rounded-full">Rural</span>
              <h3 className="text-xl font-semibold text-primary tracking-tight">CCIR</h3>
              <p className="text-sm text-text-muted mt-3 font-light leading-relaxed">Certificado de Cadastro de Imóvel Rural</p>
            </div>

            {/* 6 */}
            <div className="reveal stagger-2 bg-white border border-subtle rounded-3xl p-8 flex flex-col hover:border-primary/20 transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-4 bg-emerald-50 w-fit px-3 py-1 rounded-full">Rural</span>
              <h3 className="text-xl font-semibold text-primary tracking-tight">ITR</h3>
              <p className="text-sm text-text-muted mt-3 font-light leading-relaxed">Apoio ao Imposto Territorial Rural</p>
            </div>

            {/* 7 */}
            <div className="reveal bg-white border border-subtle rounded-3xl p-8 flex flex-col hover:border-primary/20 transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-4 bg-emerald-50 w-fit px-3 py-1 rounded-full">Rural</span>
              <h3 className="text-xl font-semibold text-primary tracking-tight">CAR</h3>
              <p className="text-sm text-text-muted mt-3 font-light leading-relaxed">Cadastro Ambiental Rural</p>
            </div>

            {/* 8 */}
            <div className="reveal stagger-1 bg-white border border-subtle rounded-3xl p-8 flex flex-col hover:border-primary/20 transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-4 bg-blue-50 w-fit px-3 py-1 rounded-full">Urbano</span>
              <h3 className="text-xl font-semibold text-primary tracking-tight">Regularização de Edificações</h3>
              <p className="text-sm text-text-muted mt-3 font-light leading-relaxed">Prefeitura, Receita Federal e Cartório</p>
            </div>

            {/* 9 */}
            <div className="reveal stagger-2 bg-white border border-subtle rounded-3xl p-8 flex flex-col hover:border-primary/20 transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-4 bg-surface w-fit px-3 py-1 rounded-full">Rural e Urbano</span>
              <h3 className="text-xl font-semibold text-primary tracking-tight">Assessoria Documental</h3>
              <p className="text-sm text-text-muted mt-3 font-light leading-relaxed">Compra e venda de imóveis</p>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SEÇÃO 05 — PROVA SOCIAL / METRICS (Minimalista)
         ════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-surface">
        <div className="max-w-6xl mx-auto">
          
          {/* Grid Minimalista com Divisores Elegantes */}
          <div className="reveal bg-white border border-subtle rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-neutral-200/70">
              
              {/* 01 */}
              <div className="md:px-8 first:md:pl-0 space-y-2">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">05</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-800">Anos de Experiência</p>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Trajetória consolidada em processos de regularização de imóveis rurais e urbanos.
                </p>
              </div>

              {/* 02 */}
              <div className="md:px-8 space-y-2">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">30</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-800">Municípios Atendidos</p>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Presença técnica ativa no Paraná e em Santa Catarina.
                </p>
              </div>

              {/* 03 */}
              <div className="md:px-8 last:md:pr-0 space-y-2">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight leading-tight">Equipe Especializada</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-800">Responsabilidade Técnica</p>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Profissionais especialistas em regularização, registrados no CREA, CFT e credenciados no INCRA.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          SEÇÃO 06 — CORPORATIVO (Com Vídeo de Fundo + Textura)
         ════════════════════════════════════════ */}
      <section className="relative py-40 px-6 lg:px-8 bg-black text-white overflow-hidden">
        {/* Vídeo de Fundo Responsivo */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videofundo2/video-2.mp4" type="video/mp4" />
        </video>

        {/* Camada 1: Gradiente preto comum suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70 z-0"></div>
        
        {/* Camada 2: Película de Vidro (Blur) + Pattern de micro-pontos idêntico ao Hero */}
        <div 
          className="absolute inset-0 z-0 backdrop-blur-[3px]"
          style={{
            backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 1px)",
            backgroundSize: "4px 4px"
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="reveal text-[3rem] md:text-[4.5rem] font-bold tracking-tight mb-8 leading-[1.05] text-white">
            Vender, financiar, partilhar uma herança ou simplesmente ter tranquilidade jurídica:
          </h2>
          <p className="reveal stagger-1 text-xl md:text-2xl text-white/90 mb-16 font-light max-w-2xl mx-auto leading-relaxed">
            Nada disso acontece com o imóvel irregular. A Exata conduz esse processo técnico e documental do início ao fim.
          </p>
          <a
            href="https://wa.me/5545991344907?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20com%20a%20equipe%20da%20Exata%20Regulariza%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="reveal stagger-2 inline-flex bg-white text-primary px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-transform"
          >
            Falar com a Exata
          </a>
        </div>
      </section>

    </div>
  );
}
