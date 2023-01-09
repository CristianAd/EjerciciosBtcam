
function loTriplico(valor) {
    if (typeof valor === "number") {
        return valor * 3
    }
   throw new Error("No es un número") 
}



try {
    let respuesta = loTriplico(9)
    console.log(respuesta)
} catch (e) {
    console.log(e)
}

