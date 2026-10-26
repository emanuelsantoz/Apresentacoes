import { CardsLayout, type CardsData } from "../components/layouts/CardsLayout";
import type { SlideDef } from "../types/slide";

export const slide08: SlideDef<CardsData> = {
  id: "slide-08",
  tone: "light",
  steps: 0,
  Layout: CardsLayout,
  content: {
    pt: {
      label: "Para começar",
      title: "O que precisamos para começar",
      layoutNote:
        "Quatro cards numerados lado a lado (documentos, acessos, dados, infraestrutura), cada um com ícone, frase curta e uma etiqueta mono com a decisão necessária.",
      data: {
        title: "O que definir antes de [começar].",
        lead: "Quatro decisões simples para iniciar o piloto.",
        cards: [
          { icon: "folder", title: "Documentos", text: "O que vamos conferir?", tag: "Documentos do mês" },
          { icon: "users", title: "Pessoas", text: "Quem participa?", tag: "Envia · vê · valida" },
          { icon: "shield", title: "Dados", text: "Como cuidamos dos dados?", tag: "Uso · guarda · descarte" },
          { icon: "server", title: "Ambiente", text: "Onde o piloto funciona?", tag: "Ambiente de teste" },
        ],
        footnote: "Dados pessoais e fiscais · tratamento com finalidade definida, conforme a LGPD",
      },
      notes: `Para começar, precisamos de quatro definições — e nenhuma delas depende de integração com outros sistemas.

Primeiro, os documentos: guias, folha, notas e extratos de uma única competência. Segundo, os acessos: quem envia, quem consulta e quem valida o relatório.

Terceiro, e mais importante: a responsabilidade sobre os dados. Estamos falando de dados fiscais da empresa e de dados pessoais da sócia e da estagiária. Por isso, finalidade, tempo de guarda e descarte precisam estar combinados por escrito antes do primeiro envio, de acordo com a LGPD.

E quarto, a infraestrutura do piloto: onde o protótipo roda e quem cuida desse ambiente durante o teste.`,
    },
    en: {
      label: "Getting started",
      title: "What we need to get started",
      layoutNote:
        "Four numbered cards side by side (documents, access, data, infrastructure), each with an icon, a short sentence and a mono tag naming the decision needed.",
      data: {
        title: "What to decide before [we start].",
        lead: "Four simple decisions to start the pilot.",
        cards: [
          { icon: "folder", title: "Documents", text: "What do we check?", tag: "This month's documents" },
          { icon: "users", title: "People", text: "Who takes part?", tag: "Sends · views · signs off" },
          { icon: "shield", title: "Data", text: "How do we handle data?", tag: "Use · keep · delete" },
          { icon: "server", title: "Setup", text: "Where does the pilot run?", tag: "Test environment" },
        ],
        footnote: "Personal and tax data · processed for a defined purpose under the LGPD (Brazil's data protection law)",
      },
      notes: `To get started, we need four decisions — and none of them depends on integrating with other systems.

First, the documents: tax slips, payroll, invoices and statements for a single month. Second, access: who sends, who views and who signs off the report.

Third, and most important: accountability for the data. We are talking about the company's tax data and the personal data of the partner and the intern. So purpose, retention period and disposal must be agreed in writing before the first upload, in line with the LGPD, Brazil's data protection law.

And fourth, the pilot's infrastructure: where the prototype runs and who looks after that environment during the test.`,
    },
  },
};
