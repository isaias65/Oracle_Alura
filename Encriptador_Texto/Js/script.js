const encrip = {
    a : "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u:"ufat"
}


function encriptar(){
    let texto = document.getElementById("textarea").value;
    let textoEncrip = " ";
    for(let i of texto){
        if(encrip[i]){
            textoEncrip += encrip[i];

            let welcome = document.getElementById("salida_bienvenido");
            welcome.style.display = "none";

            let result = document.getElementById("salida_resultado");
            result.style.display = "flex";
        }else{
            textoEncrip += i;
        }
    }
    let resultadoTexto = document.getElementById("texto_encriptado");
    resultadoTexto.innerHTML = textoEncrip;
}

function desencriptar(){
    let textoDes = document.getElementById("textarea").value;
    
    for(let [key, value] of Object.entries(encrip)){
        while (textoDes.includes(value)) {
            textoDes = textoDes.replace(value, key);
        }
    }
    let resultadoTexto = document.getElementById("texto_encriptado");
    resultadoTexto.innerHTML = textoDes;
}