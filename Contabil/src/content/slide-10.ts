import { ScopeLayout, type ScopeData } from "../components/layouts/ScopeLayout";
import type { SlideDef } from "../types/slide";

export const slide10: SlideDef<ScopeData> = {
  id: "slide-10",
  label: "Escopo do primeiro MVP",
  title: "Escopo do primeiro MVP",
  tone: "light",
  steps: 0,
  layoutNote:
    "Três contadores grandes em mono (01 empresa · 01 competência · 03 conferências). Abaixo, comparação: “Dentro do MVP” em moldura aberta com checks; “Fora, por enquanto” em bloco neutro com marcadores tracejados.",
  data: {
    title: "Pequeno o bastante para [validar de verdade].",
    counters: [
      { value: "01", label: "Empresa" },
      { value: "01", label: "Competência" },
      { value: "03", label: "Conferências" },
    ],
    inLabel: "Dentro do MVP",
    inside: [
      "DAS × receita e RBT12",
      "Pró-labore: INSS, IRRF e CPP",
      "Estágio: bolsa e auxílio-transporte",
      "Relatório com todas as divergências",
    ],
    outLabel: "Fora, por enquanto",
    outside: [
      "Integração com outros sistemas",
      "Envio de declarações ou pagamentos",
      "Decisão sem validação contábil",
      "Balanço e gestão financeira",
    ],
  },
  notes: `O primeiro MVP é pequeno de propósito: uma empresa, uma competência e três conferências.

Dentro do escopo: o DAS conferido contra a receita e o RBT12; o pró-labore, com INSS, IRRF e a contribuição patronal; e o estágio, com bolsa e auxílio-transporte. Tudo isso entregue num relatório que mostra todas as divergências.

E é tão importante dizer o que fica de fora: nada de integração com outros sistemas, nada de enviar declarações ou fazer pagamentos, nenhuma decisão sem a validação contábil. Balanço e gestão financeira também ficam para depois.

Um escopo assim permite saber rápido se a ideia funciona — e, se não funcionar, o custo de descobrir isso é baixo.`,
  Layout: ScopeLayout,
};
