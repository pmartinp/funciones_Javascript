"use strict";
/* 002rewriteFunction.js/.html: Reescribe la función utilizando '?' o '||'.
La siguiente función devuelve true si el parámetro age es mayor que 18.
De lo contrario, solicita una confirmación y devuelve su resultado.
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('¿Tienes permiso de tus padres?');
  }
}
Reescríbela para realizar lo mismo, pero sin if, en una sola línea.
Haz dos variantes de checkAge:
-	Usando un operador de signo de interrogación ?
-	Usando OR ||
*/

function checkAge(age) {
  return age > 18 ? true : confirm("¿Tienes permiso de tus padres?");
}

function checkAgeOr(age){
    return age > 18 == true || confirm("¿Tienes permiso de tus padres?");
}

alert(checkAge(15));
alert(checkAgeOr(20));
