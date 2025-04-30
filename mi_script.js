document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('miBoton');

    if (boton) {
        boton.addEventListener('click', function() {
            alert('¡Hola! Este es un botón interactivo.');
        });
    }
});
