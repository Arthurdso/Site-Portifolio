const trocaTemaEscuro = document.querySelector(".theme");
const temaEscuro = document.querySelector(".escuro");
const temaEscuro2 = document.querySelector(".escuro2")
const trocaTemaClaro = document.querySelector(".temaClaro");

trocaTemaEscuro.addEventListener('click', () => {
    console.log('cliquei');
    temaEscuro.classList.toggle('bg-dark')
    temaEscuro.classList.add('bg-light')
    temaEscuro2.classList.toggle('bg-dark')
    temaEscuro2.classList.add('bg-light')
    trocaTemaEscuro.classList.add('temaClaro')
});