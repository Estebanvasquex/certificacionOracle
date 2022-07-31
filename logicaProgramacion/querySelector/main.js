
function saltarLinea(num){
    for(let i = 0; i < num; i++){
        document.write("<br>");
    }
}

function imprimir(mensaje){
    document.write(mensaje)
    saltarLinea(4);

}


let capturaDato = document.querySelector(".capturaDatos");/* SE REALIZA EL LLAMADO A LA CLASE */
capturaDato.focus() /* PARA QUE EL CURSOS SE PARA AHÌ SE DEBE PONER LA INSTRUCCIÒN SEGUIDA DE LA CAPTURA DEL DATO */
let capturaButton = document.querySelector("button");
let intentos = 3;
let secreto = [];

/* DOS FUNCIONES PARA CREAR NÚMEROS ALEATORIO Y QUE SE AGREGEN AL ARRAY */

function aleatorio() /* FUNCIÓN PARA CREAR NÚMEROS ALEATORIOS DEL 1 AL 10 */
{
    return Math.round(Math.random()*10);

}

function sortearNumeros(cantidad)
{
    let secretos = [];
    let contador = 0;

    while (contador < cantidad) {
        let numeroAleatorio = aleatorio();
        console.log(numeroAleatorio)
        let encontrado=false;
        for (let i = 0; i < secretos.length; i++)
        {
            if(numeroAleatorio == secretos[i])
            {
                encontrado=true;
                break;

            }
            
        }

        if(encontrado == false)
            {
                secretos.push(numeroAleatorio);
                contador++
            }
    }

    return secretos;


}

secreto = sortearNumeros(5);
console.log(secreto);

function imprimirInput() 
{
    let erro = false;
    for (let j = 1; j < intentos; j++) 
    {

        for (let i = 0; i < secreto.length; i++) 
    {
        
        if(parseInt(capturaDato.value) == secreto[i]){
            alert("USTED ACERTÓ " + secreto[i] )
            erro = true;
            break;
        }

        /*capturaDato.value ="";  BORRA LOS VALORES DEL INPUT */
        capturaDato.focus(); /* EL CURSOS SE UBICA EN EL INPUT CUANDO SE AGREGA UN DATO */
    
        
    }
        
    }
    
        if(erro == false)
        {
            alert("USTED ERRÓ")

        }
        imprimir("FIN DEL JUEGO")
     
    

   
    
}


capturaButton.onclick = imprimirInput;




	function aleatorio() {

		return Math.round(Math.random()*10);

	}

	function sortearNumeros(cantidad) {
		var secretos = [];
		var contador = 1;
		
		while(contador<=cantidad){
			var numeroAleatorio = aleatorio();
			console.log(numeroAleatorio)
			var encontrado = false;
			
			if (numeroAleatorio != 0){
				for (var posicion = 0; posicion < secretos.length; posicion++) {
					if (numeroAleatorio == secretos[posicion]) {
						encontrado = true;
						break;
					}
				}
				
				if (encontrado == false) {
					secretos.push(numeroAleatorio);
					contador++;
				}

			}
			
		
		}	

		return secretos

	}


    var secretos = sortearNumeros(4);

    console.log(secretos)
    
    
    var input = document.querySelector("input");
    input.focus();
    
    function verificar() {
    
        var encontrado = false;
    
        for(var posicion = 0; posicion < secretos.length; posicion++){
            
            if (parseInt(input.value) == secretos[posicion]) {
    
                alert("Usted acertó");
                encontrado = true;
                break; 
    
            }
    
        }
    
        if (encontrado == false) {
    
            alert("Uster erró");
    
        }
                
        input.value = "";
        input.focus();
    
    } 
    
    var button = document.querySelector("button");
    button.onclick = verificar;




