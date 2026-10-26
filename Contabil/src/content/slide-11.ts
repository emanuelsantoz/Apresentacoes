import { PilotLayout, type PilotData } from "../components/layouts/PilotLayout";
import type { SlideDef } from "../types/slide";

export const slide11: SlideDef<PilotData> = {
  id: "slide-11",
  tone: "dark",
  steps: 1,
  Layout: PilotLayout,
  content: {
    pt: {
      label: "Proposta de piloto",
      title: "Vamos fechar um MVP?",
      layoutNote:
        "Slide escuro de decisão. Passo 0: plano do piloto em quatro linhas numeradas. Passo 1: card com critérios de sucesso à direita e faixa azul de largura total com a decisão de hoje.",
      data: {
        title: "Piloto pequeno. [Decisão clara.]",
        lead: "Um mês. Documentos reais. Uma revisão conjunta.",
        planLabel: "Proposta",
        plan: [
          "Escolher o mês e os documentos",
          "Rodar o protótipo",
          "Revisar o relatório juntos",
          "Decidir o próximo passo",
        ],
        criteriaLabel: "Critérios de sucesso",
        criteria: [
          "Origem e fórmula visíveis",
          "Toda diferença aparece",
          "Contador consegue validar",
          "Empresa entende o resultado",
        ],
        decisionLabel: "Decisão de hoje",
        decision: "Qual competência, quais documentos e a data da revisão.",
      },
      notes: `Então, a proposta: vamos fechar um piloto? Ele é pequeno e tem começo, meio e fim.

Primeiro, escolhemos uma competência e reunimos os documentos. Depois, eu rodo a conferência no protótipo. Em seguida, revisamos o relatório junto com o profissional contábil. E, no fim, decidimos juntos: ajustar, ampliar ou encerrar.

(clique) Para saber se deu certo, proponho quatro critérios: todo valor com origem e fórmula visíveis; toda divergência aparecendo no relatório; o contador conseguindo validar sem refazer o cálculo; e a empresa entendendo o resultado sem precisar de ajuda técnica.

O que eu preciso sair daqui sabendo é simples: qual competência, quais documentos e a data da revisão.`,
    },
    en: {
      label: "Pilot proposal",
      title: "Shall we close an MVP?",
      layoutNote:
        "Dark decision slide. Step 0: the pilot plan in four numbered lines. Step 1: a success-criteria card on the right and a full-width blue strip with today's decision.",
      data: {
        title: "Small pilot. [Clear decision.]",
        lead: "One month. Real documents. One joint review.",
        planLabel: "Proposal",
        plan: [
          "Choose the month and documents",
          "Run the prototype",
          "Review the report together",
          "Decide the next step",
        ],
        criteriaLabel: "Success criteria",
        criteria: [
          "Source and formula are visible",
          "Every difference is shown",
          "The accountant can validate it",
          "The company understands the result",
        ],
        decisionLabel: "Today's decision",
        decision: "Which month, which documents and the review date.",
      },
      notes: `So, the proposal: shall we run a pilot? It is small and has a beginning, a middle and an end.

First, we pick a month and gather the documents. Then I run the review in the prototype. Next, we go over the report together with the accountant. And finally, we decide together: adjust, expand or stop.

(click) To know whether it worked, I propose four criteria: every figure shows its source and formula; every discrepancy appears in the report; the accountant can sign off without redoing the calculation; and the company understands the result without technical help.

What I need to leave here knowing is simple: which month, which documents and the review date.`,
    },
  },
};
