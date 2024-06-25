//variables
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";
let maximoIntentos = 3;

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(
    prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`)
  );

  console.log(numeroUsuario);

  /*
    Este código realiza la comparación
    */
  if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(
      `Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${
        intentos == 1 ? "vez" : "veces"
      }`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El número secreto es menor");
    } else {
      alert("El número secreto es mayor");
    }
    //Incrementamos el contador cunado no acierta
    // intentos = intentos + 1;
    // intentos += 1;
    intentos++;

    // palabraVeces = "veces";
    if (intentos > maximoIntentos) {
      alert(`Llegaste al múmero máximo de ${maximoIntentos} intentos`);
      break;
    }
    //la condición no se cumplio
    // alert('Lo siento, no acertaste el número');
  }
}
