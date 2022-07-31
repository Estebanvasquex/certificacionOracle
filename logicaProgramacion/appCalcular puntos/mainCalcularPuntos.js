function saltarLinea(num){
    for(let i = 0; i < num; i++){
        document.write("<br>");
    }
}

function imprimir(mensaje){
    document.write(mensaje)
    saltarLinea(4);

}

let victorias = parseInt(prompt("Informa la cantidad de victorias"));/*  El prom siempre devuelve String, se debe cambiar el tipo de dato para hacer operaciones parseInt*/
let empates = parseInt(prompt("Informa la cantidad de empates2"));
let puntosAnioPasado = parseInt(prompt("Informa los puntos del año pasado: "));

let puntosTotales = victorias * 3 + empates;

imprimir("El total de victorias es  del equipo es: " + puntosTotales);

/* COMPARAR CON LOS PUNTOS DEL AÑO PASADO */

function calcularDiferenciaAnios(puntosTotales,puntosAnioPasado){

    if(puntosTotales > puntosAnioPasado){
        return imprimir("El equipo está mejor que el año pasado");
    }
    if(puntosTotales < puntosAnioPasado){
        return imprimir("El equipo está peor que el año pasado");
    }
    if(puntosTotales < puntosAnioPasado){
        return imprimir("El equipo está igual que el año pasado");
    }


}

calcularDiferenciaAnios(puntosTotales,puntosAnioPasado);




