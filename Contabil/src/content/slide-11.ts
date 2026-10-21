import { PilotLayout, type PilotData } from "../components/layouts/PilotLayout";
import type { SlideDef } from "../types/slide";

export const slide11: SlideDef<PilotData> = {
  id: "slide-11",
  label: "Proposta de piloto",
  title: "Vamos fechar um MVP?",
  tone: "dark",
  steps: 1,
  layoutNote:
    "Slide escuro de decisão. Passo 0: plano do piloto em quatro linhas numeradas. Passo 1: card com critérios de sucesso à direita e faixa azul de largura total com a decisão de hoje.",
  data: {
    title: "Vamos fechar [um piloto]?",
    lead: "Uma competência, documentos reais e uma revisão conjunta. Sem compromisso além disso.",
    planLabel: "Proposta",
    plan: [
      "Escolher a competência e reunir os documentos",
      "Rodar a conferência no protótipo",
      "Revisar o relatório com o profissional contábil",
      "Decidir juntos: ajustar, ampliar ou encerrar",
    ],
    criteriaLabel: "Critérios de sucesso",
    criteria: [
      "Todo valor com origem e fórmula visíveis",
      "Toda divergência aparece no relatório",
      "O contador valida sem refazer o cálculo",
      "A empresa entende o resultado sem ajuda técnica",
    ],
    decisionLabel: "Decisão de hoje",
    decision: "Qual competência, quais documentos e a data da revisão.",
  },
  notes: `Então, a proposta: vamos fechar um piloto? Ele é pequeno e tem começo, meio e fim.

Primeiro, escolhemos uma competência e reunimos os documentos. Depois, eu rodo a conferência no protótipo. Em seguida, revisamos o relatório junto com o profissional contábil. E, no fim, decidimos juntos: ajustar, ampliar ou encerrar.

(clique) Para saber se deu certo, proponho quatro critérios: todo valor com origem e fórmula visíveis; toda divergência aparecendo no relatório; o contador conseguindo validar sem refazer o cálculo; e a empresa entendendo o resultado sem precisar de ajuda técnica.

O que eu preciso sair daqui sabendo é simples: qual competência, quais documentos e a data da revisão.`,
  Layout: PilotLayout,
};
