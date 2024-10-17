//*Clase 9 Que es el DOM y como funciona

//El DOM (Document Object Model) es una representación en árbol de todos los elementos de un documento HTML. Cada etiqueta HTML se convierte en un nodo en este árbol, y cada nodo tiene relaciones de padre e hijos con otros nodos. Esto nos permite estructurar la información de la página de una manera organizada.
//El DOM es esencial porque le da a JavaScript el poder de interactuar con cualquier parte de la página, permitiendo modificar el contenido, el diseño y la estructura de la página sin recargarla. Usamos el DOM para crear páginas dinámicas que respondan a las acciones del usuario.

//Nodo raíz: El nodo principal es la etiqueta <html>, que contiene todo el documento.
//Nodos hijos: El <body> y el <head> son nodos hijos de <html>. A su vez, el <body> tiene más hijos, como <h1>, <p>, y <div>.
//Relación de nodos: Todos los elementos están relacionados de manera jerárquica. Esto permite que JavaScript los seleccione y manipule directamente.

//El DOM es la interfaz que conecta el código HTML de la página web con JavaScript. Gracias al DOM, podemos:
//Acceder: Podemos obtener cualquier elemento de la página y obtener información sobre él (por ejemplo, el valor de un input o el texto de un párrafo).

//Modificar: Podemos cambiar el contenido o el estilo de los elementos, como cambiar el color de fondo o actualizar el texto. 

//Agregar o eliminar elementos: También podemos crear nuevos elementos en la página (como nuevos artículos o productos en una tienda) y eliminarlos cuando ya no sean necesarios. 

//Esto nos permite crear aplicaciones web interactivas que pueden actualizar el contenido dinámicamente en función de las acciones del usuario.



//?Seleccionar y manipular elementos del DOM

//Para poder manipular un elemento, primero necesitamos seleccionarlo. Existen varias formas de hacerlo:

//getElementById(): Selecciona un único elemento usando su id.
//querySelector(): Selecciona el primer elemento que coincide con un selector CSS.
//querySelectorAll(): Selecciona todos los elementos que coinciden con un selector CSS.

// const titulo = document.getElementById("titulo");

// const parrafo = document.querySelector(".descripcion");

//?Modificar el contenido del titulo

// titulo.textContent = "DOM Manipulado con Javascript";

//?Modificar el estilo del Parrafo

// parrafo.style.color = "blue";

// parrafo.style.fontSize = "20px";

//En este ejemplo, seleccionamos el título usando getElementById() y el párrafo usando querySelector(). Luego, usamos textContent para cambiar el texto y style para cambiar el color y el tamaño de la fuente del párrafo. Este tipo de manipulación es fundamental para crear interfaces dinámicas y visualmente atractivas.

//?Crear y eliminar elementos dinamicamente
//Podemos crear nuevos elementos en una página de manera dinámica usando document.createElement(). Esto es útil cuando queremos añadir contenido adicional sin recargar la página.
//Creacion de elementos en el DOM, un nuevo Parrafo y añadirlo a la pagina

//Seleccionar el contenedor y el boton
//const listaTareas = document.getElementById("listaTareas");

//const botonAgregar = document.getElementById("botonAgregar");

//Crear un nuevo elemento <li> y agregarlo a la lista

// botonAgregar.addEventListener("click", function () {

//     const nuevaTarea = document.createElement("li"); // Este metodo crea un nuevo elemento del tipo especificado

//     nuevaTarea.textContent = "Nueva tarea dinamica";

//     listaTareas.appendChild(nuevaTarea);
// });

//document.createElement(): Crea un nuevo elemento del tipo especificado (en este caso, un <li>).
//appendChild(): Agrega el nuevo elemento como hijo del elemento seleccionado (listaTareas).

//?Eliminar elementos del DOM

//También podemos eliminar elementos cuando ya no son necesarios usando remove().

// Eliminar el primer elemento de la lista
// const primerElemento = document.querySelector("li");
// primerElemento.remove();


//?Actividad práctica avanzada: Crear una lista de tareas dinámica

//Instrucciones:
//Crear un campo de texto donde el usuario pueda escribir una nueva tarea.
//Al hacer clic en el botón "Agregar", se debe agregar la nueva tarea a una lista.
//Cada tarea debe tener un botón de eliminar que permita eliminarla de la lista.

//Seleccionar elementos del DOM

const inputTarea = document.getElementById("nuevaTarea");
const botonAgregar = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");

//Funcion para agregar una nueva tarea

botonAgregar.addEventListener("click", function () {
    const textoTarea = inputTarea.value.trim();

    if (textoTarea === "") {
        alert("Escribe una tarea.");
        return;
    }

    //Crear un nuevo elemento <li> para la tarea
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = textoTarea;

    //Creamos boton para eliminar la tarea
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function () {
        nuevaTarea.remove(); //Eliminamos tarea
    });

    //Agregar el boton de eliminar a la tarea
    nuevaTarea.appendChild(botonEliminar);

    //Agregar la nueva tarea a la lista
    listaTareas.appendChild(nuevaTarea);

    //Limpiar el campo de entrada
    inputTarea.value = "";


});