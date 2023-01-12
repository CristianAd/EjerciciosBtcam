let miNombre = "Cristian"
let miApellido = "Arias"
let nomCompleto = [{miNombre, miApellido}]

sessionStorage.setItem("fullname", nomCompleto)
 
localStorage.setItem("fullname", nomCompleto)

document.cookie = "nombreCaducidad=Nombre;expires="+ new Date(2023,0,1).toUTCString()

const tiempoExp = new Date();
tiempoExp.setMinutes(tiempoExp.getMinutes() + 2);
document.cookie = "nombre_de_la_cookie=valor_de_la_cookie; expires=" + tiempoExp.toUTCString();


