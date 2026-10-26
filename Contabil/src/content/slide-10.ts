import { ScopeLayout, type ScopeData } from "../components/layouts/ScopeLayout";
import type { SlideDef } from "../types/slide";

export const slide10: SlideDef<ScopeData> = {
  id: "slide-10",
  tone: "light",
  steps: 0,
  Layout: ScopeLayout,
  content: {
    pt: {
      label: "Escopo do primeiro MVP",
      title: "Escopo do primeiro MVP",
      layoutNote:
        "Três contadores grandes em mono (01 empresa · 01 competência · 03 conferências). Abaixo, comparação: “Dentro do MVP” em moldura aberta com checks; “Fora, por enquanto” em bloco neutro com marcadores tracejados.",
      data: {
        title: "Teste pequeno. [Resultado claro.]",
        counters: [
          { value: "01", label: "Empresa" },
          { value: "01", label: "Competência" },
          { value: "03", label: "Conferências" },
        ],
        inLabel: "Dentro do MVP",
        inside: [
          "Conferência do DAS",
          "Pró-labore",
          "Estágio",
          "Relatório claro",
        ],
        outLabel: "Fora, por enquanto",
        outside: [
          "Integração com outros sistemas",
          "Declarações e pagamentos",
          "Decisão sem contador",
          "Balanço e gestão financeira",
        ],
      },
      notes: `O primeiro MVP é pequeno de propósito: uma empresa, uma competência e três conferências.

Dentro do escopo: o DAS conferido contra a receita e o RBT12; o pró-labore, com INSS, IRRF e a contribuição patronal; e o estágio, com bolsa e auxílio-transporte. Tudo isso entregue num relatório que mostra todas as divergências.

E é tão importante dizer o que fica de fora: nada de integração com outros sistemas, nada de enviar declarações ou fazer pagamentos, nenhuma decisão sem a validação contábil. Balanço e gestão financeira também ficam para depois.

Um escopo assim permite saber rápido se a ideia funciona — e, se não funcionar, o custo de descobrir isso é baixo.`,
    },
    en: {
      label: "First MVP scope",
      title: "First MVP scope",
      layoutNote:
        "Three large mono counters (01 company · 01 month · 03 checks). Below, a comparison: “Inside the MVP” in an open frame with checks; “Out, for now” in a neutral block with dashed markers.",
      data: {
        title: "Small test. [Clear result.]",
        counters: [
          { value: "01", label: "Company" },
          { value: "01", label: "Month" },
          { value: "03", label: "Checks" },
        ],
        inLabel: "Inside the MVP",
        inside: [
          "DAS check",
          "Owner's pay",
          "Internship",
          "Clear report",
        ],
        outLabel: "Out, for now",
        outside: [
          "Other system integrations",
          "Returns and payments",
          "Decisions without an accountant",
          "Balance sheet and financial management",
        ],
      },
      notes: `The first MVP is small on purpose: one company, one month and three checks.

In scope: the DAS checked against revenue and RBT12; owner's pay, with social security, income tax withholding and the employer contribution; and the internship, with stipend and transport aid. All of it delivered in a report that shows every discrepancy.

It's just as important to say what stays out: no integration with other systems, no filing returns or making payments, no decision without the accountant's sign-off. The balance sheet and financial management also come later.

A scope like this tells us quickly whether the idea works — and if it doesn't, finding that out is cheap.`,
    },
  },
};
