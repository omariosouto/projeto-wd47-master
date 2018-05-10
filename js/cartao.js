// // IIFE
// (function() {
//     "use strict"

//     // adicionar a classe cartao--focado,
//     // sempre que o usuario focar em um elemento interno do cartao
//     const cartoes = document.querySelectorAll('.cartao')

//     for(let cartao of cartoes) { // let i = 0; i < cartoes.length; i++
//         cartao.addEventListener('focusin', function() {
//             console.log('Focou dentro do cartao')
//             cartao.classList.add('cartao--focado')
//         })
//         cartao.addEventListener('focusout', function() {
//             cartao.classList.remove('cartao--focado')
//         })

//         cartao.addEventListener('change', function(event) {
//             const elementoQueFoiClicado = event.target
//             console.log('change')
//             if(elementoQueFoiClicado.classList.contains('opcoesDoCartao-radioTipo')) {
//                 // console.log('Foi clicado o elemento que queremos', elementoQueFoiClicado)
//                 const corNovaDoCartao = elementoQueFoiClicado.value
//                 cartao.style.backgroundColor = corNovaDoCartao
//             }
//         })

//         cartao.addEventListener('keypress', function(propriedadesDoEvento) {
//             const isOpcoesDoCartao = event.target.classList.contains('opcoesDoCartao-opcao')

//             if(isOpcoesDoCartao && (propriedadesDoEvento.key == 'Enter' || propriedadesDoEvento.key == ' ') )  {
//                 console.log('Nao deve ativar fora das bolinhas')
//                 // console.log('Apertaram ua tecla', propriedadesDoEvento)
//                 event.target.click()
//                 // Disparar os bagulhos
//             }
//         })

//         // # Desafio
//         cartao.addEventListener('click', function(event) {
//             console.log('Dentro do click')
//             const isBtnRemove = event.target.classList.contains('opcoesDoCartao-remove')
            
//             if(isBtnRemove) {
//                 cartao.classList.add('cartao--some')
//                 cartao.addEventListener('transitionend', function () {
//                     cartao.remove()
//                     console.log('Cartao removeu', cartao)
//                 })    
//             } 

//         })


//     }

// })()