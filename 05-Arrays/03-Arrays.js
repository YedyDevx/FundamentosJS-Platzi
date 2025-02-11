//Ampliando Arrys

//push
const paises = ["usa", 'col', "ven"]
const newPaises = paises.push("Eur", "KO")
console.log(paises) //de esta manera agrega mas datos al primer arreglo

console.log(newPaises) //Si llamamos la segunda varible, nos muestra la cantidad de datos en el arreglo 


//pop() = pop elimina el ultimo dato del arreglo 

const removedCountry = paises.pop()
console.log(paises) ///Ya con esto verificamos que se eleimino un dato de este arreglo
console.log(removedCountry) //con este miramo cual fue el eliminado