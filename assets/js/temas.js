const trocaTemaEscuro = document.querySelector(".theme");
const temaEscuro = document.querySelectorAll(".escuro");
const trocaTemaClaro = document.querySelector(".temaClaro");
const icones = document.querySelectorAll(".icones")

// trocaTemaEscuro.addEventListener('click', () => {
//     console.log('cliquei');
//     temaEscuro.classList.toggle('bg-dark')
//     temaEscuro.classList.add('bg-light')
//     temaEscuro2.classList.toggle('bg-dark')
//     temaEscuro2.classList.add('bg-light')
// });

for (let i = 0; i < temaEscuro.length; i++) {
    trocaTemaEscuro.addEventListener("click", function() {
    temaEscuro[i].classList.toggle("bg-dark");
    temaEscuro[i].classList.add('bg-light')
    });
}

for (let i = 0; i < icones.length; i++) {
    trocaTemaEscuro.addEventListener("click", function() {
    icones[i].classList.toggle("textoPreto");
    icones[i].classList.add('textoBranco')

    });
}