# Referências

| Fonte | O que foi usado | Onde |
|---|---|---|
| Roteiro proposto (mensagem de briefing) | estrutura de 12 slides, o que preservar/evoluir, limites, paleta | todos — `content-source/roteiro-proposto.md` |
| `Questionário — MVP de Conferência Contábil.txt` | cenário de referência (SP, Simples Nacional, Anexo IV, sócia com pró-labore, estagiária 6 h/dia), entradas foto/PDF/Excel, "toda divergência aparece", pedido de nova foto quando a leitura falha, validação por profissional habilitado, 7 blocos do questionário, **caso simulado** (receita R$ 30.000, RBT12 R$ 360.000, DAS R$ 2.025, pró-labore R$ 7.000, CPP R$ 1.400) | 4, 5, 6, 7, 9, 10 — `content-source/questionario-mvp.txt` |
| `Roteiro_Analise_e_Desenvolvimento_de_Sistemas_II_-_PEX.docx` | PEX = Projeto de Extensão; etapas diagnóstico → coleta → proposta | 3 |
| `emanuel-brand-system/docs/01-fundacao-da-marca.md` | voz (direta, específica, sem clichês), narrativa tensão → crença → construção → evidência → continuidade, conceito "Ideias ganham forma e continuam" | copy e ordem; slide 12 |
| `docs/02-sistema-visual.md` + `tokens/brand.css` | paleta, Space Grotesk/Inter/JetBrains Mono, grid 48 px, moldura aberta, ritmo de movimento, endosso "Criado por Emanuel Santos", `ES/` | tokens, SlideFrame, OpenFrame |
| `docs/03-arquitetura-de-produtos.md` | regra 70/30 e contrato `--product-*` | tema provisório; autoria só nos slides 2–3 |
| Skill de apresentações (harness) | estrutura React + Vite, palco 1920×1080, navegação, passos, `?print=1`, export PDF, docs | projeto inteiro — **somente a parte técnica**; nenhuma identidade visual ou verbal de terceiros foi usada |

## Cálculo exibido no slide 7

DAS esperado = receita do mês × alíquota efetiva, com alíquota efetiva = (RBT12 × alíquota nominal − parcela a deduzir) ÷ RBT12. Anexo IV, 2ª faixa (RBT12 de R$ 180.000,01 a R$ 360.000,00): 9% e R$ 8.100,00 → 6,75% → R$ 2.025,00, igual ao DAS simulado do questionário. CPP de 20% sobre o pró-labore (recolhida fora do DAS no Anexo IV) = R$ 1.400,00, igual à premissa. **Premissas de teste — confirmar tabela e regras com o profissional contábil antes de usar dados reais.**

## Pendências

- Nome da instituição de ensino e da empresa participante: não exibidos (decisão do autor).
- Retrato de Emanuel: não usado (sem foto aprovada); o slide 2 usa a assinatura `ES/`.
- Nome/identidade do produto: inexistentes nesta etapa, por decisão.
- Telas do protótipo são ilustrativas (recriadas em React), não capturas de um sistema em produção.
