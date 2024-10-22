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

