//*Clase 12  Que es la asincronia en Javascript

//JavaScript es un lenguaje de un solo hilo, lo que significa que solo puede ejecutar una tarea a la vez. Sin embargo, muchas de las tareas que realizamos, como cargar datos de una API o leer archivos, son operaciones que tardan en completarse.

//Para evitar bloquear el hilo principal, JavaScript permite manejar operaciones asíncronas, es decir, tareas que pueden iniciarse pero no tienen que completarse de inmediato. Esto permite que el programa continúe ejecutando otras tareas mientras espera que la operación asíncrona termine.

//*Introduccion a los Callbacks

//Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que la tarea principal se ha completado. Esto es común en operaciones asíncronas, donde queremos que algo suceda una vez que la operación ha finalizado, sin detener la ejecución del resto del código.

// console.log("Inicio de la tarea");

// function tareaAsincrona(callback) {
//     setTimeout(() => {
//         console.log("Tarea Completada");
//         callback(); //Ejecutamos el callback cuando la tarea termina
//     }, 5000); //Simulamos un retraso de 2 segundos
// }

// tareaAsincrona(() => {
//     console.log("Ejecutando el callback deaspues de la tarea");
// });

// console.log("Otra operacion mientras esperamos");

//?setTimeout(): Simula una operación que toma tiempo en completarse (en este caso, 2 segundos).
//?Callback: Una vez que la operación asíncrona termina, el callback se ejecuta, permitiendo realizar otra acción.

//*Que es Event Loop

//El Event Loop es el mecanismo que permite que JavaScript sea no bloqueante. Mientras el hilo principal sigue ejecutando código sincrónico, el Event Loop espera a que las tareas asíncronas, como solicitudes HTTP o temporizadores, se completen. Una vez que una tarea asíncrona está lista, el Event Loop ejecuta el código necesario (como un callback) sin interrumpir la ejecución principal.

// console.log("Primera Linea");

// setTimeout(() => {
//     console.log("Esto se ejecuta despues de 1 segundo");
// }, 1000);

// console.log("Ultima linea");

//? Aunque el setTimeout() tiene un retraso de 1 segundo, la ejecución de las demás instrucciones sigue sin interrupciones. Por eso, el mensaje "Última línea" aparece antes que el mensaje que está dentro del setTimeout().

//Introduccion a las Promesas

//A medida que los callbacks se volvieron más complejos, surgió un problema conocido como Callback Hell, en el que los callbacks anidados dificultaban el manejo de operaciones asíncronas. Para resolver esto, JavaScript introdujo las promesas. Una promesa es un objeto que representa el eventual resultado de una operación asíncrona. Las promesas hacen que el código asíncrono sea más legible y fácil de manejar.

// function tereaAsincronaPromesa() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Tarea completada con promesa");
//             resolve(); //La tarea se completo exitosamente
//         }, 3000);
//     });
// }
// tereaAsincronaPromesa().then(() => {
//     console.log("Ejecutando despues de que la promesa se resuelve");
// });

//? new Promise((resolve, reject) => {...}): Creamos una nueva promesa que tiene dos posibles resultados:
//? resolve: Se ejecuta cuando la tarea se completa correctamente.
//? reject: Se ejecuta si ocurre algún error (no usado en este ejemplo).
//? .then(): Permite definir qué se ejecuta una vez que la promesa se resuelve.

//ToDo List Clase 12 Promises Event Loop Callbacks

// Seleccionar elementos del DOM
const inputTarea = document.getElementById("nuevaTarea");
const botonAgregar = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");
const mensaje = document.getElementById("mensaje");

// Cargar tareas desde localStorage al iniciar
window.onload = function () {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareasGuardadas.forEach(tarea => agregarTareaDOM(tarea));
};

//Codigo Clase 12
//Funcion para agregar una nueva tarea con retraso simulado

botonAgregar.addEventListener("click", function () {
    const textoTarea = inputTarea.value.trim();

    if (textoTarea === "") {
        alert("Escriba una tarea");
        return;
    }

    mensaje.textContent = "Guardando Tarea.."; //Mensaje de estado

    //Simular la tarea de agregar con retraso (simulacion de operacion asincronica)
    agregarTareaConRetraso(textoTarea, () => {
        agregarTareaDOM(textoTarea); //Agregar al DOM despues del retraso
        mensaje.textContent = ""; //Limpiar el mensaje de estado despues de agregar
    });
    inputTarea.value = "";
});

//Funcion para simular el proceso de agregar una tarea con retraso
function agregarTareaConRetraso(tarea, callback) {
    setTimeout(() => {
        const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
        tareasGuardadas.push(tarea);
        localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));
        callback(); //Ejecutar el calback despues de guardar
    }, 2000); //Simulamos un retraso de 2 segundos
}

//? agregarTareaConRetraso(): Función que simula un retraso al agregar una tarea (representando una operación asíncrona como guardar en una base de datos).
//? agregarTareaDOM(): Añade la tarea visualmente a la lista (<ul>) en la página.
//? eliminarTarea(): Elimina la tarea tanto del DOM como de localStorage.
//? Mensajes de estado: Se muestra un mensaje ("Guardando tarea...") durante el retraso para dar feedback al usuario.

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