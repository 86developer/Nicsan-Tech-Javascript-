//?Clase 13 Promesas Fetch API

//https://jsonplaceholder.typicode.com/

//Una promesa en JavaScript representa una operación asíncrona que eventualmente se completará o fallará. Al trabajar con promesas, podemos ejecutar código después de que la operación se haya completado correctamente (resolve) o manejar un error si la operación falla (reject).

//En lugar de anidar callbacks, las promesas nos permiten escribir código más ordenado y fácil de leer, usando los métodos .then() para manejar el éxito y .catch() para los errores.

//?Ejemplo Basico de Promesa

function tareaConPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true; //Cambiamos a false para simular un error
            if (exito) {
                resolve("La tarea se completo con exito");
            }
            else {
                reject("La tarea fallo");
            }
        }, 2000);
    });
}

tareaConPromesa()
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log(error);
    })

//resolve se llama cuando la tarea se completa exitosamente.
//reject se llama cuando la tarea falla.
//.then() y .catch() manejan el resultado de la promesa, ejecutando //diferentes bloques de código dependiendo del éxito o el error.


//?Fetch API

//Fetch API es una herramienta nativa en JavaScript que nos permite hacer solicitudes HTTP de manera sencilla y manejarlas usando promesas. Con fetch(), podemos obtener datos desde una API y procesarlos una vez que la respuesta esté disponible, sin bloquear el flujo del programa.

fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then((response) => {
        return response.json(); //Convertir a JSON
    })
    .then((data) => {
        console.log("Datos Obtenidos:", data);
    })
    .catch((error) => {
        console.error("Error al obtener los datos", error);
    });

//fetch() devuelve una promesa que se resuelve cuando la respuesta HTTP está disponible.
//.then(response => response.json()) convierte la respuesta en un formato JSON que podemos usar.
//.catch() maneja cualquier error que ocurra durante la solicitud o el procesamiento de la respuesta.

//?Aplicación práctica con To-Do List

//En esta parte, hacemos una solicitud a la API de JSONPlaceholder para obtener tareas y mostrarlas en la To-Do List.
//Objetivo: Integrar datos externos a la To-Do List usando Fetch API para simular la obtención de tareas desde un servidor.
//Ejemplo: Obtener y mostrar tareas desde una API en la To-Do List

// Seleccionar elementos del DOM
const listaTareas = document.getElementById("listaTareas");

// Función para obtener tareas desde la API
function obtenerTareasDesdeAPI() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5") // Limitar a 5 tareas
        .then(response => response.json())
        .then(data => {
            data.forEach(tarea => agregarTareaDOM(tarea.title));
        })
        .catch(error => {
            console.error("Error al obtener tareas de la API:", error);
        });
}

// Función para agregar una tarea al DOM
function agregarTareaDOM(tareaTexto) {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = tareaTexto;
    listaTareas.appendChild(nuevaTarea);
}

// Llamar a la función para obtener tareas al cargar la página
window.onload = obtenerTareasDesdeAPI;

//?Explicación del código:

//fetch("https://jsonplaceholder.typicode.com/todos?_limit=5"): Hace una solicitud HTTP GET para obtener una lista de tareas de ejemplo. El parámetro _limit=5 limita la respuesta a 5 tareas.
//.then(response => response.json()): Convierte la respuesta en un array de objetos JSON.
//.then(data => {...}): Itera sobre cada tarea y las pasa a agregarTareaDOM() para mostrarlas en la lista.
//agregarTareaDOM(): Añade cada tarea al DOM como un nuevo elemento de lista (<li>).

//?Manejo de Errores con .catch() y .finally() 

//Es importante manejar los errores al trabajar con promesas, especialmente cuando hacemos solicitudes HTTP. Usamos .catch() para manejar errores y .finally() para ejecutar código sin importar si la promesa fue exitosa o no.

//?Ejemplo con .catch() y .finally():

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => {
        console.log("Datos obtenidos:", data);
    })
    .catch(error => {
        console.error("Error al obtener los datos:", error);
    })
    .finally(() => {
        console.log("Operación completada"); // Ejecutado siempre al final
    });

