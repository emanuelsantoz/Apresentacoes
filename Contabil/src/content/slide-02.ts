import { ProfileLayout, type ProfileData } from "../components/layouts/ProfileLayout";
import type { SlideDef } from "../types/slide";

export const slide02: SlideDef<ProfileData> = {
  id: "slide-02",
  tone: "light",
  steps: 0,
  Layout: ProfileLayout,
  content: {
    pt: {
      label: "Quem eu sou",
      title: "Quem eu sou",
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
    },
    en: {
      label: "About me",
      title: "About me",
      layoutNote:
        "Authorship slide (part of the 30% Emanuel share). On the left, the ES/ signature in an open frame with name and descriptor; on the right, three cards — technology, processes, product — entering in sequence.",
      data: {
        mark: "ES/",
        name: "Emanuel Santos",
        descriptor: "Strategy, design and engineering of digital products.",
        pillars: [
          { tag: "Technology", title: "I build and test systems", text: "From prototype to code that can be verified." },
          { tag: "Processes", title: "I organize before automating", text: "Understanding the routine comes before any screen." },
          { tag: "Product", title: "I turn doubt into flow", text: "Loosely structured problems become clear steps." },
        ],
        context: "Systems Analysis and Development · Extension Project",
      },
      notes: `A quick word about me. My name is Emanuel Santos, and I work where strategy, design and the engineering of digital products meet.

In practice, that means three things: I build and test systems; before automating, I organize the process — because a nice screen on top of a messy routine only makes the mess faster; and I like taking loosely structured problems and turning them into clear steps.

This work was born in my Systems Analysis and Development course, as an extension project. That's what I explain on the next slide.`,
    },
  },
};
