//Capacidades que tiene una funcion

//1. Puede recibir parametros
//2. Puede retornar un valor
//3. Puede ser invocada
//4. Puede ser anidada
//5. Puede ser invocada con el operador new

// //1. Puede recibir parametros
// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(1, 2));

// //Esto es un callback: simplemente es una funcion que se pasa como argumento a otra funcion

// function greet(name) {
//     console.log(`Hola ${name}`);
// }

// greet("Juan");

// //2. Puede retornar un valor
// //Asingar funciones a variables - Expresion de funcion
// const a = funcion () {}

// //Pueden tener propiedades y metodos

// funcion a  () {}
//         const obj = {}
//         a.call(obj)

// //Se pueden anidar - Nested Functions
// //Funciones dentro de otras funciones

// funcion a () {
//         funcion b () {
//                 function c () {
//                 }
//                 c();
//         }
//         b();
// }
// a();

//Se pueden almacenar funciones en objetos?
const rocket = {
        name: 'Falcon 9',
        date: '2025-02-04',
        destiny: 'Marte',
        launchMessage: function() {
                console.log( `El cohete ${this.name} se lanzo el dia ${this.date} hacia ${this.destiny}`)
        }
}
rocket.launchMessage();
//Si es podible almacenar funciones ne objetos




