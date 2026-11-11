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

## 2. Validação HTML (html-validate)

- 10 páginas analisadas.
- Erros de `no-implicit-button-type` e `wcag/h63` corrigidos.
- 15 erros restantes, todos do tipo `no-inline-style`: atributos `style` inline, que já existiam no projeto original e são válidos no W3C.
- **Pendente:** rodar o W3C Validator (validator.w3.org) em cada página e anexar o resultado aqui.

## 3. Acessibilidade
- `lang="pt-BR"` em todas as páginas.
- Um `<h1>` por página.
- `alt` em todas as imagens.
- Campos com `<label for>`.
- Foco visível (`outline`).
- **Pendente:** rodar o Lighthouse no Chrome DevTools e anexar o print.
