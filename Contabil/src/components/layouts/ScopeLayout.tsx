import type { LayoutProps } from "../../types/slide";
import { Heading } from "../ui/Heading";
import { Icon } from "../ui/Icon";
import { OpenFrame } from "../ui/OpenFrame";
import { Reveal } from "../ui/Reveal";

export interface ScopeData {
  title: string;
  counters: { value: string; label: string }[];
  inLabel: string;
  inside: string[];
  outLabel: string;
  outside: string[];
}

/** Escopo: contadores em destaque + comparação dentro × fora. */
export function ScopeLayout({ data }: LayoutProps<ScopeData>) {
  return (
    <>
      <Heading title={data.title} />

      <div style={{ position: "absolute", left: 96, top: 330, display: "flex", gap: 72 }}>
        {data.counters.map((c, i) => (
          <Reveal key={c.label} delay={0.15 + i * 0.12}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
              <span className="t-num" style={{ fontSize: 88, fontWeight: 600, color: "var(--product-primary)", letterSpacing: "-0.04em" }}>
                {c.value}
              </span>
              <span className="t-mono" style={{ color: "var(--ink)" }}>
                {c.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <div style={{ position: "absolute", left: 96, right: 96, top: 500, display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 40 }}>
        <Reveal delay={0.4}>
          <OpenFrame corner={56} delay={0.5} style={{ padding: "44px 48px", height: 400 }}>
            <span className="t-mono" style={{ color: "var(--product-primary)" }}>
              {data.inLabel}
            </span>
            <ul style={{ marginTop: 26, display: "grid", gap: 20 }}>
              {data.inside.map((s) => (
                <li key={s} style={{ display: "flex", gap: 18, alignItems: "center", fontSize: 30, fontWeight: 500 }}>
                  <span
                    style={{
                      flex: "none",
                      width: 40,
                      height: 40,
                      borderRadius: 99,
                      display: "grid",
                      placeItems: "center",
                      background: "var(--product-primary)",
                      color: "var(--product-on-primary)",
                    }}
                  >
                    <Icon name="check" size={22} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </OpenFrame>
        </Reveal>

        <Reveal delay={0.6}>
          <div style={{ padding: "44px 48px", height: 400, borderRadius: "var(--radius-editorial)", background: "var(--surface-sunken)" }}>
            <span className="t-mono" style={{ color: "var(--ink-soft)" }}>
              {data.outLabel}
            </span>
            <ul style={{ marginTop: 26, display: "grid", gap: 20 }}>
              {data.outside.map((s) => (
                <li key={s} style={{ display: "flex", gap: 18, alignItems: "center", fontSize: 28, color: "var(--ink-soft)" }}>
                  <span
                    style={{
                      flex: "none",
                      width: 40,
                      height: 40,
                      borderRadius: 99,
                      border: "2px dashed var(--n-400)",
                    }}
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </>
  );
}
