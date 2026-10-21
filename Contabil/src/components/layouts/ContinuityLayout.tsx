import { motion } from "motion/react";
import { useMotionPreset } from "../../hooks/usePresentationMode";
import type { LayoutProps } from "../../types/slide";
import { Heading } from "../ui/Heading";
import { Reveal } from "../ui/Reveal";

export interface ContinuityData {
  title: string;
  lead: string;
  stages: { when: string; title: string; text: string; now?: boolean }[];
  closing: string;
  signature: string;
}

/** Continuidade: linha do tempo do agora (MVP) para as evoluções possíveis. */
export function ContinuityLayout({ data }: LayoutProps<ContinuityData>) {
  const { t, still } = useMotionPreset();
  return (
    <>
      <Heading title={data.title} lead={data.lead} />

      <div style={{ position: "absolute", left: 96, right: 96, top: 470 }}>
        <motion.div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 15,
            height: 0,
            borderTop: "2px dashed var(--n-400)",
            transformOrigin: "left",
          }}
          initial={still ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={t(0.3, 1.4)}
        />
        <ol style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, position: "relative" }}>
          {data.stages.map((s, i) => (
            <Reveal as="li" key={s.title} delay={0.35 + i * 0.25}>
              <span
                style={{
                  display: "block",
                  width: 32,
                  height: 32,
                  borderRadius: 99,
                  background: s.now ? "var(--product-primary)" : "var(--bg)",
                  border: s.now ? "none" : "2px dashed var(--n-400)",
                  boxShadow: s.now ? "0 0 0 10px var(--status-ok-soft)" : "none",
                }}
              />
              <p className="t-mono" style={{ marginTop: 32, color: s.now ? "var(--product-primary)" : "var(--ink-soft)" }}>
                {s.when}
              </p>
              <p className="t-h3" style={{ marginTop: 12, color: s.now ? "var(--ink)" : "var(--ink-soft)" }}>
                {s.title}
              </p>
              <p className="t-body" style={{ marginTop: 10, fontSize: 25 }}>
                {s.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal delay={1.4} style={{ position: "absolute", left: 96, right: 96, top: 860, display: "flex", alignItems: "baseline", gap: 28 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 44, letterSpacing: "-0.03em" }}>
          {data.closing}
        </span>
        <span className="t-mono" style={{ color: "var(--ink-soft)" }}>
          {data.signature}
        </span>
      </Reveal>
    </>
  );
}
