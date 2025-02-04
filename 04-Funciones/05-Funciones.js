//Contexto de ejecucion de SCOPE CHAIN

//Estas variables son del entorno global
const productoName = 'Monitor 20 Pulgadas';
const precio = 300;
const brand = 'LG'

//Esta funcion con estas variables son locales de la funcion
function getProductDetails () {
        const productoName = 'Tablet';
        const precio = 500;
         return `The ${productoName} costs $${precio} ans is from ${brand}.`
}

console.log(getProductDetails());
//The Tablet costs $500 ans is from LG.

//Scope Chain
//1. Las variables locales de la funcion pueden salir a buscar variables del entorno global pero no al contrario

