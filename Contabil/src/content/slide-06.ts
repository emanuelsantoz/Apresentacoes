import { SolutionLayout, type SolutionData } from "../components/layouts/SolutionLayout";
import type { SlideDef } from "../types/slide";

export const slide06: SlideDef<SolutionData> = {
  id: "slide-06",
  label: "A solução proposta",
  title: "A solução proposta",
  tone: "light",
  steps: 2,
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
  Layout: SolutionLayout,
};
