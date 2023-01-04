
//- Una función sin parámetros que devuelva siempre "true"  
function siempreT() {
    let devuelve = true
   console.log(devuelve)
}
siempreT()

// Funcion asíncrona
function fasinc() {
    
    function saludo() {
        const saluda = "Hola soy una promesa"
        console.log(saluda)
    }
     setTimeout(saludo, 5000)
   
}

fasinc()

// Función generadora de índices pares

function* generador() {
    let valor = 0;
    while (true) {
        valor++
        if (valor % 2 === 0) {
            yield valor
        }
       
    }
}

const loGenero = generador()
console.log(loGenero.next())
console.log(loGenero.next())
console.log(loGenero.next())
console.log(loGenero.next())
console.log(loGenero.next())
console.log(loGenero.next())
console.log(loGenero.next())
console.log(loGenero.next())
console.log(loGenero.next())
console.log(loGenero.next())
console.log(loGenero.next())
console.log(loGenero.next())
  
