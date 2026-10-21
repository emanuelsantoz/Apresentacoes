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
  },
};
