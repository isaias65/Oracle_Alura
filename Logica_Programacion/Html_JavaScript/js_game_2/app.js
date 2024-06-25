let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSecreto = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    //El usuario no acertó.
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCampo();
  }
  return;
}

function limpiarCampo(){
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

console.log(numeroGenerado);
console.log(listaNumeroSecreto);

  //si ya sorteamos todos los numeros
  if(listaNumeroSecreto.length == numeroMaximo){
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
  }else{
    //si el numero generado esta incluido en la lista
    if(listaNumeroSecreto.includes(numeroGenerado)){
      //si el numero ya esta en la lista otra vez genera un numero aleatorio
      return generarNumeroSecreto();
    }else{
      // si el numero no esta en la lista se agrega a la lista
      listaNumeroSecreto.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales(){
  asignarTextoElemento("h1", "Juefo del número secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  console.log(numeroSecreto);
}
function reiniciarJuego(){
  //limpiar campos
  limpiarCampo();
  //Indicar el número de intervalo de número
  //generar el número aleatorio
  //inicializar el número intentos
  condicionesIniciales();
  //desabilitar el botón de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();


