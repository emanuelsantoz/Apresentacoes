import { useLocale, useUi } from "../../i18n/locale";
import type { SlideDef } from "../../types/slide";

interface NotesPanelProps {
  slide: SlideDef<any>;
  index: number;
  total: number;
  step: number;
}

/** Painel da fala do apresentador (tecla N). Não entra no PDF. */
export function NotesPanel({ slide, index, total, step }: NotesPanelProps) {
  const { locale } = useLocale();
  const t = useUi();
  const notes = slide.content[locale].notes;
  return (
    <aside
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 40,
        maxHeight: "38vh",
        overflow: "auto",
        background: "rgb(7 17 31 / 0.94)",
        color: "#f7fafc",
        border: "1px solid #243448",
        borderRadius: 16,
        padding: "16px 22px",
        zIndex: 20,
        fontFamily: "var(--font-body)",
        fontSize: 17,
        lineHeight: 1.55,
      }}
    >
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.12em", color: "#2f7de1", marginBottom: 8 }}>
        {t.notes.toUpperCase()} · {String(index + 1).padStart(2, "0")}/{total} · {t.step.toUpperCase()} {step}/{slide.steps}
      </div>
      {notes.split("\n\n").map((p, i) => (
        <p key={i} style={{ margin: "0 0 10px" }}>
          {p}
        </p>
      ))}
    </aside>
  );
}
