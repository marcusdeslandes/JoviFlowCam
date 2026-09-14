// Troca de botões de tipo de camera
const botaoFoto = document.querySelector("#btn-photo");
const botaoVideo = document.querySelector("#btn-video");
const botaoDocumento = document.querySelector("#btn-document");

const cameraContainer = document.querySelector('#camera');

const previewImagem = document.querySelector("#image-preview");

const botaoCamera = document.querySelector("#btn-camera");

const caixaDica = document.querySelector('#dica-container');

const paragrafoDica = document.querySelector('#dica-paragrafo');


// Interação entre botões de tipo de câmera e botão da câmera
botaoFoto.addEventListener('click', () => {
    botaoCamera.classList.replace('bg-red-700', 'bg-white');
    previewImagem.src = "./images/photo-ex1.jpg";
    botaoVideo.classList.remove("bg-[#120052]",  "rounded-full");
    botaoDocumento.classList.remove("bg-[#120052]",  "rounded-full");
    botaoFoto.classList.add("bg-[#120052]",  "rounded-full");
    cameraContainer.classList.remove('video');

    // Interatividade da dica flutuante 
    paragrafoDica.textContent = 'Que tal dar um passo para a direita?'
    caixaDica.classList.add('flex');
    caixaDica.classList.remove('hidden');
});

botaoVideo.addEventListener('click', () => {
    botaoCamera.classList.replace('bg-white', 'bg-red-700');
    previewImagem.src = "./images/photo-ex2.jpg";
    botaoFoto.classList.remove("bg-[#120052]",  "rounded-full");
    botaoDocumento.classList.remove("bg-[#120052]",  "rounded-full");
    botaoVideo.classList.add("bg-[#120052]",  "rounded-full");
    cameraContainer.classList.add('video');

     // Interatividade da dica flutuante
    paragrafoDica.textContent = 'Estabilize um pouco o seu celular';
    caixaDica.classList.add('flex');
    caixaDica.classList.remove('hidden');

});

botaoDocumento.addEventListener('click', () => {
    botaoCamera.classList.replace('bg-red-700', 'bg-white');
    previewImagem.src = "./images/photo-ex3.jpg";
    botaoFoto.classList.remove( "bg-[#120052]",  "rounded-full");
    botaoVideo.classList.remove("bg-[#120052]",  "rounded-full");
    botaoDocumento.classList.add("bg-[#120052]",  "rounded-full");
    cameraContainer.classList.remove('video');

    // Interatividade da dica flutuante
    paragrafoDica.textContent = 'Que tal afastar a câmera para enquadrar todo o documento?';
    caixaDica.classList.add('flex');
    caixaDica.classList.remove('hidden');
});

// Mudança de tela após foto tirada
const menuClickFoto = document.querySelector('#photo-click-container');
const menuOpcoes = document.querySelector('#opcoes-camera-container');
const cardsSocial = document.querySelector('#social-container');

botaoCamera.addEventListener('click', () => {
    menuClickFoto.classList.add('hidden');
    menuOpcoes.classList.add('hidden');
    cardsSocial.classList.replace('hidden', 'block');
});

// Botão de cancelar
const botaoCancelar = document.querySelector('#btn-cancelar-photo');

botaoCancelar.addEventListener('click', () => {
    window.location.reload();
});