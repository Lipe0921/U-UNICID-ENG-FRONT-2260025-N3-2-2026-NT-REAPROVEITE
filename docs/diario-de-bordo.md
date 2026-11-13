# Diário de Bordo – Reaproveite

> Registro das etapas do projeto, em ordem cronológica.

## 2/10/2026 – Definição do tema e início do CSS
- **Decisão:** escolher sustentabilidade e aproveitamento de alimentos como tema.
- **Aprendizado:** o tema precisa ser ligado ao público com deficiência, como exige o enunciado.
- **Trabalho:** Arthur e Vinicius começaram o CSS. Davi fez as pesquisas para o conteúdo. Felipe fez o escopo do site.
- **Dificuldade:** o tema não foi discutido logo no início. Depois, todos concordaram, e as tarefas foram atribuídas.

## Estrutura do MVP (1ª entrega)
- **Decisão:** criar 10 páginas HTML com menu, cabeçalho e rodapé repetidos.
- **Dificuldade:** nenhuma registrada.

## 9/10/2026 – Vídeos e formulários
- **Decisão:** implementar os vídeos e os formulários do site.
- **Trabalho:** Felipe fez os vídeos e os formulários.
- **Dificuldade:** pouca. A parte do formulário apresentou erros com frequência durante os testes.

## 23/10/2026 – Aplicação do JavaScript
- **Decisão:** acrescentar JavaScript nas páginas, com validação do formulário, mensagens de erro e rascunho salvo em `localStorage`.
- **Trabalho:** Felipe aplicou o JavaScript.
- **Dificuldade:** a equipe nunca tinha usado JavaScript antes. A parte de Java/JavaScript foi a mais difícil do projeto, e foi preciso estudar a sintaxe, os eventos e o `localStorage` antes de aplicar no site.
- **Dificuldade:** o formulário enviava mesmo com campos inválidos, porque não havia `preventDefault`. Solução: `novalidate` no formulário e validação própria em `js/contato.js`.
- **Aprendizado:** a validação nativa do HTML5 não basta; o JavaScript precisa controlar o envio e as mensagens.

## 11/11/2026 – Ajustes finais (com apoio de IA)
- **Decisão:** completar a validação do formulário, incluir mídia (vídeo e áudio) e menu responsivo, montar o orçamento e a pasta `docs/`, e corrigir os erros do W3C.
- **Trabalho:** feito com apoio da IA (Claude), revisado pela equipe.
- **Dificuldade:** o áudio precisa de narração gravada, que ainda não existe.

## 11/11/2026 – Mídia
- **Decisão:** acrescentar um vídeo (feito com as fotos do próprio projeto) e um player de áudio.
- **Dificuldade:** não havia gravação de narração disponível. Depois, a equipe gravou a narração e ela foi incluída no site.
- **Próximo passo:** conferir se a transcrição na página corresponde à gravação.

## 11/11/2026 – Menu e responsividade
- **Decisão:** menu com botão “Menu” no celular, que abre e fecha com JavaScript e `aria-expanded`.
- **Aprendizado:** o menu continua visível sem JavaScript, por causa da classe `js` adicionada no carregamento.

## 11/11/2026 – Orçamento
- **Decisão:** comparar três hospedagens (Railway, Hostinger e Vercel) e três domínios (Registro.br, Namecheap e Hostinger).
- **Dificuldade:** os preços mudam e nem sempre são informados em reais e por ano. Solução: registrar a data de consulta e a fonte.

## 11/11/2026 – Publicação e GitHub
- **Decisão:** publicar as mudanças por meio de branch e pull request (PR #1).
- **Dificuldade:** nenhuma registrada.
