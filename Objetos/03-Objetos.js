//Clases

// class Person {
//     constructor(name, lastName, age) {
//         this.name = name
//     }
// }

//Esta es otra forma de crear una funcion constructora
class Person {
    constructor(name, lastName, age) {
        this.name = name
        this.lastName = lastName
        this.age = age
    }
    saludar(){
        console.log(`Hola mi nombre es ${this.name} y tengo ${this.age} años`)
    }
}

const persona1 = new Person('Yedixon', 'Jose', 23)

console.log(persona1)

persona1.saludar()

