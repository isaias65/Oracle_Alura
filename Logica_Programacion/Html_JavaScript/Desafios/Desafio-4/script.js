/*Crea una lista vacía llamada "listaGenerica".*/
let listaGenerica = [];

/*Crea una lista de lenguajes de programación llamada 
"lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

/*Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.*/

lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('Golang');

/*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.*/

function mensajeLista(){
    lenguagesDeProgramacion.map(function(valor){
        console.log(valor);
    })
}
mensajeLista();

/*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.*/

function mensajeListaInverso(){
     
    for (let i = lenguagesDeProgramacion.length -1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
      }
}

mensajeListaInverso();

/*Crea una función que calcule el promedio de los elementos en una lista de números.*/

let listaNumero = [10, 20 , 30];

function calculePromedio(){
    let suma = 0;
    for (let i of listaNumero){
         suma += i;
    }
    let resultado = suma / listaNumero.length;
    console.log(resultado);
}

calculePromedio();

/*Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista. */

let listaNumero2 = [10, 20, 40 , 50];

function numeroMayorMenor(){
    let mayor = listaNumero2[0];
    let menor = listaNumero2[0];

    for(let i of listaNumero2){
        if(i > mayor){
            mayor = i;
        }
        if(i < menor){
            menor = i;
        }
    }
    console.log(`El numero mayor es ${mayor}`);
    console.log(`El numero mayor es ${menor}`);
}

numeroMayorMenor();

/*Crea una función que devuelva la suma de todos los elementos en una lista.*/

let numeros = [15, 8, 25, 12];

function calcularSuma(lista) {
    let suma2 = 0;
    for (let i = 0; i < lista.length; i++) {
      suma2 += lista[i];
    }
    return suma2;
}
  

let suma1 = calcularSuma(numeros);
console.log('Suma:', suma1);

/*Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, 
o -1 si no existe en la lista.*/

function devuelvePosicion(lista, elemento){
    let i = 0;
    while(i < numeros.length){

        if(lista[i] === elemento){
            return i;
        }
        i++;
    }
    return -1;

}

let resultado = devuelvePosicion(numeros, 8);
console.log(resultado);

function devuelvePosicionFor(lista, elemento){
    for(let a of numeros){
        if(a === elemento){
            return 1;
        }
    }
    return -1;

}
let resultadofor = devuelvePosicionFor(numeros, 1);
console.log(resultadofor);

/*Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.*/

let sumaLista1 = 0;
let sumaLista2 = 0;

function sumaLista(lista1, lista2){
    for(let i of lista1){
        sumaLista1 += i;
    }

    console.log(`La suma del primer arreglo es: ${sumaLista1}`);

    for(let i of lista2){
        sumaLista2 += i;
    }

    console.log(`La suma del primer arreglo es: ${sumaLista2}`);

}

sumaLista(numeros, listaNumero2);

/*Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.*/

let cuadrado = 0;

function numeroAlCuadrado(lista){
    for(let i of lista){
        cuadrado = i ** 2;
        console.log(cuadrado)
    }
}
numeroAlCuadrado(numeros);