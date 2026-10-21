import { CardsLayout, type CardsData } from "../components/layouts/CardsLayout";
import type { SlideDef } from "../types/slide";

export const slide08: SlideDef<CardsData> = {
  id: "slide-08",
  label: "Para começar",
  title: "O que precisamos para começar",
  tone: "light",
  steps: 0,
  layoutNote:
    "Quatro cards numerados lado a lado (documentos, acessos, dados, infraestrutura), cada um com ícone, frase curta e uma etiqueta mono com a decisão necessária.",
  data: {
    title: "Quatro definições antes da [primeira conferência].",
    lead: "Nada disso exige integração ou investimento em infraestrutura definitiva.",
    cards: [
      { icon: "folder", title: "Documentos", text: "Guias, folha, notas e extratos do mês.", tag: "Quem reúne?" },
      { icon: "users", title: "Acessos", text: "Quem envia, quem consulta e quem valida.", tag: "Quem participa?" },
      { icon: "shield", title: "Dados", text: "Finalidade, guarda e descarte combinados por escrito.", tag: "Quem responde?" },
      { icon: "server", title: "Infraestrutura", text: "Onde o piloto roda e quem mantém o ambiente.", tag: "Onde roda?" },
    ],
    footnote: "Dados pessoais e fiscais · tratamento com finalidade definida, conforme a LGPD",
  },
  notes: `Para começar, precisamos de quatro definições — e nenhuma delas depende de integração com outros sistemas.

Primeiro, os documentos: guias, folha, notas e extratos de uma única competência. Segundo, os acessos: quem envia, quem consulta e quem valida o relatório.

Terceiro, e mais importante: a responsabilidade sobre os dados. Estamos falando de dados fiscais da empresa e de dados pessoais da sócia e da estagiária. Por isso, finalidade, tempo de guarda e descarte precisam estar combinados por escrito antes do primeiro envio, de acordo com a LGPD.

E quarto, a infraestrutura do piloto: onde o protótipo roda e quem cuida desse ambiente durante o teste.`,
  Layout: CardsLayout,
};
