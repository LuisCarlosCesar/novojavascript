const turnOn = document.getElementById ('turnOn'); 
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}  

function lampOn () {
    if (!isLampBroken ()) {
    lamp.src = './imagens/ligada.jpg';}
}

function lampOff () {
    if (!isLampBroken ()) {
    lamp.src = './imagens/desligada.jpg';}
}

function lampBroken () {
    if (!isLampBroken ()) {
    lamp.src = './imagens/quebrada.jpg';}
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);//quando passar o mouse por cima da imagem, liga
lamp.addEventListener ('mouseleave', lampOff);//quando passar o mouse fora da imagem, desliga
lamp.addEventListener ('dblclick', lampBroken);