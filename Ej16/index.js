 
let parrafos = document.querySelectorAll(".parrafo");
let papelera = document.querySelector(".seccion-papelera");

parrafos.forEach(parrafo => {
  parrafo.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", e.target.id);
    const imagenf = document.querySelector("#papelera")
    e.dataTransfer.setDragImage(imagenf,0,0)
  });
});

papelera.addEventListener("drop", e => {
  e.preventDefault();
  let id = e.dataTransfer.getData("text/plain");
  let elemento = document.getElementById(id);
  elemento.remove();
});

papelera.addEventListener("dragover", e => {
  e.preventDefault();
});

 