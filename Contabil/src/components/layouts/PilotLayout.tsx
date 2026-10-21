import type { LayoutProps } from "../../types/slide";
import { Heading } from "../ui/Heading";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";

export interface PilotData {
  title: string;
  lead: string;
  planLabel: string;
  plan: string[];
  criteriaLabel: string;
  criteria: string[];
  decisionLabel: string;
  decision: string;
}

/** Proposta de piloto: plano em 4 passos + critérios de sucesso + decisão. */
export function PilotLayout({ data, step }: LayoutProps<PilotData>) {
  return (
    <>
      <Heading title={data.title} lead={data.lead} />

      <div style={{ position: "absolute", left: 96, top: 420, width: 800 }}>
        <Reveal delay={0.2}>
          <span className="t-mono" style={{ color: "var(--ink-soft)" }}>
            {data.planLabel}
          </span>
        </Reveal>
        <ol style={{ marginTop: 22 }}>
          {data.plan.map((p, i) => (
            <Reveal as="li" key={p} delay={0.3 + i * 0.12}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "72px 1fr",
                  alignItems: "center",
                  padding: "20px 0",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <span className="t-num" style={{ fontSize: 26, color: "var(--highlight)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: 30, fontWeight: 500 }}>{p}</span>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal
        show={step >= 1}
        from="right"
        className="card"
        style={{ position: "absolute", left: 1000, right: 96, top: 420, padding: "40px 44px", borderRadius: "var(--radius-editorial)" }}
      >
        <span className="t-mono" style={{ color: "var(--highlight)" }}>
          {data.criteriaLabel}
        </span>
        <ul style={{ marginTop: 22, display: "grid", gap: 20 }}>
          {data.criteria.map((c) => (
            <li key={c} style={{ display: "flex", gap: 16, alignItems: "flex-start", fontSize: 27, lineHeight: 1.35 }}>
              <span style={{ color: "var(--highlight)", paddingTop: 2 }}>
                <Icon name="check" size={28} />
              </span>
              {c}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal
        show={step >= 1}
        delay={0.3}
        style={{
          position: "absolute",
          left: 96,
          right: 96,
          top: 880,
          height: 76,
          borderRadius: 16,
          background: "var(--product-primary)",
          color: "var(--product-on-primary)",
          display: "flex",
          alignItems: "center",
          gap: 24,
          padding: "0 32px",
        }}
      >
        <span className="t-mono" style={{ fontWeight: 600 }}>
          {data.decisionLabel}
        </span>
        <Icon name="arrow" size={26} />
        <span style={{ fontSize: 28, fontWeight: 500 }}>{data.decision}</span>
      </Reveal>
    </>
  );
}
