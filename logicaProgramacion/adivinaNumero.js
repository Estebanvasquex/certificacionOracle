function saltarLinea(num){
    for(let i = 0; i < num; i++){
        document.write("<br>");
    }
}

function imprimir(mensaje){
    document.write(mensaje)
    saltarLinea(4);

}

imprimir("<h1>JUEGO ADIVINA EL NÚMERO</h1>");
let numAleatorio =  Math.round(Math.random()*5);
let intentos = 3;
let contador = 1;


while (contador<=3) {
    let numeroLanzado = parseInt(prompt("INGRESA NÚMERO PENSADO: "))

    if(numeroLanzado == numAleatorio){
        alert("FELICITACIONES LO ADIVINASTE ES EL: " + numAleatorio);
        break;   
    }
    else{
        alert("VUELVE A INTENTARLO")
    }
    contador++
    
}

imprimir(`EL NÚMERO ERA: ${numAleatorio}: `)