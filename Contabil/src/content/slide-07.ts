import { PrototypeLayout, type PrototypeData } from "../components/layouts/PrototypeLayout";
import type { SlideDef } from "../types/slide";

/**
 * Valores do "Caso simulado para teste do MVP" (seção 8 do questionário).
 * São premissas de teste — não representam a apuração oficial de nenhuma empresa.
 * Tabela usada no cálculo: Simples Nacional, Anexo IV, 2ª faixa
 * (RBT12 de R$ 180.000,01 a R$ 360.000,00 · alíquota 9% · parcela a deduzir R$ 8.100,00).
 */
export const slide07: SlideDef<PrototypeData> = {
  id: "slide-07",
  label: "Fluxo do protótipo",
  title: "Fluxo do protótipo",
  tone: "light",
  steps: 4,
  layoutNote:
    "Demonstração. Website mockado (esquerda) e celular mockado (direita) mostram a mesma etapa ao mesmo tempo. Cada clique avança: envio → leitura → confirmação → cálculo → relatório. Selo “caso simulado” no canto.",
  data: {
    title: "O mesmo fluxo, no [website e no celular].",
    caseLabel: "Caso simulado · premissas do questionário",
    url: "conferencia.prototipo/competencia",
    flow: ["Envio", "Leitura", "Confirmação", "Cálculo", "Relatório"],
    screens: {
      competence: "Competência de teste",
      files: [
        { name: "guia-das.pdf", kind: "PDF", icon: "pdf" },
        { name: "folha-pro-labore.xlsx", kind: "Planilha", icon: "sheet" },
        { name: "recibo-estagio.jpg", kind: "Foto", icon: "camera" },
      ],
      readings: [
        { label: "Receita bruta do mês", value: "R$ 30.000,00", source: "informado", ok: true },
        { label: "RBT12", value: "R$ 360.000,00", source: "informado", ok: true },
        { label: "DAS informado na guia", value: "R$ 2.025,00", source: "guia-das.pdf · p. 1", ok: true },
        { label: "Pró-labore bruto", value: "R$ 7.000,00", source: "folha-pro-labore.xlsx", ok: true },
        { label: "Comprovante do DAS", value: "—", source: "não encontrado", ok: false },
      ],
      questions: [
        { text: "A guia DAS desta competência já foi paga?", options: ["Enviar comprovante", "Ainda não", "Não sei"] },
        { text: "O RBT12 de R$ 360.000,00 é o informado pelo contador?", options: ["Confirmar", "Corrigir"] },
      ],
      pendingNote: "Sem o comprovante, o pagamento fica pendente — o restante segue.",
      calc: {
        title: "Memória de cálculo · DAS",
        lines: [
          { label: "Faixa", expr: "RBT12 R$ 360.000,00 → Anexo IV, 2ª faixa" },
          { label: "Tabela", expr: "alíquota 9% · dedução R$ 8.100,00" },
          { label: "Alíquota efetiva", expr: "(360.000 × 9% − 8.100) ÷ 360.000 = 6,75%" },
          { label: "DAS esperado", expr: "30.000,00 × 6,75% = R$ 2.025,00" },
        ],
        note: "Tabela versionada pela competência · fonte exibida no relatório",
      },
      report: {
        summary: [
          { label: "2 conferidos", tone: "ok" },
          { label: "1 pendente", tone: "warn" },
          { label: "Diferença exibida sempre", tone: "info" },
        ],
        rows: [
          { item: "DAS", informed: "2.025,00", expected: "2.025,00", diff: "0,00", ok: true, status: "Conferido" },
          { item: "CPP s/ pró-labore", informed: "1.400,00", expected: "1.400,00", diff: "0,00", ok: true, status: "Conferido" },
          { item: "Pagamento do DAS", informed: "—", expected: "comprovante", diff: "—", ok: false, status: "Pendente" },
        ],
        validation: "Relatório pronto para a validação do profissional contábil.",
      },
      chat: {
        hello: "Olá! Envie os documentos do mês: PDF, planilha ou foto.",
        read: "Li 3 documentos e encontrei 4 valores para conferir.",
        missing: "Não encontrei o comprovante de pagamento do DAS.",
        ask: "A guia DAS já foi paga?",
        calc: "Calculei o DAS esperado com a tabela da competência:",
        done: "Conferência concluída. Veja o resumo:",
      },
    },
  },
  notes: `Agora, o protótipo. Ele serve como evidência concreta do fluxo — não como produto pronto. Os números são do caso simulado que está no próprio questionário: faturamento de 30 mil no mês, RBT12 de 360 mil, pró-labore de 7 mil.

(clique) Envio: a empresa manda o que tem — uma guia em PDF, a folha em planilha, uma foto de recibo. No celular, isso acontece numa conversa.

(clique) Leitura: o sistema mostra o que encontrou e de onde veio cada dado. E já aponta o que faltou: aqui, o comprovante de pagamento do DAS.

(clique) Confirmação: em vez de supor, ele pergunta. Se ninguém souber, o item fica pendente e o resto da conferência continua.

(clique) Cálculo: a memória de cálculo fica visível, linha por linha — faixa, tabela, alíquota efetiva e valor esperado. Nesse caso simulado, o DAS esperado é 2.025 reais, igual ao da guia.

(clique) Relatório: o que foi conferido, o que está pendente e a diferença de cada item — mesmo quando é zero. E o relatório termina sempre no mesmo lugar: na validação do profissional contábil.

(Observação para o apresentador: tabela do Anexo IV e CPP de 20% sobre o pró-labore são premissas do caso simulado; confirmar com o contador antes de usar dados reais.)`,
  Layout: PrototypeLayout,
};
