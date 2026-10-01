// Seleciona o botão e o corpo da página
const btnTema = document.getElementById('btn-tema');
const body = document.body;

// Adiciona um evento de clique ao botão
btnTema.addEventListener('click', () => {
    // A função toggle alterna a classe 'dark-mode' (adiciona se não tiver, remove se tiver)
    body.classList.toggle('dark-mode');
});