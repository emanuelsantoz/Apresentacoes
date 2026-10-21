import { AnimatePresence, motion } from "motion/react";
import { useMotionPreset } from "../../hooks/usePresentationMode";
import type { LayoutProps } from "../../types/slide";
import { BrowserMock, PhoneMock } from "../mockups/Devices";
import { PhoneScreen, WebScreen, type PrototypeScreensData } from "../mockups/PrototypeScreens";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { Rich } from "../ui/Rich";

export interface PrototypeData {
  title: string;
  caseLabel: string;
  url: string;
  flow: string[];
  screens: PrototypeScreensData;
}

/** Demonstração do fluxo: cada clique avança uma etapa no website e no celular ao mesmo tempo. */
export function PrototypeLayout({ data, step }: LayoutProps<PrototypeData>) {
  const { t, still, shift } = useMotionPreset();
  const screenAnim = {
    initial: still ? false : { opacity: 0, y: shift / 2 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
    transition: t(0, 0.32),
  } as const;

  return (
    <>
      <Reveal style={{ position: "absolute", left: 96, top: 132 }}>
        <h2 className="t-title" style={{ fontSize: 64 }}>
          <Rich text={data.title} />
        </h2>
      </Reveal>

      <ol style={{ position: "absolute", left: 96, top: 240, display: "flex", gap: 10, alignItems: "center" }}>
        {data.flow.map((label, i) => {
          const done = i < step;
          const active = i === step;
          return (
            <li key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 20px",
                  borderRadius: 999,
                  fontSize: 22,
                  fontWeight: 500,
                  transition: "all 240ms var(--ease)",
                  background: active ? "var(--product-primary)" : "var(--surface)",
                  color: active ? "var(--product-on-primary)" : done ? "var(--product-primary)" : "var(--ink-soft)",
                  border: `1px solid ${active || done ? "var(--product-primary)" : "var(--border)"}`,
                }}
              >
                {done ? (
                  <Icon name="check" size={20} />
                ) : (
                  <span className="t-num" style={{ fontSize: 18 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                {label}
              </span>
              {i < data.flow.length - 1 && <span style={{ width: 20, height: 2, background: "var(--border)" }} />}
            </li>
          );
        })}
      </ol>

      <Reveal delay={0.1} style={{ position: "absolute", right: 96, top: 252 }}>
        <span className="status status-info" style={{ fontSize: 17 }}>
          {data.caseLabel}
        </span>
      </Reveal>

      <Reveal delay={0.15} style={{ position: "absolute", left: 96, top: 330, width: 1220, height: 610 }}>
        <BrowserMock url={data.url} style={{ width: "100%", height: "100%" }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={step} {...screenAnim} style={{ position: "absolute", inset: 0 }}>
              <WebScreen step={step} d={data.screens} />
            </motion.div>
          </AnimatePresence>
        </BrowserMock>
      </Reveal>

      <Reveal delay={0.3} from="right" style={{ position: "absolute", left: 1408, top: 306, width: 416, height: 660 }}>
        <PhoneMock style={{ width: "100%", height: "100%" }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={step} {...screenAnim} style={{ position: "absolute", inset: 0 }}>
              <PhoneScreen step={step} d={data.screens} />
            </motion.div>
          </AnimatePresence>
        </PhoneMock>
      </Reveal>
    </>
  );
}
