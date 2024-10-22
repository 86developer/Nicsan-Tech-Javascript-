// Almacenamiento en el Navegador (Storage)

// En JavaScript, el navegador ofrece dos formas principales de almacenar datos en el lado del cliente: localStorage y sessionStorage.

// localStorage: Permite almacenar datos de manera persistente, lo que significa que los datos permanecen incluso si el usuario cierra el navegador. Son útiles para datos que deben mantenerse a largo plazo, como configuraciones de usuario.

// sessionStorage: Almacena datos solo durante la sesión de navegación. Una vez que el usuario cierra la pestaña o el navegador, los datos se eliminan. Es ideal para almacenar información temporal que no necesita persistir, como datos de formularios intermedios o búsquedas temporales.


// Guardar y recuperar datos con localStorage

// Usar localStorage es similar a trabajar con un objeto clave-valor. Podemos almacenar cualquier dato, siempre y cuando lo convirtamos en una cadena de texto, ya que localStorage solo acepta strings.

// Hay tres operaciones básicas que realizamos con localStorage:

// Guardar datos con setItem(clave, valor).
// Recuperar datos con getItem(clave).
// Eliminar datos con removeItem(clave).

// Guardar un valor en localStorage JSON.stringify()
localStorage.setItem("nombreUsuario", "Juan Roma");

// Recuperar el valor de localStorage JSON.parse()
const nombre = localStorage.getItem("nombreUsuario");
console.log(nombre);

//Guardar y recuperar objetos o arrays en localStorage JSON.stringify() y JSON.parse()

//Crear un Objeto

const usuario = {
    nombre: "Alejandro",
    edad: 30,
    ciudad: "Madrid"
};

//Convertir el objeto a JSON y guardarlo en localStorage
localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar el objeto desde localStorage
const usuarioRecuperado = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioRecuperado.nombre);

//Como eliminar datos de localStorage

// A veces necesitamos eliminar datos específicos de localStorage. Esto es útil cuando los datos ya no son relevantes. Podemos usar removeItem(clave) para eliminar una clave y su valor asociados.

//Guardar un valor
localStorage.setItem("colorFondo", "azul");

//Eliminar el valor guardado
localStorage.removeItem("colorFondo");

//Intentar recuperar el valor (null)
const color = localStorage.getItem("colorFondo");
console.log(color);

//?ToDoList Clase 9 modificada

// Aplicar almacenamiento en la To-Do List (Actividad Práctica)
// Descripción de la Actividad:
// Vamos a integrar localStorage en la aplicación To-Do List. Cada vez que el usuario agregue una tarea, esta se almacenará en localStorage para que las tareas persistan entre sesiones. Además, al cargar la página, las tareas se recuperarán automáticamente desde el almacenamiento.

// Instrucciones:
// Guardar las tareas en localStorage cada vez que se agregue una nueva tarea.
// Recuperar las tareas desde localStorage cuando la página se recargue.
// Eliminar tareas tanto del DOM como de localStorage.

// Seleccionar elementos del DOM
const inputTarea = document.getElementById("nuevaTarea");
const botonAgregar = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");

// Cargar tareas desde localStorage al iniciar
window.onload = function () {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareasGuardadas.forEach(tarea => agregarTareaDOM(tarea));
};

// Función para agregar una nueva tarea
botonAgregar.addEventListener("click", function () {
    const textoTarea = inputTarea.value.trim();

    if (textoTarea === "") {
        alert("Escribe una tarea.");
        return;
    }

    // Guardar la tarea en localStorage
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareasGuardadas.push(textoTarea);
    localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));

    // Agregar la tarea al DOM
    agregarTareaDOM(textoTarea);

    // Limpiar el campo de entrada
    inputTarea.value = "";
});

// Función para agregar una tarea al DOM
function agregarTareaDOM(tarea) {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = tarea;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function () {
        eliminarTarea(tarea);
        nuevaTarea.remove(); // Eliminar del DOM
    });

    nuevaTarea.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTarea);
}

// Función para eliminar una tarea de localStorage
function eliminarTarea(tarea) {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    const tareasActualizadas = tareasGuardadas.filter(t => t !== tarea);
    localStorage.setItem("tareas", JSON.stringify(tareasActualizadas));
}
