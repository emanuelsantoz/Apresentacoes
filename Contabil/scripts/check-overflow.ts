/**
 * Verifica, nos dois idiomas, se algum slide tem conteúdo que extrapola
 * o palco 1920×1080, caixa de altura fixa estourada ou rolagem interna.
 * Requer `npm run build` antes. Uso: npm run check:overflow
 */
import { chromium } from "playwright";
import { LOCALES } from "../src/i18n/locale";
import { startPreview } from "./serve";

const { url, close } = await startPreview();
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const problems: string[] = [];

for (const locale of LOCALES) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto(`${url}?print=1&lang=${locale}`, { waitUntil: "networkidle" });
  await page.waitForSelector("[data-print-page]");
  await page.evaluate(() => document.fonts.ready);

  const found = await page.evaluate(() => {
    const out: string[] = [];
    document.querySelectorAll<HTMLElement>("[data-print-page]").forEach((pageEl, i) => {
      const box = pageEl.getBoundingClientRect();
      pageEl.querySelectorAll<HTMLElement>("*").forEach((el) => {
        if (el.closest("svg") && el.tagName !== "svg") return;
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        const txt = `"${(el.textContent ?? "").slice(0, 40)}"`;
        const outside = r.right > box.right + 1 || r.bottom > box.bottom + 1 || r.left < box.left - 1 || r.top < box.top - 1;
        const oy = getComputedStyle(el).overflowY;
        const scrolls = el.scrollHeight > el.clientHeight + 1 && oy !== "hidden" && oy !== "visible";
        const fixedHeight = el.style.height !== "" && !el.style.height.includes("%");
        if (fixedHeight && el.scrollHeight > el.clientHeight + 2)
          out.push(`slide ${i + 1}: caixa estourada (${el.scrollHeight}px > ${el.clientHeight}px) ${txt}`);
        if (outside) out.push(`slide ${i + 1}: fora do palco ${txt}`);
        if (scrolls) out.push(`slide ${i + 1}: com rolagem ${txt}`);
      });
    });
    return out;
  });
  problems.push(...found.map((p) => `[${locale}] ${p}`));
  await page.close();
}

await browser.close();
await close();

if (problems.length) {
  console.error(`✗ ${problems.length} problema(s) de overflow:\n` + problems.slice(0, 40).join("\n"));
  process.exit(1);
}
console.log(`✓ Nenhum slide com overflow ou rolagem (${LOCALES.join(", ")}).`);
