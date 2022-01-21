
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var inputMensajeAEncriptar = document.querySelector("#input-texto");

var botonEncriptar = document.querySelector("#btn-encriptar");

var botonDesencriptar = document.querySelector("#btn-desencriptar");

var botonCopiar = document.querySelector("#btn-copy");

var inputResultado = document.querySelector("#msg");

const land1 = /[!@#£€$¢¥§%°^&*()-+={}[]|\/:;"'<>,.áéíóú]/g;
const land2 = /[A-Z]/g;

function encriptar () {

    if (inputMensajeAEncriptar.value.match(land1)) {
      alert("no se permiten caracteres especiales ");
    }

    else if (inputMensajeAEncriptar.value.match(land2)) {
      alert("solo utilizar letras minusculas")
    }

    else {
    var mensaje = inputMensajeAEncriptar.value.toLowerCase();
    var reemplazo1 = mensaje.replaceAll("e", "enter");
    var reemplazo2 = reemplazo1.replaceAll("i", "imes");
    var reemplazo3 = reemplazo2.replaceAll("a", "ai");
    var reemplazo4 = reemplazo3.replaceAll("o", "ober");
    var reemplazo5 = reemplazo4.replaceAll("u", "ufat");

    inputResultado.value = reemplazo5;
  }
    
}

function desencriptar () { 
      if (inputMensajeAEncriptar.value.match(land1)) {
          alert("no se permiten caracteres especiales")
      }

      else if (inputMensajeAEncriptar.value.match(land2)) {
          alert("solo utilizar letras minusculas")
      }

      else {
    var mensaje = inputMensajeAEncriptar.value.toLowerCase();
    var reemplazo1 = mensaje.replaceAll("enter", "e");
    var reemplazo2 = reemplazo1.replaceAll("imes", "i");
    var reemplazo3 = reemplazo2.replaceAll("ai", "a");
    var reemplazo4 = reemplazo3.replaceAll("ober", "o");
    var reemplazo5 = reemplazo4.replaceAll("ufat", "u");

    inputResultado.value = reemplazo5;
  }
}

botonEncriptar.onclick = encriptar;

botonDesencriptar.onclick = desencriptar;

botonCopiar.onclick = function() {
    navigator.clipboard.writeText(inputResultado.value);
    inputMensajeAEncriptar.value = "";
    inputMensajeAEncriptar.focus();
}

/*
var mensaje = "Mensaje a válidar numero 1";
var alfabeto = "abcdefghijklmnñopqrstuvwxyz ";
var mensajeError = "";
for (var letra of mensaje) {
  if (!alfabeto.includes(letra)) {
    mensajeError += " La letra " + letra + " no es válida";
  }
}
console.log(mensajeError);
*/

