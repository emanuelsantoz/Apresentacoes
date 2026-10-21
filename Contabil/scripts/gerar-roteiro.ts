/**
 * Gera docs/ROTEIRO.md (pt) e docs/ROTEIRO-EN.md (en) a partir de src/content
 * (texto de tela, fala e layout). Rode sempre que editar o conteúdo: npm run roteiro
 */
import { writeFileSync } from "node:fs";
import { slides } from "../src/content";
import type { Locale } from "../src/i18n/locale";

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

const T: Record<Locale, Record<string, string>> = {
  pt: {
    file: "docs/ROTEIRO.md",
    h1: "Roteiro — MVP de Conferência Contábil",
    auto: "Gerado automaticamente por `npm run roteiro` a partir de `src/content/`. Não edite à mão.",
    meta: "slides · 16:9 · Criado por Emanuel Santos",
    layout: "Layout",
    clicks: "Cliques internos",
    screen: "Texto de tela",
    notes: "Fala do apresentador",
  },
  en: {
    file: "docs/ROTEIRO-EN.md",
    h1: "Script — Accounting Review MVP",
    auto: "Generated automatically by `npm run roteiro` from `src/content/`. Do not edit by hand.",
    meta: "slides · 16:9 · Created by Emanuel Santos",
    layout: "Layout",
    clicks: "Internal clicks",
    screen: "On-screen text",
    notes: "Speaker notes",
  },
};

for (const locale of ["pt", "en"] as Locale[]) {
  const t = T[locale];
  const lines: string[] = [`# ${t.h1}`, "", `> ${t.auto}`, "", `${slides.length} ${t.meta}`, ""];
  slides.forEach((s, i) => {
    const c = s.content[locale];
    const n = String(i + 1).padStart(2, "0");
    lines.push(`## ${n} · ${c.title}`, "");
    lines.push(`**${t.layout}:** ${c.layoutNote}`, "");
    if (s.steps) lines.push(`**${t.clicks}:** ${s.steps}`, "");
    lines.push(`**${t.screen}**`, "", ...collect(c.data), "");
    lines.push(`**${t.notes}**`, "", ...c.notes.split("\n\n").map((p) => `> ${p}\n>`), "");
  });
  writeFileSync(t.file, lines.join("\n"));
  console.log(`✓ ${t.file} (${slides.length} slides)`);
}
