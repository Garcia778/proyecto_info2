const carruselContenedor = document.querySelector('.carrusel-contenedor');
const carruselTrack = document.querySelector('.carrusel-track');
const anteriorBoton = document.querySelector('.anterior');
const siguienteBoton = document.querySelector('.siguiente');
const imagenes = document.querySelectorAll('.carrusel-track img');

let indice = 0;

function actualizarCarrusel() {
    carruselTrack.style.transform = `translateX(-${indice * 100}%)`;
}

anteriorBoton.addEventListener('click', () => {
    if (indice > 0) {
        indice--;
        actualizarCarrusel();
    }
});

siguienteBoton.addEventListener('click', () => {
    if (indice < imagenes.length - 1) {
        indice++;
        actualizarCarrusel();
    }
});
