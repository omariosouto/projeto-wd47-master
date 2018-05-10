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

# 19) Criando cartões de forma feliz
- Ter o texto