import { motion } from "motion/react";
import { useMotionPreset } from "../../hooks/usePresentationMode";
import type { LayoutProps } from "../../types/slide";
import { OpenFrame } from "../ui/OpenFrame";
import { Reveal } from "../ui/Reveal";
import { Rich } from "../ui/Rich";

export interface CoverData {
  stamp: string;
  eyebrow: string;
  title: string;
  lead: string;
  flowLabel: string;
  flow: string[];
  footnote: string;
}

/** Capa: título editorial à esquerda, fluxo do produto montando-se na moldura aberta. */
export function CoverLayout({ data }: LayoutProps<CoverData>) {
  const { t, still } = useMotionPreset();
  return (
    <>
      <Reveal style={{ position: "absolute", top: 72, left: 96 }}>
        <span className="t-mono" style={{ color: "var(--ink-soft)" }}>
          {data.stamp}
        </span>
      </Reveal>

      <div style={{ position: "absolute", left: 96, top: 250, width: 1080 }}>
        <Reveal>
          <span className="t-mono eyebrow">{data.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="t-display" style={{ marginTop: 40, fontSize: 100 }}>
            <Rich text={data.title} />
          </h1>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="t-lead" style={{ marginTop: 44, maxWidth: 940 }}>
            {data.lead}
          </p>
        </Reveal>
      </div>

      <OpenFrame
        corner={64}
        delay={0.3}
        style={{ position: "absolute", right: 120, top: 250, width: 520, height: 600, padding: "56px 56px" }}
      >
        <span className="t-mono" style={{ color: "var(--ink-soft)" }}>
          {data.flowLabel}
        </span>
        <ol style={{ marginTop: 36, position: "relative" }}>
          <motion.span
            aria-hidden
            style={{
              position: "absolute",
              left: 15,
              top: 18,
              width: 2,
              height: (data.flow.length - 1) * 88,
              background: "var(--border)",
              transformOrigin: "top",
            }}
            initial={still ? false : { scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={t(0.5, 1.2)}
          />
          {data.flow.map((item, i) => (
            <Reveal key={item} delay={0.55 + i * 0.22} from="left">
              <li style={{ display: "flex", alignItems: "center", gap: 28, height: 88 }}>
                <motion.span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 999,
                    border: "2px solid var(--c-pulse)",
                    background: "var(--c-night)",
                    display: "grid",
                    placeItems: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <motion.span
                    style={{ width: 12, height: 12, borderRadius: 999, background: "var(--c-pulse)" }}
                    initial={still ? false : { scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={t(0.75 + i * 0.22, 0.24)}
                  />
                </motion.span>
                <span className="t-num" style={{ color: "var(--ink-soft)", fontSize: 22 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 500, letterSpacing: "-0.02em" }}>
                  {item}
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
      </OpenFrame>

      <Reveal delay={0.4} style={{ position: "absolute", left: 96, bottom: 120 }}>
        <span className="t-mono" style={{ color: "var(--ink-soft)", fontSize: 20 }}>
          {data.footnote}
        </span>
      </Reveal>
    </>
  );
}
