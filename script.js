// Función que se ejecuta lo antes posible

document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close-lightbox");
    const images = document.querySelectorAll(".project-gallery img, .hero-project-image");

    // Abrir Lightbox al hacer clic en cualquier imagen de la galería
    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            document.body.style.overflow = "hidden"; // Evita que la página se mueva atrás
        });
    });

    // Cerrar al hacer clic en la X
    closeBtn.addEventListener("click", () => {
        cerrarLightbox();
    });

    // Cerrar al hacer clic en el fondo negro
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            cerrarLightbox();
        }
    });

    function cerrarLightbox() {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto"; // Devuelve el scroll
    }
});

const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;

nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) {
        counter = -1; // Vuelve al inicio si llega al final
    }
    counter++;
    updateSlide();
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        counter = images.length; // Va al final si está en la primera
    }
    counter--;
    updateSlide();
});

function updateSlide() {
    const size = slide.clientWidth; // Mide el ancho real del contenedor en el momento
    slide.style.transform = `translateX(${-counter * size}px)`;
}

