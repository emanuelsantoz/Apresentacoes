# Exportar PDF, PNG e PPTX

```bash
npm run build
npm run export:pdf
```

Gera:

- `exports/mvp-conferencia-contabil.pdf` (PT) e `exports/mvp-conferencia-contabil-en.pdf` (EN) — 12 páginas 1920×1080, estado final de cada slide;
- `exports/slides/` (PT) e `exports/slides-en/` (EN) — uma imagem por slide;
- `exports/notes.json` e `exports/notes-en.json` — falas, usadas pelo PPTX.

Os PDFs usam as edições de `public/edicoes.json` e deixam de fora os slides ocultos (renumerando). Para incluir todos, abra a rota com `?todos`. Antes de exportar, use **Salvar no projeto** no modo edição.

Como funciona: `scripts/export-pdf.ts` sobe o `vite preview`, abre `?print=1&lang=pt` e `?print=1&lang=en` no Chromium (Playwright), espera as fontes e imprime com `printBackground` e `@page { size: 1920px 1080px; margin: 0 }`.

Na primeira vez, instale o navegador do Playwright:

```bash
npx playwright install chromium
```

Se já houver um Chromium, aponte com `CHROMIUM_PATH=/caminho/chrome npm run export:pdf`.

## PowerPoint / Google Slides

```bash
pip install python-pptx
python scripts/export-pptx.py
```

Cria `exports/mvp-conferencia-contabil.pptx` e `exports/mvp-conferencia-contabil-en.pptx`: cada slide é a imagem em tela cheia, e a fala do apresentador vai para as anotações. No Google Slides: *Arquivo → Importar slides*. Os textos ficam como imagem; para editar, use o projeto.

## Verificar overflow

```bash
npm run build && npm run check:overflow
```
