/*Crea un programa que utilice console.log para mostrar un mensaje de bienvenida*/

console.log("¡Bienvenido!");

/* crea una variable nombre, utiliza console para mostrar un mensaje con el nombre*/

let nombre = "sley";
console.log(`Hola, ${nombre}`);

/* crea una variable nombreAlert, utiliza alert para mostrar un mensaje con el nombre*/

let nombreAlert = "sley";
alert(`Hola, ${nombreAlert}`);

/*Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?.
Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.*/

let nombreLenguaje = prompt(
  "¿Cuál es el lenguaje de programación que más te gusta?"
);
console.log(nombreLenguaje);

/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.
 Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
  Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.*/

let valor1 = 5;
let valor2 = 4;

let resultado = valor1 + valor2;

console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.
Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.*/

let valor3 = 8;
let valor4 = 5;

let resultadoResta = valor3 - valor4;

console.log(
  `La diferencia entre ${valor3} y ${valor4} es igual a ${resultadoResta}`
);

/*Pide al usuario que ingrese su edad con prompt. 
Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad 
y muestra un mensaje apropiado en la consola.*/

let edad = prompt("¿Cúal es su edad?");

let resultadoEdad =
  edad >= 18 ? "Usted es mayor de edad" : "Usted no es mayor de edad";

console.log(resultadoEdad);

/*Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, 
negativo o cero utilizando un if-else y muestra el mensaje correspondiente.*/

let numero = prompt("Ingrese un número cualquiera");
if (numero > 0) {
  console.log("El número ingresado es positivo");
} else if (numero < 0) {
  console.log("El número ingresado es negativo");
} else {
  console.log("El número ingresado es 0");
}

/*Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.*/

let numero2 = 1;
while (numero2 <= 10) {
  console.log(numero2);
  numero2++;
}

/*Crea una variable "nota" y asígnale un valor numérico. 
Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.*/

let nota = 7;
let resultadoNota = nota >= 7 ? "Aprobado" : "Reprobado";
console.log(resultadoNota);

/*Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.*/

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

/*Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.*/

let numeroAleatorioEnteroPrimeraForma = Math.floor(Math.random() * 10) + 1;
let numeroAleatorioEnteroSegundaForma = parseInt(Math.random() * 10) + 1;
console.log(numeroAleatorioEnteroPrimeraForma);
console.log(numeroAleatorioEnteroSegundaForma);

/*Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.*/

let numeroAleatorioEntero2 = Math.floor(Math.random() * 1000) + 1;
console.log(numeroAleatorioEntero2);
