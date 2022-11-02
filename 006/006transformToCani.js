"use strict";
/* 006transformToCani.js/.html: Crear una función que reciba una cadena
y la devuelva transformada en Cani. Por ejemplo, si le pasamos a la
función la cadena "una cadena cani es como ésta" obtendremos
"UnA KaDeNa kAnI Es kOmO EsTaHHH". Para ello, hay que alternar el uso
de MAYÚSCULAS y minúsculas, sustituir la letra C por la K y añadir tres letras H al final.
*/

alert(stringToCani("una cadena Cani es como esta"));

function stringToCani(cadena) {
  cadena = cadena.replaceAll(/c|C/g, "k");
  let res = "";
  for (let index = 0; index < cadena.length; index++) {
    if (index % 2 == 0) {
      res += cadena.charAt(index).toUpperCase();
    } else {
      res += cadena.charAt(index).toLowerCase();
    }
  }
  return res + "HHH";
}
