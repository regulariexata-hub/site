"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";

export default function DiagnosticoPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const containerRef = useScrollReveal();

  const [formData, setFormData] = useState({
    tipoImovel: "",
    areaAproximada: "",
    cidade: "",
    estado: "",
    contexto: "",
    nome: "",
    telefone: "",
    email: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    const tipoFormatado = formData.tipoImovel === "rural" 
      ? "Rural" 
      : formData.tipoImovel === "urbano" 
      ? "Urbano" 
      : formData.tipoImovel === "nao-sei" 
      ? "Não sei informar" 
      : formData.tipoImovel;

    const mensagem = `Olá! Gostaria de solicitar uma análise de diagnóstico pela Exata Regularização:

📌 *DADOS DO IMÓVEL*
• Tipo: ${tipoFormatado || "Não informado"}
• Área Aproximada: ${formData.areaAproximada || "Não informada"}
• Localização: ${formData.cidade} - ${formData.estado}

📝 *SITUAÇÃO / DEMANDA*
${formData.contexto}

👤 *DADOS DO SOLICITANTE*
• Nome: ${formData.nome}
• WhatsApp/Tel: ${formData.telefone}
• E-mail: ${formData.email}`;

    const url = `https://wa.me/5545991344907?text=${encodeURIComponent(mensagem)}`;
    setWhatsappUrl(url);

    setTimeout(() => {
      setFormState("success");
      window.open(url, "_blank");
    }, 600);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-32 min-h-screen bg-surface">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <h1 className="reveal text-[3rem] md:text-[4rem] font-bold text-primary leading-tight tracking-tight mb-6">
            Análise de Situação.
          </h1>
          <p className="reveal stagger-1 text-xl text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
            O primeiro passo para resolver um problema patrimonial é entender exatamente onde ele está.
          </p>
        </div>

        <div className="reveal stagger-2 bg-white p-8 md:p-14 border border-subtle rounded-3xl shadow-sm">
          {formState === "success" ? (
            <div className="text-center py-16 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#139446] mx-auto flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-primary tracking-tight">Demanda Registrada com Sucesso!</h2>
                <p className="text-base text-text-muted font-light max-w-md mx-auto leading-relaxed">
                  Os dados do seu imóvel foram estruturados. Se a conversa no WhatsApp não tiver aberto automaticamente, clique no botão abaixo:
                </p>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#139446] hover:bg-[#0f7a39] text-white px-8 py-4 rounded-full font-medium text-base transition-all shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" /> Abrir no WhatsApp (45) 99134-4907
                </a>
                <button
                  onClick={() => {
                    setFormState("idle");
                    setFormData({
                      tipoImovel: "",
                      areaAproximada: "",
                      cidade: "",
                      estado: "",
                      contexto: "",
                      nome: "",
                      telefone: "",
                      email: ""
                    });
                  }}
                  className="text-sm text-text-muted hover:text-primary transition-colors py-2"
                >
                  Enviar outra solicitação
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-primary border-b border-subtle pb-4 tracking-tight">O Imóvel</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-main">Tipo de Imóvel *</label>
                    <select 
                      required 
                      name="tipoImovel"
                      value={formData.tipoImovel}
                      onChange={handleChange}
                      className="w-full border-b border-subtle py-3 text-sm focus:border-primary outline-none bg-transparent transition-colors"
                    >
                      <option value="">Selecione...</option>
                      <option value="rural">Rural</option>
                      <option value="urbano">Urbano</option>
                      <option value="nao-sei">Não sei informar</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-main">Área Aproximada</label>
                    <input 
                      type="text" 
                      name="areaAproximada"
                      value={formData.areaAproximada}
                      onChange={handleChange}
                      placeholder="Ex: 50 hectares, 300m²..." 
                      className="w-full border-b border-subtle py-3 text-sm focus:border-primary outline-none bg-transparent transition-colors placeholder:text-text-muted/40" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-main">Cidade *</label>
                    <input 
                      required 
                      type="text" 
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleChange}
                      className="w-full border-b border-subtle py-3 text-sm focus:border-primary outline-none bg-transparent transition-colors" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-main">Estado *</label>
                    <select 
                      required 
                      name="estado"
                      value={formData.estado}
                      onChange={handleChange}
                      className="w-full border-b border-subtle py-3 text-sm focus:border-primary outline-none bg-transparent transition-colors"
                    >
                      <option value="">Selecione...</option>
                      <option value="PR">Paraná</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="SP">São Paulo</option>
                      <option value="OUTRO">Outro Estado</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-primary border-b border-subtle pb-4 tracking-tight">O Contexto</h3>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-main">O que você pretende fazer? *</label>
                  <textarea 
                    required 
                    name="contexto"
                    value={formData.contexto}
                    onChange={handleChange}
                    rows={4} 
                    placeholder="Descreva brevemente a situação atual do imóvel ou sua demanda..." 
                    className="w-full border border-subtle rounded-xl p-4 text-sm focus:border-primary outline-none resize-none bg-transparent transition-colors placeholder:text-text-muted/40"
                  ></textarea>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-primary border-b border-subtle pb-4 tracking-tight">Seus Dados</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-text-main">Nome Completo *</label>
                    <input 
                      required 
                      type="text" 
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full border-b border-subtle py-3 text-sm focus:border-primary outline-none bg-transparent transition-colors" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-main">Telefone / WhatsApp *</label>
                    <input 
                      required 
                      type="tel" 
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(45) 99999-9999"
                      className="w-full border-b border-subtle py-3 text-sm focus:border-primary outline-none bg-transparent transition-colors" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-main">E-mail *</label>
                    <input 
                      required 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b border-subtle py-3 text-sm focus:border-primary outline-none bg-transparent transition-colors" 
                    />
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button 
                  disabled={formState === "submitting"}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-medium text-lg hover:bg-secondary transition-colors disabled:opacity-50 flex items-center justify-center gap-3 shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  {formState === "submitting" ? "Estruturando demanda..." : "Enviar contexto para análise via WhatsApp"}
                </button>
                <p className="text-xs text-center mt-6 text-text-muted font-light">
                  Seus dados serão enviados de forma segura para o atendimento técnico da Exata: (45) 99134-4907.
                </p>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}

