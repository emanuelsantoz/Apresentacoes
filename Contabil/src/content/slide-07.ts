import { PrototypeLayout, type PrototypeData } from "../components/layouts/PrototypeLayout";
import type { SlideDef } from "../types/slide";

/**
 * Valores do "Caso simulado para teste do MVP" (seção 8 do questionário).
 * São premissas de teste — não representam a apuração oficial de nenhuma empresa.
 * Tabela usada no cálculo: Simples Nacional, Anexo IV, 2ª faixa
 * (RBT12 de R$ 180.000,01 a R$ 360.000,00 · alíquota 9% · parcela a deduzir R$ 8.100,00).
 * Em inglês, os valores usam separador de milhar com vírgula e decimal com ponto.
 */
export const slide07: SlideDef<PrototypeData> = {
  id: "slide-07",
  tone: "light",
  steps: 4,
  Layout: PrototypeLayout,
  content: {
    pt: {
      label: "Fluxo do protótipo",
      title: "Fluxo do protótipo",
      layoutNote:
        "Demonstração. Website mockado (esquerda) e celular mockado (direita) mostram a mesma etapa ao mesmo tempo. Cada clique avança: envio → leitura → confirmação → cálculo → relatório. Selo “caso simulado” no canto.",
      data: {
        title: "O mesmo fluxo, no [website e no celular].",
        caseLabel: "Caso simulado · premissas do questionário",
        url: "conferencia.prototipo/competencia",
        flow: ["Envio", "Leitura", "Confirmação", "Cálculo", "Relatório"],
        screens: {
          labels: {
            competence: "Competência",
            uploadTitle: "Envie os documentos do mês",
            dropTitle: "Arraste PDF, planilha ou foto",
            dropHint: "ou digite os dados manualmente",
            received: "Recebido",
            readTitle: "Dados encontrados nos documentos",
            read: "Lido",
            missing: "Falta",
            confirmTitle: "Antes de calcular, preciso confirmar",
            reportTitle: "Resultado da conferência",
            headers: ["Item", "Informado", "Esperado", "Diferença", "Situação"],
            phoneHeader: "Conferência",
            inputPlaceholder: "Escreva ou envie um arquivo",
          },
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
    },
    en: {
      label: "Prototype flow",
      title: "Prototype flow",
      layoutNote:
        "Demo. A mock website (left) and a mock phone (right) show the same step at the same time. Each click moves forward: upload → reading → confirmation → calculation → report. “Simulated case” badge in the corner.",
      data: {
        title: "The same flow, on the [web and on mobile].",
        caseLabel: "Simulated case · questionnaire assumptions",
        url: "review.prototype/month",
        flow: ["Upload", "Reading", "Confirmation", "Calculation", "Report"],
        screens: {
          labels: {
            competence: "Reference month",
            uploadTitle: "Send this month's documents",
            dropTitle: "Drag a PDF, spreadsheet or photo",
            dropHint: "or type the data manually",
            received: "Received",
            readTitle: "Data found in the documents",
            read: "Read",
            missing: "Missing",
            confirmTitle: "Before calculating, I need to confirm",
            reportTitle: "Review result",
            headers: ["Item", "Reported", "Expected", "Difference", "Status"],
            phoneHeader: "Review",
            inputPlaceholder: "Type or send a file",
          },
          competence: "Test month",
          files: [
            { name: "das-tax-slip.pdf", kind: "PDF", icon: "pdf" },
            { name: "owner-pay-payroll.xlsx", kind: "Sheet", icon: "sheet" },
            { name: "intern-receipt.jpg", kind: "Photo", icon: "camera" },
          ],
          readings: [
            { label: "Gross revenue (month)", value: "R$ 30,000.00", source: "reported", ok: true },
            { label: "RBT12 (12-month revenue)", value: "R$ 360,000.00", source: "reported", ok: true },
            { label: "DAS on the tax slip", value: "R$ 2,025.00", source: "das-tax-slip.pdf · p. 1", ok: true },
            { label: "Owner's gross pay", value: "R$ 7,000.00", source: "owner-pay-payroll.xlsx", ok: true },
            { label: "DAS payment receipt", value: "—", source: "not found", ok: false },
          ],
          questions: [
            { text: "Has this month's DAS tax slip been paid?", options: ["Send receipt", "Not yet", "Not sure"] },
            { text: "Is R$ 360,000.00 the RBT12 your accountant reported?", options: ["Confirm", "Correct"] },
          ],
          pendingNote: "Without the receipt, the payment stays pending — the rest goes on.",
          calc: {
            title: "Calculation trail · DAS",
            lines: [
              { label: "Bracket", expr: "RBT12 R$ 360,000.00 → Annex IV, 2nd bracket" },
              { label: "Table", expr: "rate 9% · deduction R$ 8,100.00" },
              { label: "Effective rate", expr: "(360,000 × 9% − 8,100) ÷ 360,000 = 6.75%" },
              { label: "Expected DAS", expr: "30,000.00 × 6.75% = R$ 2,025.00" },
            ],
            note: "Table versioned by month · source shown in the report",
          },
          report: {
            summary: [
              { label: "2 checked", tone: "ok" },
              { label: "1 pending", tone: "warn" },
              { label: "Difference always shown", tone: "info" },
            ],
            rows: [
              { item: "DAS", informed: "2,025.00", expected: "2,025.00", diff: "0.00", ok: true, status: "Checked" },
              { item: "CPP on owner's pay", informed: "1,400.00", expected: "1,400.00", diff: "0.00", ok: true, status: "Checked" },
              { item: "DAS payment", informed: "—", expected: "receipt", diff: "—", ok: false, status: "Pending" },
            ],
            validation: "Report ready for the licensed accountant's sign-off.",
          },
          chat: {
            hello: "Hi! Send this month's documents: PDF, spreadsheet or photo.",
            read: "I read 3 documents and found 4 figures to check.",
            missing: "I couldn't find the DAS payment receipt.",
            ask: "Has the DAS tax slip been paid?",
            calc: "I calculated the expected DAS with this month's table:",
            done: "Review complete. Here's the summary:",
          },
        },
      },
      notes: `Now, the prototype. It is concrete evidence of the flow — not a finished product. The numbers come from the simulated case in the questionnaire itself: R$ 30,000 of revenue in the month, R$ 360,000 of RBT12 — the revenue of the previous twelve months — and R$ 7,000 of owner's pay.

(click) Upload: the company sends what it has — a tax slip as a PDF, the payroll as a spreadsheet, a photo of a receipt. On the phone, this happens as a chat.

(click) Reading: the system shows what it found and where each piece of data came from. And it already flags what's missing: here, the DAS payment receipt. DAS is the single monthly tax slip of Simples Nacional.

(click) Confirmation: instead of guessing, it asks. If nobody knows, the item stays pending and the rest of the review continues.

(click) Calculation: the calculation trail is visible line by line — bracket, table, effective rate and expected value. In this simulated case, the expected DAS is R$ 2,025, the same as on the tax slip.

(click) Report: what was checked, what is pending and the difference for each item — even when it is zero. And the report always ends in the same place: the licensed accountant's sign-off.

(Presenter note: the Annex IV table and the 20% CPP — employer social security contribution — on owner's pay are assumptions of the simulated case; confirm them with the accountant before using real data.)`,
    },
  },
};
