//Variables de captura del DOM o selectores
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const listaArticulos = document.querySelector("#lista-articulos");
const carrito = document.querySelector("#carrito");
const divCarrito = document.querySelector("#lista-carrito tbody");

//registrar eventos
registrarEventListeners();
function registrarEventListeners() {
    listaArticulos.addEventListener("click", agregarArticulo);
}

// funciones
function agregarArticulo(e) {
    console.log(e.target.classList);
}



