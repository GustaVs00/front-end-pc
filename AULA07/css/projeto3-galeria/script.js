// Seleciona os elementos do Lightbox
const lightbox = document.getElementById('lightbox');
const imgLightbox = document.getElementById('imagem-lightbox');
const textoLightbox = document.getElementById('texto-lightbox');
const btnFechar = document.getElementById('fechar-lightbox');

// Seleciona todos os itens da galeria
const itensGaleria = document.querySelectorAll('.galeria-item');

// Para cada item da galeria, adiciona um evento de clique
itensGaleria.forEach(item => {
    item.addEventListener('click', () => {
        // Pega a imagem e o título de dentro do item clicado
        const imagemClicada = item.querySelector('img');
        const tituloClicado = item.querySelector('h3');

        // Passa os dados para o Lightbox e o exibe
        imgLightbox.src = imagemClicada.src;
        textoLightbox.innerText = tituloClicado.innerText;
        lightbox.style.display = 'flex';
    });
});

// Fecha o Lightbox ao clicar no 'X'
btnFechar.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Fecha o Lightbox ao clicar fora da imagem
lightbox.addEventListener('click', (evento) => {
    if (evento.target === lightbox) {
        lightbox.style.display = 'none';
    }
});