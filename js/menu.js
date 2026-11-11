/* Menu responsivo: botão que abre e fecha a navegação no celular. */
(function () {
    'use strict';
    document.documentElement.classList.add('js');

    document.querySelectorAll('.menu-toggle').forEach(function (botao) {
        var menu = document.getElementById(botao.getAttribute('aria-controls'));
        if (!menu) { return; }
        botao.addEventListener('click', function () {
            var aberto = menu.classList.toggle('aberto');
            botao.setAttribute('aria-expanded', String(aberto));
        });
    });
})();
