/**
 * Exporta a apresentação em PDF (uma página 1920×1080 por slide, estado final)
 * nos dois idiomas, mais PNGs e falas para o PPTX.
 * Requer `npm run build` antes. Uso: npm run export:pdf
 *
 * Saída:
 *   exports/mvp-conferencia-contabil.pdf     (pt)   exports/slides/*.png     exports/notes.json
 *   exports/mvp-conferencia-contabil-en.pdf  (en)   exports/slides-en/*.png  exports/notes-en.json
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { chromium } from "playwright";
import { LOCALES } from "../src/i18n/locale";
import { slides } from "../src/content";
import { startPreview } from "./serve";

const NAME = "mvp-conferencia-contabil";
const suffix = (l: string) => (l === "pt" ? "" : `-${l}`);

const { url, close } = await startPreview();
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });

for (const locale of LOCALES) {
  const dir = `exports/slides${suffix(locale)}`;
  mkdirSync(dir, { recursive: true });

  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto(`${url}?print=1&lang=${locale}`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(600);

  const pages = page.locator("[data-print-page]");
  const count = await pages.count();
  for (let i = 0; i < count; i++) {
    await pages.nth(i).screenshot({ path: `${dir}/slide-${String(i + 1).padStart(2, "0")}.png` });
  }

  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: `exports/${NAME}${suffix(locale)}.pdf`,
    width: "1920px",
    height: "1080px",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });
  await page.close();

  // Falas do apresentador para o export PPTX (scripts/export-pptx.py)
  writeFileSync(
    `exports/notes${suffix(locale)}.json`,
    JSON.stringify(
      slides.map((s, i) => ({ n: i + 1, title: s.content[locale].title, notes: s.content[locale].notes })),
      null,
      2,
    ),
  );
  console.log(`✓ [${locale}] exports/${NAME}${suffix(locale)}.pdf (${count} páginas) e ${dir}/*.png`);
}

await browser.close();
await close();
