// Captura dos elementos do DOM usando const
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operacao  = document.getElementById("operacao");
const btnCalc   = document.getElementById("btn-calcular");
const resultado = document.getElementById("resultado");

// Escuta o clique do botão para realizar a operação
btnCalc.addEventListener("click", function() {
    // parseFloat converte o texto digitado em número decimal
    const n1 = parseFloat(num1Input.value);
    const n2 = parseFloat(num2Input.value);

    // Validação: checa se os valores são números válidos (Not-a-Number)
    if (isNaN(n1) || isNaN(n2)) {
        resultado.textContent = "Erro: Insira quantidades válidas para o estoque!";
        resultado.style.color = "red";
        return; // Interrompe a função aqui
    }

    let res = 0; // Inicializa a variável de resultado

    // Estrutura de decisão baseada no operador escolhido
    switch (operacao.value) {
        case "+": 
            res = n1 + n2; 
            break;
        case "-": 
            res = n1 - n2; 
            break;
        case "*": 
            res = n1 * n2; 
            break;
        case "/":
            // Prevenção contra divisão por zero
            if (n2 === 0) {
                resultado.textContent = "Erro logístico: Impossível dividir por zero caminhões!";
                resultado.style.color = "red";
                return;
            }
            res = n1 / n2;
            break;
    }

    // Atualiza a interface com o resultado e formata a cor
    resultado.textContent = `Movimentação: ${n1} ${operacao.value} ${n2} = Saldo: ${res} unidades`;
    resultado.style.color = "#37474f";
});