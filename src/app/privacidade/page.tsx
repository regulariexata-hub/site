import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Building2 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade | Exata Regularização",
  description:
    "Política de Privacidade e Proteção de Dados Pessoais da Exata Soluções em Regularização LTDA, em conformidade com a LGPD (Lei nº 13.709/2018).",
};

export default function PrivacidadePage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Navegação de retorno */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar para o início
          </Link>
        </div>

        {/* Cabeçalho da Página */}
        <div className="border-b border-subtle pb-10 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
            <ShieldCheck className="w-4 h-4" />
            LGPD & Segurança da Informação
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary tracking-tight mb-4">
            Política de Privacidade
          </h1>
          <p className="text-sm md:text-base text-text-muted font-light">
            Última atualização: <span className="font-medium text-text-main">08 de setembro de 2026</span>
          </p>
        </div>

        {/* Apresentação institucional */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-subtle shadow-xs mb-12 text-base text-text-main/90 leading-relaxed font-light space-y-4">
          <p>
            A <strong>Exata Soluções em Regularização LTDA</strong>, inscrita no CNPJ sob o nº <strong>40.931.703/0001-58</strong>, valoriza a privacidade e a segurança das informações de seus clientes, parceiros e visitantes.
          </p>
          <p>
            Esta Política de Privacidade explica de forma clara como coletamos, utilizamos, armazenamos e protegemos os dados pessoais fornecidos por meio deste site e de nossos canais de atendimento.
          </p>
          <p className="text-sm bg-primary/5 p-4 rounded-xl border border-primary/10 text-primary">
            O tratamento de dados pessoais é realizado em conformidade com a <strong>Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais (LGPD)</strong> e demais normas aplicáveis.
          </p>
        </div>

        {/* Conteúdo das Seções */}
        <div className="space-y-12">

          {/* 1. Responsável */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                1
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Quem é responsável pelos dados
              </h2>
            </div>
            <p className="text-text-muted font-light mb-4">
              A responsável pelo tratamento dos dados pessoais é:
            </p>
            <div className="bg-surface rounded-xl p-5 border border-subtle space-y-2 text-sm text-text-main font-light">
              <p className="font-semibold text-base text-primary">Exata Soluções em Regularização LTDA</p>
              <p className="flex items-center gap-2 text-text-muted">
                <Building2 className="w-4 h-4 text-primary shrink-0" />
                <span>CNPJ: 40.931.703/0001-58</span>
              </p>
              <p className="flex items-start gap-2 text-text-muted">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Rua Edgar Franke, nº 190 – Sala 03, Sede Alvorada – Cascavel/PR, CEP 85822-000</span>
              </p>
              <p className="flex items-center gap-2 text-text-muted">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>
                  E-mail:{" "}
                  <a
                    href="mailto:administrativo@exataregularizacao.com.br"
                    className="text-primary hover:underline font-normal"
                  >
                    administrativo@exataregularizacao.com.br
                  </a>
                </span>
              </p>
            </div>
          </section>

          {/* 2. Dados coletados */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                2
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Quais dados podemos coletar
              </h2>
            </div>
            <p className="text-text-muted font-light mb-4">
              Ao utilizar nosso site ou entrar em contato com a Exata, podemos coletar informações fornecidas diretamente por você, como:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-sm text-text-main font-light">
              {[
                "Nome",
                "Telefone",
                "Endereço de e-mail",
                "Cidade ou região",
                "Informações relacionadas ao imóvel ou propriedade",
                "Informações enviadas voluntariamente em formulários, solicitações de orçamento ou atendimento",
                "Documentos e informações adicionais quando necessários para a prestação dos serviços contratados",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-surface p-3 rounded-lg border border-subtle/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-text-muted font-light mb-4">
              Também poderão ser coletadas automaticamente determinadas informações técnicas de navegação, como:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4 text-sm text-text-main font-light">
              {[
                "Endereço IP",
                "Tipo de dispositivo",
                "Navegador utilizado",
                "Páginas acessadas",
                "Data e horário de acesso",
                "Origem do acesso",
                "Dados relacionados ao uso e desempenho do site",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-surface p-3 rounded-lg border border-subtle/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-text-muted font-light italic">
              Essas informações podem ser obtidas por meio de cookies e tecnologias semelhantes.
            </p>
          </section>

          {/* 3. Utilização dos dados */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                3
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Para que utilizamos seus dados
              </h2>
            </div>
            <p className="text-text-muted font-light mb-4">
              Os dados coletados poderão ser utilizados para:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-sm text-text-main font-light">
              {[
                "Responder dúvidas e solicitações de contato;",
                "Elaborar propostas e orçamentos;",
                "Realizar atendimento comercial e técnico;",
                "Avaliar necessidades relacionadas à regularização de imóveis;",
                "Executar serviços contratados;",
                "Entrar em contato sobre solicitações realizadas pelo usuário;",
                "Cumprir obrigações legais, regulatórias e contratuais;",
                "Prevenir fraudes e aumentar a segurança de nossos canais digitais;",
                "Melhorar a experiência e o funcionamento do site;",
                "Analisar o desempenho de nossas páginas e campanhas;",
                "Manter registros necessários para a prestação dos serviços.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-surface p-3 rounded-lg border border-subtle/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-xl bg-surface border border-subtle text-sm text-text-main font-light">
              A Exata utiliza os dados pessoais somente para finalidades legítimas e relacionadas às suas atividades.
            </div>
          </section>

          {/* 4. Bases legais */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                4
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Bases legais para o tratamento
              </h2>
            </div>
            <p className="text-text-muted font-light mb-4">
              O tratamento dos dados pessoais poderá ocorrer com fundamento nas bases legais previstas na LGPD, incluindo, conforme cada situação:
            </p>
            <ul className="space-y-2.5 mb-5 text-sm text-text-main font-light">
              {[
                "Consentimento do titular;",
                "Execução de contrato ou procedimentos preliminares relacionados a contrato;",
                "Cumprimento de obrigação legal ou regulatória;",
                "Exercício regular de direitos;",
                "Legítimo interesse da Exata, observados os direitos e liberdades do titular.",
              ].map((base, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-surface p-3 rounded-lg border border-subtle/70">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>{base}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-text-muted font-light">
              Quando o tratamento depender de consentimento, ele poderá ser revogado pelo titular nos termos da legislação aplicável.
            </p>
          </section>

          {/* 5. Compartilhamento */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                5
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Compartilhamento de informações
              </h2>
            </div>
            <p className="text-base font-semibold text-primary mb-3">
              A Exata não comercializa dados pessoais.
            </p>
            <p className="text-text-muted font-light mb-4 text-sm leading-relaxed">
              Determinadas informações poderão ser compartilhadas quando necessário com fornecedores, prestadores de serviços ou parceiros envolvidos no funcionamento do site e na execução dos serviços contratados, incluindo, conforme aplicável:
            </p>
            <ul className="space-y-2 mb-6 text-sm text-text-main font-light">
              {[
                "Serviços de hospedagem e infraestrutura;",
                "Plataformas de atendimento e comunicação;",
                "Ferramentas de análise e desempenho do site;",
                "Serviços de armazenamento e processamento de dados;",
                "Profissionais e parceiros técnicos envolvidos na prestação do serviço;",
                "Cartórios, órgãos públicos e entidades competentes, quando necessário para processos de regularização.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-surface p-3 rounded-lg border border-subtle/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-3 text-sm text-text-muted font-light">
              <p>
                O compartilhamento será limitado às informações necessárias para a respectiva finalidade e deverá respeitar a legislação aplicável.
              </p>
              <p>
                Também poderemos compartilhar informações quando houver obrigação legal, determinação judicial ou solicitação válida de autoridade competente.
              </p>
            </div>
          </section>

          {/* 6. WhatsApp e Canais Externos */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                6
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                WhatsApp e outros canais externos
              </h2>
            </div>
            <div className="space-y-4 text-sm text-text-main font-light leading-relaxed">
              <p>
                Nosso site poderá disponibilizar links ou botões para atendimento por meio de serviços externos, como o WhatsApp e redes sociais.
              </p>
              <p>
                Ao acessar essas plataformas, o tratamento das informações também poderá estar sujeito às políticas de privacidade e aos termos próprios de cada serviço.
              </p>
              <div className="p-4 rounded-xl bg-surface border border-subtle text-text-muted">
                A Exata recomenda que o usuário consulte essas políticas antes de fornecer informações pessoais por meio de plataformas de terceiros.
              </div>
            </div>
          </section>

          {/* 7. Cookies */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                7
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Cookies
              </h2>
            </div>
            <div className="space-y-4 text-sm text-text-main font-light leading-relaxed">
              <p>
                Cookies são pequenos arquivos armazenados no dispositivo do usuário para permitir determinadas funcionalidades e ajudar a compreender como o site é utilizado.
              </p>
              <p>
                Podemos utilizar cookies necessários ao funcionamento do site e, conforme as ferramentas implementadas, cookies de análise, desempenho ou publicidade.
              </p>
              <p>
                Quando exigido pela legislação aplicável, cookies não essenciais dependerão da escolha ou consentimento do usuário.
              </p>
              <p>
                O usuário poderá gerenciar ou desabilitar cookies por meio das configurações de seu navegador ou, quando disponível, pelo painel de preferências de cookies do próprio site.
              </p>
              <p className="text-xs text-text-muted italic">
                * A desativação de determinados cookies poderá afetar algumas funcionalidades do site.
              </p>
            </div>
          </section>

          {/* 8. Armazenamento e Segurança */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                8
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Armazenamento e segurança
              </h2>
            </div>
            <div className="space-y-4 text-sm text-text-main font-light leading-relaxed">
              <p>
                A Exata adota medidas técnicas e administrativas destinadas a proteger os dados pessoais contra acessos não autorizados, perda, alteração, divulgação ou tratamento inadequado.
              </p>
              <p>
                Os dados serão mantidos somente pelo período necessário para cumprir as finalidades para as quais foram coletados, respeitando os prazos legais, regulatórios e contratuais aplicáveis.
              </p>
              <p>
                Após esse período, os dados poderão ser eliminados ou anonimizados, salvo quando sua conservação for necessária ou permitida pela legislação.
              </p>
            </div>
          </section>

          {/* 9. Transferência Internacional */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                9
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Transferência internacional de dados
              </h2>
            </div>
            <div className="space-y-4 text-sm text-text-main font-light leading-relaxed">
              <p>
                Alguns fornecedores de tecnologia utilizados pelo site poderão armazenar ou processar informações em servidores localizados fora do Brasil.
              </p>
              <p>
                Quando houver transferência internacional de dados pessoais, a Exata buscará utilizar fornecedores e mecanismos compatíveis com os requisitos estabelecidos pela legislação brasileira de proteção de dados.
              </p>
            </div>
          </section>

          {/* 10. Direitos do Titular */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                10
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Direitos do titular
              </h2>
            </div>
            <p className="text-text-muted font-light mb-4 text-sm">
              Nos termos da LGPD, o titular dos dados pessoais poderá, conforme aplicável, solicitar:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-sm text-text-main font-light">
              {[
                "Confirmação da existência de tratamento de dados;",
                "Acesso aos seus dados pessoais;",
                "Correção de dados incompletos, inexatos ou desatualizados;",
                "Anonimização, bloqueio ou eliminação de dados tratados em desconformidade com a legislação;",
                "Portabilidade dos dados, quando aplicável;",
                "Informações sobre o compartilhamento de seus dados;",
                "Eliminação dos dados tratados com base no consentimento, observadas as exceções legais;",
                "Informação sobre a possibilidade de não fornecer consentimento e suas consequências;",
                "Revogação do consentimento;",
                "Oposição ao tratamento, quando cabível;",
                "Revisão de decisões automatizadas, quando aplicável.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-surface p-3 rounded-lg border border-subtle/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-surface rounded-xl p-5 border border-subtle space-y-3 text-sm font-light">
              <p className="text-text-main">
                Para exercer seus direitos, o titular poderá entrar em contato com a Exata pelo e-mail:
              </p>
              <p>
                <a
                  href="mailto:administrativo@exataregularizacao.com.br"
                  className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  administrativo@exataregularizacao.com.br
                </a>
              </p>
              <p className="text-xs text-text-muted">
                Poderemos solicitar informações adicionais para confirmar a identidade do solicitante e preservar a segurança dos dados envolvidos.
              </p>
            </div>
          </section>

          {/* 11. Links Terceiros */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                11
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Links para sites de terceiros
              </h2>
            </div>
            <p className="text-sm text-text-main font-light leading-relaxed">
              Nosso site poderá conter links para páginas, redes sociais ou serviços administrados por terceiros. A Exata não é responsável pelas práticas de privacidade adotadas por esses ambientes externos. Recomendamos a leitura das respectivas políticas antes do fornecimento de informações pessoais.
            </p>
          </section>

          {/* 12. Alterações */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                12
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Alterações nesta Política
              </h2>
            </div>
            <div className="space-y-3 text-sm text-text-main font-light leading-relaxed">
              <p>
                Esta Política de Privacidade poderá ser atualizada sempre que houver mudanças em nossos processos, serviços, ferramentas utilizadas ou requisitos legais.
              </p>
              <p>
                A versão mais recente estará sempre disponível nesta página, acompanhada da respectiva data de atualização.
              </p>
            </div>
          </section>

          {/* 13. Contato / Fale com a Exata */}
          <section className="bg-primary text-white rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 text-white font-bold text-sm">
                13
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Fale com a Exata
              </h2>
            </div>
            <p className="text-white/85 font-light text-sm mb-6 leading-relaxed">
              Para dúvidas relacionadas a esta Política de Privacidade, ao tratamento de dados pessoais ou ao exercício dos direitos previstos na LGPD, entre em contato:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-light">
              <div className="bg-white/10 rounded-xl p-4 space-y-2 border border-white/10">
                <p className="font-semibold text-white">Exata Soluções em Regularização LTDA</p>
                <p className="text-white/80">CNPJ: 40.931.703/0001-58</p>
                <p className="text-white/80">
                  Rua Edgar Franke, nº 190 – Sala 03<br />
                  Sede Alvorada – Cascavel/PR<br />
                  CEP 85822-000
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-4 space-y-3 border border-white/10 flex flex-col justify-center">
                <div>
                  <span className="text-white/70 text-xs block mb-1">E-mail:</span>
                  <a
                    href="mailto:administrativo@exataregularizacao.com.br"
                    className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium break-all"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    administrativo@exataregularizacao.com.br
                  </a>
                </div>

                <div>
                  <span className="text-white/70 text-xs block mb-1">Telefone / WhatsApp:</span>
                  <a
                    href="https://wa.me/5545991344907"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    (45) 99134-4907
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Rodapé interno da página */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-subtle text-sm font-medium text-primary hover:bg-surface transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            Retornar à Página Principal
          </Link>
        </div>

      </div>
    </div>
  );
}
