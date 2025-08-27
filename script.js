//array com as imagens
const images = [
    './assets/image-content/image-1.png',
    './assets/image-content/image-2.png',
    './assets/image-content/image-3.png',
    './assets/image-content/image-4.png',
    './assets/image-content/image-5.png',
    './assets/image-content/image-6.png'
];

//conecta os elementos html que precisam ser manipulados
const imageContent = document.querySelector('.image-content');
const mainButton = document.getElementById('main-button');
const finalMessage = document.querySelector('.final-message');

//procura a imagem atual
let currentIndex = 0;

function updateImage() {
    imageContent.style.opacity = 0;

    const img = new Image();
    img.src = images[currentIndex];

    img.onload = () => {
        imageContent.style.backgroundImage = `url('${images[currentIndex]}')`;

        imageContent.style.opacity = 1;
    };
}

//mostra a primeira imagem
updateImage();

//configura o botão
mainButton.addEventListener('click', () => {
    currentIndex++;

    //se não estiver no final
    if (currentIndex < images.length) {
        updateImage();
    }

    //se estiver na ultima imagem
    if (currentIndex === images.length - 1) {
        mainButton.style.display = 'none';
        finalMessage.style.display = 'block';
    }
});
