/* primer ejercicio de dia de la semana*/

let diaSemana = prompt('¿Qué día de la semana es?');

if(diaSemana == 'Sábado' || diaSemana == 'Domingo'){
    alert('¡Buen fin de semana!');
}else{
    alert('¡Buena semana!');
}

/* segundo ejercicio de verificar nuemros positivos o negativos*/

let numero = prompt('Ingresé un numero cualquiera');

if(numero > 0){
    alert("El número es positivo");
}else if(numero < 0){
    alert('El número es negativo');
}else{
    alert('El número es 0');
}

/* tercer ejercicio un sistema de puntuación para un juego*/

let puntuacion = 100;

if(puntuacion >= 100){
    alert('¡Felicidades, has ganado!');
}else{
    alert('Intentalo nuevamente para ganar.');
}

/*cuarto ejercicio informe al usuario sobre el saldo en su cuenta*/

let saldoCuenta = 600;
alert(`Su saldo es: ${saldoCuenta}`);

/* quinto ejercicio pide el nombre el usuario utiliza template string*/

let nombreUSuario = prompt('Ingrese su nombre');
alert(`Bienvenido ${nombreUSuario}`);