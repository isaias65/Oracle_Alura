const encrip = {
    a : "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u:"ufat"
}

function encriptar(){
    let texto = document.getElementById("textarea").value;
    let obtenerTextoEncriptado = "";

    if(!texto){
        mensajeAlerta("Mensaje vacío", "Por favor ingrese un texto", "warning");
        return;
    }
    if (!/^[a-zñ\s,.]+$/.test(texto)) {
        mensajeAlerta("Texto inválido", "Solo se permiten letras minúsculas y sin acentos.", "error");
        return;
    }
    for(let i of texto){
        if(encrip[i]){
            obtenerTextoEncriptado = obtenerTextoEncriptado + encrip[i];
        }else{
            obtenerTextoEncriptado = obtenerTextoEncriptado + i;
        }
    }
    const textoEncriptado = document.getElementById("texto_encriptado");
    textoEncriptado.innerHTML = obtenerTextoEncriptado;

    document.querySelector(".salida_result").classList.remove("activo");
    document.querySelector(".salida_welcome").classList.add("activo");
}
function desencriptar(){
    let textoDes = document.getElementById("textarea").value;
    let obtenerTextoDescriptado = textoDes; 
    
    if(!obtenerTextoDescriptado){
        mensajeAlerta("Mensaje vacío", "Por favor ingrese un texto", "warning");
        return;
    }
    if (!/^[a-z\s]+$/.test(obtenerTextoDescriptado)) {
        mensajeAlerta("Texto inválido", "Solo se permiten letras minúsculas y sin acentos.", "error");
        return;
    }

    for(let [key, value] of Object.entries(encrip)){
        while (obtenerTextoDescriptado.includes(value)) {
            obtenerTextoDescriptado = obtenerTextoDescriptado.replace(value, key);
        }
    }

    let textoDesencriptado  = document.getElementById("texto_encriptado");
    textoDesencriptado.innerHTML = obtenerTextoDescriptado;


}

function copia(){
    let copiarTexto = document.querySelector("#texto_encriptado");
    copiarTexto.select();
    document.execCommand("copy");
}

function mensajeAlerta(title, text, icon){
    Swal.fire({
        title: title,
        text: text,
        icon: icon
      });
}
