import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { ui, type UiStrings } from "./ui";

export type Locale = "pt" | "en";
export const LOCALES: Locale[] = ["pt", "en"];
export const DEFAULT_LOCALE: Locale = "pt";

/** Lê o idioma da URL (?lang=en). Sem parâmetro = português. */
export function readLocaleFromUrl(): Locale {
  const lang = new URLSearchParams(window.location.search).get("lang");
  return lang === "en" ? "en" : DEFAULT_LOCALE;
}

interface LocaleState {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
}

const LocaleContext = createContext<LocaleState>({
  locale: DEFAULT_LOCALE,
  setLocale: () => undefined,
  toggle: () => undefined,
});

/**
 * Idioma da apresentação. Fica no estado React e na URL (?lang=en),
 * sem localStorage — o link aberto define o idioma.
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(readLocaleFromUrl);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (locale === DEFAULT_LOCALE) url.searchParams.delete("lang");
    else url.searchParams.set("lang", locale);
    if (url.href !== window.location.href) window.history.replaceState(null, "", url.href);
    document.documentElement.lang = ui[locale].htmlLang;
    document.title = ui[locale].docTitle;
  }, [locale]);

  const toggle = useCallback(() => setLocale((l) => (l === "pt" ? "en" : "pt")), []);

  return <LocaleContext.Provider value={{ locale, setLocale, toggle }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}

/** Textos fixos da interface no idioma atual. */
export function useUi(): UiStrings {
  return ui[useLocale().locale];
}
