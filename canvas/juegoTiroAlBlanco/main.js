let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
pincel.fillStyle="grey";
pincel.fillRect(0,0,600,400);
let radio = 10;
let xAleatorio;
let yAleatorio;


function diseniarCircunferencia(x,y,radio,color){
    pincel.fillStyle =color;
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

/* CREAR EN COORDENADAS ALEATORIAS */



function diseñarObjetivo(x,y)
{

    diseniarCircunferencia(x,y,radio+20,"red");
    diseniarCircunferencia(x,y,radio+10,"white");
    diseniarCircunferencia(x,y,radio,"red");

}

function sortearPosición(maximo)
{
    return Math.floor(Math.random()*maximo) 
}

function actualizarPantalla(){
    limpiarPantalla();
    xAleatorio = sortearPosición(600);
    yAleatorio = sortearPosición(400);
    diseñarObjetivo(xAleatorio,yAleatorio);
    x++;
}

setInterval(actualizarPantalla,1500);

function disparar(evento){

    let x = evento.pageX - pantalla.offsetLeft;
    let y = evento.pageY - pantalla.offsetTop;
    if( (x < xAleatorio + radio)&&
        (x > xAleatorio - radio)&&
        (y < yAleatorio + radio)&&
        (y > yAleatorio - radio)){
            alert("TIRO CERTERO")
        }

}

pantalla.onclick = disparar;



