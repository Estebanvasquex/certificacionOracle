
let encriptar = document.getElementById("mensaje");
console.log(encriptar);

let saludar = ["hola", "soy", "Esteban"];
let saludarString = saludar.join(" ");
console.log(saludarString);


function encriptar2()
{  
    let texto = document.getElementById("mensaje").value;
    let respuesta = document.getElementById("respuesta2")
    let nuevoTexto=[];
    for (let index = 0; index < texto.length; index++) {
        if(texto[index] == "e"){
            nuevoTexto.push("enter")
        }
        else{
            nuevoTexto.push(texto[index]);
        }

    }
    console.log(nuevoTexto);
    console.log(respuesta);
    return nuevoTexto;
    


    /* respuesta.innerHTML = respuesta.toString(); */
}

let nuevoTexto = encriptar2()
console.log(nuevoTexto);



