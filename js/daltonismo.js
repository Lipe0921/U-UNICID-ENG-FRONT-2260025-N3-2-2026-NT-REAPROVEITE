/* Modo daltonismo: troca as cores por um par azul e laranja, mais fácil de distinguir.
   A escolha fica salva no navegador. Se o armazenamento não estiver disponível, o modo funciona na página atual. */
(function () {
    'use strict';
    var CHAVE = 'reaproveite-daltonismo';
    var raiz = document.documentElement;

    function lerPreferencia() {
        try { return window.localStorage.getItem(CHAVE) === 'sim'; } catch (erro) { return false; }
    }

    function salvarPreferencia(ativo) {
        try { window.localStorage.setItem(CHAVE, ativo ? 'sim' : 'nao'); } catch (erro) { /* sem armazenamento */ }
    }

    function aplicar(botao, ativo) {
        raiz.classList.toggle('modo-daltonico', ativo);
        botao.setAttribute('aria-pressed', String(ativo));
        botao.textContent = ativo ? 'Cores padrão' : 'Modo daltonismo';
    }

    document.querySelectorAll('.alternar-daltonismo').forEach(function (botao) {
        aplicar(botao, lerPreferencia());
        botao.addEventListener('click', function () {
            var ativo = !raiz.classList.contains('modo-daltonico');
            aplicar(botao, ativo);
            salvarPreferencia(ativo);
        });
    });
})();
