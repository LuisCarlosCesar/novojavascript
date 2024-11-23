'use strict';

const images = [
    {"id": "1","url":"./imagens/chrono.jpg" },
    {"id": "2","url":"./imagens/inuyasha.jpg" },
    {"id": "3","url":"./imagens/ippo.png" },
    {"id": "4","url":"./imagens/tenchi.jpg" },
    {"id": "5","url":"./imagens/tenjhotenge.jpg" },
    {"id": "6","url":"./imagens/yuyuhakusho.jpg" },
]

const containerItens = document.querySelector("#container-itens");

const loadImages = (images, container) => {
   images.forEach(image => {
        container.innerHTML +=`
        <div class="item">
            <img src='${image.url}'
        </div>`
   })
 }

loadImages(images, containerItens);

let itens = document.querySelectorAll(".item");

const previous = () => {
    containerItens.appendChild(itens[0]);
    itens = document.querySelectorAll(".item");
}

const next = () => {
    const lastItem = itens[itens.length - 1];
    containerItens.insertBefore(lastItem, itens[0]); 
    itens = document.querySelectorAll(".item");
}

document.querySelector('#previous').addEventListener("click", previous);
document.querySelector('#next').addEventListener("click", next);