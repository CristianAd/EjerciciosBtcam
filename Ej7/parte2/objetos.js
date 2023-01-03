/* 

Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/
// Datos personales
let datosP = [{
    nombre: "Cristian",
    edad: 29,
    apellido: "Arias",
    altura: 1.65,
    eresDesarrollador: true
}]

//Mi edad
let miEdad = datosP[0]["edad"]
console.log(miEdad)

//mejores amigos
let dosAmigos = [
    {
        nombre: "Carlos",
        edad: 32,
        apellido: "Uganda",
        altura: 1.75,
        eresDesarrollador: false
    },
    {
        nombre: "Patricio",
        edad: 33,
        apellido: "Hernandez",
        altura: 1.68,
        eresDesarrollador: false
    }
]



let listaConAmigos =  datosP.concat(dosAmigos)

console.log(listaConAmigos)

//Lista por edad de mayor a menor

listaConAmigos.sort((a,b)=>b.edad - a.edad )
console.log(listaConAmigos)



// 