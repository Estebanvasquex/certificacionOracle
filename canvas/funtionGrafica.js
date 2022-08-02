

function dibujarCuadrado(x,y,color)
{
    let pantalla = document.querySelector("canvas");
    let pincel = pantalla.getContext("2d");
    pincel.fillStyle = color; /* PROPIEDAD DE CANVAS */
    pincel.fillRect(x,y,50,50);
    pincel.strokeStyle="blue"; /* COLOR DEL BORDE */
    pincel.strokeRect(x,y,50,50);
  
}

/* dibujarCuadrado(0,0,"red");
dibujarCuadrado(50,0,"yellow");
dibujarCuadrado(100,0,"green"); */

/* CREAR UNA BANDERA CON UN CICLO FOR O WHILE */

let x=0;
while (x<=600) 
{
    dibujarCuadrado(x,0,"red");
    dibujarCuadrado(x,50,"yellow");
    dibujarCuadrado(x,100,"green");
    x = x+50;
    
}


