/*Crear una función que muestre "¡Hola, mundo!" en la consola.*/

function saludo() {
  console.log("¡Hola, mundo!");
}
saludo();

/*Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.*/

function obtenerNombre(nombre) {
  console.log("¡Hola, " + nombre + "!");
  console.log(`¡Hola, ${nombre}!`);
}

obtenerNombre("sley");

/*Crear una función que reciba un número como parámetro y devuelva el doble de ese número.*/

function numeroDoble(numero) {
  return numero * 2;
}
let resultadoNumeroDoble = numeroDoble(5);
console.log(resultadoNumeroDoble);

/*Crear una función que reciba tres números como parámetros y devuelva su promedio.*/

function numeroPromedio(valor1, valor2, valor3) {
  return (valor1 + valor2 + valor3) / 3;
}

let resultadoNumeroPromedio = numeroPromedio(10, 15, 10);
console.log(resultadoNumeroPromedio);

/*Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.*/

function numeroMayor(valor4, valor5) {
  //primer ejemplo
  //Operador ternario
  return valor4 > valor5 ? valor4 : valor5;
  //Segundo ejemplo
  /*
   if (valor4 > valor5) {
    return valor4;
   } else {
     return valor5;
   }
  */
}

let resultadoNumeroMayor = numeroMayor(15, 20);
console.log(resultadoNumeroMayor);

/*Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.*/

function numeroPorNumero(numero2) {
  return numero2 * numero2;
}
let resultadoNumeroPorNumero = numeroPorNumero(2);
console.log(resultadoNumeroPorNumero);
