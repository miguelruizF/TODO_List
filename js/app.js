const d = document;
//VARIABLES
const formulario = d.querySelector("#formulario");
const tarea = d.querySelector("#tarea");
let tareas = [];


//EVENT LISTENER
function eventListeners(){
    formulario.addEventListener("submit", agregarTarea);
}

//FUNCIONES
function agregarTarea(e){
    e.preventDefault();
    console.log("Agregando Tarea")
}