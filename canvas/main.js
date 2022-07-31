let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d"); /* LLEVA TODO EL CONTENIDO QUE SE LE PASE CON fillRect debe estar e 2d */
pincel.fillStyle="green"; /* PROPIEDAD DE CANVAS */
pincel.fillRect(0,0,200,400); /* FUNCIÓN fillRect LAS DOS PRIMEROS DATOS SON DE AVANCE, LUEGO SIGUE EJE HORIZONTAL Y LUEGO EJE VERTICAL */ 

pincel.fillStyle="red";
pincel.fillRect(400,0,200,400);

pincel.fillStyle = "yellow";
pincel.beginPath(); /* FUNCION NECESARIA PARA INICIAR RECORRIDO DEL PINCEL */
pincel.moveTo(300,200);
pincel.lineTo(200,400);
pincel.lineTo(400,400);
pincel.fill();

pincel.fillStyle = "blue";
pincel.beginPath();
pincel.arc(300,200,80,0,2*3.14);
pincel.fill();

