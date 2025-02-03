const numeroSecreto = Math.floor(Math.random() * 10) + 1;

const NumeroJugador = parseInt(prompt("Adivina el número secreto (entre 1 y 10)"));

console.log(`El número secreto es: ${numeroSecreto}`);

if (NumeroJugador === numeroSecreto) {
    console.log("¡Adivinaste el número secreto!");
} else if (NumeroJugador < numeroSecreto) {
    console.log(`El número secreto es mayor que tu número: ${NumeroJugador}`);
} else if (NumeroJugador > numeroSecreto) {
    console.log(`El número secreto es menor que tu número: ${NumeroJugador}`);
} else {
    console.log("Tu numero no es valido, el rango de numero es del 1 al 10");
}

/*
Las condiciones en JS con faciles va un if (si) y un else (sino) y se pueden anidar con else if (sino si)

En este caso se genera un número aleatorio entre 1 y 10 y el usuario debe adivinarlo, si el usuario adivina el número secreto se imprime un mensaje de felicitaciones, si no se compara el número del usuario con el número secreto y se imprime un mensaje diciendo si el número secreto es mayor o menor al número del usuario

En este caso se usa el operador === para comparar si los números son iguales, si se usa el operador == JS intentará convertir los valores a un tipo de dato común y luego compararlos, esto puede llevar a errores inesperados, por eso es recomendable usar el operador ===

La estructura de un operador condifional if es la siguiente:

if (condición) {
    // Código a ejecutar si la condición es verdadera
}  else if (condición) {   
    // Código a ejecutar si la condición es verdadera
} else {
    // Código a ejecutar si la condición es falsa
}  
*/