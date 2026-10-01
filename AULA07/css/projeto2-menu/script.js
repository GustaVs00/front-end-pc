// Seleciona o campo de pesquisa e todas as seções que podem ser filtradas
const campoPesquisa = document.getElementById('campo-pesquisa');
const secoes = document.querySelectorAll('main section');

// Adiciona um evento que dispara toda vez que o usuário digita algo
campoPesquisa.addEventListener('keyup', (evento) => {
    // Pega o texto digitado e converte para minúsculas para facilitar a comparação
    const termoPesquisado = evento.target.value.toLowerCase();

    // Passa por todas as seções da página
    secoes.forEach(secao => {
        // Pega o texto inteiro da seção (título + parágrafo)
        const textoSecao = secao.textContent.toLowerCase();

        // Se a seção contém o termo pesquisado, ela aparece; senão, ela some
        if (textoSecao.includes(termoPesquisado)) {
            secao.style.display = 'block';
        } else {
            secao.style.display = 'none';
        }
    });
});