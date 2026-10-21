import { ContinuityLayout, type ContinuityData } from "../components/layouts/ContinuityLayout";
import type { SlideDef } from "../types/slide";

export const slide12: SlideDef<ContinuityData> = {
  id: "slide-12",
  label: "Continuidade",
  title: "Continuidade",
  tone: "light",
  steps: 0,
  layoutNote:
    "Linha do tempo horizontal tracejada. O primeiro nó (Agora · MVP de conferência) é sólido; os demais (balanço, acompanhamento financeiro, gestão empresarial) são tracejados, indicando possibilidade. Fecha com a frase de continuidade e o endosso.",
  data: {
    title: "Primeiro conferir. [Depois, acompanhar.]",
    lead: "Cada evolução só começa se a etapa anterior provar valor no piloto.",
    stages: [
      { when: "Agora", title: "Conferência", text: "Uma competência, com relatório de divergências.", now: true },
      { when: "Possível", title: "Balanço", text: "Visão consolidada a partir das conferências." },
      { when: "Possível", title: "Financeiro", text: "Acompanhamento de entradas, saídas e prazos." },
      { when: "Possível", title: "Gestão", text: "Indicadores para decisões da empresa." },
    ],
    closing: "Ideias ganham forma e continuam.",
    signature: "Emanuel Santos · ES/",
  },
  notes: `Para fechar: este MVP é sobre conferência. Ele não é um sistema de gestão — pelo menos não agora.

Se o piloto provar valor, existem caminhos naturais: um balanço consolidado a partir das conferências, o acompanhamento financeiro de entradas, saídas e prazos e, mais adiante, indicadores para a gestão da empresa.

Mas cada etapa só começa se a anterior funcionar. A primeira decisão é a de hoje: o piloto.

Obrigado. Fico à disposição para as perguntas — e para combinarmos a competência e a data da revisão.`,
  Layout: ContinuityLayout,
};
