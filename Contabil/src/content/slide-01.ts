import { CoverLayout, type CoverData } from "../components/layouts/CoverLayout";
import type { SlideDef } from "../types/slide";

export const slide01: SlideDef<CoverData> = {
  id: "slide-01",
  tone: "dark",
  steps: 0,
  Layout: CoverLayout,
  content: {
    pt: {
      label: "Capa",
      title: "Conferência contábil mais clara, rastreável e fácil de acompanhar",
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
    },
    en: {
      label: "Cover",
      title: "Accounting review that is clearer, traceable and easy to follow",
      layoutNote:
        "Dark cover (Night). Editorial title on the left with one Pulse highlight; on the right, an open frame with the five flow steps assembling in sequence.",
      data: {
        stamp: "ES/ · Prototype under validation",
        eyebrow: "MVP · Accounting review",
        title: "Accounting review that is [clearer, traceable] and easy to follow.",
        lead: "An assistant that checks tax slips, calculations and documents, one month at a time, and shows where every figure comes from.",
        flowLabel: "The flow, in five steps",
        flow: ["Upload", "Reading", "Confirmation", "Calculation", "Report"],
        footnote: "Supports the review · Final sign-off by a licensed accountant",
      },
      notes: `Good afternoon. Today I want to show you a simple prototype with a very clear goal: making the monthly accounting review easier to follow.

The idea is not to replace the accountant. It is to give the company a way to understand the figures it receives — where each number comes from, which rule was applied and whether there is any difference.

On the right you can see the whole flow in five steps: upload, reading, confirmation, calculation and report. I'll come back to it later with the prototype. And by the end, I'd like us to leave with a decision about a small pilot.`,
    },
  },
};
