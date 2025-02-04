//Funciones pures y funciones impuras

//Funciones puras
//Dada a unas entradas, siempre va a retornar el mismo resultado

//Side Effects
//Cambios en variables globales
//Modificar parametros de entrada
//Imprimir mensajes o mostrar datos
//Manipulacion del DOM
// Acceder a la hora o fecha actual
//Solicutudes Http o consultas a APIs externas

function sum (a ,b) {
        return a + b;
}

console.log(sum(1, 2));

//Funciones impuras
function sum (a ,b) {
       console.log('A: ', a);
       console.log('B: ', b);
        return a + b;
}

console.log(sum(1, 2));


//Modificando variables globales
let total = 0
 
function sum (a) {
        total += a;
        return total;
}

