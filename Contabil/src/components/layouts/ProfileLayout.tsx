import type { LayoutProps } from "../../types/slide";
import { OpenFrame } from "../ui/OpenFrame";
import { Reveal } from "../ui/Reveal";

export interface ProfileData {
  mark: string;
  name: string;
  descriptor: string;
  pillars: { tag: string; title: string; text: string }[];
  context: string;
}

/** Apresentação breve do autor: assinatura ES/ na moldura + três pilares. */
export function ProfileLayout({ data }: LayoutProps<ProfileData>) {
  return (
    <>
      <OpenFrame
        corner={72}
        style={{
          position: "absolute",
          left: 96,
          top: 180,
          width: 560,
          height: 720,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
        }}
      >
        <Reveal delay={0.2}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 260,
              letterSpacing: "-0.06em",
              lineHeight: 0.9,
              color: "var(--product-primary)",
            }}
          >
            {data.mark}
          </span>
        </Reveal>
        <Reveal delay={0.32}>
          <p className="t-h3" style={{ fontSize: 44 }}>
            {data.name}
          </p>
          <p className="t-body" style={{ marginTop: 16, fontSize: 26 }}>
            {data.descriptor}
          </p>
        </Reveal>
      </OpenFrame>

      <div style={{ position: "absolute", left: 800, top: 200, right: 96 }}>
        <ul style={{ display: "grid", gap: 28 }}>
          {data.pillars.map((p, i) => (
            <Reveal as="li" key={p.tag} delay={0.3 + i * 0.14} from="right">
              <div
                className="card"
                style={{ display: "grid", gridTemplateColumns: "220px 1fr", alignItems: "center", gap: 32, padding: "36px 44px" }}
              >
                <span className="t-mono" style={{ color: "var(--product-primary)" }}>
                  {p.tag}
                </span>
                <div>
                  <p className="t-h3">{p.title}</p>
                  <p className="t-body" style={{ marginTop: 8 }}>
                    {p.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.8}>
          <p className="t-mono" style={{ marginTop: 44, color: "var(--ink-soft)" }}>
            {data.context}
          </p>
        </Reveal>
      </div>
    </>
  );
}
