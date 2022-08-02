let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);
let colores = ["blue", "red", "green"];
let indiceColorActual = 0; // comienza con blue

function exibiralerta(evento)
{
    let x = evento.pageX - pantalla.offsetLeft; /* lugar en x y resta la parte izquierda para que quede solo con el canva */
    let y = evento.pageY - pantalla.offsetTop; /* lugar en y y resta la parte superior para que quede solo con el canva */
    alert(x + " , " + y);
}

function alterarColor() {
    indiceColorActual++;
    if(indiceColorActual>= colores.length) {
         indiceColorActual = 0; //vuelve para el primer color, blue
    }
    return false; //menú contextual padrón de `canvas` no sea exhibido
}



function dibujarCirculo(evento)
{
    
    let x = evento.pageX - pantalla.offsetLeft; 
    let y = evento.pageY - pantalla.offsetTop; 
    pincel.fillStyle = colores[indiceColorActual]; /* DEFINE EL COLOR DE RELLENO */
    pincel.beginPath(); /* INICIAR EL CAMINO */
    pincel.arc(x,y,10,0,2*3.14)
    pincel.fill();
    console.log(x + " , " + y)

}

console.log(indiceColorActual); 
pantalla.oncontextmenu = alterarColor;
 
pantalla.onclick = dibujarCirculo; 

/*  pantalla.onclick = exibiralerta;   */

/* CUANDO SE HACE UN LLAMADO A UNA FUNCIÓN DESDE UN EVENTO SE HACE SIN PARENTESIS LA VARIABLE DEL CAMBA QUEDA CON EL ONCLICK*/

/* function mostrarMensaje(evento){
    var x = evento.pageX - pantalla.offsetLeft; //pos x
    var y = evento.pageY - pantalla.offsetTop; //pos y
    var d = new Date(); //crea una variable de tipo date
    var hora = checkTime(d.getHours()) + ":" + checkTime(d.getMinutes()) + ":" + checkTime(d.getSeconds());
    //Verifica si el número de las horas, minutos o segundos, tiene un solo dígito, 
    //caso positivo le adiciona el cero en la frente para obtener el formato deseado 00:00:00
    function checkTime(i){
        if (i<10){
            i="0" + i;
        }
        return i;
    }

    alert("La hora es: " + hora + " y las coordenadas son: x=" + x + ", y=" + y);
}

pantalla.onclick = mostrarMensaje;
 */