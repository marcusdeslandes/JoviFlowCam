// Troca de botões de tipo de camera
const botaoFoto = document.querySelector("#btn-photo");
const botaoVideo = document.querySelector("#btn-video");
const botaoDocumento = document.querySelector("#btn-document");

const previewImagem = document.querySelector("#image-preview");

const botaoCamera = document.querySelector("#btn-camera");

const caixaDica = document.querySelector('#dica-container');

const paragrafoDica = document.querySelector('#dica-paragrafo');

botaoFoto.addEventListener('click', () => {
    // Interação entre botões de tipo de câmera e botão da câmera
    botaoCamera.classList.replace('bg-red-700', 'bg-white');
    previewImagem.src = "./images/photo-ex1.jpg";
    botaoVideo.classList.remove("bg-[#120052]",  "rounded-full");
    botaoDocumento.classList.remove("bg-[#120052]",  "rounded-full");
    botaoFoto.classList.add("bg-[#120052]",  "rounded-full");

    // dica
    paragrafoDica.textContent = 'Que tal dar um passo para a direita?'
    caixaDica.classList.add('flex');
    caixaDica.classList.remove('hidden');
});

botaoVideo.addEventListener('click', () => {
    // Interação entre botões de tipo de câmera e botão da câmera
    botaoCamera.classList.replace('bg-white', 'bg-red-700');
    previewImagem.src = "./images/photo-ex2.jpg";
    botaoFoto.classList.remove("bg-[#120052]",  "rounded-full");
    botaoDocumento.classList.remove("bg-[#120052]",  "rounded-full");
    botaoVideo.classList.add("bg-[#120052]",  "rounded-full");

     // dica
    paragrafoDica.textContent = 'Estabilize um pouco a câmera!'
    caixaDica.classList.add('flex');
    caixaDica.classList.remove('hidden');

});

botaoDocumento.addEventListener('click', () => {
    // Interação entre botões de tipo de câmera e botão da câmera
    botaoCamera.classList.replace('bg-red-700', 'bg-white');
    previewImagem.src = "./images/photo-ex3.jpg";
    botaoFoto.classList.remove( "bg-[#120052]",  "rounded-full");
    botaoVideo.classList.remove("bg-[#120052]",  "rounded-full");
    botaoDocumento.classList.add("bg-[#120052]",  "rounded-full");

    // dica
    paragrafoDica.textContent = 'Afaste a câmera para enquadrar todo o documento!'
    caixaDica.classList.add('flex');
    caixaDica.classList.remove('hidden');
});