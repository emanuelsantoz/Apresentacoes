import { ProfileLayout, type ProfileData } from "../components/layouts/ProfileLayout";
import type { SlideDef } from "../types/slide";

export const slide02: SlideDef<ProfileData> = {
  id: "slide-02",
  tone: "light",
  steps: 3,
  Layout: ProfileLayout,
  content: {
    pt: {
      label: "Quem eu sou",
      title: "Quem eu sou",
      layoutNote:
        "Slide de autoria (parte dos 30% Emanuel). À esquerda, assinatura ES/ em moldura aberta com nome e descritor; à direita, três cards — tecnologia, processos, produto — entrando em sequência.",
      data: {
        mark: "ES/",
        portraitAlt: "Retrato de Emanuel Santos",
        name: "Emanuel Santos",
        descriptor: "Quatro anos de experiência em tecnologia, unindo gestão e desenvolvimento de sistemas.",
        pillars: [
          { tag: "Experiência", title: "Quatro anos na área de tecnologia", text: "Atuo com soluções digitais e aprendizado contínuo." },
          { tag: "Formação", title: "Gestão de TI e Desenvolvimento de Sistemas", text: "Estou cursando Gestão de TI e Análise e Desenvolvimento de Sistemas." },
          { tag: "Como eu penso", title: "Conecto ideias, processos e pessoas", text: "Transformo problemas do dia a dia em soluções práticas e claras." },
        ],
        context: "Gestão de TI e Análise e Desenvolvimento de Sistemas · Projeto de Extensão",
      },
      notes: `Meu nome é Emanuel Santos e tenho quatro anos de experiência na área de tecnologia. Durante esse período, desenvolvi uma visão prática sobre como a tecnologia pode apoiar rotinas e resolver necessidades reais.

Hoje, estou cursando Gestão de TI e Análise e Desenvolvimento de Sistemas. Essa formação combina gestão, processos e desenvolvimento, ampliando minha capacidade de criar soluções digitais que sejam claras e úteis para as pessoas.

Este trabalho faz parte desse percurso de formação e experiência profissional.`,
    },
    en: {
      label: "About me",
      title: "About me",
      layoutNote:
        "Authorship slide (part of the 30% Emanuel share). On the left, the ES/ signature in an open frame with name and descriptor; on the right, three cards — technology, processes, product — entering in sequence.",
      data: {
        mark: "ES/",
        portraitAlt: "Portrait of Emanuel Santos",
        name: "Emanuel Santos",
        descriptor: "Four years of experience in technology, combining IT management and systems development.",
        pillars: [
          { tag: "Experience", title: "Four years in technology", text: "I work with digital solutions and continuous learning." },
          { tag: "Education", title: "IT Management and Systems Development", text: "I am studying IT Management and Systems Analysis and Development." },
          { tag: "How I think", title: "I connect ideas, processes and people", text: "I turn everyday problems into practical, clear solutions." },
        ],
        context: "IT Management and Systems Analysis and Development · Extension Project",
      },
      notes: `My name is Emanuel Santos, and I have four years of experience in technology. During this time, I have developed a practical perspective on how technology can support routines and solve real needs.

I am currently studying IT Management and Systems Analysis and Development. This education combines management, processes, and development, strengthening my ability to create clear and useful digital solutions.

This work is part of that academic and professional journey.`,
    },
  },
};
