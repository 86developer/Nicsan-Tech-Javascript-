//Existen muchos tipos de eventos en el DOM, como:

//Eventos de ratón: click, mouseover, mouseout.
//Eventos de teclado: keydown, keyup.
//Eventos de formulario: submit, input, change.
//JavaScript puede capturar estos eventos para que tu página web sea interactiva y dinámica, respondiendo a las acciones del usuario de forma inmediata.

//Eventos de raton

const botonColor = document.getElementById("botonColor");

// Evento 'mouseover' para cambiar el color de fondo al pasar el mouse
botonColor.addEventListener("mouseover", function () {
    botonColor.style.backgroundColor = "yellow"; //Cambia a amarillo
});

//Evento 'mouseout' para restaurar el color cuando el mouse se va del boton
botonColor.addEventListener("mouseout", function () {
    botonColor.style.backgroundColor = ""; // Restaura el color inicial
});

//Evento de teclado

const campoTexto = document.getElementById("campoTexto");
const textoSalida = document.getElementById("textoSalida");

// Evento 'input' para capturar cada vez que el usuario escriba
campoTexto.addEventListener("input", function () {
    textoSalida.textContent = campoTexto.value; //Muestra el texto ingresado en tiempo real
});

//Evento de formulario

const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

//Evento 'submit para capturar el envio del formulario
formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir que el formulario se envie y la pagina se revargue
    const nombre = document.getElementById("nombre").value;

    if (nombre.trim() === "") {
        mensaje.textContent = "Por favor escriba su nombre.";
    } else {
        mensaje.textContent = `Hola, ${nombre}! Gracias por anotarte`;
    }

});

//Estos son ejemplos comunes de cómo capturar eventos. Cada vez que ocurre uno de estos eventos, podemos ejecutar una función que realiza alguna acción en la página, como validar formularios, cambiar estilos, o mostrar mensajes personalizados.

//To Do List

//Instrucciones:
//Crear un campo de texto para que el usuario escriba una nueva tarea.
//Al hacer clic en un botón, se debe agregar la tarea a una lista.
//Cada tarea debe tener un botón de eliminar y otro botón para marcarla como completada (esto cambiará el estilo de la tarea, por ejemplo, tacharla o cambiar su color).


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