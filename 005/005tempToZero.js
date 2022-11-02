"use strict";
/* 005tempToZero.js/.html: Crear una función temporizador que reciba
como parámetro los minutos y segundos de duración de éste, de modo,
que cada segundo mostrará por consola el tiempo que le queda al temporizador
hasta llegar a 0. La función recibirá dos parámetros, con los minutos y
los segundos, pero en el caso que sólo le pasemos un parámetro, considerará
que son los segundos desde donde comenzará la cuenta atrás. Por ejemplo:
temporizador(77);	// le pasamos 77 segundos
temporizador(2,50);	// le pasamos 2 minutos y 50 segundos
*/

let minutes = +prompt("Establece los minutos en el temporizador");
let seconds = +prompt("Establece los segundos en el temporizador");
temporizador(seconds, minutes);

function temporizador(sec, min = 0) {
  sec += min * 60;
  let myInterval = setInterval(function () {
    console.log(sec);
    sec--;
    if (sec == 0) {
        clearInterval(myInterval);
      }
  }, 1000);
}
