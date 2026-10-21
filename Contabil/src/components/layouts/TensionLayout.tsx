import { motion } from "motion/react";
import { useMotionPreset } from "../../hooks/usePresentationMode";
import type { LayoutProps } from "../../types/slide";
import { Icon, type IconKey } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { Rich } from "../ui/Rich";

export interface TensionData {
  title: string;
  pains: { icon: IconKey; text: string }[];
  documents: { label: string; kind: string; x: number; y: number; rotate: number }[];
  questions: { text: string; x: number; y: number }[];
}

/** Tensão: dores à esquerda; documentos espalhados e dúvidas à direita. */
export function TensionLayout({ data }: LayoutProps<TensionData>) {
  const { t, still } = useMotionPreset();
  return (
    <>
      <div style={{ position: "absolute", left: 96, top: 150, width: 840 }}>
        <Reveal>
          <h2 className="t-title">
            <Rich text={data.title} />
          </h2>
        </Reveal>
        <ul style={{ marginTop: 56, display: "grid", gap: 30 }}>
          {data.pains.map((p, i) => (
            <Reveal as="li" key={p.text} delay={0.2 + i * 0.12}>
              <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                <span
                  style={{
                    flex: "none",
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    display: "grid",
                    placeItems: "center",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--product-primary)",
                  }}
                >
                  <Icon name={p.icon} size={28} />
                </span>
                <p className="t-body" style={{ color: "var(--ink)", paddingTop: 8 }}>
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      <div style={{ position: "absolute", left: 1040, top: 150, right: 96, bottom: 140 }}>
        {data.documents.map((d, i) => (
          <motion.div
            key={d.label}
            className="card"
            style={{
              position: "absolute",
              left: d.x,
              top: d.y,
              width: 300,
              padding: "24px 26px",
              display: "grid",
              gap: 14,
            }}
            initial={still ? false : { opacity: 0, y: -24, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: d.rotate }}
            transition={t(0.15 + i * 0.1, 0.6)}
          >
            <span className="t-mono" style={{ fontSize: 18, color: "var(--ink-soft)" }}>
              {d.kind}
            </span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.02em" }}>
              {d.label}
            </span>
            <span style={{ display: "grid", gap: 8 }}>
              <span style={{ height: 8, width: "88%", borderRadius: 4, background: "var(--surface-sunken)" }} />
              <span style={{ height: 8, width: "64%", borderRadius: 4, background: "var(--surface-sunken)" }} />
            </span>
          </motion.div>
        ))}
        {data.questions.map((q, i) => (
          <motion.div
            key={q.text}
            style={{
              position: "absolute",
              left: q.x,
              top: q.y,
              padding: "14px 24px",
              borderRadius: "22px 22px 22px 6px",
              background: "var(--c-night)",
              color: "var(--c-mist)",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              fontSize: 26,
              boxShadow: "var(--shadow-soft)",
              whiteSpace: "nowrap",
            }}
            initial={still ? false : { opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={t(1 + i * 0.25, 0.32)}
          >
            {q.text}
          </motion.div>
        ))}
      </div>
    </>
  );
}
