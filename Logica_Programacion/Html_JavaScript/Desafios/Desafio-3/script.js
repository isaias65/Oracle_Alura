/*Crea una función que calcule el índice de masa corporal (IMC) 
de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.*/

function masaCorporal(altura, peso){
    let imc = peso/(altura * altura);
    return imc;
}

/*Crea una función que calcule el valor del factorial de un número pasado como parámetro.*/

function valorFactorial(numero){
    //si el numero es 0 o 1 va a devolver 1
    if(numero === 0 || numero === 1){
        return 1;
    }else{
        //recursividad
        return numero * valorFactorial(numero - 1);
    }
}

let resultadoValorFactorial = valorFactorial(5);
console.log(`El factorial es ${resultadoValorFactorial}`);

/*Crea una función que convierta un valor en dólares, pasado como parámetro, 
y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
Para esto, considera la cotización del dólar igual a R$4,80.*/ 

function convertirDolares(numero2){
    let dolares = 4.80;
    let reales = numero2 * dolares;
    return reales;
}

let resultadoConvertirDolares = convertirDolares(50);
console.log(`La conversion es: ${resultadoConvertirDolares}`);

/*Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros.*/

function perimetroRectangulo(altura, ancho){
    let perimetro = 2*(altura + ancho);
    return perimetro;
}

let altura = 10;
let ancho = 20;

let resultadoPerimetroRectangulo = perimetroRectangulo(altura, ancho);
console.log(`La altura es ${altura} y el ancho es  ${ancho}, el resultado  es: ${resultadoPerimetroRectangulo}`);

/*Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.*/

function obtenerPerimetroCircular(radio){
    let pi = 3.14;

    let areaCircular = pi*(radio * radio);
    let perimetroCircular = 2*(pi) * radio;

    console.log(`La area es: ${areaCircular}`);
    console.log(`El perimetro es: ${perimetroCircular}`);
}

obtenerPerimetroCircular(5);

/*Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.*/

function tablaMultiplicar(numero3){
    for (var i = 0; i <= 12; i++) {
        var resultado = numero3 * i;
        console.log(numero3 + " x " + i + " = " + resultado);
      }
}

let numero3 = 6;
tablaMultiplicar(numero3);