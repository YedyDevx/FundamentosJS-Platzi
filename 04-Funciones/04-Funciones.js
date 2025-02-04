//Arrow Functions y enlaces lexicales

//Ejemplo y diferencia entre funciones tradicionales y arrow functions

//funcion tradicional
function almuerzo (proteina, verdura) {
        return `El almuerzo es ${proteina} con ${verdura}`
}
console.log(almuerzo('pollo', 'lechuga'));

//Arrow function
const almuerzoArrow = (proteina, verdura) => {
        return `El almuerzo es ${proteina} con ${verdura}`
}
console.log(almuerzoArrow('pollo', 'lechuga'));

//Diferencias
//1. No se puede llamar con el operador new
//2. No tienen propiedades o metodos
//3. No se puede usar como constructor