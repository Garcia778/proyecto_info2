document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.contenedor-imagenes img');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function() {
            alert(`¡Hiciste clic en la imagen: ${this.alt}!`);
            // Aquí puedes agregar más interactividad, como mostrar la imagen en un modal, etc.
        });
    });
});
