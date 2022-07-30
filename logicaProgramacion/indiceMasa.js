function saltarLinea(num){
    for(let i = 0; i < num; i++){
        document.write("<br>");
    }
}

function imprimir(mensaje){
    document.write(mensaje)
    saltarLinea(4);

}

function calcularImc(peso,altura){
    let imc = peso/(altura*altura);
    return imc;
/*     imprimir(`EL INDICE DE MASA CORPORAL CON FUNCION ES : ${imc} `);   */
}

saltarLinea();

/* INDICE DE MASA CORPORAL ES IGUAL A PESO DIVIDIDO ALTURA AL CUADRADO */12

imprimir("<h1>INDICE DE MASA CORPORAL</h1>") 

let peso = prompt("Por favor, introduzca su peso : ");
let altura = prompt("Por favor, introduzca su altura : ");
let imc = peso / (altura*altura);




imprimir(`EL INDICE DE MASA CORPORAL ES : ${imc} `)

saltarLinea(4);
let imcfuncion = calcularImc(peso,altura);
imprimir(`EL INDICE DE MASA CORPORAL CON FUNCION ES : ${imcfuncion} `);


imprimir("<h1>PROMEDIO INDICE MASA CORPORAL</h1>") 
let imcFelipe=calcularImc(83,1.7);
let imcVanessa=calcularImc(60,1.60);
imprimir(`EL PROMEDIO DE IMC DE FELIPE Y VANESSA ES : ${(imcFelipe+imcVanessa)/2} `)



