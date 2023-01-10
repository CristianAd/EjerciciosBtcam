class Estudiante{
    constructor(nombre, asignaturas){
        this.nombre = nombre ;
        this.asignaturas =  asignaturas
        
    }
    obtenDatos(){
        return this.nombre + this.asignaturas
    }
}

let lista = " Javascript, HTML, CSS "
const nuevoEstudiante = new Estudiante("Cristian", lista)

console.log( nuevoEstudiante.obtenDatos())