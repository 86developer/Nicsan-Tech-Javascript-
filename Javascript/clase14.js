//? Clase 14 APIs y JSON

//? Introduccion a las APIs
//Una API (Application Programming Interface) es un conjunto de reglas que permite que dos aplicaciones se comuniquen entre sí. Las APIs web son interfaces que permiten que nuestro código JavaScript obtenga datos o envíe información a un servidor. A través de ellas, podemos acceder a información de bases de datos externas, como una lista de tareas, datos de clima, precios de productos, y mucho más.

//Muchos servicios ofrecen APIs que responden a solicitudes HTTP y devuelven los datos en un formato estandarizado llamado JSON.

//? Que es JSON
//JSON (JavaScript Object Notation) es el formato de datos más común para intercambiar información en la web. Es un formato ligero, fácil de leer y escribir, que representa datos en pares de clave: valor. Al hacer una solicitud a una API, usualmente obtendremos datos en formato JSON, los cuales podemos convertir a objetos JavaScript y manipularlos en nuestro código.

//Por ejemplo, al solicitar una lista de tareas desde una API, podríamos recibir algo como lo siguiente en JSON:

//? Ejemplo de JSON
// {
// "id":1,
// "tarea": "Estudiar Javascript",
// "completado": false
// }

//Este JSON representa un objeto que contiene información sobre una tarea, con tres propiedades: id, tarea, y completado.
//La propiedad completado tiene un valor booleano (true o false) que indica si la tarea está completada.

//?Realizar solicitudes HTTP con Fetch API

//Usaremos Fetch API para realizar solicitudes a una API pública y recibir datos en JSON. Esto permitirá simular cómo una aplicación web se comunica con un servidor para obtener datos.

//?Ejemplo básico de solicitud HTTP a una API con Fetch:

// fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
//     .then(response => response.json()) //convirtiendo la respuesta a JSON
//     .then(data => {
//         console.log("Datos obtenidos de la API:", data);
//     })
//     .catch(error => {
//         console.log("Error al obtener datos:", error);
//     });

//fetch(): Inicia una solicitud HTTP a la URL proporcionada y devuelve una promesa.
//response.json(): Convierte la respuesta en JSON a un objeto JavaScript que podemos manipular.
//.then(): Permite manejar los datos obtenidos de la API.
//.catch(): Permite capturar y manejar errores si la solicitud falla.
//Al ejecutar este código, veremos en la consola el objeto JSON transformado en datos que podemos usar.




//? Ejemplo de API

// Simulamos una pequeña base de datos usando un array de objetos
// Cada tarea tiene un id único, un texto descriptivo y un estado de completado
const tareas = [
    { id: 1, texto: "Aprender JavaScript", completada: false },
    { id: 2, texto: "Practicar con APIs", completada: false },
    { id: 3, texto: "Crear un proyecto", completada: true }
];

// Creamos un objeto que contendrá todos los métodos de nuestra API
const TareasAPI = {
    // Método para obtener todas las tareas
    // Devuelve una promesa que se resuelve con el array de tareas
    obtenerTareas: function () {
        // Creamos una nueva promesa
        return new Promise((resolve) => {
            // Usamos setTimeout para simular el retraso de una petición real a un servidor
            // En una API real, este tiempo sería el que tarda en responder el servidor
            setTimeout(() => {
                // Después de 1 segundo, devolvemos todas las tareas
                resolve(tareas);
            }, 1000); // 1000 milisegundos = 1 segundo
        });
    },

    // Método para obtener una tarea específica por su ID
    // Recibe el ID como parámetro y devuelve una promesa
    obtenerTareaPorId: function (id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Buscamos la tarea que coincida con el ID proporcionado
                const tarea = tareas.find(tarea => tarea.id === id);

                // Si encontramos la tarea, resolvemos la promesa con la tarea
                // Si no la encontramos, rechazamos la promesa con un mensaje de error
                if (tarea) {
                    resolve(tarea);
                } else {
                    reject("Tarea no encontrada");
                }
            }, 1000);
        });
    },

    // Método para agregar una nueva tarea
    // Recibe el texto de la tarea y devuelve una promesa con la nueva tarea creada
    agregarTarea: function (texto) {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Creamos un objeto con los datos de la nueva tarea
                const nuevaTarea = {
                    // Generamos un ID nuevo sumando 1 al número de tareas existentes
                    id: tareas.length + 1,
                    texto: texto,
                    completada: false
                };
                // Agregamos la nueva tarea al array de tareas
                tareas.push(nuevaTarea);
                // Resolvemos la promesa con la tarea que acabamos de crear
                resolve(nuevaTarea);
            }, 1000);
        });
    }
};

// EJEMPLOS DE USO DE LA API

// 1. Ejemplo usando .then() y .catch()
// Esta es la forma tradicional de trabajar con promesas
console.log("Obteniendo tareas...");
TareasAPI.obtenerTareas()
    .then(tareas => {
        // Este código se ejecuta cuando la promesa se resuelve exitosamente
        console.log("Tareas obtenidas:", tareas);
    })
    .catch(error => {
        // Este código se ejecuta si ocurre algún error
        console.error("Error:", error);
    });

// 2. Ejemplo usando async/await
// Esta es una forma más moderna y legible de trabajar con promesas
async function ejemploAsync() {
    // El try/catch nos permite manejar errores de forma más elegante
    try {
        // Esperamos a que se obtengan todas las tareas
        console.log("Obteniendo tareas...");
        const misTareas = await TareasAPI.obtenerTareas();
        console.log("Mis tareas:", misTareas);

        // Esperamos a que se agregue una nueva tarea
        console.log("\nAgregando nueva tarea...");
        const nuevaTarea = await TareasAPI.agregarTarea("Hacer ejercicio");
        console.log("Tarea agregada:", nuevaTarea);

        // Esperamos a que se busque una tarea específica
        console.log("\nBuscando tarea con ID 1...");
        const tarea1 = await TareasAPI.obtenerTareaPorId(1);
        console.log("Tarea encontrada:", tarea1);

    } catch (error) {
        // Si ocurre cualquier error en el proceso, se captura aquí
        console.error("Ocurrió un error:", error);
    }
}

// Ejecutamos la función que contiene los ejemplos
ejemploAsync();

