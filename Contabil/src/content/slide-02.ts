import { ProfileLayout, type ProfileData } from "../components/layouts/ProfileLayout";
import type { SlideDef } from "../types/slide";

export const slide02: SlideDef<ProfileData> = {
  id: "slide-02",
  label: "Quem eu sou",
  title: "Quem eu sou",
  tone: "light",
  steps: 0,
  layoutNote:
    "Slide de autoria (parte dos 30% Emanuel). À esquerda, assinatura ES/ em moldura aberta com nome e descritor; à direita, três cards — tecnologia, processos, produto — entrando em sequência.",
  data: {
    mark: "ES/",
    name: "Emanuel Santos",
    descriptor: "Estratégia, design e engenharia de produtos digitais.",
    pillars: [
      { tag: "Tecnologia", title: "Construo e testo sistemas", text: "Do protótipo ao código que pode ser verificado." },
      { tag: "Processos", title: "Organizo antes de automatizar", text: "Entender a rotina vem antes de qualquer tela." },
      { tag: "Produto", title: "Transformo dúvida em fluxo", text: "Problemas pouco estruturados viram passos claros." },
    ],
    context: "Análise e Desenvolvimento de Sistemas · Projeto de Extensão",
  },
  notes: `Rapidamente, quem eu sou. Meu nome é Emanuel Santos e eu trabalho na interseção entre estratégia, design e engenharia de produtos digitais.

Na prática, isso significa três coisas: eu construo e testo sistemas; antes de automatizar, eu organizo o processo — porque uma tela bonita em cima de uma rotina confusa só deixa a confusão mais rápida; e eu gosto de pegar problemas pouco estruturados e transformar em passos claros.

Este trabalho nasce dentro do meu curso de Análise e Desenvolvimento de Sistemas, como projeto de extensão. É isso que eu explico no próximo slide.`,
  Layout: ProfileLayout,
};
