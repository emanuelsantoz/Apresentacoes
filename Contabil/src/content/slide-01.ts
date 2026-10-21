import { CoverLayout, type CoverData } from "../components/layouts/CoverLayout";
import type { SlideDef } from "../types/slide";

export const slide01: SlideDef<CoverData> = {
  id: "slide-01",
  label: "Capa",
  title: "Conferência contábil mais clara, rastreável e fácil de acompanhar",
  tone: "dark",
  steps: 0,
  layoutNote:
    "Capa escura (Noite). Título editorial à esquerda com um destaque em Pulso; à direita, moldura aberta com as cinco etapas do fluxo montando-se em sequência.",
  data: {
    stamp: "ES/ · Protótipo em validação",
    eyebrow: "MVP · Conferência contábil",
    title: "Conferência contábil mais [clara, rastreável] e fácil de acompanhar.",
    lead: "Um assistente que confere guias, cálculos e documentos, uma competência por vez, e mostra de onde vem cada valor.",
    flowLabel: "O fluxo, em cinco etapas",
    flow: ["Envio", "Leitura", "Confirmação", "Cálculo", "Relatório"],
    footnote: "Apoio à conferência · Validação final por profissional contábil habilitado",
  },
  notes: `Boa tarde. Hoje eu quero mostrar um protótipo simples, com um objetivo bem claro: tornar a conferência contábil do mês mais fácil de acompanhar.

A ideia não é substituir o contador. É dar à empresa uma forma de entender os valores que recebe — de onde cada número vem, qual regra foi usada e se existe alguma diferença.

À direita está o fluxo inteiro, em cinco etapas: envio, leitura, confirmação, cálculo e relatório. Vou voltar a ele mais adiante, com o protótipo. E no fim quero sair daqui com uma decisão sobre um piloto pequeno.`,
  Layout: CoverLayout,
};
