//Variables  de captura del DOM o selectores para saber que aprte del DOM se ataca //Estos cuatro son todos los selectores necesarios para el funcionamiento del carrito
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const listaArticulos = document.querySelector("#lista-articulos");       //Esto es absolutamente toda la lista de articulos
const carrito = document.querySelector("#carrito");
const divCarrito = document.querySelector("#lista-carrito");

//registrar eventos
registerEventListeners();
function registerEventListeners(){                 //Esto va a mostrar cualquier click que haga sobre la tarjeta.
    listaArticulos.addEventListener('click', agregarArticulo);         //Aqui se registra el evento de click en la lista de articulos
}                                  //Aqui va la funcion o las intrucciones

//---------------------------------------
//Funciones
/* function agregarArticulo(){
    console.log('Hiciste click en articulos')     //Esto seria sin eventos
} */

function agregarArticulo(e){
    console.log(e.target);   //Recordemos que e es EVENTO   //Este detecta especificamente si lke doy click a un titulo o imagen, y lo muestra en consola
}















/* function clickArticulos(){
    console.log("diste click en cualquier lugar de la lista de articulos");     //Esto sirve para ver en consola que se ha clickado el boton en cualqueir lugar de las tarjetas
}
listaArticulos.addEventListener("click", clickArticulos); */
