const repostas = ["A principal função do HTML é estruturar e organizar o conteúdo de uma página web, definindo o seu significado e a sua estrutura",
    "Tem que criar uma tag chamada <img> e em seu atributo src colocar o caminho da imagem.",
    "_blank, _parent, _self e _top", 
    "<div> serve para divisão de blocos maiores. <span> serve para divisão entre textos menores no HTML",
    " Semântica é a identificação do que é o que na página. Um exemplo é o head que é o header da página. Outro é o section que separa a página em outro bloco no corpo da página.",
    "POST", 
    "deixar bonito;) e bem lindo! e organizado na página pq somos bonitos e simétricos.", 
    "Deixa o código mais organizado e visível, além de poder alterar vários elementos em conjunto.",
    "tem que adicionar uma tag dentro de <head> chamada <link> e na propriedade rel se especifica que é um stylesheet e na propriedade href se indica o caminho do arquivo.",
    "Define a cor do elemento.", 
    "Class indica de que conjunto de classe do CSS criado que aquele elemento pertence, enquanto o id atribui uma identificação àquele objeto.",
    "É um jeito de separar e organizar os objetos do HTML em grades ou em flexboxes.",
    "Java é uma linguagem orientada a objetos e mais parecida com o C, enquanto o Javascript é uma linguagem para desenvolvimento de aplicações web e se parece mais com a sintaxe do Python.",
    "Adicione uma tag chamada <script> e em seu atributo src escreva o caminho do arquivo .js.",
    "Deve parsear a variável escrevendo parseInt() e dentro dos parênteses inserir a variável de texto.",
    "Eles ocorrem quando algum evento de um objeto do HTML é executado, como por exemplo o submit ou o click.", 
    "Para percorrer todos os elementos de um Array.",
    "São funções escritas de forma mais resumida e prática, caracterizadas pelo uso de => que se assemelha a uma seta."
]
let x = 0;

respostas.forEach(function(resposta){

    const botao = document.getElementById(`card`+x);
    const perguntaOriginal = botao.value;
    let virado = false;
    botao.addEventListener("submit", function(){
        virado = !virado;

        if(virado){
            botao.value = respostas[x];
        }else{
            botao.value = perguntaOriginal;
        }
    });

    x++;
});