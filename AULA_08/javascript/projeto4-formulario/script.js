let form = document.getElementById("formulario");

form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let nome    = document.getElementById("nome").value.trim();
    let posto   = document.getElementById("posto").value.trim();
    let unidade = document.getElementById("unidade").value.trim();

    let inputNome    = document.getElementById("nome");
    let inputPosto   = document.getElementById("posto");
    let inputUnidade = document.getElementById("unidade");
    let msgNome      = document.getElementById("msg-nome");
    let msgPosto     = document.getElementById("msg-posto");
    let msgUnidade   = document.getElementById("msg-unidade");
    let resFinal     = document.getElementById("resultado-final");

    let tudoValido = true;

    // Validação do Nome
    if (nome === "") {
        inputNome.className = "invalido";
        msgNome.textContent = "Nome ausente, recruta.";
        msgNome.className = "mensagem erro";
        tudoValido = false;
    } else if (nome.length < 3) {
        inputNome.className = "invalido";
        msgNome.textContent = "Nome muito curto para os registros.";
        msgNome.className = "mensagem erro";
        tudoValido = false;
    } else {
        inputNome.className = "valido";
        msgNome.textContent = "Identidade confirmada ✓";
        msgNome.className = "mensagem sucesso";
    }

    // Validação do Posto/Graduação
    if (posto === "") {
        inputPosto.className = "invalido";
        msgPosto.textContent = "Posto/Graduação não informado.";
        msgPosto.className = "mensagem erro";
        tudoValido = false;
    } else if (posto.length < 2) {
        inputPosto.className = "invalido";
        msgPosto.textContent = "Patente inválida. Especifique corretamente.";
        msgPosto.className = "mensagem erro";
        tudoValido = false;
    } else {
        inputPosto.className = "valido";
        msgPosto.textContent = "Patente reconhecida ✓";
        msgPosto.className = "mensagem sucesso";
    }

    // Validação da Unidade
    if (unidade === "") {
        inputUnidade.className = "invalido";
        msgUnidade.textContent = "Designação de unidade obrigatória.";
        msgUnidade.className = "mensagem erro";
        tudoValido = false;
    } else if (unidade.length < 4) {
        inputUnidade.className = "invalido";
        msgUnidade.textContent = "Informação de batalhão muito curta.";
        msgUnidade.className = "mensagem erro";
        tudoValido = false;
    } else {
        inputUnidade.className = "valido";
        msgUnidade.textContent = "Designação de pelotão aprovada ✓";
        msgUnidade.className = "mensagem sucesso";
    }

    // Resultado Final
    if (tudoValido) {
        resFinal.textContent = "Alistamento concluído. Apresente-se ao quartel! 🇧🇷";
        resFinal.style.color = "#8bc34a"; // Verde claro sucesso
    } else {
        resFinal.textContent = "Acesso negado. Verifique os dados em vermelho, soldado!";
        resFinal.style.color = "#ff5252"; // Vermelho erro militar
    }
});