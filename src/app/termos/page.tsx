import type { Metadata } from "next";
import Link from "next/link";
import { 
  FileText, 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Building2 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso | Exata Regularização",
  description:
    "Termos de Uso e Condições de Navegação da Exata Soluções em Regularização LTDA.",
};

export default function TermosPage() {
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
            <FileText className="w-4 h-4" />
            Condições Gerais de Uso
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary tracking-tight mb-4">
            Termos de Uso
          </h1>
          <p className="text-sm md:text-base text-text-muted font-light">
            Última atualização: <span className="font-medium text-text-main">08 de setembro de 2026</span>
          </p>
        </div>

        {/* Apresentação institucional */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-subtle shadow-xs mb-12 text-base text-text-main/90 leading-relaxed font-light space-y-4">
          <p>
            Bem-vindo ao site da <strong>Exata Soluções em Regularização LTDA</strong>.
          </p>
          <p>
            Estes Termos de Uso estabelecem as condições para acesso e utilização deste site, de seus conteúdos, formulários e demais recursos disponibilizados pela Exata.
          </p>
          <p className="text-sm bg-primary/5 p-4 rounded-xl border border-primary/10 text-primary">
            Ao navegar ou utilizar este site, o usuário declara estar ciente destes Termos. Caso não concorde com alguma das condições apresentadas, recomenda-se não utilizar os recursos disponibilizados.
          </p>
        </div>

        {/* Conteúdo das Seções */}
        <div className="space-y-12">

          {/* 1. Sobre a Exata */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                1
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Sobre a Exata
              </h2>
            </div>
            <p className="text-text-muted font-light mb-4">
              Este site é administrado por:
            </p>
            <div className="bg-surface rounded-xl p-5 border border-subtle space-y-2 text-sm text-text-main font-light mb-4">
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
            <p className="text-sm text-text-main/90 font-light leading-relaxed">
              A Exata atua com serviços relacionados à regularização de imóveis rurais e urbanos, levantamentos e serviços técnicos relacionados à sua área de atuação.
            </p>
          </section>

          {/* 2. Finalidade do site */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                2
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Finalidade do site
              </h2>
            </div>
            <div className="space-y-4 text-sm text-text-main font-light leading-relaxed">
              <p>
                O site tem caráter institucional, informativo e comercial, sendo destinado à apresentação da Exata, de seus serviços, áreas de atuação e canais de contato.
              </p>
              <p>
                Por meio do site, o usuário também poderá solicitar atendimento, informações, propostas ou orçamentos.
              </p>
              <div className="p-4 rounded-xl bg-surface border border-subtle text-text-muted space-y-2">
                <p>
                  As informações disponibilizadas no site possuem caráter geral e não representam, por si só, diagnóstico técnico, parecer, laudo, aprovação de regularização ou garantia de viabilidade de determinado processo.
                </p>
                <p className="font-normal text-text-main">
                  Cada imóvel possui características próprias e deverá ser analisado individualmente pela equipe responsável.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Solicitações de orçamento */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                3
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Solicitações de orçamento
              </h2>
            </div>
            <p className="text-text-main font-light text-sm mb-4 leading-relaxed">
              O envio de formulário, mensagem, documento ou solicitação de orçamento por meio deste site não representa contratação automática dos serviços da Exata.
            </p>
            <p className="text-text-muted font-light text-sm mb-4">
              Qualquer contratação estará sujeita à:
            </p>
            <ul className="space-y-2.5 mb-6 text-sm text-text-main font-light">
              {[
                "Análise prévia da demanda;",
                "Disponibilidade técnica;",
                "Avaliação dos documentos e informações fornecidos;",
                "Definição do escopo dos serviços;",
                "Apresentação e aprovação de proposta comercial;",
                "E, quando aplicável, formalização contratual.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-surface p-3 rounded-lg border border-subtle/70">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-xl bg-surface border border-subtle text-sm text-text-main font-light">
              Valores, prazos e condições serão definidos conforme as características específicas de cada serviço.
            </div>
          </section>

          {/* 4. Informações sobre regularização de imóveis */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                4
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Informações sobre regularização de imóveis
              </h2>
            </div>
            <div className="space-y-4 text-sm text-text-main font-light leading-relaxed">
              <p>
                Os conteúdos apresentados neste site buscam fornecer informações gerais sobre procedimentos relacionados à regularização de imóveis, topografia, documentação e serviços correlatos.
              </p>
              <p>
                Entretanto, processos de regularização podem envolver diferentes exigências técnicas, ambientais, urbanísticas, registrais, municipais, estaduais ou federais.
              </p>
              <p>
                Por esse motivo, as informações publicadas no site não devem ser interpretadas como garantia de que determinado imóvel poderá ser regularizado de uma forma específica ou dentro de determinado prazo.
              </p>
              <div className="p-4 rounded-xl bg-surface border border-subtle text-text-muted">
                A viabilidade de cada processo dependerá da análise técnica, documental e, quando aplicável, da manifestação de cartórios, municípios, órgãos públicos e demais entidades competentes.
              </div>
            </div>
          </section>

          {/* 5. Prazos */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                5
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Prazos
              </h2>
            </div>
            <p className="text-text-main font-light text-sm mb-4 leading-relaxed">
              Eventuais referências a prazos disponibilizadas no site possuem caráter estimativo.
            </p>
            <p className="text-text-muted font-light text-sm mb-4">
              O andamento de processos de regularização pode depender de fatores externos à Exata, incluindo:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-sm text-text-main font-light">
              {[
                "Análise por órgãos públicos;",
                "Procedimentos cartorários;",
                "Fornecimento de documentos pelo proprietário;",
                "Obtenção de certidões;",
                "Manifestação de terceiros;",
                "Exigências administrativas;",
                "Análises ambientais ou técnicas;",
                "Alterações na legislação ou regulamentação aplicável.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-surface p-3 rounded-lg border border-subtle/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-xl bg-surface border border-subtle text-sm text-text-muted font-light">
              Dessa forma, salvo quando expressamente definido em contrato, informações gerais sobre prazo não constituem garantia de conclusão em data determinada.
            </div>
          </section>

          {/* 6. Responsabilidades do usuário */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                6
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Responsabilidades do usuário
              </h2>
            </div>
            <p className="text-text-muted font-light text-sm mb-4">
              Ao utilizar o site, o usuário compromete-se a:
            </p>
            <ul className="space-y-2.5 mb-6 text-sm text-text-main font-light">
              {[
                "Fornecer informações verdadeiras e atualizadas;",
                "Utilizar o site apenas para finalidades legítimas;",
                "Não utilizar dados ou identidade de terceiros sem autorização;",
                "Não tentar comprometer a segurança ou o funcionamento do site;",
                "Não utilizar os conteúdos da Exata de forma ilegal ou que possa prejudicar a empresa ou terceiros;",
                "Fornecer documentos e informações corretas quando solicitar análise ou contratação de serviços.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-surface p-3 rounded-lg border border-subtle/70">
                  <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-xl bg-surface border border-subtle text-sm text-text-main font-medium">
              O usuário é responsável pela veracidade das informações fornecidas.
            </div>
          </section>

          {/* 7. Documentos enviados à Exata */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                7
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Documentos enviados à Exata
              </h2>
            </div>
            <div className="space-y-4 text-sm text-text-main font-light leading-relaxed">
              <p>
                Em determinadas etapas do atendimento, poderá ser necessário o envio de documentos relacionados ao imóvel, proprietário ou processo de regularização.
              </p>
              <p>
                O envio desses documentos deverá ocorrer somente quando necessário para análise ou execução dos serviços.
              </p>
              <div className="p-4 rounded-xl bg-surface border border-subtle text-text-muted">
                A utilização e proteção dos dados pessoais presentes nesses documentos seguirá os critérios descritos na{" "}
                <Link href="/privacidade" className="text-primary hover:underline font-normal">
                  Política de Privacidade
                </Link>{" "}
                da Exata e a legislação aplicável.
              </div>
            </div>
          </section>

          {/* 8. Propriedade intelectual */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                8
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Propriedade intelectual
              </h2>
            </div>
            <p className="text-text-muted font-light text-sm mb-4">
              Salvo indicação em contrário, os elementos presentes neste site pertencem à Exata ou são utilizados mediante autorização, incluindo:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6 text-sm text-text-main font-light">
              {[
                "Marca",
                "Logotipo",
                "Identidade visual",
                "Textos",
                "Fotografias",
                "Vídeos",
                "Ilustrações",
                "Gráficos",
                "Layouts",
                "Materiais institucionais",
                "Apresentações e demais conteúdos",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-surface p-3 rounded-lg border border-subtle/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3 text-sm text-text-main font-light leading-relaxed">
              <p>
                Esses materiais são protegidos pela legislação aplicável.
              </p>
              <p>
                Não é permitida sua reprodução, distribuição, alteração, publicação ou utilização comercial sem autorização prévia da Exata, ressalvadas as hipóteses permitidas pela legislação.
              </p>
              <p className="text-text-muted">
                O compartilhamento de links públicos para páginas do site é permitido.
              </p>
            </div>
          </section>

          {/* 9. Disponibilidade do site */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                9
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Disponibilidade do site
              </h2>
            </div>
            <p className="text-text-main font-light text-sm mb-4 leading-relaxed">
              A Exata busca manter o site disponível e funcionando adequadamente.
            </p>
            <p className="text-text-muted font-light text-sm mb-4">
              Entretanto, poderão ocorrer interrupções temporárias decorrentes de:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-sm text-text-main font-light">
              {[
                "Manutenção;",
                "Atualização;",
                "Falhas de hospedagem;",
                "Indisponibilidade de fornecedores;",
                "Problemas de conexão;",
                "Eventos fora do controle razoável da Exata.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-surface p-3 rounded-lg border border-subtle/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-xl bg-surface border border-subtle text-sm text-text-muted font-light">
              A Exata não garante disponibilidade ininterrupta do site.
            </div>
          </section>

          {/* 10. Links e serviços de terceiros */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                10
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Links e serviços de terceiros
              </h2>
            </div>
            <div className="space-y-4 text-sm text-text-main font-light leading-relaxed">
              <p>
                O site poderá apresentar links ou integrações com serviços de terceiros, como WhatsApp, mapas, redes sociais ou outras plataformas.
              </p>
              <p>
                Esses ambientes possuem regras, termos e políticas de privacidade próprios.
              </p>
              <div className="p-4 rounded-xl bg-surface border border-subtle text-text-muted">
                A Exata não controla e não se responsabiliza pelo funcionamento, conteúdo ou práticas adotadas por plataformas externas.
              </div>
            </div>
          </section>

          {/* 11. Privacidade e proteção de dados */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                11
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Privacidade e proteção de dados
              </h2>
            </div>
            <div className="space-y-4 text-sm text-text-main font-light leading-relaxed">
              <p>
                O tratamento de dados pessoais realizado por meio deste site observa a legislação brasileira aplicável, incluindo a Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais (LGPD).
              </p>
              <div className="p-4 rounded-xl bg-surface border border-subtle text-text-muted">
                Informações detalhadas sobre coleta, utilização, armazenamento, compartilhamento e direitos dos titulares estão disponíveis na{" "}
                <Link href="/privacidade" className="text-primary hover:underline font-medium">
                  Política de Privacidade
                </Link>{" "}
                deste site.
              </div>
            </div>
          </section>

          {/* 12. Segurança */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                12
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Segurança
              </h2>
            </div>
            <div className="space-y-4 text-sm text-text-main font-light leading-relaxed">
              <p>
                A Exata adota medidas destinadas a proteger seus sistemas e informações.
              </p>
              <p>
                Entretanto, nenhum ambiente digital é completamente isento de riscos.
              </p>
              <div className="p-4 rounded-xl bg-surface border border-subtle text-text-muted">
                O usuário também deve adotar medidas adequadas de segurança em seu próprio dispositivo e evitar o envio de senhas, dados bancários ou outras informações que não tenham sido solicitadas pela Exata.
              </div>
            </div>
          </section>

          {/* 13. Limitação de responsabilidade */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                13
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Limitação de responsabilidade
              </h2>
            </div>
            <div className="space-y-4 text-sm text-text-main font-light leading-relaxed">
              <p>
                A Exata não se responsabiliza por decisões tomadas exclusivamente com base em informações gerais disponibilizadas neste site, sem a realização de análise técnica específica.
              </p>
              <p>
                Também não poderá ser responsabilizada por atrasos, impedimentos ou resultados decorrentes exclusivamente de fatores fora de seu controle, incluindo exigências ou decisões de órgãos públicos, cartórios, autoridades competentes ou terceiros.
              </p>
              <div className="p-4 rounded-xl bg-surface border border-subtle text-text-muted">
                A responsabilidade da Exata relativa aos serviços efetivamente contratados será disciplinada pela respectiva proposta, contrato ou instrumento firmado entre as partes e pela legislação aplicável.
              </div>
            </div>
          </section>

          {/* 14. Alterações nos serviços e conteúdos */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                14
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Alterações nos serviços e conteúdos
              </h2>
            </div>
            <div className="space-y-3 text-sm text-text-main font-light leading-relaxed">
              <p>
                A Exata poderá atualizar, modificar, remover ou acrescentar conteúdos, serviços e funcionalidades ao site sempre que considerar necessário.
              </p>
              <p className="text-text-muted">
                Descrições de serviços apresentadas no site poderão ser atualizadas sem aviso prévio.
              </p>
            </div>
          </section>

          {/* 15. Alterações destes Termos */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                15
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Alterações destes Termos
              </h2>
            </div>
            <div className="space-y-3 text-sm text-text-main font-light leading-relaxed">
              <p>
                Estes Termos de Uso poderão ser atualizados para refletir alterações no site, nos serviços prestados, nos processos internos ou na legislação aplicável.
              </p>
              <p className="text-text-muted">
                A versão mais recente permanecerá disponível nesta página, acompanhada da data de atualização.
              </p>
            </div>
          </section>

          {/* 16. Legislação aplicável */}
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-subtle">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                16
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Legislação aplicável
              </h2>
            </div>
            <div className="space-y-3 text-sm text-text-main font-light leading-relaxed">
              <p>
                Estes Termos são regidos pela legislação da República Federativa do Brasil.
              </p>
              <p className="text-text-muted">
                Eventuais conflitos serão tratados conforme a legislação aplicável, respeitados os direitos assegurados aos usuários e consumidores quando cabíveis.
              </p>
            </div>
          </section>

          {/* 17. Contato */}
          <section className="bg-primary text-white rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 text-white font-bold text-sm">
                17
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Contato
              </h2>
            </div>
            <p className="text-white/85 font-light text-sm mb-6 leading-relaxed">
              Em caso de dúvidas sobre estes Termos de Uso ou sobre os serviços apresentados no site, entre em contato:
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
