

function saltarLinea(num){
    for(let i = 0; i < num; i++){
        document.write("<br>");
    }
}

function imprimir(mensaje){
    document.write(mensaje)
    saltarLinea(4);

}



let aniomundial = 1930;

while (aniomundial<2020) {

    aniomundial +=4
    alert("HUBO MUNDIAL DE LA FIFA EN EL AÑO" + aniomundial);

    imprimir("TOTAL DE MUNDIALES: " + aniomundial);
    
}


