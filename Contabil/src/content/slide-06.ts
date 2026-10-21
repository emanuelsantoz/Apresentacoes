import { SolutionLayout, type SolutionData } from "../components/layouts/SolutionLayout";
import type { SlideDef } from "../types/slide";

export const slide06: SlideDef<SolutionData> = {
  id: "slide-06",
  tone: "light",
  steps: 2,
  Layout: SolutionLayout,
  content: {
    pt: {
      label: "A solução proposta",
      title: "A solução proposta",
      layoutNote:
        "Diagrama em três cliques: (0) quatro formas de entrada; (1) as linhas convergem para o assistente, em bloco escuro; (2) a saída — o relatório — e a faixa com o tratamento de falhas e a validação contábil.",
      data: {
        title: "Você envia o que tem.\nO assistente [pergunta o que falta].",
        inputsLabel: "Entrada",
        inputs: [
          { icon: "pdf", label: "PDF" },
          { icon: "sheet", label: "Planilha Excel" },
          { icon: "camera", label: "Foto" },
          { icon: "keyboard", label: "Dados digitados" },
        ],
        coreLabel: "Assistente",
        coreTitle: "Lê, pergunta e recalcula",
        coreActions: ["Lê os documentos", "Identifica o que falta", "Recalcula os valores"],
        outputLabel: "Saída",
        outputTitle: "Relatório claro",
        outputs: ["Explicação simples", "Memória de cálculo", "Todas as divergências"],
        fallback: "Leitura falhou? → pede nova foto, arquivo ou digitação",
        validation: "Validação final: profissional contábil",
      },
      notes: `A solução parte de uma regra: a empresa envia o que já tem. PDF, planilha, uma foto tirada no celular ou os dados digitados. Ninguém precisa reorganizar a rotina antes de começar.

(clique) O assistente lê esses documentos, identifica o que está faltando e pergunta — em vez de supor. Depois, recalcula os valores do mês com base nas regras da competência.

(clique) A saída é um relatório claro: uma explicação em linguagem simples, a memória de cálculo e a lista completa das divergências.

Dois cuidados importantes. Se a leitura falhar — uma foto borrada, um PDF ilegível —, o sistema pede outra foto, outro arquivo ou a digitação, e marca a conferência como pendente. E a validação final continua sendo de um profissional contábil habilitado.`,
    },
    en: {
      label: "Proposed solution",
      title: "Proposed solution",
      layoutNote:
        "Diagram in three clicks: (0) four input types; (1) the lines converge into the assistant, a dark block; (2) the output — the report — and the strip about failed readings and accountant sign-off.",
      data: {
        title: "You send what you have.\nThe assistant [asks for what's missing].",
        inputsLabel: "Input",
        inputs: [
          { icon: "pdf", label: "PDF" },
          { icon: "sheet", label: "Excel sheet" },
          { icon: "camera", label: "Photo" },
          { icon: "keyboard", label: "Typed data" },
        ],
        coreLabel: "Assistant",
        coreTitle: "Reads, asks, recalculates",
        coreActions: ["Reads the documents", "Spots what's missing", "Recalculates the figures"],
        outputLabel: "Output",
        outputTitle: "Clear report",
        outputs: ["Plain explanation", "Calculation trail", "Every discrepancy"],
        fallback: "Reading failed? → asks for a new photo, file or typed data",
        validation: "Final sign-off: licensed accountant",
      },
      notes: `The solution starts from one rule: the company sends what it already has. A PDF, a spreadsheet, a photo taken with a phone or typed data. Nobody has to reorganize their routine before starting.

(click) The assistant reads those documents, spots what's missing and asks — instead of guessing. Then it recalculates the month's figures based on the rules in force for that month.

(click) The output is a clear report: a plain-language explanation, the calculation trail and the full list of discrepancies.

Two important safeguards. If a reading fails — a blurry photo, an unreadable PDF — the system asks for another photo, another file or typed data, and marks the check as pending. And the final sign-off still belongs to a licensed accountant.`,
    },
  },
};
