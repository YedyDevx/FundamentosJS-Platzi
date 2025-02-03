/*Contar del 1 al 10 con while:
Usa un bucle while para imprimir los números del 1 al 10.

let num = 0 
while (num < 10) {
    num++;
    console.log(num)
}

    Suma hasta que la suma sea mayor que 100:
Usa un bucle while para sumar números consecutivos (1 + 2 + 3 + ...) hasta que la suma sea mayor que 100. Detén el bucle cuando eso suceda.

let num = 0
while ( num <= 100 ) {
    num++;
    console.log(num)
}

Contar regresivamente:
Usa un bucle while para contar de 10 a 1 y luego imprime "¡Despegue!" al final.

let num = 10 
while ( num > 1 ) {
    num--; 
    console.log(`Despegue en ${num}`)
}
console.log("Catablum")

Contar números impares hasta 30:
Imprime todos los números impares entre 1 y 30 usando un bucle while.

let num = 0

while (num < 30 ) {
    num += 2;
    console.log(num)
}

Contar hasta que el usuario ingrese un número mayor que 50:
Pide al usuario que ingrese un número y sigue pidiendo números hasta que ingrese uno mayor que 50.    
*/

let user = parseInt(prompt('Ingrese un número:'));

while (user <= 50) { // Se ejecuta mientras el número sea menor o igual a 50
    console.log(`El número ${user} no llega al límite, sigue intentando.`);
    user = parseInt(prompt('Ingrese otro número:')); // Aquí actualizamos user
}

console.log('¡Llegaste al límite! 🎉');