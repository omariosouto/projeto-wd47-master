// IIFE
;(function() {
    'use strict'

    const $btnSync = $('#btnSync')
    $btnSync.removeClass('botaoSync--sincronizado')
    // Vai acontecer as magia
    // Extrair as propriedades de todos os cartões
    $btnSync.on('click', function() {

        // Inicia o Array de cartões
        const cartoes = []
        // Passa por todos os elementos
        // cria um objetinho e joga no array
        $('.cartao').each(function(indice) { // forEach só que pra elementos juqueri
            const cartaoJuqueri = $(this) // elemento

            const cartaoObj = {
                conteudo: cartaoJuqueri.find('.cartao-conteudo').text(),
                cor: cartaoJuqueri.css('background-color')
            }
            cartoes.push(cartaoObj) // add objeto no array
        })
        // testa se o array ta certo
        console.log(cartoes)

        const infosDoMural = {
            usuario: 'omariosouto',
            cartoes: cartoes
        }

        const xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://ceep.herokuapp.com/cartoes/salvar')
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send(JSON.stringify(infosDoMural))

        $btnSync.removeClass('botaoSync--sincronizado')
        $btnSync.removeClass('botaoSync--deuRuim')
        $btnSync.addClass('botaoSync--esperando')


        xhr.addEventListener('load', function() {
            $btnSync.addClass('botaoSync--sincronizado')
            $btnSync.removeClass('botaoSync--esperando')
            console.log(xhr.response)
        })

        xhr.addEventListener('error', function() {
            $btnSync.addClass('botaoSync--deuRuim')
            $btnSync.removeClass('botaoSync--esperando')
        })
        // http://ceep.herokuapp.com/cartoes/carregar?usuario=omariosouto




    })

    $btnSync.removeClass('no-js')
})()