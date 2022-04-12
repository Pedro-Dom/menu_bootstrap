const inputNome = document.getElementById("inputNome")
const modalNome = document.getElementById("modalNome")

const inputTel = document.getElementById("inputTel")
const modalTel = document.getElementById("modalTel")

const inputEmail = document.getElementById("inputEmail")
const modalEmail = document.getElementById("modalEmail")

const calculos = document.getElementsByClassName("calcular")[0]

calculos.addEventListener("click", function() {
    modalNome.innerHTML = inputNome.value
    modalTel.innerHTML = inputTel.value
    modalEmail.innerHTML = inputEmail.value
})