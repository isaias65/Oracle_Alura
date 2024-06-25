alert("Hola mundo"); //alerta
prompt("Me indicas un número por favor"); //pedir datos mediante una alerta
console.log(numeroUsuario); //ver los datos que tomo la variable

//variable
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un número por favor");
// condicionales
if (numeroUsuario == numeroSecreto) {
  //Acertamos, fue verdadera la condición
  alert("Acertaste el número");
  //capturar el numero almacenado del usuario
  alert(`Acertaste, el número es: ${numeroUsuario}`);
} else {
  //la condición no se cumplio
  alert("Lo siento, no acertaste el número");
}

//operadores ternarios
let palabraPersona = cantidadPersonas == 1 ? "persona" : "personas";

//obtener numero aleatorios
Math.random(); //devuelve en decimal
Math.random() * 10; //intervalo 0 hasta el 9
Math.floor(); //queda con el entero y obivia el decimal
Math.floor(Math.random() * 10); //me devuelve entero y intervalo 0 hasta 9
Math.floor(Math.random() * 10) + 1; //evitamos el 0 el intervalo 1 hasta 10
