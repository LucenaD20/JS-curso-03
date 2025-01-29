// funcion constructora = plantilla = Class'
// function Persona(nombre){
//     this.nombre = nombre

//     this.saludar = function (){
//         return `${this.nombre} dice hola`;
//     }

//     // this.saludarIngles = function(){
//     //     return `${this.nombre} says hi!` 
//     // }
// }

// Persona.prototype.saludarIngles = function(){
//        return `${this.nombre} says hi!`
//     }

// const juanito = new Persona("juanito")
// const pedrito = new Persona("pedrito")
// console.log(juanito)
// console.log(pedrito)
// console.log(juanito.saludar())
// console.log(pedrito.saludarIngles())

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    
    get getNombre() {
        return this.nombre
    }

    set setNombre(nombre){
        this.nombre = nombre
    }
    
    saludar (){
        return `${this.nombre} dice hola`
    }
    
    static probarSaludo(nombre){
        return `${nombre} probando saludo`
    }
}

class Estudiante extends Persona {
    
    #notas = []





    set setNotas(nota){
        this.#notas.push(nota)
    }

    get getNotas(){
        return this.#notas
    }
}



const juanito = new Estudiante("juanito",25)

juanito.setNotas = 7
juanito.setNotas = 5
juanito.setNotas = 1
console.log(juanito.getNotas)
// juanito.nombre = "pedrito"
// juanito.setNombre = "pedrito"
// console.log(juanito.getNombre)
// console.log(juanito.saludar())