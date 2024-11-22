const turnOnOff = document.getElementById ('turnOnOff'); 

const lamp = document.getElementById('lamp');

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}  

function lampOn () {
    if (!isLampBroken ()) {
    lamp.src = './imagens2/ligada.jpg';}
}

function lampOff () {
    if (!isLampBroken ()) {
    lamp.src = './imagens2/desligada.jpg';}
}

function lampBroken () {
    if (!isLampBroken ()) {
    lamp.src = './imagens2/quebrada.jpg';}
}

function lampOnOff () {
    if (turnOnOff.textContent == 'Ligar') {
        lampOn();// dois sinais = é para atribuicao
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';//um sinal = é para comparacao
    }
}

turnOnOff.addEventListener ('click', lampOnOff);

lamp.addEventListener ('mouseover', lampOn);//quando passar o mouse por cima da imagem, liga
lamp.addEventListener ('mouseleave', lampOff);//quando passar o mouse fora da imagem, desliga
lamp.addEventListener ('dblclick', lampBroken);