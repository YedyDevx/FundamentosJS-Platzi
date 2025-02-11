//Como crear un array

//1. new Array()
//2. or Array  ()

//Ejemplo 1:

const frutas = Array("manzana", "naranja", "banana");
console.log(frutas);

//Ejemplo 2:

const number  = Array (1, 2, 3, 4, 5, 6);
console.log(number
)

//Como encontrar un dato especifico en el array
const frutasOne = [4]
console.log(frutasOne)

//Array vbacios
const emptyArray = [] 
console.log(emptyArray)

//Arrays con dato ssting
 const sports = ['Balon', 'Bate', 'Tenis']
 console.log(sports)

 //Array ocn varios datos 
 const dates = [
    "string",
    true,
    2,
    {
        name: 'Yeidxon', years: 23
    }
 ]
 console.log(dates)

 //Como ingresamos a una variable en especifgico 

const firstFruit = frutas[0]
console.log(firstFruit)

//Como ver el tama;o de un array 
const numberFruit = frutas.length
console.log(numberFruit)

//como mutar arreglos

frutas.push('naranja')