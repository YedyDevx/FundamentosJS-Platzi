/*
Un switch es una estructura de control que nos permite comparar una variable con diferentes valores y ejecutar código dependiendo de si la variable coincide con alguno de esos valores.

La estructura de un switch es la siguiente:
switch (expresion) {
case valor1:    
    // Bloque de código
    break;
case valor2:
    // Bloque de código
    break;
case valor3:
    // Bloque de código
    break;
default:
    // Bloque de código
    break;
}
*/


/* 
Días de la Semana con Switch:
Escribe un programa que, dado un número del 1 al 7, imprima el nombre del día correspondiente.
Usa switch para comparar el número y devolver el día correspondiente (1 = "lunes", 2 = "martes", etc.).

let dayProm = parseInt(prompt('Ingresa un número del 1 al 7'));
switch (dayProm) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sábado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('No es un numero válido');
}   

Mes del Año con Switch:
Crea un programa que, dado un número de mes (1-12), imprima el nombre del mes correspondiente usando switch. Ejemplo: 1 = "Enero", 2 = "Febrero", etc.

let mesProm = parseInt(prompt('Ingresa un número del 1 al 12'));
switch (mesProm) {
    case 1:
        console.log('Enero');
        break;
    case 2: 
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Mayo');
        break;  
    case 6:
        console.log('Junio');
        break
    case 7: 
        console.log('Julio');
        break 
    case 8:
        console.log('Agosto');
        break
    case 9:
        console.log('Septiembre');
        break;
    case 10:
        console.log('Octubre');
        break;
    case 11:
        console.log('Noviembre');
        break;
    case 12:
        console.log('Diciembre');
        break;
    default:
        console.log('No es un número válido');
}
 Categorías de Películas:
Imagina que tienes un sistema de clasificación de películas basado en la edad. Usa un switch para mostrar una categoría apropiada según la edad del espectador:

0-12: "Películas para niños"
13-17: "Películas para adolescentes"
18+: "Películas para adultos"
*/

const edadProm = parseInt(prompt('Ingresa tu edad'));

switch (true) { 
    case edadProm < 12:
        console.log('Películas para niños');
        break;
    case edadProm >= 13 && edadProm <= 17:
        console.log('Películas para adolescentes');
        break;
    case edadProm >= 18:
        console.log('Películas para adultos');
        break;
    default:
        console.log('Edad no válida');
}