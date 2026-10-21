import { TensionLayout, type TensionData } from "../components/layouts/TensionLayout";
import type { SlideDef } from "../types/slide";

export const slide04: SlideDef<TensionData> = {
  id: "slide-04",
  label: "O problema atual",
  title: "O problema atual",
  tone: "light",
  steps: 0,
  layoutNote:
    "Tensão. À esquerda, título e quatro dores com ícones. À direita, documentos da competência caem espalhados e levemente girados; balões escuros com dúvidas aparecem por cima.",
  data: {
    title: "O valor chega pronto. [A explicação, não.]",
    pains: [
      { icon: "folder", text: "Documentos espalhados entre e-mail, PDF, foto e planilha." },
      { icon: "calc", text: "Cálculos difíceis de acompanhar sem a memória de cálculo." },
      { icon: "warn", text: "Divergências percebidas tarde, perto do vencimento." },
      { icon: "chat", text: "Cada dúvida exige uma nova rodada de perguntas." },
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
  Layout: TensionLayout,
};
