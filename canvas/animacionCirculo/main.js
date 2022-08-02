let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
pincel.fillStyle="grey";
pincel.fillRect(0,0,600,400);

function diseniarCircunferencia(x,y,radio){
    pincel.fillStyle ="blue";
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI); /* PARAMETROS X, Y RADIO ANGULO INICIAL Y DOS VECES PI */ 
    pincel.fill(); /* LLENAR CIRCUNFERENCIA */

}
/* FUNCION PARA BORRAR TODO EL CANVA */
function limpiarPantalla(){
    pincel.clearRect(0,0,600,400);
}

let x=0;
function actualizarPantalla(){
    limpiarPantalla();
    diseniarCircunferencia(x,20,10);
    x++;

}

setInterval(actualizarPantalla,10);



