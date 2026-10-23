/** Textos fixos da interface (fora do conteúdo dos slides). */
export interface UiStrings {
  htmlLang: string;
  docTitle: string;
  product: string;
  endorsement: string;
  hint: string;
  notes: string;
  step: string;
  prev: string;
  next: string;
  language: string;
  switchTo: string;
  edit: string;
  present: string;
  overview: string;
  fullscreen: string;
  hiddenInfo: (n: number) => string;
  overviewTitle: string;
  overviewActive: (n: number) => string;
  overviewEditing: (active: number, hidden: number) => string;
  hiddenBadge: string;
  hiddenBanner: string;
  showSlide: string;
  hideSlide: string;
  goTo: (n: number) => string;
}

export const ui: Record<"pt" | "en", UiStrings> = {
  pt: {
    htmlLang: "pt-BR",
    docTitle: "MVP de Conferência Contábil",
    product: "MVP · Conferência contábil",
    endorsement: "Criado por Emanuel Santos",
    hint: "← → navegar · O visão geral · N notas · L idioma · F tela cheia",
    notes: "Fala",
    step: "Passo",
    prev: "Voltar",
    next: "Avançar",
    language: "Idioma",
    switchTo: "Mudar para inglês",
    edit: "Editar",
    present: "Apresentar",
    overview: "Visão geral",
    fullscreen: "Tela cheia",
    hiddenInfo: (n) => `${n} slide(s) oculto(s) nesta apresentação. Para ver todos: modo edição (E) ou ?todos na URL`,
    overviewTitle: "Visão geral",
    overviewActive: (n) => `${n} slides ativos nesta apresentação`,
    overviewEditing: (a, h) => `${a} ativos · ${h} ocultos — clique no olho para tirar ou devolver um slide da apresentação`,
    hiddenBadge: "Oculto",
    hiddenBanner: "Slide oculto: não aparece na apresentação nem no PDF",
    showSlide: "Mostrar (H)",
    hideSlide: "Ocultar da apresentação",
    goTo: (n) => `Ir para o slide ${n}`,
  },
  en: {
    htmlLang: "en",
    docTitle: "Accounting Review MVP",
    product: "MVP · Accounting review",
    endorsement: "Created by Emanuel Santos",
    hint: "← → navigate · O overview · N notes · L language · F fullscreen",
    notes: "Speaker notes",
    step: "Step",
    prev: "Back",
    next: "Next",
    language: "Language",
    switchTo: "Switch to Portuguese",
    edit: "Edit",
    present: "Present",
    overview: "Overview",
    fullscreen: "Fullscreen",
    hiddenInfo: (n) => `${n} slide(s) hidden in this presentation. To see all: edit mode (E) or ?todos in the URL`,
    overviewTitle: "Overview",
    overviewActive: (n) => `${n} active slides in this presentation`,
    overviewEditing: (a, h) => `${a} active · ${h} hidden — click the eye to remove or restore a slide`,
    hiddenBadge: "Hidden",
    hiddenBanner: "Hidden slide: not shown in the presentation or the PDF",
    showSlide: "Show (H)",
    hideSlide: "Hide from presentation",
    goTo: (n) => `Go to slide ${n}`,
  },
};
