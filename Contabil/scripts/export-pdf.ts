/**
 * Exporta a apresentação em PDF (uma página 1920×1080 por slide, estado final).
 * Também gera PNGs em exports/slides/ (úteis para PowerPoint/Google Slides).
 * Requer `npm run build` antes. Uso: npm run export:pdf
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { chromium } from "playwright";
import { slides } from "../src/content";
import { startPreview } from "./serve";

const NAME = "mvp-conferencia-contabil";
mkdirSync("exports/slides", { recursive: true });

const { url, close } = await startPreview();
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto(`${url}?print=1`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(600);

const pages = page.locator("[data-print-page]");
const count = await pages.count();
for (let i = 0; i < count; i++) {
  await pages.nth(i).screenshot({ path: `exports/slides/slide-${String(i + 1).padStart(2, "0")}.png` });
}

await page.emulateMedia({ media: "print" });
await page.pdf({
  path: `exports/${NAME}.pdf`,
  width: "1920px",
  height: "1080px",
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

// Falas do apresentador para o export PPTX (scripts/export-pptx.py)
writeFileSync(
  "exports/notes.json",
  JSON.stringify(slides.map((sl, i) => ({ n: i + 1, title: sl.title, notes: sl.notes })), null, 2),
);

await browser.close();
await close();
console.log(`✓ exports/${NAME}.pdf (${count} páginas) e exports/slides/*.png`);
