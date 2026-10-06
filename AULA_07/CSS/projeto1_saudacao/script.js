// document.getElementById seleciona o elemento HTML através do seu atributo ID para podermos monitorar interações nele
const btnTema = document.getElementById('btn-tema');
// Acesso direto ao elemento raiz do corpo da página onde as cores base geralmente são definidas
const body = document.body;

// addEventListener configura um 'ouvinte' que fica aguardando o evento de 'click' ocorrer no botão para então disparar a função
btnTema.addEventListener('click', () => {
    // A função classList.toggle é ideal para botões de alternância: ela verifica se a classe 'dark-mode' existe no body; se não existir ela adiciona, se existir ela remove.
    body.classList.toggle('dark-mode');
});