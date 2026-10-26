import type { LayoutProps } from "../../types/slide";
import { isPrintRoute } from "../../hooks/usePresentationMode";
import { ImageSlot } from "../ui/ImageSlot";
import { OpenFrame } from "../ui/OpenFrame";
import { Reveal } from "../ui/Reveal";

export interface ProfileData {
  mark: string;
  /** Texto alternativo do retrato (public/images/retrato-emanuel.jpg). */
  portraitAlt: string;
  name: string;
  descriptor: string;
  pillars: { tag: string; title: string; text: string }[];
  context: string;
}

/** Apresentação breve do autor: assinatura ES/ na moldura + três pilares. */
export function ProfileLayout({ data, step }: LayoutProps<ProfileData>) {
  const print = isPrintRoute();
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
        <Reveal delay={0.2} style={{ position: "relative", width: 432, height: 400, borderRadius: 20 }}>
          {/* Retrato opcional: sem imagem, mostra a assinatura ES/. No modo edição, arraste uma foto aqui. */}
          <ImageSlot
            id="retrato-emanuel"
            label={data.portraitAlt}
            fit="cover"
            position="center top"
            fallback={
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
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
            }
          />
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
            <Reveal as="li" key={p.tag} show={print || step >= i + 1} delay={0.12} from="right">
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
        <Reveal show={print || step >= data.pillars.length} delay={0.2}>
          <p className="t-mono" style={{ marginTop: 44, color: "var(--ink-soft)" }}>
            {data.context}
          </p>
        </Reveal>
      </div>
    </>
  );
}
