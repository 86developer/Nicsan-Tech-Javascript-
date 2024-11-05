//? Manejo de errores y Async/Await

//Cuando trabajamos con JavaScript, pueden ocurrir errores en el código que interrumpen la ejecución. Para evitar que errores inesperados detengan todo el programa, usamos el bloque try...catch, que nos permite capturar errores y manejarlos. Esto es especialmente útil en código asíncrono, como cuando hacemos solicitudes HTTP, ya que cualquier error (por ejemplo, una respuesta de servidor fallida) puede ser capturado y manejado adecuadamente.

try {
  // Intentar ejecutar este codigo
  let resultado = 10 / 0;
  console.log("Resultado:", resultado);
} catch (error) {
  // Capturamos y manejamos el error
  console.log("Ha ocurrido un error:", error.message);
}
//El bloque try contiene el código que se intenta ejecutar.
//Si ocurre algún error dentro de try, se salta al bloque catch y se maneja el error, mostrando un mensaje en la consola en lugar de detener el programa.

//? Manejo de errores en Codigo Asincrono

//El manejo de errores es particularmente importante en código asíncrono, como cuando usamos Fetch API para hacer solicitudes HTTP. En este caso, un error de red o una respuesta de error de la API puede ser capturado con try...catch.

fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la respuesta de la API");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Datos Obtenidos:", data);
  })
  .catch((error) => {
    console.log("Error al obtener los datos:", error);
  });

//Si la respuesta de la API es incorrecta, lanzamos un error manualmente con throw new Error.
//Usamos .catch() al final para capturar cualquier error de red o respuesta inesperada de la API.

//? Async y Await

//async y await son dos palabras clave que facilitan el trabajo con promesas y código asíncrono. Con async, podemos definir una función asíncrona que automáticamente devuelve una promesa. Al usar await dentro de una función asíncrona, JavaScript ‘espera’ a que la promesa se resuelva antes de continuar. Esto hace que el código asíncrono sea más legible y parecido al código sincrónico.

async function obtenerDatos() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    if (!response.ok) {
      throw new Error("Error en la respuesta de la API");
    }
    const data = await response.json();
    console.log("Datos Obtenidos:", data);
  } catch (error) {
    console.log("Error al obtener los datos:", error);
  }
}
obtenerDatos();

//async convierte obtenerDatos en una función asíncrona que siempre devuelve una promesa.
//await se usa antes de una promesa (como fetch) para esperar a que se resuelva.
//Usamos try...catch dentro de la función para capturar errores de red o de la API.

//?En esta actividad, implementaremos async y await en la To-Do List para hacer solicitudes a una API y manejar errores de forma más limpia.

const inputTarea = document.getElementById("nuevaTarea");
const botonAgregar = document.getElementById("agregarTarea");
const botonCargarTareasAPI = document.getElementById("cargarTareasAPI");
const listaTareas = document.getElementById("listaTareas");
const mensaje = document.getElementById("mensaje");

// Funcion para agregar una tarea con Async/Await

async function agregarTarea(textoTarea) {
  try {
    mensaje.textContent = "Guardando Tarea...";
    await new Promise((resolve) => setTimeout(resolve, 2000)); //Simula espera
    agregarTareaDOM(textoTarea);
    mensaje.textContent = "Tarea Guardada Correctamente";
    inputTarea.value = "";
  } catch (error) {
    mensaje.textContent = "Error al guardar la tarea";
    console.error("Error:", error);
  } finally {
    setTimeout(() => (mensaje.textContent = ""), 2000);
  }
}
botonAgregar.addEventListener("click", () => {
  const textoTarea = inputTarea.value.trim();
  if (textoTarea) {
    agregarTarea(textoTarea);
  } else {
    alert("Escribe una tarea.");
  }
});

//Cargar tareas desde una API con Async Await

async function cargarTareasDesdeAPI() {
  try {
    mensaje.textContent = "Cargando tareas desde la API...";
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    if (!response.ok) throw new Error("Error en la respuesta de la API");
    const data = await response.json();
    data.forEach((tarea) => agregarTareaDOM(tarea.title));
    mensaje.textContent = "Tareas cargadas desde la API correctamente";
  } catch (error) {
    mensaje.textContent = "Error al cargar tareas desde la API";
    console.log("Error:", error);
  } finally {
    setTimeout(() => (mensaje.textContent = ""), 2000);
  }
}

botonCargarTareasAPI.addEventListener("click", cargarTareasDesdeAPI);

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
  const tareasActualizadas = tareasGuardadas.filter((t) => t !== tareaTexto);
  localStorage.setItem("tareas", JSON.stringify(tareasActualizadas));
}

//La función agregarTarea es asíncrona y simula la operación de guardar una tarea en un servidor usando await new Promise(resolve => setTimeout(resolve, 2000)), que introduce un retraso de 2 segundos para representar la espera.
//Si la operación es exitosa, se muestra un mensaje en el DOM y se llama a agregarTareaDOM para agregar la tarea visualmente.
//En caso de error, el bloque catch muestra un mensaje de error en el DOM.
//El bloque finally limpia el mensaje después de 2 segundos.
//Cargar Tareas desde la API con async/await:

//cargarTareasDesdeAPI es una función asíncrona que utiliza await para esperar la respuesta de la API.
//Si la respuesta es exitosa, convierte los datos en JSON y usa agregarTareaDOM para mostrar cada tarea en el DOM.
//Si ocurre un error (por ejemplo, si la API falla), el bloque catch muestra un mensaje de error.
//El bloque finally limpia el mensaje en el DOM después de 2 segundos.
//Función agregarTareaDOM:

//Crea un elemento <li> para cada tarea nueva y añade un botón Eliminar que permite al usuario quitar la tarea del DOM y de localStorage.
//Función eliminarTarea:

//Utiliza localStorage para actualizar las tareas guardadas, eliminando la tarea especificada del array.
