// Seleciona todos os elementos que possuem a classe '.animar'
const elementosParaAnimar = document.querySelectorAll('.animar');

// Cria um observador para detectar quando o elemento entra na tela
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        // Se o elemento estiver visível na janela do navegador
        if (entrada.isIntersecting) {
            // Adiciona a classe que ativa a animação do CSS
            entrada.target.classList.add('visivel');
            // Opcional: Para de observar o elemento após a animação acontecer uma vez
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.1 // A animação dispara quando 10% do elemento aparece na tela
});

// Aplica o observador a cada elemento selecionado
elementosParaAnimar.forEach(elemento => {
    observador.observe(elemento);
});