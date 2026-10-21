import { motion } from "motion/react";
import { useMotionPreset } from "../../hooks/usePresentationMode";
import type { LayoutProps } from "../../types/slide";
import { Heading } from "../ui/Heading";
import { Icon, type IconKey } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";

export interface SolutionData {
  title: string;
  inputsLabel: string;
  inputs: { icon: IconKey; label: string }[];
  coreLabel: string;
  coreTitle: string;
  coreActions: string[];
  outputLabel: string;
  outputTitle: string;
  outputs: string[];
  fallback: string;
  validation: string;
}

// Geometria do diagrama (coordenadas do palco 1920×1080)
const IN = { x: 96, w: 340, y0: 440, h: 92, gap: 20 };
const CORE = { x: 680, w: 540, y: 440, h: 420 };
const OUT = { x: 1424, w: 400, y: 470, h: 360 };
const CY = CORE.y + CORE.h / 2;

/** Entradas → assistente → relatório, montado em três passos. */
export function SolutionLayout({ data, step }: LayoutProps<SolutionData>) {
  const { t, still } = useMotionPreset();
  const inputCenters = data.inputs.map((_, i) => IN.y0 + i * (IN.h + IN.gap) + IN.h / 2);

  const draw = (show: boolean, delay = 0) => ({
    initial: still ? false : ({ pathLength: 0, opacity: 0 } as const),
    animate: show ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 },
    transition: t(show ? delay : 0, 0.7),
  });

  return (
    <>
      <Heading title={data.title} width={1500} />

      <svg width={1920} height={1080} style={{ position: "absolute", inset: 0, pointerEvents: "none" }} aria-hidden>
        {inputCenters.map((cy, i) => (
          <motion.path
            key={i}
            d={`M ${IN.x + IN.w} ${cy} C ${IN.x + IN.w + 140} ${cy}, ${CORE.x - 140} ${CY}, ${CORE.x} ${CY}`}
            fill="none"
            stroke="var(--product-primary)"
            strokeWidth={2}
            strokeOpacity={0.55}
            {...draw(step >= 1, i * 0.08)}
          />
        ))}
        <motion.path
          d={`M ${CORE.x + CORE.w} ${CY} L ${OUT.x} ${CY}`}
          fill="none"
          stroke="var(--product-primary)"
          strokeWidth={2}
          {...draw(step >= 2)}
        />
      </svg>

      <Reveal delay={0.15} style={{ position: "absolute", left: IN.x, top: IN.y0 - 52 }}>
        <span className="t-mono" style={{ color: "var(--ink-soft)" }}>
          {data.inputsLabel}
        </span>
      </Reveal>
      {data.inputs.map((inp, i) => (
        <Reveal
          key={inp.label}
          delay={0.2 + i * 0.1}
          from="left"
          className="card"
          style={{
            position: "absolute",
            left: IN.x,
            top: IN.y0 + i * (IN.h + IN.gap),
            width: IN.w,
            height: IN.h,
            display: "flex",
            alignItems: "center",
            gap: 20,
            padding: "0 28px",
            borderRadius: 16,
          }}
        >
          <span style={{ color: "var(--product-primary)" }}>
            <Icon name={inp.icon} size={30} />
          </span>
          <span style={{ fontSize: 28, fontWeight: 500 }}>{inp.label}</span>
        </Reveal>
      ))}

      <Reveal
        show={step >= 1}
        delay={0.25}
        style={{
          position: "absolute",
          left: CORE.x,
          top: CORE.y,
          width: CORE.w,
          height: CORE.h,
          borderRadius: "var(--radius-editorial)",
          background: "var(--c-night)",
          color: "var(--c-mist)",
          padding: 48,
        }}
      >
        <span className="t-mono" style={{ color: "var(--c-pulse)" }}>
          {data.coreLabel}
        </span>
        <p className="t-h3" style={{ marginTop: 18, fontSize: 40, whiteSpace: "nowrap" }}>
          {data.coreTitle}
        </p>
        <ul style={{ marginTop: 36, display: "grid", gap: 22 }}>
          {data.coreActions.map((a, i) => (
            <li key={a} style={{ display: "flex", gap: 18, alignItems: "center", fontSize: 28 }}>
              <span className="t-num" style={{ color: "var(--c-pulse)", fontSize: 22 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {a}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal
        show={step >= 2}
        delay={0.35}
        from="right"
        className="card"
        style={{
          position: "absolute",
          left: OUT.x,
          top: OUT.y,
          width: OUT.w,
          height: OUT.h,
          padding: 40,
          borderRadius: "var(--radius-editorial)",
          border: "2px solid var(--product-primary)",
        }}
      >
        <span className="t-mono" style={{ color: "var(--product-primary)" }}>
          {data.outputLabel}
        </span>
        <p className="t-h3" style={{ marginTop: 14 }}>
          {data.outputTitle}
        </p>
        <ul style={{ marginTop: 24, display: "grid", gap: 16 }}>
          {data.outputs.map((o) => (
            <li key={o} style={{ display: "flex", gap: 14, alignItems: "center", fontSize: 26 }}>
              <span style={{ color: "var(--product-primary)" }}>
                <Icon name="check" size={26} />
              </span>
              {o}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal
        show={step >= 2}
        delay={0.6}
        style={{ position: "absolute", left: 96, right: 96, top: 912, display: "flex", justifyContent: "space-between" }}
      >
        <span className="t-mono" style={{ color: "var(--ink-soft)" }}>
          {data.fallback}
        </span>
        <span className="t-mono" style={{ color: "var(--product-primary)" }}>
          {data.validation}
        </span>
      </Reveal>
    </>
  );
}
