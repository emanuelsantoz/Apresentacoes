import { motion } from "motion/react";
import { useMotionPreset } from "../../hooks/usePresentationMode";
import type { LayoutProps } from "../../types/slide";
import { Heading } from "../ui/Heading";
import { Reveal } from "../ui/Reveal";

export interface ProcessData {
  title: string;
  lead?: string;
  nodes: { code: string; title: string; text: string }[];
  /** Índice do nó destacado (ex.: etapa atual). */
  current?: number;
  currentLabel?: string;
  footnote?: string;
}

/** Jornada horizontal: linha que se desenha e nós que acendem em sequência. */
export function ProcessLayout({ data }: LayoutProps<ProcessData>) {
  const { t, still } = useMotionPreset();
  const n = data.nodes.length;
  const top = 600;
  return (
    <>
      <Heading title={data.title} lead={data.lead} />

      <div style={{ position: "absolute", left: 96, right: 96, top }}>
        <div style={{ position: "absolute", left: 24, right: `calc(${100 / n}% - 24px)`, top: 23, height: 2, background: "var(--border)" }} />
        <motion.div
          style={{
            position: "absolute",
            left: 24,
            right: `calc(${100 / n}% - 24px)`,
            top: 23,
            height: 2,
            background: "var(--product-primary)",
            transformOrigin: "left",
          }}
          initial={still ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={t(0.4, 1.4)}
        />
        <ol style={{ display: "grid", gridTemplateColumns: `repeat(${n}, 1fr)`, gap: 48, position: "relative" }}>
          {data.nodes.map((node, i) => {
            const isCurrent = data.current === i;
            return (
              <Reveal as="li" key={node.code} delay={0.4 + i * 0.4}>
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <span
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 999,
                      display: "grid",
                      placeItems: "center",
                      background: isCurrent ? "var(--product-primary)" : "var(--surface)",
                      border: "2px solid var(--product-primary)",
                      color: isCurrent ? "var(--product-on-primary)" : "var(--product-primary)",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 600,
                      fontSize: 18,
                    }}
                  >
                    {node.code}
                  </span>
                  {isCurrent && data.currentLabel && (
                    <span className="status status-ok">{data.currentLabel}</span>
                  )}
                </div>
                <p className="t-h3" style={{ marginTop: 36, fontSize: 42 }}>
                  {node.title}
                </p>
                <p className="t-body" style={{ marginTop: 12, maxWidth: 460 }}>
                  {node.text}
                </p>
              </Reveal>
            );
          })}
        </ol>
      </div>

      {data.footnote && (
        <Reveal delay={1.8} style={{ position: "absolute", left: 96, bottom: 132 }}>
          <span className="t-mono" style={{ color: "var(--ink-soft)" }}>
            {data.footnote}
          </span>
        </Reveal>
      )}
    </>
  );
}
