const d = document;
//VARIABLES
const formulario = d.querySelector("#formulario");
const lista_tareas = d.querySelector("#lista_tareas");
let tareas = [];


//EVENT LISTENER
eventListeners();
function eventListeners(){
    formulario.addEventListener("submit", agregarTarea);

    d.addEventListener("DOMContentLoaded", ()=>{
        tareas = JSON.parse(localStorage.getItem("tareas"))||[];

        crearHTML();
    })
}

//FUNCIONES
function agregarTarea(e){
    e.preventDefault();
    const tarea = d.querySelector("#tarea_input").value;

    //VALIDACION
    if(tarea === ""){
        mostrarError("El cuadro de texto no puede ir vacio");
        return;
    }

    const tareasObj = {
        id: Date.now(),
        tarea,
    }
    //Agregar tareas
    tareas = [...tareas, tareasObj];
    // console.log(tareas);

    //Agregar HTML
    crearHTML();

    //Reiniciar formulario
    formulario.reset();
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

function crearHTML(){
    limpiarHTML();
    if(tareas.length > 0){
        tareas.forEach(tarea => {
            const btnEliminar = d.createElement("a");
            btnEliminar.classList.add("eliminar");
            btnEliminar.textContent = "X";

            //funcion eliminar
            btnEliminar.onclick = () => {
                borrarTarea(tarea.id);
            }


            const li = d.createElement("li");
            li.innerText = tarea.tarea;

            //Asignar boton
            li.appendChild(btnEliminar);

            //Agregar al HTML
            lista_tareas.appendChild(li);
        });
    }

    //almacenar storage
    almacenarStorage();
}

function almacenarStorage() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

//Limpiar HTML
function limpiarHTML(){
    while(lista_tareas.firstChild){
        lista_tareas.removeChild(lista_tareas.firstChild);
    }
}

//Borrar tarea
function borrarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
    crearHTML();
}