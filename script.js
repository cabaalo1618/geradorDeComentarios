var frases = [" Ola Mundo", "Hoje eh um novo dia", "a vida eh bela","ja tomou seu cafezinho ?" , "bora ser feliz ?" , "o chatgpt eh incrivel neh", "o thiago sera um grande programador","preciso aprender muitas linguagens de programacao, bora programar ?", " ja criou algum projeto hoje ?"]



var pResposta = document.getElementById("resposta")
var botao=document.getElementById("botao0")

botao.addEventListener("click", function(){
    var indice=Math.floor(Math.random()*(frases.length))
    var fraseEscolhida = frases[indice]
    pResposta.textContent=fraseEscolhida
})
