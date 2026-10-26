import { ContinuityLayout, type ContinuityData } from "../components/layouts/ContinuityLayout";
import type { SlideDef } from "../types/slide";

export const slide12: SlideDef<ContinuityData> = {
  id: "slide-12",
  tone: "light",
  steps: 0,
  Layout: ContinuityLayout,
  content: {
    pt: {
      label: "Continuidade",
      title: "Continuidade",
      layoutNote:
        "Linha do tempo horizontal tracejada. O primeiro nó (Agora · MVP de conferência) é sólido; os demais (balanço, acompanhamento financeiro, gestão empresarial) são tracejados, indicando possibilidade. Fecha com a frase de continuidade e o endosso.",
      data: {
        title: "Começar pela conferência. [Crescer aos poucos.]",
        lead: "Só avançamos quando o piloto provar valor.",
        stages: [
          { when: "Agora", title: "Conferência", text: "Um mês. Um relatório claro.", now: true },
          { when: "Possível", title: "Balanço", text: "Visão mais ampla das conferências." },
          { when: "Possível", title: "Financeiro", text: "Entradas, saídas e prazos." },
          { when: "Possível", title: "Gestão", text: "Informação para decidir." },
        ],
        closing: "Primeiro, provar valor.",
        signature: "Emanuel Santos · ES/",
      },
      notes: `Para fechar: este MVP é sobre conferência. Ele não é um sistema de gestão — pelo menos não agora.

Se o piloto provar valor, existem caminhos naturais: um balanço consolidado a partir das conferências, o acompanhamento financeiro de entradas, saídas e prazos e, mais adiante, indicadores para a gestão da empresa.

Mas cada etapa só começa se a anterior funcionar. A primeira decisão é a de hoje: o piloto.

Obrigado. Fico à disposição para as perguntas — e para combinarmos a competência e a data da revisão.`,
    },
    en: {
      label: "What comes next",
      title: "What comes next",
      layoutNote:
        "Dashed horizontal timeline. The first node (Now · review MVP) is solid; the others (balance sheet, financial tracking, business management) are dashed, signalling possibility. Closes with the continuity line and the endorsement.",
      data: {
        title: "Start with the review. [Grow step by step.]",
        lead: "We only move forward after the pilot proves value.",
        stages: [
          { when: "Now", title: "Review", text: "One month. One clear report.", now: true },
          { when: "Possible", title: "Balance sheet", text: "A wider view from the reviews." },
          { when: "Possible", title: "Finance", text: "Money, deadlines and follow-up." },
          { when: "Possible", title: "Management", text: "Information for decisions." },
        ],
        closing: "First, prove value.",
        signature: "Emanuel Santos · ES/",
      },
      notes: `To wrap up: this MVP is about reviewing. It is not a management system — at least not yet.

If the pilot proves its value, there are natural next steps: a consolidated balance sheet built from the reviews, financial tracking of inflows, outflows and deadlines and, further ahead, indicators for running the company.

But each step only starts if the previous one works. The first decision is today's: the pilot.

Thank you. I'm happy to take questions — and to agree on the month and the review date.`,
    },
  },
};
