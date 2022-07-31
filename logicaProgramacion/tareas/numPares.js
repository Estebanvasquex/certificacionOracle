function saltarLinea(num){
    for(let i = 0; i < num; i++){
        document.write("<br>");
    }
}

function imprimir(mensaje){
    document.write(mensaje)
    saltarLinea(4);

}


let numInicio = parseInt(prompt("INGRESE EL NÚMERO FINAL PARA MOSTRAR LOS PARES"))

imprimir("NÚMEROS PARES DEL 2 AL: " + numInicio)

let contador = 1;
let totalPares = 0;
while (contador<=numInicio) 
{

    if (contador % 2 == 0) {
        imprimir(contador)
        totalPares = totalPares + 1;
    }

    contador++
    
}

imprimir("TOTAL DE NÚMEROS PARES ES: " + totalPares)