function saltarLinea(num){
    for(let i = 0; i < num; i++){
        document.write("<br>");
    }
}

function imprimir(mensaje){
    document.write(mensaje)
    saltarLinea(4);

}

imprimir("CALCULAR PROMEDIO DE EDAD DE LA FAMILIA")
let totalMiembros = parseInt(prompt("INGRESE EL TOTAL DE MIEMBROS: "))
let contador=1;
let sumaEdades = 0;

while(contador<=totalMiembros)
{
    let edad = parseInt(prompt(`INGRESE LA EDAD DEL FAMILIAR # ${contador}: `)) 
    sumaEdades=sumaEdades + edad;
    contador++
}

let promedio = sumaEdades/totalMiembros;

imprimir(`EL PROMEDIO DE EDADES ES:  ${promedio}: `)
