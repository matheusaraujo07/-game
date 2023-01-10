function verificaSeOChuteEUmValorValido(chute){
    const numero = +chute;

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += `<div>Formado do chute é inválido</div>`
    }

    if(verSeONumeroEstaDentroDoPermitido(numero)){
       elementoChute.innerHTML += `<div>O número que você chutou está fora do intervalo</div>`
    }

    if(numero === numeroAleatorio) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroAleatorio}</h3>
        <button id = "reiniciar" class = "iniciar">Jogar Novamente</button>
        `    
    }else if(numero<numeroAleatorio){
        elementoChute.innerHTML +=`<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
        
    }else{elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`}

    function chuteForInvalido(numero){
        return Number.isNaN(numero);
    }

    function verSeONumeroEstaDentroDoPermitido(numero){
        return numero>numeroMaior || numero<numeroMenor;
    }
}