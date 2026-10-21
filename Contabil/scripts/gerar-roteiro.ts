/**
 * Gera docs/ROTEIRO.md a partir de src/content (texto de tela, fala e layout).
 * Rode sempre que editar o conteúdo: npm run roteiro
 */
import { writeFileSync } from "node:fs";
import { slides } from "../src/content";

const SKIP = new Set(["icon", "x", "y", "rotate", "ok", "tone", "now", "current"]);
const clean = (s: string) => s.replace(/[[\]]/g, "").replace(/\n/g, " ");

function collect(value: unknown, depth = 0, out: string[] = [], asItem = false): string[] {
  const pad = "  ".repeat(depth);
  if (typeof value === "string") out.push(`${pad}- ${clean(value)}`);
  else if (Array.isArray(value)) value.forEach((v) => collect(v, depth, out, true));
  else if (value && typeof value === "object") {
    const entries = Object.entries(value).filter(([k]) => !SKIP.has(k));
    if (!asItem) {
      // Objeto de primeiro nível: um item por campo
      entries.forEach(([, v]) => (typeof v === "string" ? out.push(`${pad}- ${clean(v)}`) : collect(v, depth + 1, out)));
      return out;
    }
    const strings = entries.filter(([, v]) => typeof v === "string").map(([, v]) => clean(v as string));
    const nested = entries.filter(([, v]) => typeof v !== "string");
    if (strings.length) out.push(`${pad}- ${strings.join(" — ")}`);
    nested.forEach(([, v]) => collect(v, depth + 1, out));
  }
  return out;
}

const lines: string[] = [
  "# Roteiro — MVP de Conferência Contábil",
  "",
  "> Gerado automaticamente por `npm run roteiro` a partir de `src/content/`. Não edite à mão.",
  "",
  `${slides.length} slides · 16:9 · Criado por Emanuel Santos`,
  "",
];

slides.forEach((s, i) => {
  const n = String(i + 1).padStart(2, "0");
  lines.push(`## ${n} · ${s.title}`, "");
  lines.push(`**Layout:** ${s.layoutNote}`, "");
  if (s.steps) lines.push(`**Cliques internos:** ${s.steps}`, "");
  lines.push("**Texto de tela**", "", ...collect(s.data), "");
  lines.push("**Fala do apresentador**", "", ...s.notes.split("\n\n").map((p) => `> ${p}\n>`), "");
});

writeFileSync("docs/ROTEIRO.md", lines.join("\n"));
console.log(`✓ docs/ROTEIRO.md (${slides.length} slides)`);
