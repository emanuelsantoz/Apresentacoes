# Apresentação — MVP de Conferência Contábil

Apresentação comercial interativa (12 slides, 16:9), **em português e inglês**, do MVP de conferência contábil para empresas do Simples Nacional. Projeto **React + Vite + TypeScript**, independente, com a assinatura **Emanuel Santos** (regra 70/30: produto em primeiro plano).

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
| `L` | troca o idioma (PT ⇄ EN) |
| `E` | modo edição ⇄ apresentação |
| `H` | (no modo edição) oculta/mostra o slide atual |
| `Ctrl+Z` / `Ctrl+Y` | (no modo edição) desfaz / refaz |
| `O` | visão geral (miniaturas) |
| `N` | fala do apresentador |
| `F` | tela cheia |
| `Esc` | fecha a visão geral |

Clique nas laterais ou deslize no celular para navegar. A URL guarda a posição: `#/7/2` = slide 7, passo 2.

## Modo edição

Tecla **E** (ou botão **Editar** na cápsula de controles): clique em qualquer texto e digite direto no slide; mude tamanho, peso, cor e marca-texto; redimensione e mova cards (com guias de alinhamento); crie cards de texto; troque a imagem do slide 2; oculte slides da apresentação; desfaça com Ctrl+Z. As edições ficam salvas no navegador e, com **Salvar no projeto** (em `npm run dev`), em `public/edicoes.json` — que também vale para o PDF. Detalhes em `EDICAO.md`.

## Idioma

Na cápsula de controles (canto superior direito; embaixo no modo edição) há o seletor com as bandeiras 🇧🇷 **PT** / 🇺🇸 **EN** — aparece ao mexer o mouse e some após 2 s. Ele troca **tudo**: textos dos slides, telas do protótipo, rodapé, fala do apresentador e o título da aba. Atalho: tecla `L`.

O idioma fica na URL: `http://localhost:5173/?lang=en#/1` abre direto em inglês.

## Scripts

| Script | O que faz |
|---|---|
| `npm run dev` | servidor de desenvolvimento |
| `npm run build` | typecheck + build em `dist/` |
| `npm run preview` | serve o build em `http://localhost:4173` |
| `npm run typecheck` | checagem de tipos |
| `npm run check:overflow` | falha se algum slide extrapolar o palco (requer build) |
| `npm run export:pdf` | gera os PDFs em PT e EN + PNGs (requer build) |
| `npm run roteiro` | regenera `docs/ROTEIRO.md` (PT) e `docs/ROTEIRO-EN.md` (EN) |

`exports/` também traz os `.pptx` (PT e EN) (uma imagem por slide + fala nas anotações) para abrir no PowerPoint ou importar no Google Slides. Ver `EXPORTAR-PDF.md`.

## Documentação

- `EDICAO.md` — modo edição: textos, cards, imagens, ocultar slides, salvar
- `ROTEIRO.md` / `ROTEIRO-EN.md` — texto de tela, fala e layout de cada slide
- `ARQUITETURA.md` — pastas e fluxo de renderização
- `COMO-EDITAR.md` — textos, ordem, novos slides
- `CONTEUDO.md` — mapa slide → arquivo → layout
- `DESIGN-TOKENS.md` — cores, tipografia, decisões
- `ANIMACOES.md` — movimento e passos
- `EXPORTAR-PDF.md` — PDF, PNG e PPTX
- `REFERENCIAS.md` — fontes consultadas e pendências
