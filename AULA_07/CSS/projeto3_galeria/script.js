// Seleciona os elementos do componente Lightbox na árvore do DOM para manipulação de exibição e conteúdo[cite: 16]
const lightbox = document.getElementById('lightbox');
const imgLightbox = document.getElementById('imagem-lightbox');
const textoLightbox = document.getElementById('texto-lightbox');
const btnFechar = document.getElementById('fechar-lightbox');

// Seleciona todos os itens interativos da galeria[cite: 16]
const itensGaleria = document.querySelectorAll('.galeria-item');

// Percorre a lista de itens da galeria registrando um ouvinte de clique individual em cada um deles[cite: 16]
itensGaleria.forEach(item => {
    item.addEventListener('click', () => {
        // Extrai a tag de imagem e o título interno correspondentes ao card que recebeu o clique[cite: 16]
        const imagemClicada = item.querySelector('img');
        const tituloClicado = item.querySelector('h3');

        // Atribui os dados capturados para os elementos internos do lightbox e altera seu estilo para exibi-lo na tela[cite: 16]
        imgLightbox.src = imagemClicada.src;
        textoLightbox.innerText = tituloClicado.innerText;
        lightbox.style.display = 'flex';
    });
});

// Configura o botão de fechar para ocultar o lightbox ao ser acionado[cite: 16]
btnFechar.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Adiciona um ouvinte no container geral do lightbox para fechá-lo caso o usuário clique diretamente no fundo escuro (fora da imagem)[cite: 16]
lightbox.addEventListener('click', (evento) => {
    if (evento.target === lightbox) {
        lightbox.style.display = 'none';
    }
});