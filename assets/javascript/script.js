

function encriptador(texto, modo){
    let fraseFinal = texto;
   
    if(modo == "encriptar"){
        fraseFinal = fraseFinal.replace(/e/g, "enter");
        fraseFinal = fraseFinal.replace(/i/g, "imes");
        fraseFinal = fraseFinal.replace(/a/g, "ai");
        fraseFinal = fraseFinal.replace(/o/g, "ober");
        fraseFinal = fraseFinal.replace(/u/g, "ufat");
    }else{
        fraseFinal = fraseFinal.replace(/enter/g, "e");
        fraseFinal = fraseFinal.replace(/imes/g, "i");
        fraseFinal = fraseFinal.replace(/ai/g, "a");
        fraseFinal = fraseFinal.replace(/ober/g, "o");
        fraseFinal = fraseFinal.replace(/ufat/g, "u");
    }

    let entrada = document.getElementById("entrada");
    let chat = document.getElementById("chat");

    chat.innerHTML = "";
    chat.innerHTML = `<p id="resultado" class="resultado">${fraseFinal}</p>`;
    chat.innerHTML += `<button class="copiar" onclick="copiar()">Copiar</button>`;
    entrada.value = ""

    return fraseFinal;
}

function decriptar(){
    let value = document.getElementById("entrada").value;
    let textoEncriptado = encriptador(value, "descriptar");

    console.log(textoEncriptado)
}

function encriptar(){
    let value = document.getElementById("entrada").value;
    let textoEncriptado = encriptador(value, "encriptar");

    console.log(textoEncriptado)
}

function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function copiar(){
    let resultado = document.getElementById("resultado");
    navigator.clipboard.writeText(resultado.innerHTML);
    resultado.innerHTML = "Nenhuma mensagem"
}

document.getElementById("entrada").addEventListener("input", function(event) {
    let textarea = event.target;
    let texto = textarea.value;

    let textoFormatado = removerAcentos(texto);

    textarea.value = textoFormatado;
});