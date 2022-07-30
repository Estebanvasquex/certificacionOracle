/* 
PROBLEMA

1.- Crea un nuevo archivo, llámalo calculo_consumo.html y guárdalo dentro de la carpeta que nombramos Lógica de Programación. No olvides la estructura mínima que tenemos que tener para cada uno de los nuevos programas.

2.- En el mundo HTML coloca un título con el siguiente contenido: <h3>¿Alcohol o gasolina?</h3>. Guarda el programa y ábrelo en el navegador.

3.- Problema: Si un carro tiene un tanque de 40 litros. Usando gasolina y consumiendo todo el tanque se hace un camino de 480 kilómetros. ¿Cuál es el consumo de gasolina por kilómetro recorrido? Para calcular el consumo: divide la distancia recorrida entre la cantidad de litros gastados. Imprime el valor utilizando document.write. Organiza las cuentas en variables.

4.- Por otro lado, con el alcohol: el mismo tanque de 40 litros hace un recorrido de 300 kilómetros. ¿Cuál es el consumo de alcohol por kilómetro recorrido?

 */

const TANQUELLENO = 40;
let recorridoGasolina = 480;
let recorridoAlcohol = 300; 
let saltoLinea = "<br><br>";

function saltarLinea(num){
    for(let i = 0; i < num; i++){
        document.write("<br>");
    }
}

function imprimir(mensaje){
    document.write(mensaje)
    saltarLinea(4);

}

document.write("<h3>¿ALCOHOL O GASOLINA? </h3> <br>");

imprimir("Si un carro tiene un tanque de: " + TANQUELLENO + " Litros. Usando gasolina y consumiendo todo el tanque se hace un camino de "+ recorridoGasolina+ " kilómetros. ¿Cuál es el consumo de gasolina por kilómetro recorrido?");

document.write("CONSUMO DE GASOLINA POR KILOMETRO: " + (recorridoGasolina / TANQUELLENO));
document.write(saltoLinea)

imprimir("Por otro lado, con el alcohol: el mismo tanque de: " + TANQUELLENO + " Litros.hace un recorrido de: "+ recorridoAlcohol+ " kilómetros. ¿Cuál es el consumo de alcohol por kilómetro recorrido?");

document.write("CONSUMO DE ALCOHOL POR KILOMETRO: " + (recorridoAlcohol / TANQUELLENO));