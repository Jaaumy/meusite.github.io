const images = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function showImage(index) {
    // Oculta todas as imagens
    images.forEach(image => {
        image.style.display = 'none';
    });
    // Exibe a imagem com o índice especificado
    images[index].style.display = 'block';
}

function nextImage() {
    // Atualiza o índice para a próxima imagem
    currentIndex = (currentIndex + 1) % images.length;
    // Exibe a próxima imagem
    showImage(currentIndex);
}

// Define o intervalo para mudar de imagem a cada 3 segundos
setInterval(nextImage, 3000);

// Função para rolar a página até a seção "Sobre"
function scrollToAbout() {
    const aboutElement = document.getElementById('about');
    aboutElement.scrollIntoView({ behavior: 'smooth' });
}

// Função para abrir a mini janela
function openModal() {
    document.getElementById("modal").style.display = "block";
    document.body.style.overflow = "hidden"; // Impede a rolagem da tela de fundo
}

// Função para fechar a mini janela
function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "auto"; // Permite a rolagem da tela de fundo novamente
}

// Fechar a mini janela ao clicar fora dela
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        closeModal();
    }
}




