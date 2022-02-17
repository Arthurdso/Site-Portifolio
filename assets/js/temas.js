const trocaTemaEscuro = document.querySelector(".theme");
const temaEscuro = document.querySelectorAll(".escuro");
const trocaTemaClaro = document.querySelector(".temaClaro");
const icones = document.querySelectorAll(".icones")
const botaoContato = document.querySelector('.btn');
const titulosPretos = document.querySelectorAll('.titulosPretos');
const textoPreto = document.querySelectorAll('.textoPreto');
const cardBackground = document.querySelectorAll('.card-body');
const cardText = document.querySelectorAll('.card-text');
const oculto = document.querySelectorAll('.li-vazia');

trocaTemaEscuro.addEventListener('click', () => {
    
    botaoContato.classList.toggle('btn-dark')
    botaoContato.classList.add('btn-light')
});

for (let i = 0; i < temaEscuro.length; i++) {
    trocaTemaEscuro.addEventListener("click", function() {
    temaEscuro[i].classList.toggle("bg-dark");
    temaEscuro[i].classList.add('bg-light')
    });
}

for (let i = 0; i < icones.length; i++) {
    trocaTemaEscuro.addEventListener("click", function() {
    icones[i].classList.toggle("textoBranco");
    icones[i].classList.add('textoBranco')

    });
}

for (let i = 0; i < textoPreto.length; i++) {
    trocaTemaEscuro.addEventListener("click", function() {
    textoPreto[i].classList.toggle("textoPreto");
    textoPreto[i].classList.add('textoBranco')

    });
}

for (let i = 0; i < titulosPretos.length; i++) {
    trocaTemaEscuro.addEventListener("click", function() {
    titulosPretos[i].classList.toggle("titulosPretos");
    titulosPretos[i].classList.add('titulosBrancos')

    });
}

for (let i = 0; i < cardBackground.length; i++) {
    trocaTemaEscuro.addEventListener("click", function() {
    cardBackground[i].classList.toggle("card-body");
    cardBackground[i].classList.toggle('card-body-b');
    });
}

for (let i = 0; i < cardText.length; i++) {
    trocaTemaEscuro.addEventListener("click", function() {
    cardText[i].classList.toggle("card-text");
    cardText[i].classList.toggle('card-text-b');
    });
}
