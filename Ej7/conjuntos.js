
/*
Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

- Un nuevo Set con los nombres de tu familia

- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
*/


let nfamilia = ["Robert", "Camilo", "Cristian", "Rosa", "Elena", "Lupe"]

const xfamilia = new Set(nfamilia)
console.log(xfamilia)


const agregoNuevo = xfamilia.add("Cristian")
console.log(agregoNuevo)


const agregoOtro = xfamilia.add("Javascript")
console.log(agregoOtro)

