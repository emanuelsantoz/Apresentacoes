import { Fragment } from "react";

/**
 * Texto com destaque editorial: trechos entre [colchetes] recebem a cor
 * de destaque do produto. Use no máximo um destaque por bloco.
 * Use "\n" para forçar quebra de linha.
 * Ex.: "Conferência mais [clara e rastreável]."
 */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("[") ? (
          <span key={i} className="hl">
            {p.slice(1, -1)}
          </span>
        ) : (
          <Fragment key={i}>
            {p.split("\n").map((line, j) => (
              <Fragment key={j}>
                {j > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </Fragment>
        ),
      )}
    </>
  );
}
