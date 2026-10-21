import { LOCALES, useLocale, useUi, type Locale } from "../../i18n/locale";
import { FlagBR, FlagUS } from "../ui/Flags";

const FLAGS: Record<Locale, () => JSX.Element> = {
  pt: () => <FlagBR />,
  en: () => <FlagUS />,
};

/** Seletor PT/EN com bandeiras. Também responde à tecla L. */
export function LanguageSwitch({ hidden }: { hidden: boolean }) {
  const { locale, setLocale } = useLocale();
  const t = useUi();
  return (
    <div
      role="group"
      aria-label={t.language}
      title={`${t.language} (L)`}
      className={`deck-ui ${hidden ? "is-idle" : ""}`}
      style={{
        position: "fixed",
        top: 14,
        right: 16,
        zIndex: 25,
        display: "flex",
        gap: 4,
        padding: 4,
        borderRadius: 999,
        background: "rgb(7 17 31 / 0.82)",
        border: "1px solid #243448",
        backdropFilter: "blur(6px)",
      }}
    >
      {LOCALES.map((l) => {
        const active = l === locale;
        const Flag = FLAGS[l];
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            aria-label={l === "pt" ? "Português" : "English"}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 12px 5px 5px",
              borderRadius: 999,
              border: 0,
              cursor: active ? "default" : "pointer",
              background: active ? "#2166c9" : "transparent",
              color: active ? "#ffffff" : "#aab8c8",
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              opacity: active ? 1 : 0.85,
              transition: "background 240ms var(--ease), color 240ms var(--ease)",
            }}
          >
            <Flag />
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
