//Eventos de raton

// const botonColor = document.getElementById("botonColor");

// // Evento 'mouseover' para cambiar el color de fondo al pasar el mouse
// botonColor.addEventListener("mouseover", function () {
//     botonColor.style.backgroundColor = "yellow"; //Cambia a amarillo
// });

// //Evento 'mouseout' para restaurar el color cuando el mouse se va del boton
// botonColor.addEventListener("mouseout", function () {
//     botonColor.style.backgroundColor = ""; // Restaura el color inicial
// });

//Evento de teclado

// const campoTexto = document.getElementById("campoTexto");
// const textoSalida = document.getElementById("textoSalida");

// // Evento 'input' para capturar cada vez que el usuario escriba
// campoTexto.addEventListener("input", function () {
//     textoSalida.textContent = campoTexto.value; //Muestra el texto ingresado en tiempo real
// });

//Evento de formulario

// const formulario = document.getElementById("formulario");
// const mensaje = document.getElementById("mensaje");

// //Evento 'submit para capturar el envio del formulario
// formulario.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevenir que el formulario se envie y la pagina se revargue
//     const nombre = document.getElementById("nombre").value;

//     if (nombre.trim() === "") {
//         mensaje.textContent = "Por favor escriba su nombre.";
//     } else {
//         mensaje.textContent = `Hola, ${nombre}! Gracias por anotarte`;
//     }

// });


//To Do List

//Seleccionar Elementos del DOM
const inputTarea = document.getElementById("nuevaTarea");
const botonAgregar = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");

//Funcion para agregar la tarea
botonAgregar.addEventListener("click", function () {
    const textoTarea = inputTarea.value;

    if (textoTarea === "") {
        alert("Escribe una tarea");
        return;
    }

    //Crear un nuevo elemento <li> para la tarea
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = textoTarea;

    //Crear boton para marcar como completada
    const botonCompletar = document.createElement("button");
    botonCompletar.textContent = "Completar";
    botonCompletar.addEventListener("click", function () {
        nuevaTarea.style.textDecoration = "line-through"; // Tacha el texto
        nuevaTarea.style.color = "gray"; //Cambia el color a gris
    })

    //Crear boton para eliminar la tarea
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function () {
        nuevaTarea.remove(); //Eliminar la tarea del DOM
    });

    // Agregar los botones a la tarea
    nuevaTarea.appendChild(botonCompletar);
    nuevaTarea.appendChild(botonEliminar);

    // Agregar la nueva tarea
    listaTareas.appendChild(nuevaTarea);

    //Limpiar el campo de entrada
    inputTarea.value = "";
});