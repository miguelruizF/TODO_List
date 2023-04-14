const d = document;
//VARIABLES
const formulario = d.querySelector("#formulario");
let tareas = [];


//EVENT LISTENER
function eventListeners(){
    formulario.addEventListener("submit", agregarTarea);
}

//FUNCIONES
function agregarTarea(e){
    e.preventDefault();
    const tarea = d.querySelector("#tarea_input").value;

    //VALIDACION
    if(tarea === ""){
        mostrarError("Una tarea no puede ir vacio");
        return;
    }
}

function mostrarError(error){
    const mensajeError = d.createElement("p")
    mensajeError.textContent = error;
    mensajeError.classList.add("error");
    
    //Insertar en el contenido
    const contenido = d.querySelector("#contenido");
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}