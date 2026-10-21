# Apresentação — MVP de Conferência Contábil

Apresentação comercial interativa (12 slides, 16:9) do MVP de conferência contábil para empresas do Simples Nacional. Projeto **React + Vite + TypeScript**, independente, com a assinatura **Emanuel Santos** (regra 70/30: produto em primeiro plano).

## Rodar

```bash
npm install
npm run dev          # http://localhost:5173
```

## Navegação

| Tecla | Ação |
|---|---|
| `→` `Espaço` `PageDown` | avança (passo interno, depois slide) |
| `←` `PageUp` | volta |
| `Home` / `End` | primeiro / último slide |
| número + `Enter` | salta para o slide (ex.: `7` `Enter`) |
| `O` | visão geral (miniaturas) |
| `N` | fala do apresentador |
| `F` | tela cheia |
| `Esc` | fecha a visão geral |

Clique nas laterais ou deslize no celular para navegar. A URL guarda a posição: `#/7/2` = slide 7, passo 2.

## Scripts

| Script | O que faz |
|---|---|
| `npm run dev` | servidor de desenvolvimento |
| `npm run build` | typecheck + build em `dist/` |
| `npm run preview` | serve o build em `http://localhost:4173` |
| `npm run typecheck` | checagem de tipos |
| `npm run check:overflow` | falha se algum slide extrapolar o palco (requer build) |
| `npm run export:pdf` | gera `exports/mvp-conferencia-contabil.pdf` + PNGs (requer build) |
| `npm run roteiro` | regenera `docs/ROTEIRO.md` a partir do conteúdo |

`exports/` também traz um `.pptx` (uma imagem por slide + fala nas anotações) para abrir no PowerPoint ou importar no Google Slides. Ver `EXPORTAR-PDF.md`.

## Documentação

- `ROTEIRO.md` — texto de tela, fala e layout de cada slide
- `ARQUITETURA.md` — pastas e fluxo de renderização
- `COMO-EDITAR.md` — textos, ordem, novos slides
- `CONTEUDO.md` — mapa slide → arquivo → layout
- `DESIGN-TOKENS.md` — cores, tipografia, decisões
- `ANIMACOES.md` — movimento e passos
- `EXPORTAR-PDF.md` — PDF, PNG e PPTX
- `REFERENCIAS.md` — fontes consultadas e pendências
