
/* ¿Cuántos años de diferencia tienes con tu hermano? Escribe un programa que muestre el mensaje ¨Nuestra diferencia de edad es¨, concatenando el resultado de la diferencia de tu edad con la de tu hermano (o de un amigo). La respuesta puede dar negativa, sin duda. No olvides de usar las funciones saltarLinea e imprimir y de incluir la etiqueta <meta> para resolver problemas de acentuación. 
 */

let edadEsteban = 37;
let edadHermano = prompt("Por favor, introduzca su edad: ");
let diferenciaEdad = 37 - edadHermano;

function saltarLinea(num){
    for(let i = 0; i < num; i++){
        document.write("<br>");
    }
}

function imprimir(mensaje){
    document.write(mensaje)
    saltarLinea(4);

}

saltarLinea(3)

imprimir(`La diferencia de edad con su amigo es: ${diferenciaEdad} `)
