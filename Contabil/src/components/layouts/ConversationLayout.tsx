import type { LayoutProps } from "../../types/slide";
import { Heading } from "../ui/Heading";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";

export interface ConversationData {
  title: string;
  lead: string;
  quickLabel: string;
  quick: string[];
  formalLabel: string;
  formal: { title: string; detail: string }[];
}

/** Duas colunas: perguntas rápidas (passo 0) e blocos do questionário formal (passo 1). */
export function ConversationLayout({ data, step }: LayoutProps<ConversationData>) {
  return (
    <>
      <Heading title={data.title} lead={data.lead} width={1600} />

      <div style={{ position: "absolute", left: 96, top: 478, width: 780 }}>
        <Reveal delay={0.2}>
          <span className="t-mono" style={{ display: "flex", gap: 12, alignItems: "center", color: "var(--product-primary)" }}>
            <Icon name="chat" size={24} /> {data.quickLabel}
          </span>
        </Reveal>
        <ul style={{ marginTop: 26, display: "grid", gap: 16 }}>
          {data.quick.map((q, i) => (
            <Reveal as="li" key={q} delay={0.3 + i * 0.12} from="left">
              <span
                style={{
                  display: "inline-block",
                  padding: "18px 28px",
                  borderRadius: "24px 24px 24px 6px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-soft)",
                  fontSize: 28,
                  fontWeight: 500,
                }}
              >
                {q}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal show={step >= 1} delay={0.1} from="right" style={{ position: "absolute", left: 980, right: 96, top: 478 }}>
        <span className="t-mono" style={{ display: "flex", gap: 12, alignItems: "center", color: "var(--product-primary)" }}>
          <Icon name="clipboard" size={24} /> {data.formalLabel}
        </span>
        <ol className="card" style={{ marginTop: 26, padding: "8px 32px" }}>
          {data.formal.map((f, i) => (
            <li
              key={f.title}
              style={{
                display: "grid",
                gridTemplateColumns: "56px 260px 1fr",
                alignItems: "center",
                padding: "11px 0",
                borderTop: i ? "1px solid var(--border)" : "none",
              }}
            >
              <span className="t-num" style={{ color: "var(--product-primary)", fontSize: 20 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontSize: 25, fontWeight: 600 }}>{f.title}</span>
              <span style={{ fontSize: 21, color: "var(--ink-soft)" }}>{f.detail}</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </>
  );
}
