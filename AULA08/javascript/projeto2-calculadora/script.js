let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let operacao  = document.getElementById("operacao");
let btnCalc   = document.getElementById("btn-calcular");
let resultado = document.getElementById("resultado");

btnCalc.addEventListener("click", function() {
    let n1 = parseFloat(num1Input.value);
    let n2 = parseFloat(num2Input.value);

    if (isNaN(n1) || isNaN(n2)) {
        resultado.textContent = "Erro: Insira quantidades válidas para o estoque!";
        resultado.style.color = "red";
        return;
    }

    let res;
    switch (operacao.value) {
        case "+": res = n1 + n2; break;
        case "-": res = n1 - n2; break;
        case "*": res = n1 * n2; break;
        case "/":
            if (n2 === 0) {
                resultado.textContent = "Erro logístico: Impossível dividir por zero caminhões!";
                resultado.style.color = "red";
                return;
            }
            res = n1 / n2;
            break;
    }

    resultado.textContent = `Movimentação: ${n1} ${operacao.value} ${n2} = Saldo: ${res} unidades`;
    resultado.style.color = "#37474f";
});