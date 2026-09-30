let campoNome = document.getElementById("campo-nome");
let botao     = document.getElementById("btn-saudar");
let resultado = document.getElementById("resultado");

botao.addEventListener("click", function() {
    let nome = campoNome.value;

    if (nome === "") {
        resultado.textContent = "Erro: Digite o nome do passageiro!";
        resultado.style.color = "red";
    } else {
        resultado.textContent = `Atenção, ${nome}! Seu embarque foi confirmado. Tenha um ótimo voo! ✈️`;
        resultado.style.color = "#0277bd";
    }
});