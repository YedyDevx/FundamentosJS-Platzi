/*
while:
es un bucle en JavaScript que se ejecuta mientras una condición sea true

While(condicion) {
    bloque de codigo
}

*/

let contador = 0;

while (contador < 10) {
    console.log(contador)
    contador++; //Incrementa 1 en 1 hasta llegar a 9 
}

/*
Do While:
Es similar a while, pero siempre ejecuta el bloque de código al menos una vez, incluso si la condición es falsa desde el principio.

do {
    // Código que se ejecuta al menos una vez
} while (condición);

*/

let incremento = 0;

do {
    console.log(incremento);
    incremento++;
} while( incremento < 20);

//Diferencias entre while y do while es simple
//While primero necesita una condicion para ejecutarse
//Mientras do while necesita primero el codigo que se va  aejecutar y depsues la condicion