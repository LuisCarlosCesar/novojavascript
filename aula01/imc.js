const calcular = document.getElementById('calcular');

/*nome.value = 'Luis' >>>  se deixar ativo vai aparecer no aquivo HTML na caixa nome  "Luis"*/

function imc (){
    const nome = document.getElementById('inome').value;
    const altura = document.getElementById('ialtura').value;
    const peso = document.getElementById('ipeso').value;
    const resultado = document.getElementById('resultado');

    /*condicoes de preenchimento*/
    if (nome !== '' && altura !== '' && peso !== '')
        {const valorIMC = (peso/(Math.pow(altura,2))).toFixed(3);/*formula do IMC=peso dividido pelo quadrado da altura*/
        
        let classificacao = '';

        if (valorIMC < 18.5){Classificacao = 'abaixo do Peso';}
        else if (valorIMC < 25){classificacao = 'Com peso ideal. Parabens!!!';}
        else if (valorIMC < 30){classificacao = 'Levemente acima do peso.';}
        else if (valorIMC < 35){classificacao = 'Com obsidade grau I';}
        else if (valorIMC < 40){classificacao = 'Com obsidade grau II';}
        else {classificacao = 'Com obsidade grau III, Cuidado!!!'}
        
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e voce está ${classificacao}`;
        } 
    else{resultado.textContent = 'Preencha todos os campos!!!'}

}

calcular.addEventListener('click', imc);