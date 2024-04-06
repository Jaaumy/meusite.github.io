// Função para abrir a mini janela
function openModal() {
    var modal = document.getElementById("modal"); // Obtém a mini janela pelo ID
    if (modal) { // Verifica se a mini janela existe
        modal.style.display = "block"; // Exibe a mini janela
        document.body.style.overflow = "hidden"; // Impede a rolagem da tela de fundo
    }
}

// Função para fechar a mini janela
function closeModal() {
    var modal = document.getElementById("modal"); // Obtém a mini janela pelo ID
    if (modal) { // Verifica se a mini janela existe
        modal.style.display = "none"; // Oculta a mini janela
        document.body.style.overflow = "auto"; // Permite a rolagem da tela de fundo novamente
    }
}