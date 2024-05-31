/* Precio base */
const precio = 400000;

/* elementos de html */
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");
const btnIncrementar = document.querySelector(".btn-incrementar");
const btnDisminuir = document.querySelector(".btn-disminuir");

/* Precio y cantidad */
precioSpan.innerHTML = precio;
let cantidad = 0;

/* Actualizar valor 🫦 */
function actualizarTotal() {
    const total = precio * cantidad;
    valorTotalSpan.innerHTML = total;
}

/* Funciones click */
function manejarClic(event) {
    const button = event.target;

    if (button.classList.contains("btn-incrementar")) {
        cantidad++;
    } else if (button.classList.contains("btn-disminuir")) {
        if (cantidad > 0) {
            cantidad--;
        }
    }

    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
}

/* Eventos */
btnIncrementar.addEventListener("click", manejarClic);
btnDisminuir.addEventListener("click", manejarClic);

actualizarTotal();
