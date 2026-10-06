// Selecionando elementos do DOM com 'const' (referências não mudam)
const campoNome = document.getElementById("campo-nome");
const botao     = document.getElementById("btn-saudar");
const resultado = document.getElementById("resultado");

// Escutador de eventos para o clique no botão
botao.addEventListener("click", function() {
    // Captura o nome e o .trim() remove os espaços vazios do começo e do fim
    const nome = campoNome.value.trim();

    // Validação: checa se o usuário enviou o campo vazio
    if (nome === "") {
        resultado.textContent = "Erro: Digite o nome do passageiro!";
        resultado.style.color = "red";
    } else {
        // Mensagem de sucesso utilizando Template Strings (crases)
        resultado.textContent = `Atenção, ${nome}! Seu embarque foi confirmado. Tenha um ótimo voo! ✈️`;
        resultado.style.color = "#0277bd";
    }
});