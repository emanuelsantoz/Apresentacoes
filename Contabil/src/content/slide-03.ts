import { ProcessLayout, type ProcessData } from "../components/layouts/ProcessLayout";
import type { SlideDef } from "../types/slide";

export const slide03: SlideDef<ProcessData> = {
  id: "slide-03",
  tone: "light",
  steps: 0,
  Layout: ProcessLayout,
  content: {
    pt: {
      label: "PEX",
      title: "PEX — Projeto de Extensão",
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
    },
    en: {
      label: "PEX",
      title: "PEX — Extension Project",
      layoutNote:
        "Horizontal process with three nodes (diagnosis, data collection, proposal). The line draws from left to right; the third node is filled and tagged “We are here”.",
      data: {
        title: "An extension project that starts from a [real problem].",
        lead: "PEX — the university Extension Project in Systems Analysis and Development: bringing useful technology into the routine of small businesses.",
        nodes: [
          { code: "01", title: "Diagnosis", text: "Understand the company's routine and its doubts." },
          { code: "02", title: "Data collection", text: "Conversation, questionnaire and real documents." },
          { code: "03", title: "Proposal", text: "A prototype of the flow and a plan for a pilot." },
        ],
        current: 2,
        currentLabel: "We are here",
        footnote: "Academic origin · The problem and the decision belong to the company",
      },
      notes: `PEX is the course's Extension Project. The idea is simple: leave the classroom, identify a real problem in a small business and propose a feasible systems solution.

It has three stages. First, diagnosis: understanding the routine and where the doubts are. Then, data collection: conversation, questionnaire and documents. Finally, the proposal: a prototype and an action plan.

We are at the third stage. Everything I'm about to show is the proposal — and it only makes sense if it makes sense for the company.`,
    },
  },
};
