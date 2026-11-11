# Melhorias do MVP (1ª entrega → 2ª entrega)

> A lista oficial de pontos apontados pelos professores deve ser colada aqui. Abaixo estão as melhorias feitas a partir do estado do repositório.

| # | Ponto do MVP | Antes | Depois | Evidência |
|---|---|---|---|---|
| 1 | JavaScript obrigatório | Só havia um script de FAQ inline em `contato.html`. | Arquivos `js/contato.js` e `js/menu.js`, com validação, localStorage, FAQ e menu. | `docs/evidencias/contato-desktop.png` |
| 2 | Formulário validado | Só validação nativa do HTML5; o envio recarregava a página sem mensagens. | Validação em JS com `preventDefault`, mensagens de erro, borda vermelha e foco no primeiro erro. | `docs/evidencias-testes.md` |
| 3 | Rascunho do formulário | Não existia. | Rascunho salvo em `localStorage` e recuperado ao recarregar. | `docs/evidencias-testes.md` |
| 4 | Multimídia (video, audio, iframe) | Só iframes (YouTube e mapa), sem `<video>` nem `<audio>`. | Vídeo com poster e player de áudio, além dos iframes. | `docs/evidencias/midia-desktop.png` |
| 5 | Menu no celular | Menu quebrava em linhas no celular. | Botão “Menu” que abre e fecha a navegação, com `aria-expanded`. | `docs/evidencias/celular-menu-aberto.png` |
| 6 | Orçamento | Um domínio e quatro linhas misturadas. | Duas tabelas (3 hospedagens e 3 domínios), justificativa e fontes. | `orcamento_hospedagem.html` |
| 7 | Documentação em `/docs` | README na raiz. | Documentação completa em `docs/`. | pasta `docs/` |
| 8 | Acessibilidade | Tabelas sem `scope`; botões sem `type`. | `scope` nos cabeçalhos e `type="button"` nos botões. | html-validate |
