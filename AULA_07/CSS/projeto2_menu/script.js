// Seleciona o campo de pesquisa pelo ID e armazena todas as seções da página para filtragem dinâmica[cite: 13]
const campoPesquisa = document.getElementById('campo-pesquisa');
const secoes = document.querySelectorAll('main section');

// Adiciona um ouvinte de evento 'keyup' para monitorar em tempo real cada tecla digitada pelo usuário[cite: 13]
campoPesquisa.addEventListener('keyup', (evento) => {
    // Converte o texto digitado para letras minúsculas para garantir que a busca não distingua maiúsculas de minúsculas[cite: 13]
    const termoPesquisado = evento.target.value.toLowerCase();

    // Itera sobre cada seção disponível no conteúdo principal[cite: 13]
    secoes.forEach(secao => {
        // Extrai todo o texto da seção (títulos e parágrafos) e o converte para minúsculas[cite: 13]
        const textoSecao = secao.textContent.toLowerCase();

        // Se o texto da seção contiver o termo digitado, a seção é exibida; caso contrário, ela é ocultada[cite: 13]
        if (textoSecao.includes(termoPesquisado)) {
            secao.style.display = 'block';
        } else {
            secao.style.display = 'none';
        }
    });
});