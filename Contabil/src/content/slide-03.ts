import { ProcessLayout, type ProcessData } from "../components/layouts/ProcessLayout";
import type { SlideDef } from "../types/slide";

export const slide03: SlideDef<ProcessData> = {
  id: "slide-03",
  label: "PEX",
  title: "PEX — Projeto de Extensão",
  tone: "light",
  steps: 0,
  layoutNote:
    "Processo horizontal em três nós (diagnóstico, coleta, proposta). A linha se desenha da esquerda para a direita; o terceiro nó fica preenchido com a etiqueta “Estamos aqui”.",
  data: {
    title: "Um projeto de extensão que parte de um [problema real].",
    lead: "PEX — Projeto de Extensão em Análise e Desenvolvimento de Sistemas: levar tecnologia útil para a rotina de pequenas empresas.",
    nodes: [
      { code: "01", title: "Diagnóstico", text: "Entender a rotina e as dúvidas da empresa." },
      { code: "02", title: "Coleta", text: "Conversa, questionário e documentos reais." },
      { code: "03", title: "Proposta", text: "Protótipo do fluxo e plano para um piloto." },
    ],
    current: 2,
    currentLabel: "Estamos aqui",
    footnote: "Origem acadêmica · Problema e decisão pertencem à empresa",
  },
  notes: `PEX é o Projeto de Extensão do curso. A proposta é simples: sair da sala de aula, identificar um problema real numa pequena empresa e propor uma solução de sistemas viável.

O roteiro tem três momentos. Primeiro, o diagnóstico: entender a rotina e onde estão as dúvidas. Depois, a coleta: conversa, questionário e documentos. E, por fim, a proposta: um protótipo e um plano de ação.

Nós estamos nessa terceira etapa. Tudo o que vou mostrar a seguir é a proposta — e ela só faz sentido se fizer sentido para a empresa.`,
  Layout: ProcessLayout,
};
