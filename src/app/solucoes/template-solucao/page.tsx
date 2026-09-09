import Link from "next/link";
import { ArrowRight, AlertCircle, FileSearch, ShieldCheck, HelpCircle, FileText, CheckCircle2 } from "lucide-react";

export default function SolutionTemplatePage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      
      {/* 01 — CONTEXTO & HEADER */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-emerald-300 font-semibold uppercase tracking-wider text-sm mb-4 block">Solução Técnica</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">[Nome da Solução / Problema. Ex: Regularização Rural]</h1>
          <p className="text-xl text-white/80 leading-relaxed font-light mb-10">
            [01. Contexto: Explicação breve de quando esse problema normalmente aparece e por que não pode ser ignorado.]
          </p>
          <div className="flex gap-4">
            <Link href="/diagnostico" className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Solicitar análise para este caso
            </Link>
          </div>
        </div>
      </section>

      {/* 02 & 03 — O QUE ESTÁ ACONTECENDO & POR QUE IMPORTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-primary">O que pode estar acontecendo</h2>
              </div>
              <p className="text-text-muted leading-relaxed">
                [02. Explicação simples do cenário. Ex: A área descrita no registro é diferente da realidade física da fazenda, ou existe sobreposição de limites com vizinhos.]
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-primary">Por que precisa ser analisado</h2>
              </div>
              <p className="text-text-muted leading-relaxed">
                [03. Consequências. Sem alarmismo. Ex: Inconsistências impedem financiamentos rurais, partilhas de herança ou venda do imóvel com segurança jurídica.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 & 05 — DIAGNÓSTICO & PROCESSO */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
              <FileSearch className="w-8 h-8 text-primary" />
              O que precisa ser verificado (Diagnóstico)
            </h2>
            <p className="text-lg text-text-muted mb-8">
              [04. Listagem do que a inteligência técnica analisa antes de executar serviços aleatórios.]
            </p>
            <ul className="space-y-4 bg-surface p-6 rounded-md border border-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-text-main font-medium">[Ponto de análise técnica 1]</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-text-main font-medium">[Ponto de análise técnica 2]</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Como a Exata atua neste caso</h2>
            <p className="text-lg text-text-muted mb-8">
              [05. Processo real estruturado para este cenário.]
            </p>
            {/* Timeline vertical simplificada */}
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">
              {['Análise de Documentação', 'Estruturação da Rota', 'Execução Técnica', 'Protocolo e Acompanhamento'].map((etapa, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-300 bg-white text-slate-500 group-hover:text-primary group-hover:border-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm transition-colors z-10 font-bold text-xs">
                    {i+1}
                  </div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-md border border-slate-100 bg-white shadow-sm group-hover:border-slate-300 transition-colors">
                    <h3 className="font-bold text-primary">{etapa}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 06 & 07 — FERRAMENTAS & DEPENDÊNCIAS */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Serviços Envolvidos</h2>
            <p className="text-text-muted mb-6">
              [06. Quais serviços técnicos compõem a solução (Ex: Topografia, SIGEF, CAR)]
            </p>
            <ul className="list-disc pl-5 space-y-2 text-text-main font-medium">
              <li>[Serviço Técnico 1]</li>
              <li>[Serviço Técnico 2]</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Dependências Críticas</h2>
            <p className="text-text-muted mb-6">
              [07. O que depende de terceiros (Cartório, INCRA, Confrontantes)]
            </p>
            <ul className="list-disc pl-5 space-y-2 text-text-main font-medium">
              <li>[Dependência Externa 1]</li>
              <li>[Dependência Externa 2]</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 08 — PROVAS */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Nossa Experiência</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* 08. Credenciais/cases/dados reais. */}
            <div><p className="text-3xl font-bold text-primary">[X]</p><p className="text-xs text-text-muted uppercase tracking-wide mt-2">Casos Resolvidos</p></div>
            <div><p className="text-3xl font-bold text-primary">[X]</p><p className="text-xs text-text-muted uppercase tracking-wide mt-2">Área Regularizada</p></div>
            <div><p className="text-3xl font-bold text-primary">[X]</p><p className="text-xs text-text-muted uppercase tracking-wide mt-2">Tempo Médio</p></div>
            <div><p className="text-3xl font-bold text-primary">[X]</p><p className="text-xs text-text-muted uppercase tracking-wide mt-2">Taxa de Sucesso</p></div>
          </div>
        </div>
      </section>

      {/* 09 — FAQ */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-12">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-4">
            {/* 09. FAQ estruturado (Placeholder) */}
            {[1, 2, 3].map((item) => (
              <details key={item} className="group bg-white border border-slate-200 rounded-md p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-semibold text-primary">
                  [Pergunta comum sobre esta situação {item}]
                  <span className="shrink-0 rounded-sm bg-surface p-1.5 text-primary group-open:-rotate-180 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-text-muted leading-relaxed">
                  [Resposta técnica simplificada sobre a dúvida em questão.]
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — CTA */}
      <section className="py-32 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Não tome decisões com base em documentos desatualizados.
          </h2>
          <p className="text-xl text-white/90 mb-10 font-light">
            Solicite um diagnóstico completo da situação do seu imóvel antes de iniciar processos irreversíveis.
          </p>
          <Link href="/diagnostico" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-md">
            Solicitar análise do meu caso <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
