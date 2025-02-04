/*
 funcion es un bloque de codigo que se puede reutilizar


function  [Nombre de la funcion] (Parametros) {
    return [operacion o condicion]
}

llamado (argumento);

*/
//Ejemplo Calculadora de descuentos
function calculateDiscountedPrice (price, discountPercentage) {
        const discount = price * (discountPercentage / 100);
        const discountedPrice = price - discount
        return discountedPrice;
}

const price = 100000;
const discountPercentage = 10;
const discountedPrice = calculateDiscountedPrice(price, discountPercentage);

console.log(`El precio original es ${price}`)
console.log(`El descuento de esta prenda es de ${discountPercentage}%`);
console.log(`El precio total es de ${discountedPrice}`);
