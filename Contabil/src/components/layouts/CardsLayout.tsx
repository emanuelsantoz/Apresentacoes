import type { LayoutProps } from "../../types/slide";
import { Heading } from "../ui/Heading";
import { Icon, type IconKey } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";

export interface CardsData {
  title: string;
  lead?: string;
  cards: { icon: IconKey; title: string; text: string; tag: string }[];
  footnote?: string;
}

/** Até quatro cards numerados, lado a lado, entrando em sequência. */
export function CardsLayout({ data }: LayoutProps<CardsData>) {
  return (
    <>
      <Heading title={data.title} lead={data.lead} />
      <ul
        style={{
          position: "absolute",
          left: 96,
          right: 96,
          top: 450,
          display: "grid",
          gridTemplateColumns: `repeat(${data.cards.length}, 1fr)`,
          gap: 28,
        }}
      >
        {data.cards.map((c, i) => (
          <Reveal as="li" key={c.title} delay={0.25 + i * 0.12}>
            <div className="card" style={{ height: 410, padding: 40, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    display: "grid",
                    placeItems: "center",
                    background: "var(--status-ok-soft)",
                    color: "var(--product-primary)",
                  }}
                >
                  <Icon name={c.icon} size={32} />
                </span>
                <span className="t-num" style={{ fontSize: 22, color: "var(--ink-soft)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="t-h3" style={{ marginTop: 36 }}>
                {c.title}
              </p>
              <p className="t-body" style={{ marginTop: 14, fontSize: 26 }}>
                {c.text}
              </p>
              <span className="t-mono" style={{ marginTop: "auto", paddingTop: 20, fontSize: 18, color: "var(--product-primary)" }}>
                {c.tag}
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
      {data.footnote && (
        <Reveal delay={0.9} style={{ position: "absolute", left: 96, top: 900 }}>
          <span className="t-mono" style={{ color: "var(--ink-soft)" }}>
            {data.footnote}
          </span>
        </Reveal>
      )}
    </>
  );
}
