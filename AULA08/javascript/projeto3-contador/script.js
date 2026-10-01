let contador = 0;
let display  = document.getElementById("numero");
let btnMenos = document.getElementById("btn-menos");
let btnReset = document.getElementById("btn-reset");
let btnMais  = document.getElementById("btn-mais");

function atualizarDisplay() {
    display.textContent = contador;

    if (contador > 0) {
        display.style.color = "#1976d2";   // Azul (pessoas lá dentro)
    } else if (contador < 0) {
        display.style.color = "#d32f2f";   // Vermelho (erro na contagem)
    } else {
        display.style.color = "#4a148c";   // Roxo (vazio)
    }
}

btnMais.addEventListener("click", function() {
    contador++;
    atualizarDisplay();
});

btnMenos.addEventListener("click", function() {
    contador--;
    atualizarDisplay();
});

btnReset.addEventListener("click", function() {
    contador = 0;
    atualizarDisplay();
});