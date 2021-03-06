// IIFE
;(function() {
    'use strict';


// Pega as infos do mural


$.ajax({
    url:"http://ceep.herokuapp.com/cartoes/carregar?usuario=omariosouto&callback=?",
    dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
    success:function(json){
        // do stuff with json (in this case an array)
        json.cartoes.forEach(function(cartaoDaVoltaAtual) {
            adicionaCartaozinhoNoMural(cartaoDaVoltaAtual)
        })

    },
    error:function(){
        alert("Error");
    }      
});
// Pega as infos do mural /fim

function sincronizar() {
    const $btnSync = $('#btnSync')
    const infosDoMural = {
        usuario: 'omariosouto',
        cartoes: Array.from($('.cartao')).map( function(elementoAtual) {
        
            // Da um salve \o/ https://sistema.caelum.com.br/avaliacao/a4da79f
            const conteudoDoCartao = elementoAtual.querySelector('p').innerHTML
                                                                     .replace(/<div>/g, '') 
                                                                     .replace(/<\/div>/g, '') 
            console.log(conteudoDoCartao)
            return {
                    conteudo: conteudoDoCartao,
                    cor: elementoAtual.style.backgroundColor
                   }
        } ) // Retorna o Arrayzinho de Objetinhos prontinhos :)
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
}



let contador = document.querySelectorAll('.cartao').length

function adicionaCartaozinhoNoMural(cartaoObj) {
    // # Desafio
    // Fazer o cartão vir por padrão com a cor amarela
    // Se vier a cor no cartaObj, pega a cor nova

    const conteudoDoCartao = cartaoObj.conteudo

    contador++
    // Cria o cartão
    // Criar o HTML do elemento
    // const cartao = 

    const mural = $('.mural')
    // Criar um Componente
    const cartao = $(`
    <article id="cartao_${contador}" class="cartao" tabindex="0" style="background-color: ${cartaoObj.cor};">
        <div class="opcoesDoCartao">
            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
            <svg><use xlink:href="#iconeRemover"></use></svg>
            </button>
    
            <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo">
            <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
            Padrão
            </label>
    
            <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
            <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
            Importante
            </label>
    
            <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
            <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
            Tarefa
            </label>
    
            <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
            <label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
            Inspiração
            </label>
        </div>
        <p class="cartao-conteudo" contenteditable tabindex="0">${conteudoDoCartao}</p>
    </article>
    `) // Template String `` != ''

    // console.log('cartaoObj.cor', cartaoObj.cor)
    // cartao.css('background-color', cartaoObj.cor)

    // const cartao = tplCartao.querySelector('.cartao') 
    
    // Copia e cola todos os eventos do cartão :) dp arquivo cartao.js
    cartao.on('focusin', function() {
        console.log('Focou dentro do cartao')
        cartao.addClass('cartao--focado')
    })
    cartao.on('focusout', function() {
        cartao.removeClass('cartao--focado')
    })

    cartao.on('change', function(event) {
        // console.log(event.target)
        // console.log($(event.target)) - Elemento Puro Convertido para Juqueri

        const elementoQueFoiClicado = event.target // ELEMENTO JAVASCRIPT PURO
        console.log('change')
        if(elementoQueFoiClicado.classList.contains('opcoesDoCartao-radioTipo')) {
            // console.log('Foi clicado o elemento que queremos', elementoQueFoiClicado)
            const corNovaDoCartao = elementoQueFoiClicado.value
            cartao.css('background-color', corNovaDoCartao) // Chave, Valor
            //cartao.style.backgroundColor = corNovaDoCartao
        }
    })

    cartao.on('keypress', function(propriedadesDoEvento) {
        const isOpcoesDoCartao = propriedadesDoEvento.target.classList.contains('opcoesDoCartao-opcao')
        
        if(isOpcoesDoCartao && (propriedadesDoEvento.key == 'Enter' || propriedadesDoEvento.key == ' ') )  {
            console.log('Força o click')
            // console.log('Apertaram ua tecla', propriedadesDoEvento)
            propriedadesDoEvento.target.click()
            // Disparar os bagulhos
        }

        const isCartaoConteudo = propriedadesDoEvento.target.classList.contains('cartao-conteudo')

        if(isCartaoConteudo) {
            //  Design Pattern - Debounce
            clearInterval(window.intervaloDigitacao)
            window.intervaloDigitacao = setTimeout(function() {
                console.log('Teste')
                window.mural.sincronizar()
            }, 1000)

        }
    })

    // # Desafio
    cartao.on('click', function(event) {
        console.log('Dentro do click')
        const isBtnRemove = event.target.classList.contains('opcoesDoCartao-remove')
        
        if(isBtnRemove) {

            cartao.addClass('cartao--some')
            cartao.on('transitionend', function () {
                cartao.remove()
                window.mural.sincronizar()
                console.log('Cartao removeu', cartao)
            })    
        } 

    })
    mural.prepend(cartao)
}

// Tornando coisas Globais
window.mural = window.mural || {}
window.mural.adicionaCartaozinhoNoMural = adicionaCartaozinhoNoMural
window.mural.sincronizar = sincronizar


})()
