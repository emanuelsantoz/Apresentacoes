import { ObjectiveLayout, type ObjectiveData } from "../components/layouts/ObjectiveLayout";
import type { SlideDef } from "../types/slide";

export const slide05: SlideDef<ObjectiveData> = {
  id: "slide-05",
  label: "Objetivo do MVP",
  title: "Objetivo do MVP",
  tone: "light",
  steps: 0,
  layoutNote:
    "À esquerda, a mensagem e o cenário de referência em pílulas. À direita, card editorial com a anatomia de uma conferência: informado, esperado, diferença; depois regra, origem e pendências.",
  data: {
    title: "Conferir [uma competência] por vez.",
    lead: "Cada valor aparece com a regra usada, o documento de origem e a diferença encontrada.",
    scenarioLabel: "Cenário de referência",
    scenario: [
      "Serviços jurídicos · SP",
      "Simples Nacional · Anexo IV",
      "Sócia com pró-labore",
      "Estagiária · 6 h/dia",
    ],
    cardLabel: "Anatomia de uma conferência",
    values: [
      { label: "Informado", text: "O valor que está na guia ou no documento." },
      { label: "Esperado", text: "O valor que o cálculo indica." },
      { label: "Diferença", text: "Sempre exibida, mesmo quando pequena." },
    ],
    details: [
      { icon: "calc", label: "Regra", text: "Fórmula e tabela da competência." },
      { icon: "pdf", label: "Origem", text: "Documento e página de origem." },
      { icon: "alert", label: "Pendência", text: "O que falta ou não pôde ser lido." },
    ],
  },
  notes: `O objetivo do MVP é deliberadamente pequeno: conferir uma competência por vez — um mês de cada vez.

Para cada item conferido, a pessoa vê três coisas lado a lado: o valor informado, o valor esperado pelo cálculo e a diferença. E a diferença aparece sempre, mesmo quando é pequena. Não existe tolerância automática: quem decide se uma diferença importa é uma pessoa, não o sistema.

Além disso, cada valor vem com a regra usada, o documento e a página de origem, e o que ficou pendente.

O cenário de referência é real: um escritório de serviços jurídicos em São Paulo, no Simples Nacional, Anexo IV, com uma sócia em pró-labore e uma estagiária universitária de seis horas por dia.`,
  Layout: ObjectiveLayout,
};
