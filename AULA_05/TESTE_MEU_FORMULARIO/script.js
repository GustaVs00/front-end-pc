const formulario = document.getElementById('formCadastro');
const divMensagem = document.getElementById('mensagemConfirmacao');
const inputNome = document.getElementById('nome');

formulario.addEventListener('submit', function(event) {
    /* O preventDefault é fundamental aqui: ele interrompe o comportamento padrão do navegador de recarregar a página ao submeter o form, permitindo a manipulação dos dados via script */
    event.preventDefault();
    
    const nomeInformado = inputNome.value;
    
    /* O uso de crases (Template Literals) permite a interpolação direta da variável ${nomeInformado} dentro da string de texto, tornando a concatenação mais legível */
    divMensagem.textContent = `Bem-vindo(a), ${nomeInformado}! Cadastro realizado com sucesso.`;
    
    /* A função nativa reset() limpa automaticamente todos os campos do formulário para o seu estado inicial (vazio) */
    formulario.reset();
});