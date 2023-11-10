document.addEventListener('DOMContentLoaded', function() {
    const carrusel = document.querySelector('.carrusel');
    const imagenes = document.querySelector('.imagenes');
    const flechaIzquierda = document.querySelector('.flecha-izquierda');
    const flechaDerecha = document.querySelector('.flecha-derecha');
    let indice = 0;

    function cambiarImagen() {
        imagenes.style.transform = `translateX(${-100 * indice}%)`;
    }

    function avanzar() {
        indice = (indice + 1) % imagenes.children.length;
        cambiarImagen();
    }

    function retroceder() {
        indice = (indice - 1 + imagenes.children.length) % imagenes.children.length;
        cambiarImagen();
    }

    flechaIzquierda.addEventListener('click', retroceder);
    flechaDerecha.addEventListener('click', avanzar);

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            retroceder();
        } else if (e.key === 'ArrowRight') {
            avanzar();
        }
    });

    setInterval(avanzar, 5000); // Cambiar de imagen cada 5 segundos (ajusta según tu preferencia)
});
