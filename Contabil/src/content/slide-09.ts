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
        title: "Começar simples. [Registrar depois.]",
        lead: "Primeiro, três respostas para iniciar o piloto. Os detalhes entram no questionário.",
        quickLabel: "Agora, na conversa",
        quick: [
          "Qual mês vamos conferir?",
          "Quais documentos já existem?",
          "Qual é a principal dúvida?",
          "Quem valida o resultado?",
        ],
        formalLabel: "Detalhes para registrar depois",
        formal: [
          { title: "Empresa", detail: "CNPJ, CNAE e regime" },
          { title: "Receita", detail: "mês e RBT12" },
          { title: "Impostos", detail: "guia DAS e pagamento" },
          { title: "Pró-labore", detail: "INSS, IRRF e CPP" },
          { title: "Estágio", detail: "bolsa e seguro" },
          { title: "Outros documentos", detail: "guias e comprovantes" },
          { title: "Validação", detail: "critério e responsável" },
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
        title: "Start simple. [Record details later.]",
        lead: "First, three answers to start the pilot. The details go in the questionnaire.",
        quickLabel: "Now, in conversation",
        quick: [
          "Which month do we check?",
          "Which documents are ready?",
          "What is the main doubt?",
          "Who signs off the result?",
        ],
        formalLabel: "Details to record later",
        formal: [
          { title: "Company", detail: "CNPJ, CNAE and tax regime" },
          { title: "Revenue", detail: "month and RBT12" },
          { title: "Taxes", detail: "DAS slip and payment" },
          { title: "Owner's pay", detail: "INSS, IRRF and CPP" },
          { title: "Internship", detail: "stipend and insurance" },
          { title: "Other documents", detail: "slips and receipts" },
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
