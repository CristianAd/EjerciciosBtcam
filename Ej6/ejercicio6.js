// lista de compras
let listaCompra = ["patatas", "macarrones", "leche", "mantequilla", "manzanas", "bananas", "trapeador"];

//modifico la lista

listaCompra.unshift("Aceite de Girasol")
console.log(listaCompra)

// vuelvo a modificar

listaCompra.shift()
 console.log(listaCompra)

// lista de 3 peliculas

let peliculas = [{nombre: "Avatar", director: "Jame Camerun", year: 2022}, 
                {nombre: "Superman", director: "Sidney J. Furie ...", year: 2006},
                {nombre: "Godzilla", director: "Gareth Edwards", year: 2014}]

// peliculas posteriores al año 2010
let filtro = peliculas.filter(pelis => pelis.year >2010)
console.log(filtro)

// lista con directores de las peliculas

 let listaDirectores = peliculas.map(propiedadpelis => propiedadpelis.director)
    console.log(listaDirectores)
//lista con títulos de películas

let listatitle = peliculas.map(npeli => npeli.nombre)
console.log(listatitle)

//contatenar lista de directores y títulos

let listaUnida = listaDirectores.concat(listatitle)
console.log(listaUnida)

//con factor de propagación

let listaUnida2 = [...listaDirectores,...listatitle]
console.log(listaUnida2)


