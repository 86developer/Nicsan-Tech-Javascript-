// Seleccionar elementos del DOM
const inputTarea = document.getElementById("nuevaTarea");
const botonAgregar = document.getElementById("agregarTarea");
const botonCargarTareasAPI = document.getElementById("cargarTareasAPI");
const listaTareas = document.getElementById("listaTareas");
const mensaje = document.getElementById("mensaje");

// Cargar tareas desde localStorage al iniciar
window.onload = function () {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareasGuardadas.forEach(tarea => agregarTareaDOM(tarea));
};

// Función para agregar una nueva tarea con retraso simulado
botonAgregar.addEventListener("click", function () {
    const textoTarea = inputTarea.value.trim();

    if (textoTarea === "") {
        alert("Escribe una tarea.");
        return;
    }

    mensaje.textContent = "Guardando tarea...";  // Mensaje de estado

    // Simulación de una promesa para agregar tarea con retraso
    agregarTareaConPromesa(textoTarea)
        .then(() => {
            agregarTareaDOM(textoTarea);
            mensaje.textContent = "";  // Limpiar mensaje de estado
        })
        .catch(error => {
            mensaje.textContent = "Error al guardar la tarea.";
            console.error(error);
        });

    inputTarea.value = "";  // Limpiar el campo de entrada
});

// Función para simular el proceso de agregar una tarea con una promesa
function agregarTareaConPromesa(tarea) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
            tareasGuardadas.push(tarea);
            localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));
            resolve();
        }, 2000);  // Simulamos un retraso de 2 segundos
    });
}

// Función para cargar tareas desde una API usando Fetch
botonCargarTareasAPI.addEventListener("click", function () {
    mensaje.textContent = "Cargando tareas desde la API...";
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=1")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la respuesta de la API");
            }
            return response.json();
        })
        .then(data => {
            data.forEach(tarea => agregarTareaDOM(tarea.title));
            mensaje.textContent = "Tareas cargadas desde la API con éxito.";
        })
        .catch(error => {
            mensaje.textContent = "Error al cargar tareas desde la API.";
            console.error("Error:", error);
        })
        .finally(() => {
            setTimeout(() => mensaje.textContent = "", 2000);  // Limpiar mensaje después de 2 segundos
        });
});

// Función para agregar una tarea al DOM
function agregarTareaDOM(tareaTexto) {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = tareaTexto;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function () {
        eliminarTarea(tareaTexto);
        nuevaTarea.remove(); // Eliminar del DOM
    });

    nuevaTarea.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTarea);
}

// Función para eliminar una tarea de localStorage
function eliminarTarea(tareaTexto) {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    const tareasActualizadas = tareasGuardadas.filter(t => t !== tareaTexto);
    localStorage.setItem("tareas", JSON.stringify(tareasActualizadas));
}

//agregarTareaConPromesa(tarea): Simula una operación asíncrona al agregar una tarea con una promesa, incluyendo un retraso de 2 segundos.
//fetch() para cargar tareas desde la API:
//fetch("https://jsonplaceholder.typicode.com/todos?_limit=5"): Obtiene una lista de 5 tareas de ejemplo desde JSONPlaceholder.
//Manejo de errores con .catch(): Si hay un problema al cargar las tareas, se muestra un mensaje de error en el elemento mensaje.
//Manejo de mensajes: Los mensajes temporales proporcionan feedback al usuario en cada operación (como "Guardando tarea..." o "Cargando tareas desde la API...").