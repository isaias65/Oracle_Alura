//utilizar un selector en etiquetas
let selector = document.querySelector("h1");
//Cambiar o reemplazar el contenido de la etiqueta

selector.innerHTML = "Hola mundo";

//declarar una funcion
function prueba() {
  console.log("hola mundo");
}

//declarar una funcion con parametros

function prueba(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}
prueba("h1", "Juefo del número secreto!");

//capturar el dato ingresado de un input
let numeroDeUsuario = document.getElementById("valorUsuario").value;

//declarar un arreglo
let frutas = [];

//agregar elementos en el arreglo
frutas.push('manzana');

//como obtener el ultimo elemento de un arreglo
console.log(frutas[frutas.length-1]);