import type { LayoutProps } from "../../types/slide";
import { Icon, type IconKey } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { Rich } from "../ui/Rich";

export interface ObjectiveData {
  title: string;
  lead: string;
  scenarioLabel: string;
  scenario: string[];
  cardLabel: string;
  values: { label: string; text: string }[];
  details: { icon: IconKey; label: string; text: string }[];
}

/** Objetivo: mensagem à esquerda + anatomia de uma conferência à direita. */
export function ObjectiveLayout({ data }: LayoutProps<ObjectiveData>) {
  return (
    <>
      <div style={{ position: "absolute", left: 96, top: 150, width: 820 }}>
        <Reveal>
          <h2 className="t-title">
            <Rich text={data.title} />
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="t-lead" style={{ marginTop: 32 }}>
            {data.lead}
          </p>
        </Reveal>
      </div>

      <div style={{ position: "absolute", left: 96, bottom: 150, width: 820 }}>
        <Reveal delay={0.3}>
          <span className="t-mono" style={{ color: "var(--ink-soft)" }}>
            {data.scenarioLabel}
          </span>
        </Reveal>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 22 }}>
          {data.scenario.map((s, i) => (
            <Reveal key={s} delay={0.38 + i * 0.08}>
              <span className="pill" style={{ fontSize: 24, fontWeight: 500 }}>
                {s}
              </span>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.2} from="right" style={{ position: "absolute", left: 1010, right: 96, top: 170 }}>
        <div className="card" style={{ padding: 44, borderRadius: "var(--radius-editorial)" }}>
          <span className="t-mono" style={{ color: "var(--product-primary)" }}>
            {data.cardLabel}
          </span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 28 }}>
            {data.values.map((v, i) => (
              <Reveal key={v.label} delay={0.5 + i * 0.12}>
                <div
                  style={{
                    padding: "22px 22px",
                    borderRadius: 14,
                    background: i === 2 ? "var(--status-ok-soft)" : "var(--surface-sunken)",
                    minHeight: 168,
                  }}
                >
                  <p className="t-mono" style={{ fontSize: 18, color: i === 2 ? "var(--product-primary)" : "var(--ink-soft)" }}>
                    {v.label}
                  </p>
                  <p style={{ marginTop: 12, fontSize: 24, lineHeight: 1.35, color: "var(--ink)" }}>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <ul style={{ marginTop: 28, display: "grid", gap: 4 }}>
            {data.details.map((d, i) => (
              <Reveal as="li" key={d.label} delay={0.9 + i * 0.12}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "44px 170px 1fr",
                    alignItems: "center",
                    padding: "18px 0",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <span style={{ color: "var(--product-primary)" }}>
                    <Icon name={d.icon} size={28} />
                  </span>
                  <span className="t-mono" style={{ fontSize: 18, color: "var(--ink-soft)" }}>
                    {d.label}
                  </span>
                  <span style={{ fontSize: 26, color: "var(--ink)" }}>{d.text}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Reveal>
    </>
  );
}
