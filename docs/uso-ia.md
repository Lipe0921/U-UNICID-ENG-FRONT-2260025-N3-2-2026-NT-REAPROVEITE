# Uso de Inteligência Artificial – Reaproveite

> Registro das interações com a IA, conforme exigido na 2ª entrega. Regras usadas pela IA: `rules/regra.mdc`.

## Ferramentas
- Claude (Anthropic), usado no VS Code e no chat.
- [Preencher outras ferramentas usadas pela equipe, se houver.]

## Registro de prompts

| Data | Prompt (resumo) | Resultado | Aceito | Corrigido |
|---|---|---|---|---|
| 11/11/2026 | Pedido para completar o projeto com base na lista de requisitos da 2ª entrega. | Validação em JS, mídia, pasta `js/`, menu responsivo, orçamento com três hospedagens e três domínios, e pasta `docs/`. | Sim, após revisão de código e testes no navegador. | Foram corrigidos: (1) o script do FAQ estava duplicado na página; (2) um marcador provisório ficou no formulário; (3) os preços da hospedagem foram confirmados em fontes públicas. |
| 11/11/2026 | Pedido para fazer “o resto que consegue”: validação W3C, Lighthouse e preços. | Validação com o motor oficial (`vnu`), correção de títulos e atributos, Lighthouse, preços de Railway e Vercel conferidos. | Sim. | Foram corrigidos: títulos `h3` depois de `h1`, `width="100%"` em iframes, e a informação de crédito do Railway. |
| [data] | [prompt] | [resultado] | [sim/não] | [o que foi corrigido] |

## Regras e contexto
- Arquivo `rules/regra.mdc`: define HTML5 semântico, CSS3 responsivo, WCAG 2.2 AA e estrutura de pastas. Usada como contexto em todas as sessões com a IA.

## Limitações da IA encontradas
- Não foi possível gerar narração em português (sem acesso ao serviço de voz). A narração foi gravada pela equipe.
- Não foi possível publicar nem atualizar o site a partir do ambiente da IA sem permissão de escrita no repositório.
- A IA não acessa o GitHub para publicar: a equipe precisa fazer o push e conferir o deploy no Railway.
