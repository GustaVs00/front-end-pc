// 1. Cache do DOM: Selecionamos os elementos estáticos da tela usando const (fora do evento de clique)
const form         = document.getElementById("formulario");
const inputNome    = document.getElementById("nome");
const inputPosto   = document.getElementById("posto");
const inputUnidade = document.getElementById("unidade");
const msgNome      = document.getElementById("msg-nome");
const msgPosto     = document.getElementById("msg-posto");
const msgUnidade   = document.getElementById("msg-unidade");
const resFinal     = document.getElementById("resultado-final");

// 2. Interceptamos o evento de envio (submit) do formulário
form.addEventListener("submit", function(evento) {
    // Evita que a página seja recarregada
    evento.preventDefault();

    // 3. Coleta e limpeza (trim) dos valores digitados no momento do clique
    const valNome    = inputNome.value.trim();
    const valPosto   = inputPosto.value.trim();
    const valUnidade = inputUnidade.value.trim();

    // Variável de controle (flag) para aprovar o formulário
    let tudoValido = true;

    // 4. Validação individual do campo Nome
    if (valNome === "") {
        inputNome.className = "invalido";
        msgNome.textContent = "Nome ausente, recruta.";
        msgNome.className = "mensagem erro";
        tudoValido = false;
    } else if (valNome.length < 3) {
        inputNome.className = "invalido";
        msgNome.textContent = "Nome muito curto para os registros.";
        msgNome.className = "mensagem erro";
        tudoValido = false;
    } else {
        inputNome.className = "valido";
        msgNome.textContent = "Identidade confirmada ✓";
        msgNome.className = "mensagem sucesso";
    }

    // 5. Validação individual do campo Posto
    if (valPosto === "") {
        inputPosto.className = "invalido";
        msgPosto.textContent = "Posto/Graduação não informado.";
        msgPosto.className = "mensagem erro";
        tudoValido = false;
    } else if (valPosto.length < 2) {
        inputPosto.className = "invalido";
        msgPosto.textContent = "Patente inválida. Especifique corretamente.";
        msgPosto.className = "mensagem erro";
        tudoValido = false;
    } else {
        inputPosto.className = "valido";
        msgPosto.textContent = "Patente reconhecida ✓";
        msgPosto.className = "mensagem sucesso";
    }

    // 6. Validação individual do campo Unidade
    if (valUnidade === "") {
        inputUnidade.className = "invalido";
        msgUnidade.textContent = "Designação de unidade obrigatória.";
        msgUnidade.className = "mensagem erro";
        tudoValido = false;
    } else if (valUnidade.length < 4) {
        inputUnidade.className = "invalido";
        msgUnidade.textContent = "Informação de batalhão muito curta.";
        msgUnidade.className = "mensagem erro";
        tudoValido = false;
    } else {
        inputUnidade.className = "valido";
        msgUnidade.textContent = "Designação de pelotão aprovada ✓";
        msgUnidade.className = "mensagem sucesso";
    }

    // 7. Resultado final baseado no controle da variável tudoValido
    if (tudoValido) {
        resFinal.textContent = "Alistamento concluído. Apresente-se ao quartel! 🇧🇷";
        resFinal.style.color = "#8bc34a"; 
    } else {
        resFinal.textContent = "Acesso negado. Verifique os dados em vermelho, soldado!";
        resFinal.style.color = "#ff5252"; 
    }
});