//Prototipos y Herencias
//Los prototipos son una forma de compartir propiedades y metodos entre objetos

class Anima {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido(){
        console.log("Este animal hace un sonido")
    }
}

class Perro extends Anima {
    constructor(nombre, tipo, raza){
        super(nombre, tipo);
        this.raza = raza;
    }
    emitirSonido(){
        console.log("Guau")
    }
    correr(){
        console.log(`Este animal es un ${this.tipo} y se llama ${this.nombre} es de raza ${this.raza} y estos ${this.tipo} siempre hacen este sonido ${this.emitirSonido} y se puede correr`)
    }
}


const perro = new Perro('Paconi', 'Perro', 'Pitbull')
// console.log(perro)

perro.correr()

