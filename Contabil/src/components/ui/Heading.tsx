import { Reveal } from "./Reveal";
import { Rich } from "./Rich";

interface HeadingProps {
  title: string;
  lead?: string;
  width?: number;
  top?: number;
}

/** Bloco título + linha de apoio, posicionado no topo da área útil. */
export function Heading({ title, lead, width = 1400, top = 140 }: HeadingProps) {
  return (
    <div style={{ position: "absolute", top, left: 96, width }}>
      <Reveal>
        <h2 className="t-title">
          <Rich text={title} />
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.12}>
          <p className="t-lead" style={{ marginTop: 24, maxWidth: 1240 }}>
            <Rich text={lead} />
          </p>
        </Reveal>
      )}
    </div>
  );
}
