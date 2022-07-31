

let ingredientes = [];
let cantidad = parseInt(prompt("¿Cuántos ingredientes vas a añadir?"));
let contador = 1;

while( contador <= cantidad) 
{
    let ingrediente = prompt("Informe el ingrediente " + contador);
    let verificador = false

    for (let i = 0; i < ingredientes.length; i++) {
        if(ingrediente == ingredientes[i])
        {
            verificador=true;
            break;
        }
        
    }
    if (verificador == false)
    {
        ingredientes.push(ingrediente);
        contador++;
    }
    
    
}

console.log(ingredientes);