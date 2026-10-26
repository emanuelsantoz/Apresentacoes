import { TensionLayout, type TensionData } from "../components/layouts/TensionLayout";
import type { SlideDef } from "../types/slide";

export const slide04: SlideDef<TensionData> = {
  id: "slide-04",
  tone: "light",
  steps: 0,
  Layout: TensionLayout,
  content: {
    pt: {
      label: "O problema atual",
      title: "O problema atual",
      layoutNote:
        "Tensão. À esquerda, título e quatro dores com ícones. À direita, documentos da competência caem espalhados e levemente girados; balões escuros com dúvidas aparecem por cima.",
      data: {
        title: "Muitos documentos. [Pouca clareza.]",
        pains: [
          { icon: "folder", text: "Documentos em muitos lugares." },
          { icon: "calc", text: "Sem memória de cálculo." },
          { icon: "warn", text: "Problemas aparecem tarde." },
          { icon: "chat", text: "Mais perguntas a cada dúvida." },
        ],
        documents: [
          { kind: "PDF", label: "Guia DAS", x: 30, y: 20, rotate: -4 },
          { kind: "Planilha", label: "Folha · pró-labore", x: 380, y: 70, rotate: 3 },
          { kind: "XML / PDF", label: "Notas fiscais", x: 60, y: 300, rotate: 2 },
          { kind: "Foto", label: "Comprovante", x: 420, y: 340, rotate: -3 },
          { kind: "PDF", label: "Extrato bancário", x: 20, y: 560, rotate: -2 },
          { kind: "Recibo", label: "Bolsa-estágio", x: 400, y: 600, rotate: 4 },
        ],
        questions: [
          { text: "De onde veio esse valor?", x: 230, y: 230 },
          { text: "Está certo?", x: 560, y: 520 },
          { text: "Já foi pago?", x: 180, y: 480 },
        ],
      },
      notes: `Esse é o problema que encontrei. A empresa recebe guias, cálculos e documentos todo mês. O valor chega pronto — mas a explicação, não.

Os documentos ficam espalhados: um PDF no e-mail, uma foto no celular, uma planilha em outro lugar. Os cálculos são difíceis de acompanhar sem a memória de cálculo. E quando aparece uma divergência, normalmente é perto do vencimento, quando já não há tempo para entender com calma.

O resultado é que cada dúvida vira uma nova rodada de perguntas ao contador. Não por falta de cuidado de ninguém — mas porque não existe um lugar onde a empresa consiga enxergar a origem de cada número.`,
    },
    en: {
      label: "The current problem",
      title: "The current problem",
      layoutNote:
        "Tension. On the left, the title and four pain points with icons. On the right, the month's documents drop in scattered and slightly rotated; dark speech bubbles with doubts pop up on top.",
      data: {
        title: "Many documents. [No clear path.]",
        pains: [
          { icon: "folder", text: "Documents in many places." },
          { icon: "calc", text: "No calculation trail." },
          { icon: "warn", text: "Problems found too late." },
          { icon: "chat", text: "More questions for every doubt." },
        ],
        documents: [
          { kind: "PDF", label: "DAS tax slip", x: 30, y: 20, rotate: -4 },
          { kind: "Spreadsheet", label: "Payroll", x: 380, y: 70, rotate: 3 },
          { kind: "XML / PDF", label: "Invoices", x: 60, y: 300, rotate: 2 },
          { kind: "Photo", label: "Receipt", x: 420, y: 340, rotate: -3 },
          { kind: "PDF", label: "Bank statement", x: 20, y: 560, rotate: -2 },
          { kind: "Receipt", label: "Intern stipend", x: 400, y: 600, rotate: 4 },
        ],
        questions: [
          { text: "Where did this figure come from?", x: 200, y: 230 },
          { text: "Is it right?", x: 560, y: 520 },
          { text: "Has it been paid?", x: 160, y: 480 },
        ],
      },
      notes: `This is the problem I found. Every month the company receives tax slips, calculations and documents. The figure arrives ready — but the explanation doesn't.

The documents are scattered: a PDF in an email, a photo on a phone, a spreadsheet somewhere else. The calculations are hard to follow without the calculation trail. And when a discrepancy shows up, it's usually close to the due date, when there's no time left to understand it calmly.

As a result, every doubt turns into another round of questions to the accountant. Not because anyone is careless — but because there is no single place where the company can see where each number comes from.`,
    },
  },
};
