// IIFE
;(function() {
    'use strict'

    const $btnSync = $('#btnSync')
    $btnSync.removeClass('botaoSync--sincronizado')
    // Vai acontecer as magia
    // Extrair as propriedades de todos os cartões
    $btnSync.on('click', function() {
        window.mural.sincronizar()
        // Move todo o código daqui para a função sincronizar()
    })


    $btnSync.removeClass('no-js')
})()