/*
Los objetos son una estructura de datos que nos permite almacenar información de manera organizada.
Los objetos se definen con llaves {} y contienen propiedades y valores.
Las propiedades son las características del objeto y los valores son los datos que contiene.

Estrucuta 
key  / value

objeto = {
    key: value,
    key: value,
    key: value,
}
*/

const person = {
    name: 'Yedixon',
    age: 23,
    country: 'Colombia',
    city: 'Apartado',
    nacionality: 'Venezolano',
    isDeveloper: true,
    hobbies: ['Programar', 'Jugar videojuegos', 'Ver series'],
    'full name': 'Yedixon Jose',
    address: {
        city: 'Apartado',
        country: 'Colombia',
        postalCode: '08001'
    },
    //Metodos
    saludar: function(){
        console.log(`Hola mi nombre es ${person.name}`)
    }
}

console.log(person)

//Acceder a las propiedades del objeto
console.log(person.name)

//Acceder a los metodos del objeto
person.saludar()
console.log(person.address.city)

//Agregar una propiedad al objeto
person.gender = 'Masculino'
person.telephone = '3148293021'

console.log(person)

//Eliminar una propiedad del objeto
delete person.telephone

console.log(person)

//Verificar si una propiedad existe en el objeto
console.log('name' in person)




