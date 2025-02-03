/*
Los bucles o loops son una forma de repetir una acción varias veces, en JS tenemos varios tipos de bucles, en este caso veremos el bucle for.

Estructura:
for (variable; condición; incremento) {
 Bloque de código
}
*/

let list = ['eat', 'sleep', 'code', 'gym', 'repeat'];

for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

/*For of:
El bucle for of es una forma más sencilla de recorrer un array, en lugar de tener que definir un contador y acceder a los elementos del array por su índice, el bucle for of recorre cada elemento del array.
para regorrer objetos iterables, arrays, strings, maps, sets, etc.

Estructura:
for (variable of iterable) {
    Bloque de código
}

*/

let canasta  = ['manzana', 'pera', 'mango', 'banana'];

for (fruta of canasta) {
    console.log(fruta)
}

/*
For in: 

Es para poder iterar sobre objetos inumerables

propiedades = valor
array, string 

item

for (variable in objeto) {
    Bloque de codigo
}
*/

const listaDeCompras = {
    manzana: 4,
    banano: 3,
    naranja: 4,
    uvas: 2
}

for (frutas in listaDeCompras ) {
    console.log(frutas);
}

for (frutas in listaDeCompras ) {
    console.log(`${frutas}: ${listaDeCompras[frutas]}`);
}