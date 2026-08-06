/* ===========================================
      CARRUSEL UNIVERSAL COPÁN RUINAS
=========================================== */

const slide = document.getElementById("slide");

if (slide) {

    const prefijo = slide.dataset.prefijo;
    const total = parseInt(slide.dataset.total);
    const extension = slide.dataset.extension;

    const imagenes = [];

    for (let i = 1; i <= total; i++) {

        imagenes.push(`img/${prefijo}${i}.${extension}`);

    }

    let indice = 0;

    function mostrar() {

        slide.style.opacity = 0;

        setTimeout(() => {

            slide.src = imagenes[indice];

            slide.style.opacity = 1;

        }, 400);

    }

    window.siguiente = function () {

        indice++;

        if (indice >= imagenes.length) {

            indice = 0;

        }

        mostrar();

    };

    window.atras = function () {

        indice--;

        if (indice < 0) {

            indice = imagenes.length - 1;

        }

        mostrar();

    };

    setInterval(siguiente, 3000);

}