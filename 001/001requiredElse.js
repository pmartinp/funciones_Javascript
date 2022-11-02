"use strict";
/* 001requiredElse.js/.html: ¿Es "else" requerido?
La siguiente función devuelve true si el parámetro age es mayor a 18.
De lo contrario, solicita una confirmación y devuelve su resultado:

¿Funcionará la función de manera diferente si se borra else?
¿Hay alguna diferencia en el comportamiento de estas dos variantes?
*/

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm("¿Tus padres te permitieron?");
}

alert(checkAge(20));

// La función funcionará de igual manera tanto con el else, como sin el else.
// No, no existe diferencia de comportamiento cuando hablamos de este código.
// Esto se debe a que la acción return termina con la ejecución de la función.
