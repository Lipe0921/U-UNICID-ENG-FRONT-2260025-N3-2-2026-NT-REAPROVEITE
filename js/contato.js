/* Página de contato: FAQ do assistente, validação do formulário e rascunho em localStorage. */
(function () {
    'use strict';

    /* 1. Assistente de dúvidas (FAQ) */
    var faq = {
        receita: "Encontre receitas de cascas e talos na nossa página de Galeria!",
        doar: "Apoiadores podem entrar em contato via formulário nesta página.",
        oficina: "Nossas oficinas presenciais são divulgadas na página Projetos."
    };
    var abrir = document.getElementById('abrir');
    var bot = document.getElementById('bot');
    var enviar = document.getElementById('enviar');
    var perg = document.getElementById('perg');
    var chat = document.getElementById('chat');

    if (abrir && bot) {
        abrir.addEventListener('click', function () {
            bot.hidden = !bot.hidden;
            abrir.setAttribute('aria-expanded', String(!bot.hidden));
        });
    }

    if (enviar && perg && chat) {
        enviar.addEventListener('click', function () {
            var p = perg.value.toLowerCase();
            var k = Object.keys(faq).find(function (chave) { return p.indexOf(chave) !== -1; });
            chat.textContent = k ? faq[k] : 'Não encontrei. Tente: receita, doar ou oficina.';
        });
    }

    /* 2. Formulário: validação com preventDefault, mensagens de erro e rascunho */
    var form = document.getElementById('form-contato');
    if (!form) { return; }

    var CHAVE = 'reaproveite-rascunho-contato';
    var status = document.getElementById('status-form');

    var regras = {
        nome: {
            validar: function (v) {
                var t = v.trim();
                if (!t) { return 'Informe seu nome completo.'; }
                if (!/\S+\s+\S+/.test(t)) { return 'Informe nome e sobrenome.'; }
                return '';
            }
        },
        email: {
            validar: function (v) {
                var t = v.trim();
                if (!t) { return 'Informe seu e-mail.'; }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) { return 'Use o formato nome@dominio.com.'; }
                return '';
            }
        },
        tel: {
            validar: function (v) {
                var t = v.trim();
                if (!t) { return 'Informe um telefone.'; }
                if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(t)) { return 'Use o formato (11) 91234-5678.'; }
                return '';
            }
        },
        data: {
            validar: function (v) {
                if (!v) { return 'Escolha uma data.'; }
                var hoje = new Date();
                hoje.setHours(0, 0, 0, 0);
                var escolhida = new Date(v + 'T00:00:00');
                if (escolhida < hoje) { return 'Escolha uma data de hoje em diante.'; }
                return '';
            }
        },
        pessoas: {
            validar: function (v) {
                var n = Number(v);
                if (v === '') { return 'Informe o número de pessoas.'; }
                if (!Number.isInteger(n) || n < 1 || n > 50) { return 'Use um número inteiro entre 1 e 50.'; }
                return '';
            }
        },
        mensagem: {
            validar: function (v) {
                var t = v.trim();
                if (!t) { return 'Escreva uma mensagem.'; }
                if (t.length < 10) { return 'A mensagem precisa ter pelo menos 10 caracteres.'; }
                return '';
            }
        }
    };

    var ids = Object.keys(regras);

    function mostrarErro(id, msg) {
        var campo = document.getElementById(id);
        var erro = document.getElementById('erro-' + id);
        campo.setAttribute('aria-invalid', msg ? 'true' : 'false');
        campo.classList.toggle('campo-invalido', !!msg);
        erro.textContent = msg;
        return !msg;
    }

    function validarCampo(id) {
        return mostrarErro(id, regras[id].validar(document.getElementById(id).value));
    }

    function salvarRascunho() {
        try {
            var dados = {};
            ids.forEach(function (id) { dados[id] = document.getElementById(id).value; });
            localStorage.setItem(CHAVE, JSON.stringify(dados));
        } catch (e) {
            /* Armazenamento indisponível (aba privada, bloqueio): o formulário funciona sem rascunho. */
        }
    }

    function restaurarRascunho() {
        try {
            var salvo = localStorage.getItem(CHAVE);
            if (!salvo) { return; }
            var dados = JSON.parse(salvo);
            var recuperou = false;
            ids.forEach(function (id) {
                var campo = document.getElementById(id);
                if (dados[id] && !campo.value) {
                    campo.value = dados[id];
                    recuperou = true;
                }
            });
            if (recuperou && status) { status.textContent = 'Rascunho recuperado do seu navegador.'; }
        } catch (e) {
            /* Dados corrompidos ou indisponíveis: ignora e segue. */
        }
    }

    var dataInput = document.getElementById('data');
    if (dataInput) {
        var h = new Date();
        dataInput.min = [
            h.getFullYear(),
            String(h.getMonth() + 1).padStart(2, '0'),
            String(h.getDate()).padStart(2, '0')
        ].join('-');
    }

    ids.forEach(function (id) {
        var campo = document.getElementById(id);
        campo.addEventListener('blur', function () {
            if (campo.value) { validarCampo(id); }
        });
        campo.addEventListener('input', function () {
            if (campo.getAttribute('aria-invalid') === 'true') { validarCampo(id); }
            salvarRascunho();
        });
    });

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();

        var resultados = ids.map(function (id) { return validarCampo(id); });
        var primeiroInvalido = ids.filter(function (id, i) { return !resultados[i]; })[0];

        if (primeiroInvalido) {
            if (status) { status.textContent = 'Corrija os campos destacados antes de enviar.'; }
            document.getElementById(primeiroInvalido).focus();
            return;
        }

        var destino = 'felipeunicid1209@gmail.com';
        var assunto = 'Contato pelo site Reaproveite - ' + document.getElementById('nome').value.trim();
        var corpo = [
            'Nome: ' + document.getElementById('nome').value.trim(),
            'E-mail: ' + document.getElementById('email').value.trim(),
            'Telefone: ' + document.getElementById('tel').value.trim(),
            'Número de pessoas: ' + document.getElementById('pessoas').value,
            'Data sugerida: ' + document.getElementById('data').value,
            '',
            document.getElementById('mensagem').value.trim()
        ].join('\n');

        try { localStorage.removeItem(CHAVE); } catch (e) { /* segue */ }
        if (status) {
            status.textContent = 'Abrindo seu aplicativo de e-mail com a mensagem pronta. Se nada abrir, envie manualmente para ' + destino + '.';
        }
        window.location.href = 'mailto:' + destino +
            '?subject=' + encodeURIComponent(assunto) +
            '&body=' + encodeURIComponent(corpo);
    });

    restaurarRascunho();
})();
