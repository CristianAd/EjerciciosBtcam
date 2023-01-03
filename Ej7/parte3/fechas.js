

//la fecha de hoy
const lafechaHoy = new Date()
console.log(lafechaHoy)
// la fecha de mi nacimiento
const fechaNacimiento = new Date("July 01, 1993")
console.log(fechaNacimiento)

// hoy es tarde que cuando nací
const esTardeoNo = lafechaHoy > fechaNacimiento
console.log(esTardeoNo)

//solo el día de nacimiento
let justDay = fechaNacimiento.getDate()
console.log(justDay)


// solo mes de nacimiento
let justMonth = fechaNacimiento.getMonth() + 1
console.log(justMonth)

//  solo el año de nacimiento
let justYear = fechaNacimiento.getFullYear()
console.log(justYear)
