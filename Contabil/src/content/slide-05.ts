import { ObjectiveLayout, type ObjectiveData } from "../components/layouts/ObjectiveLayout";
import type { SlideDef } from "../types/slide";

export const slide05: SlideDef<ObjectiveData> = {
  id: "slide-05",
  tone: "light",
  steps: 0,
  Layout: ObjectiveLayout,
  content: {
    pt: {
      label: "Objetivo do MVP",
      title: "Objetivo do MVP",
      layoutNote:
        "À esquerda, a mensagem e o cenário de referência em pílulas. À direita, card editorial com a anatomia de uma conferência: informado, esperado, diferença; depois regra, origem e pendências.",
      data: {
        title: "Conferir [uma competência] por vez.",
        lead: "Cada valor aparece com a regra usada, o documento de origem e a diferença encontrada.",
        scenarioLabel: "Cenário de referência",
        scenario: ["Serviços jurídicos · SP", "Simples Nacional · Anexo IV", "Sócia com pró-labore", "Estagiária · 6 h/dia"],
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
    },
    en: {
      label: "MVP goal",
      title: "MVP goal",
      layoutNote:
        "On the left, the message and the reference scenario as pills. On the right, an editorial card with the anatomy of a check: reported, expected, difference; then rule, source and pending items.",
      data: {
        title: "Check [one month]\nat a time.",
        lead: "Every figure comes with the rule applied, the source document and the difference found.",
        scenarioLabel: "Reference scenario",
        scenario: ["Legal services · São Paulo", "Simples Nacional · Annex IV", "Partner on owner's pay", "Intern · 6 h/day"],
        cardLabel: "Anatomy of a check",
        values: [
          { label: "Reported", text: "The figure on the tax slip or document." },
          { label: "Expected", text: "The figure the calculation points to." },
          { label: "Difference", text: "Always shown, even when small." },
        ],
        details: [
          { icon: "calc", label: "Rule", text: "Formula and table for the month." },
          { icon: "pdf", label: "Source", text: "Document and page of origin." },
          { icon: "alert", label: "Pending", text: "What is missing or unreadable." },
        ],
      },
      notes: `The MVP goal is deliberately small: check one reference month at a time.

For each item checked, people see three things side by side: the reported figure, the figure the calculation expects and the difference. And the difference is always shown, even when it's small. There is no automatic tolerance: a person decides whether a difference matters, not the system.

On top of that, every figure comes with the rule applied, the source document and page, and whatever is still pending.

The reference scenario is real: a legal services firm in São Paulo under Simples Nacional — Brazil's simplified tax regime for small businesses — Annex IV, with one partner on owner's pay and a university intern working six hours a day.`,
    },
  },
};
