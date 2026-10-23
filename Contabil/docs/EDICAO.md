# Modo edição × modo apresentação

| | Modo apresentação | Modo edição |
|---|---|---|
| Como entrar | tecla **E** ou botão **Apresentar** | tecla **E** ou botão **Editar** (cápsula no canto) · ou abrir com `?editar` |
| Ao recarregar | volta no último modo usado (e no mesmo slide, pela URL `#/N`) · `?apresentar` força o modo apresentação | idem |
| Visual | limpo, controles somem após 2 s | faixa escura no topo + contornos ao passar o mouse |
| Clique nas laterais | navega | seleciona texto/card (use as setas para navegar) |
| Textos | fixos | **clique e digite direto no slide**; barra com tamanho, peso, cor e fundo |
| Cards | fixos | clique no card → alças para **mudar o tamanho arrastando** |
| Cards novos | aparecem normalmente | **+ Card de texto** cria um card; arraste para mover |
| Imagens | fixas | slide 2: passe o mouse na assinatura `ES/` → *Enviar imagem* ou arraste a foto |

## Idiomas
As edições de **texto**, **posição/tamanho** e os **cards novos** valem para o idioma aberto (PT e EN são editados separadamente — o texto e o espaço de cada idioma são diferentes). A etiqueta **PT/EN** na faixa do topo mostra qual idioma está sendo editado. **Ocultar slide** e as **imagens** valem para os dois idiomas.

No `edicoes.json`, as chaves em inglês têm o sufixo `@en` (ex.: `slide-04@en`).

## Editar um texto
1. Tecla **E**.
2. Passe o mouse: o texto editável ganha um contorno tracejado azul.
3. Clique: o cursor entra no próprio texto. Digite normalmente.
4. A barra flutuante tem:
   - **Tamanho** em px do palco 1920×1080 (aviso abaixo de 24 px);
   - **Peso** R / M / S / B;
   - **A**: cor do texto (paleta Emanuel + seletor livre);
   - **Marca-texto**: fundo colorido. Com palavras selecionadas, o fundo vale só para elas. Sem seleção, vale para o texto inteiro. **Sem fundo** remove.
5. **✓ Confirmar** (ou **Enter**) fecha e salva na hora. **✕ Cancelar** (ou **Esc**) desfaz as alterações daquele item. **↺** volta ao original.

Clicar em outro lugar também mantém a alteração (o salvamento é automático).

Títulos com destaque azul são dois trechos: clique na parte normal ou na parte azul separadamente.
Gráficos SVG e linhas desenhadas não são editáveis pela interface: altere em `src/content/` ou nos layouts.

## Cards
- **Cards existentes** (caixas com fundo, borda ou sombra): clique numa área do card fora do texto. Arraste as alças da **direita**, de **baixo** ou do **canto**. **↺** volta ao tamanho original.
- **Card novo**: botão **+ Card de texto** na faixa do topo. O card nasce no centro do slide com o texto selecionado; é só digitar.
  - Mover: arraste pela borda interna do card ou pelo botão **Mover**.
  - Fundo do card (inclui “sem fundo”) e **Excluir** (ou tecla **Delete** com o card selecionado) ficam na barra.
  - O texto do card tem as mesmas opções dos outros textos.

## Mover elementos e guias de alinhamento
- **Qualquer texto ou card** (original ou novo) pode ser movido:
  - texto: clique nele e arraste o botão azul **Mover** que aparece logo abaixo;
  - card: arraste pela área do card fora do texto (ou pelo **Mover**).
- **Setas** movem o card selecionado 1 px; **Shift+setas**, 10 px.
- **Ímã**: ao arrastar ou redimensionar, bordas e centros “grudam” nos outros elementos, no centro do slide e nas margens. Uma **linha rosa** mostra o alinhamento. Segure **Alt** para mover livre.
- O deslocamento usa a propriedade CSS `translate` (não interfere nas animações) e fica salvo como `dx`/`dy` em `box::posição`.

## Desfazer e status
- **Ctrl+Z** desfaz a última alteração; **Ctrl+Y** ou **Ctrl+Shift+Z** refaz. Os botões ↶ ↷ na faixa do topo fazem o mesmo.
- O status mostra **Salvando…**, **Salvo neste navegador · hh:mm** ou erro.
- O histórico vale para a sessão aberta. Ao recarregar, as edições continuam, mas o histórico recomeça.

## Onde as edições ficam
- Salvas automaticamente **neste navegador** (IndexedDB).
- **Salvar no projeto** (só com `npm run dev`): grava `public/edicoes.json`. O botão fica laranja quando há alterações fora do arquivo e mostra “Projeto em dia” quando está tudo gravado.
- Fora do modo dev: **Exportar** (baixa `edicoes.json`) e salve em `public/edicoes.json`.
- **Importar** carrega um `edicoes.json`. **Restaurar slide** remove as edições e os cards novos do slide atual (no idioma aberto). As duas ações podem ser desfeitas.
- Ao abrir: se há edições locais, elas valem; senão, vale `public/edicoes.json`.
- **PDF / PPTX**: o export lê `public/edicoes.json` — salve no projeto antes de rodar `npm run export:pdf`.

## Ocultar slides
1. Tecla **E**.
2. No slide que deve sair: **Ocultar slide** na faixa do topo, ou tecla **H**. Na **visão geral** (tecla **O**), o olho de cada miniatura faz o mesmo.
3. Tecla **E** de novo: a apresentação começa só com os slides ativos, renumerados (ex.: 1/11).

- No modo edição todos os slides continuam visíveis; os ocultos aparecem marcados.
- **Mostrar todos** devolve todos. Ctrl+Z desfaz.
- Para valer no PDF e para todo mundo: **Salvar no projeto** ou **Exportar** → `public/edicoes.json` (`"ocultos": ["slide-03", …]`).
- `?todos` na URL abre com todos os slides, ignorando os ocultos.

## Imagens
- Slide 2: a assinatura `ES/` pode virar o seu retrato. No modo edição, passe o mouse e use **Enviar imagem** (ou arraste a foto). Fica salva neste navegador.
- Para fixar no projeto (e no PDF): salve o arquivo como `public/images/retrato-emanuel.jpg`.

## Formato do `edicoes.json`
```json
{
  "versao": 2,
  "textos": {
    "slide-04": {
      "0.0.2.0.0::O valor chega pronto. ": { "texts": ["O valor sempre chega pronto. "], "color": "#2166C9", "fontSize": 80 },
      "box::0.0.2.1.0": { "width": 560, "height": 240, "dx": 24, "dy": -12 }
    },
    "slide-04@en": {}
  },
  "ocultos": ["slide-03"],
  "cards": {
    "slide-05": [
      { "id": "c1", "x": 750, "y": 420, "w": 440, "h": 190, "fill": "#FFFFFF", "t": { "texts": ["Novo texto"], "fontSize": 36, "fontWeight": 600 } }
    ]
  }
}
```
- Textos: a chave é *posição no slide* + *texto original*. `background` = fundo do texto inteiro; `marks` = fundo em trechos.
- Se você mudar o texto direto no código (`src/content/`), a edição antiga deixa de casar e é ignorada; refaça pela interface.

## Técnico
`src/edit/`:
- `EditMode.tsx`: contexto do modo; lembra o último modo.
- `editsStore.ts`: estado, histórico (desfazer/refazer), status, exportar, importar e salvar no projeto.
- `domText.ts`: aplica edições de texto e tamanho/posição no DOM sem quebrar o React.
- `highlights.ts`: fundo das palavras via CSS Custom Highlight API.
- `TextEditor.tsx`: edição direta (contenteditable), seleção, atalhos.
- `EditToolbar.tsx`: barra flutuante · `CardFrame.tsx`: alças e arraste · `snap.tsx`: ímã e guias.
- `NewCards.tsx`: camada dos cards novos · `EditBar.tsx`: faixa do topo · `notify.tsx`: avisos.

`SlideView` (em `components/stage`) aplica as edições e os cards novos em todo slide (deck, miniaturas e PDF). O endpoint `POST /__edicoes` do “Salvar no projeto” fica em `vite.config.ts` e só existe no servidor de desenvolvimento.
