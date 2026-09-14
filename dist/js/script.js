// Troca de botões de tipo de camera
const botaoFoto = document.querySelector("#btn-photo");
const botaoVideo = document.querySelector("#btn-video");
const botaoDocumento = document.querySelector("#btn-document");

const previewImagem = document.querySelector("#image-preview");

const botaoCamera = document.querySelector("#btn-camera");

botaoFoto.addEventListener('click', () => {
    // Interação entre botões de tipo de câmera e botão da câmera
    botaoCamera.classList.replace('bg-red-700', 'bg-white');
    previewImagem.src = "./images/photo-ex1.jpg";
    botaoVideo.classList.remove("px-4", "py-1" , "bg-[#120052]",  "rounded-full");
    botaoDocumento.classList.remove("px-4", "py-1" , "bg-[#120052]",  "rounded-full");
    botaoFoto.classList.add("px-4", "py-1" , "bg-[#120052]",  "rounded-full")
})
botaoVideo.addEventListener('click', () => {
    // Interação entre botões de tipo de câmera e botão da câmera
    botaoCamera.classList.replace('bg-white', 'bg-red-700');
    previewImagem.src = "./images/photo-ex2.jpg";
    botaoFoto.classList.remove("px-4", "py-1" , "bg-[#120052]",  "rounded-full");
    botaoDocumento.classList.remove("px-4", "py-1" , "bg-[#120052]",  "rounded-full");
    botaoVideo.classList.add("px-4", "py-1" , "bg-[#120052]",  "rounded-full")
})
botaoDocumento.addEventListener('click', () => {
    // Interação entre botões de tipo de câmera e botão da câmera
    botaoCamera.classList.replace('bg-red-700', 'bg-white');
    previewImagem.src = "./images/photo-ex3.jpg";
    botaoFoto.classList.remove("px-4", "py-1" , "bg-[#120052]",  "rounded-full");
    botaoVideo.classList.remove("px-4", "py-1" , "bg-[#120052]",  "rounded-full");
    botaoDocumento.classList.add("px-4", "py-1" , "bg-[#120052]",  "rounded-full")
})