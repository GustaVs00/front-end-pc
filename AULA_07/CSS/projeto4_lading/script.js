// Seleciona todos os elementos que possuem a classe '.animar' para monitoramento de visibilidade na viewport[cite: 19]
const elementosParaAnimar = document.querySelectorAll('.animar');

// Cria um observador (IntersectionObserver) para detectar de forma eficiente quando os elementos entram na tela[cite: 19]
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        // Verifica se o elemento alvo já está visível dentro da janela do navegador[cite: 19]
        if (entrada.isIntersecting) {
            // Adiciona a classe 'visivel' que aciona as regras de transição/animação definidas no CSS[cite: 19]
            entrada.target.classList.add('visivel');
            // Interrompe a observação do elemento após a animação ser executada pela primeira vez, otimizando a performance[cite: 19]
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.1 // Define que a execução ocorre quando pelo menos 10% do elemento se torna visível na tela[cite: 19]
});

// Registra o observador individualmente para cada elemento elegível selecionado[cite: 19]
elementosParaAnimar.forEach(elemento => {
    observador.observe(elemento);
});