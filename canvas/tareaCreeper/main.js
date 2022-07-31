let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d"); /* LLEVA TODO EL CONTENIDO QUE SE LE PASE CON fillRect debe estar e 2d */
pincel.fillStyle="green"; /* PROPIEDAD DE CANVAS */
pincel.fillRect(0,0,350,300); /* FUNCIÓN fillRect LAS DOS PRIMEROS DATOS SON DE AVANCE, LUEGO SIGUE EJE HORIZONTAL Y LUEGO EJE VERTICAL */ 

pincel.fillStyle="black"; /* PROPIEDAD DE CANVAS */
pincel.fillRect(50,70,90,90);

pincel.fillStyle="black"; /* PROPIEDAD DE CANVAS */
pincel.fillRect(200,70,90,90);

pincel.fillStyle="black"; /* PROPIEDAD DE CANVAS */
pincel.fillRect(135,160,70,100);

pincel.fillStyle="black"; /* PROPIEDAD DE CANVAS */
pincel.fillRect(100,190,40,110);

pincel.fillStyle="black"; /* PROPIEDAD DE CANVAS */
pincel.fillRect(200,190,40,110);