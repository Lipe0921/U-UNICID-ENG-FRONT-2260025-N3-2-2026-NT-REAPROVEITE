# Evidências de Testes

Testes feitos em 11/11/2026 com Chromium (Playwright) e html-validate. Prints em `docs/evidencias/`.

## 1. Testes de comportamento (25 verificações)

| Página | Teste | Resultado |
|---|---|---|
| contato | Envio vazio não navega e mostra erro nos 5 campos | Passou |
| contato | Foco vai para o primeiro campo inválido | Passou |
| contato | Campo inválido recebe borda vermelha e `aria-invalid="true"` | Passou |
| contato | Telefone fora do formato mostra erro | Passou |
| contato | Nome sem sobrenome mostra erro | Passou |
| contato | Data passada é recusada | Passou |
| contato | Rascunho é restaurado após recarregar a página | Passou |
| contato | Envio válido mostra confirmação e apaga o rascunho | Passou |
| contato | Assistente começa fechado e abre ao clicar, com `aria-expanded` | Passou |
| contato | FAQ responde à palavra-chave “doar” | Passou |
| contato | Sem erros de JavaScript na página | Passou |
| índice (celular, 390 px) | Menu começa fechado, botão “Menu” visível | Passou |
| índice (celular) | Menu abre e `aria-expanded` vira `true` | Passou |
| índice (celular) | Sem rolagem horizontal | Passou |
| contato (celular) | Formulário sem rolagem horizontal | Passou |
| midia | Vídeo carrega metadados (15 s) | Passou |
| midia | Áudio carrega metadados (5 s) | Passou |
| orcamento | Duas tabelas presentes | Passou |

**Resultado:** 25 de 25 verificações passaram.

## 2. Validação W3C (motor oficial Nu, `vnu`)

Resultado final: **0 erros nas 10 páginas HTML**.

Correções feitas durante a validação:
- Títulos `h3` que vinham logo após o `h1` passaram a ser `h2` (acessibilidade, impacto, midia, noticias, projetos e sobre).
- Atributo `width="100%"` removido de iframes e de vídeo (a largura já vem do CSS).

Observação: o `vnu` também foi rodado no CSS como se fosse HTML e acusou ausência de `<!DOCTYPE>`. Isso é falso positivo, porque o CSS não é HTML. Para validar o CSS, use o **W3C CSS Validator** (jigsaw.w3.org/css-validator), que ainda deve ser feito pela equipe.

## 2.1 Validação de boas práticas (html-validate)
- 15 avisos restantes, todos `no-inline-style`: atributos `style` inline, que já existiam no projeto original e são válidos no W3C.

## 3. Lighthouse (Chromium, versão 12)

| Página | Acessibilidade | Boas práticas | SEO |
|---|---|---|---|
| index.html | 100 | 96 | 100 |
| contato.html | 100 | 96 | 100 |
| midia.html | 100 | 96 | 100 |
| orcamento_hospedagem.html | 100 | 96 | 100 |

- A perda de 4 pontos em boas práticas vem do item “errors-in-console”. Provavelmente são os iframes de terceiros (YouTube e Google Maps), que não carregam no ambiente de teste. Não foi confirmado: abrir o site no navegador e conferir o console.

## 4. Acessibilidade (verificada por código e por testes)
- `lang="pt-BR"` em todas as páginas.
- Um `<h1>` por página e hierarquia de títulos sem saltos.
- `alt` em todas as imagens.
- Campos com `<label for>` e `aria-describedby` nas mensagens de erro.
- Foco visível (`outline`).
