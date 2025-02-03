/*Ejercicios:1 
Verificador de Edad:
Escribe una función que reciba una edad como argumento y determine si la persona es "niño", "adolescente", "adulto" o "persona mayor". Usa condicionales para hacer la comparación.

Si la edad es menor a 12, es "niño".
Si la edad está entre 12 y 18, es "adolescente".
Si la edad está entre 19 y 65, es "adulto".
Si la edad es mayor a 65, es "persona mayor". 

let edad = 45

if (edad < 12 ) {
    console.log('Es un niño')
} else if (edad < 18) {
    console.log('Es un adolescente')
} else if (edad < 60) {
    console.log('Es un adulto')
} else if (edad < 100) {
    console.log('Es un adulto mayor')
} else {
    console.log('Es un anciano')
}*/ 

/*Ejercicio 2:
Escribe una función que reciba una calificación numérica y devuelva el equivalente en letras:

90-100: "A"
80-89: "B"
70-79: "C"
60-69: "D"
0-59: "F"
Usa if o switch para determinar la calificación. 

let num = 59;

if (num >= 90 && num <= 100) {
    console.log('A');
} else if (num >= 80 && num <= 89) {
    console.log('B');
} else if (num >= 70 && num <= 79) {
    console.log('C');
} else if (num >= 60 && num <= 69) {
    console.log('D');
} else if (num >= 0 && num <= 59) {
    console.log('F');
} else {
    console.log('No es un número válido');
}*/

/*
Sistema de Descuentos:
Crea una función que reciba el total de una compra y un código de descuento. Si el código de descuento es "PROMO10", aplica un 10% de descuento al total. Si el código es "PROMO20", aplica un 20% de descuento. Si no hay código o el código es inválido, no hay descuento.


let total = 12000;
const codigo1 =  'PROMO10';
const codigo2 =  'PROMO20';

let codigoIngresado = prompt('Ingresa el código de descuento:');

if (codigoIngresado === 'PROMO10') {
    total = total - total * 0.1;
    console.log(`Total a pagar: $${total}`);
} else if (codigoIngresado === 'PROMO20') {
    total = total - total * 0.2;
    console.log(`Total a pagar: $${total}`);
} else {
    console.log('No es un código válido, no hay descuentos.');
}*/
/*Ejercicios:1 
Verificador de Edad:
Escribe una función que reciba una edad como argumento y determine si la persona es "niño", "adolescente", "adulto" o "persona mayor". Usa condicionales para hacer la comparación.

Si la edad es menor a 12, es "niño".
Si la edad está entre 12 y 18, es "adolescente".
Si la edad está entre 19 y 65, es "adulto".
Si la edad es mayor a 65, es "persona mayor". 

let edad = 45

if (edad < 12 ) {
    console.log('Es un niño')
} else if (edad < 18) {
    console.log('Es un adolescente')
} else if (edad < 60) {
    console.log('Es un adulto')
} else if (edad < 100) {
    console.log('Es un adulto mayor')
} else {
    console.log('Es un anciano')
}*/ 

/*Ejercicio 2:
Escribe una función que reciba una calificación numérica y devuelva el equivalente en letras:

90-100: "A"
80-89: "B"
70-79: "C"
60-69: "D"
0-59: "F"
Usa if o switch para determinar la calificación. 

let num = 59;

if (num >= 90 && num <= 100) {
    console.log('A');
} else if (num >= 80 && num <= 89) {
    console.log('B');
} else if (num >= 70 && num <= 79) {
    console.log('C');
} else if (num >= 60 && num <= 69) {
    console.log('D');
} else if (num >= 0 && num <= 59) {
    console.log('F');
} else {
    console.log('No es un número válido');
}*/

/*
Sistema de Descuentos:
Crea una función que reciba el total de una compra y un código de descuento. Si el código de descuento es "PROMO10", aplica un 10% de descuento al total. Si el código es "PROMO20", aplica un 20% de descuento. Si no hay código o el código es inválido, no hay descuento.
*/

let total = 12000;
const codigo1 =  'PROMO10';
const codigo2 =  'PROMO20';

let codigoIngresado = prompt('Ingresa el código de descuento:');

if (codigoIngresado === 'PROMO10') {
    total = total - total * 0.1;
    console.log(`Total a pagar: $${total}`);
} else if (codigoIngresado === 'PROMO20') {
    total = total - total * 0.2;
    console.log(`Total a pagar: $${total}`);
} else {
    console.log('No es un código válido, no hay descuentos.');
}

