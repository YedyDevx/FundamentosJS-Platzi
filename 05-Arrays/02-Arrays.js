// Como mutar arreglos
const frutas = Array("manzana", "naranja", "banana");
frutas.push("mandarina") //al arrelgo le agramos otro dato

console.log(frutas);

const newFrutas = frutas.concat(["kiwi", "guanabana"]) 
console.log(newFrutas)

//Cheking arrays with Arrya.isArray()

const isArray = Array.isArray(frutas)
console.log(isArray)



//Practicar exercisE: la suma de todos los elementos de un array

const numberArray = [1, 2, 3]
let sum = 0

for ( let i = 0; i < numberArray.length; i++ ) {
    sum += numberArray[i]
}

console.log(sum)

s