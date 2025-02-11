//Spread Operator
//El spread operator es un operador que se utiliza para expandir los elementos de un array o objeto en otro array o objeto.
//Practicamente se puede hacer una copia de un array o objeto.

const originalArray = [1, 2, 3, 4, 5]
const copiaArray = [...originalArray]
// console.log(copiaArray)

//Copiar dos arreglos
const OneNumber = [1, 2, 3, 4, 5]
const TwoNumber = [6, 7, 8, 9, 10]
const ThreeNumber = [...OneNumber, ...TwoNumber]
console.log(ThreeNumber)

//Copiar unarreglo y adicional otros datos
const newArray = [1, 2, 3]
const aggNewArray = [...newArray, 4, 5, 6]
console.log(aggNewArray)
