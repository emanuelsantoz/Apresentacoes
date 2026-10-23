import type { ReactNode } from "react";
import { useUi } from "../../i18n/locale";
import type { Tone } from "../../types/slide";

interface SlideFrameProps {
  tone: Tone;
  index: number;
  total: number;
  label: string;
  children: ReactNode;
  /** Esconde cabeçalho/rodapé (ex.: capa com composição própria). */
  bare?: boolean;
}

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Moldura comum de todos os slides: fundo com grid de 48 px,
 * etiqueta técnica no topo e endosso discreto no rodapé.
 */
export function SlideFrame({ tone, index, total, label, children, bare = false }: SlideFrameProps) {
  const t = useUi();
  return (
    <section
      className={`theme-${tone}`}
      data-slide-frame
      style={{
        position: "relative",
        width: 1920,
        height: 1080,
        overflow: "hidden",
        background: "var(--bg)",
        color: "var(--ink)",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 70% at 70% 40%, #000 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 70% 40%, #000 0%, transparent 75%)",
        }}
      />
      {!bare && (
        <header
          className="t-mono"
          style={{
            position: "absolute",
            top: 56,
            left: 96,
            right: 96,
            display: "flex",
            justifyContent: "space-between",
            color: "var(--ink-soft)",
          }}
        >
          <span className="eyebrow">
            {pad(index + 1)} · {label}
          </span>
          <span>{t.product}</span>
        </header>
      )}
      <div style={{ position: "absolute", inset: 0 }}>{children}</div>
      <footer
        className="t-mono"
        style={{
          position: "absolute",
          bottom: 48,
          left: 96,
          right: 96,
          display: "flex",
          justifyContent: "space-between",
          color: "var(--ink-soft)",
          fontSize: 20,
          letterSpacing: "0.1em",
        }}
      >
        <span>{t.endorsement}</span>
        <span className="t-num">
          ES/ · {pad(index + 1)}/{pad(total)}
        </span>
      </footer>
    </section>
  );
}
