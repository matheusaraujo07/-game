const numeroMenor = 1;
const numeroMaior = 100;
const numeroAleatorio = gerarNumerosecreto();

function gerarNumerosecreto(){
    return parseInt(Math.random() * numeroMaior + 1)
}

console.log(gerarNumerosecreto());

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = numeroMenor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = numeroMaior;