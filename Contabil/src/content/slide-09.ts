import { ConversationLayout, type ConversationData } from "../components/layouts/ConversationLayout";
import type { SlideDef } from "../types/slide";

export const slide09: SlideDef<ConversationData> = {
  id: "slide-09",
  label: "Perguntas e questionário",
  title: "Perguntas rápidas e questionário completo",
  tone: "light",
  steps: 1,
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
  Layout: ConversationLayout,
};
