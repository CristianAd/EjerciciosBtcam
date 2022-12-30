
let mialturacentimetros = "1.65"
let mialturametros = parseFloat(mialturacentimetros)
let mipeso = 71.05
let alturaredondeada = Math.round(mialturametros)
 let pesoredondeado = Math.floor(mipeso)

let max_value = Number.MAX_VALUE + 1

let maxvalor = function(){
    if(max_value === Number.MAX_VALUE){
        console.log("Es igual")
    }else{
        console.log("no es igual")
    }
}

maxvalor()

 