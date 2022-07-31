function saltarLinea(num){
    for(let i = 0; i < num; i++){
        document.write("<br>");
    }
}

function imprimir(mensaje){
    document.write(mensaje)
    saltarLinea(4);

}

let multipicador = 1;
let num = parseInt(prompt("INGRESA EL NÚMERO PARA IMPRIMIR LA TABLA: "));

imprimir(`ESTA ES LA TABLA DEL : ${num}`)
while (multipicador<=10) 
{

    imprimir(`${num} X ${multipicador} = ${num * multipicador} `);
    multipicador+=1;
    
}