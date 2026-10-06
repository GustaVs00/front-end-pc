// A variável 'contador' precisa ser 'let' pois seu valor muda.
let contador = 0;

// Referências ao DOM usam 'const' pois não apontam para outros elementos.
const display  = document.getElementById("numero");
const btnMenos = document.getElementById("btn-menos");
const btnReset = document.getElementById("btn-reset");
const btnMais  = document.getElementById("btn-mais");

/**
 * Função responsável por atualizar o valor na tela
 * e alterar a cor baseada no saldo de pessoas.
 */
function atualizarDisplay() {
    display.textContent = contador;

    if (contador > 0) {
        display.style.color = "#1976d2";   // Azul (pessoas no evento)
    } else if (contador < 0) {
        display.style.color = "#d32f2f";   // Vermelho (erro na contagem, não pode haver público negativo)
    } else {
        display.style.color = "#4a148c";   // Roxo (local vazio)
    }
}

// Evento: incrementa o contador quando alguém entra
btnMais.addEventListener("click", function() {
    contador++;
    atualizarDisplay();
});

// Evento: decrementa o contador quando alguém sai
btnMenos.addEventListener("click", function() {
    contador--;
    atualizarDisplay();
});

// Evento: zera o contador para o próximo evento
btnReset.addEventListener("click", function() {
    contador = 0;
    atualizarDisplay();
});