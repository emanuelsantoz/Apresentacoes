import { ConversationLayout, type ConversationData } from "../components/layouts/ConversationLayout";
import type { SlideDef } from "../types/slide";

export const slide09: SlideDef<ConversationData> = {
  id: "slide-09",
  tone: "light",
  steps: 1,
  Layout: ConversationLayout,
  content: {
    pt: {
      label: "Perguntas e questionário",
      title: "Perguntas rápidas e questionário completo",
      layoutNote:
        "Duas colunas. Passo 0: quatro perguntas em balões, para responder na conversa. Passo 1: à direita, os sete blocos do questionário completo condensados em uma lista numerada.",
      data: {
        title: "Conversa rápida hoje. [Registro completo] depois.",
        lead: "Não é burocracia: cada resposta registrada dá contexto ao cálculo, rastreabilidade ao resultado e base para a validação contábil.",
        quickLabel: "Agora, na conversa",
        quick: [
          "Qual mês vamos conferir primeiro?",
          "Quais documentos você já tem?",
          "Qual valor gera mais dúvida hoje?",
          "Quem valida o relatório final?",
        ],
        formalLabel: "No questionário completo",
        formal: [
          { title: "Identificação", detail: "CNPJ, CNAE e regime" },
          { title: "Faturamento", detail: "receita do mês e RBT12" },
          { title: "Guia DAS", detail: "anexo, faixa e pagamento" },
          { title: "Pró-labore", detail: "INSS, IRRF e CPP" },
          { title: "Estágio", detail: "TCE, bolsa e seguro" },
          { title: "Despesas", detail: "outras guias e documentos" },
          { title: "Validação", detail: "critérios e responsável" },
        ],
      },
      notes: `O questionário completo é extenso — e eu não quero que ele vire uma barreira. Por isso, divido em dois momentos.

Algumas perguntas cabem aqui, agora, na conversa: qual mês vamos conferir primeiro, quais documentos já existem, qual valor gera mais dúvida e quem valida o relatório final.

(clique) As demais precisam ficar registradas: identificação e CNAE, faturamento e RBT12, a guia DAS, o pró-labore, o estágio, as outras despesas e os critérios de validação.

Não é burocracia. Cada resposta registrada é o que permite ao sistema explicar por que um valor está certo ou errado, e é o que permite ao contador conferir o raciocínio depois. Sem isso, o cálculo vira uma caixa-preta — exatamente o que queremos evitar.`,
    },
    en: {
      label: "Questions & questionnaire",
      title: "Quick questions and full questionnaire",
      layoutNote:
        "Two columns. Step 0: four questions in speech bubbles, to answer during the conversation. Step 1: on the right, the seven blocks of the full questionnaire condensed into a numbered list.",
      data: {
        title: "A quick chat today. [Full record] later.",
        lead: "It isn't red tape: every recorded answer gives context to the calculation, traceability to the result and a basis for the accountant's sign-off.",
        quickLabel: "Now, in conversation",
        quick: [
          "Which month do we check first?",
          "Which documents do you already have?",
          "Which figure raises the most doubts?",
          "Who signs off the final report?",
        ],
        formalLabel: "In the full questionnaire",
        formal: [
          { title: "Identification", detail: "CNPJ, CNAE and tax regime" },
          { title: "Revenue", detail: "monthly revenue and RBT12" },
          { title: "DAS slip", detail: "annex, bracket and payment" },
          { title: "Owner's pay", detail: "INSS, IRRF and CPP" },
          { title: "Internship", detail: "agreement, stipend, insurance" },
          { title: "Expenses", detail: "other slips and documents" },
          { title: "Sign-off", detail: "criteria and person in charge" },
        ],
      },
      notes: `The full questionnaire is long — and I don't want it to become a barrier. So I split it into two moments.

Some questions fit right here, now, in our conversation: which month we check first, which documents already exist, which figure raises the most doubts and who signs off the final report.

(click) The rest must be recorded: company identification and activity codes, revenue and RBT12, the DAS tax slip, owner's pay, the internship, other expenses and the sign-off criteria.

It isn't red tape. Every recorded answer is what lets the system explain why a figure is right or wrong, and what lets the accountant check the reasoning later. Without it, the calculation becomes a black box — exactly what we want to avoid.`,
    },
  },
};
