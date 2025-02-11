// const person = {
//     name: 'Yedixon',
//     age: 23,
//     country: 'Colombia',
//     city: 'Apartado',
//     nacionality: 'Venezolano',
// }

//Funcion constructora: 
//La funcion constructora es una funcion que se utiliza para crear objetos. 

function Person(name, lastName, age) {
    this.name =  name;
    this.lastName = lastName;
    this.age = age;
}

const persona1 = new Person('Yedixon', 'Jose', 23)
const persona2 = new Person('Juan', 'Perez', 30)

console.log(persona1)
console.log(persona2)
persona1.nacionalidad  = 'Venezolano'

console.log(persona1)

Person.prototype.saludar =  function(){
    if(this.nacionalidad) {
        console.log(`Hola mi nombre es ${this.name} ${this.lastName} y tengo ${this.age} años y soy ${this.nacionalidad}`)
    } else {
        console.log(`Hola mi nombre es ${this.name} ${this.lastName} y tengo ${this.age} años`)
    }
}

console.log(persona1.saludar())
console.log(persona2.saludar())

