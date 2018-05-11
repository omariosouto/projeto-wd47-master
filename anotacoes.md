# 9) - Mudando o Layout
- Usuario Clica
- mudar o texto: se for linhas blocos e vice-versa

========

# 10) - Mudando o Layout pt2: O CSS do Poder
- mudar o css:
    - Adicionar uma classe
    - Adicionar um escutador de eventos

# 10.1) Hoisting (Explicação só)
- Todas as declaraçoes de função vão pro topo do arquivo

# 11) Progressive Enhancement (Carregamento Progressivo)
- Aparece quando precisa 

# 12) Cartão some fofinho
- FadeOut
    - Mexer no css transition + opacity
- Escolhe entre setTimeout e "transitionend"

# 13) Remover todos os cartões
- querySelectorAll

# 14) Bubbling ajudando a economizar eventos
- Elementos filhos avisam os pais que estão sendo focados (focus in)
- **Façam console.log dentro do evento**

# 15) Mudando as cores dos cartões
- Usuário vai clicar [ Adicionar um evento nas bolinhas ]
- Temos que saber qual o radio que foi clicadoi
- Pega a cor do radio
- Com a cor em "variaveis" muda a cor do background;

## Desafio: Deixar a troca de cor com uma animação bonitinha (pode ser um transition)
## Bonus: Brinca bastante com o "event" (testa apertar o alt, ctrl e afins)

# 16) Corrigindo a navegação via teclado
- Vamo adicionar um evento de "keypress" 
- Verifica pelo event.key se disparamos um Enter ou " "
- Forca um click via elemento.click()

# 17) Desafio do delegate com o remove

# 18) Criando cartões
- Fazer aparecer o formulário inteiro; [OK!]

- Fluxo do usuario:
    - Digita;
    - Clica no salvar;
- Adiciona o evento de submit;
- Faz a validação do conteudo se o lenght é 0;
- Cria o elemento
- Insere na pagina: 
```js
    // Mandar o elemento para a página
    const $btnSalvar = formulario.querySelector('.formNovoCartao-salvar')
    $btnSalvar.insertAdjacentElement('beforebegin', $msgErro)

    $msgErro.addEventListener('animationend', function() {
        $msgErro.remove()
    })

```

# 19.1) Criando cartões de forma feliz 
- Ter o texto


# 19) Criando cartões com Juqueri (Capitulo 19)
- Fazer o cartão aparecer na tela usando jquery
- Não precisa fazer os eventos funcionarem ainda
- Trocar **todos** os `addEventListener` por `on`

# 20)   Migrando os eventos
- Testa um evento de cada vez para não dar ruim :)
- Para converter elemento puro para jquery $(elementoPuro)
- addEventListener === on
- classList.add === addClass

# 21) Botão de ajudas
- For of é legal mas forEach é sensação
- Lista de ajudas com alert
- Array-like não é array (NodeList vs Array)

# 22) Instruçoes em forma de cartão

# 23) Module Pattern
- Exportando funçoes pra window de dentro da IIFE

# 23.3) Organização [Bônus]
- Curto circuito do JavaScript 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operadores_Logicos
```js
// Tornando coisas Globais
window.mural = window.mural || {}
window.mural.adicionaCartaozinhoNoMural = adicionaCartaozinhoNoMural
```
# 23.4) Dependência de IIFE [Bônus]
- Ajuda a garantir a ordem dos scriptss
```js
(function($) { // Mapeia o jQuery para $

    // a gente acessa $ sem medo de sobreescrita

})(jQuery) // Recebe o jQuery
```

# 24) JavaScript Moderno no Passado
- TC39: https://github.com/tc39
- Especificação é o Ecma Script - ECMA262;
- JavaScript, Action Script (Flash, PhotoShop, After Effects);
- ES6 
- NPM para baixar bibliotecas
- Babel

# 24.1) NPM Scripts
- Cria comando de dev com o comando do babel pra facilitar o rolê;

# 25) Ajax das Ajudas
- Status do HTTP: https://httpstatusdogs.com/
- É só um conceito: AJAX = Async JavaScript And XML (AJAJ JSON)
- JSON === Objeto do JavaScript em texto

# 26) Salvando cartões com Ajaj

- Como extrai o Texto e a Cor dos cartões?;
- Pelas proprieddes: textContent, css('background-color')/style.backgroundColor
- Mandar as infos do cartão e o **usuario dono delas**