//Hoy vamos a trabajar con arrays, una de las estructuras de datos más importantes en JavaScript. Un array es una lista ordenada de elementos. Lo que hace a los arrays tan útiles es que podemos almacenar múltiples valores en una sola variable.
//Imaginemos que tienes que almacenar los nombres de todos tus amigos. Podrías usar variables separadas, pero eso no sería muy eficiente. En lugar de eso, podemos usar un array, que nos permite almacenar todos los nombres en una lista que podemos recorrer y manipular fácilmente.
//Por ejemplo, un array de nombres podría verse así:

let amigos = ['Carlos', 'Nahuel', 'Juan'];

//Cada elemento en un array tiene un índice, comenzando desde 0. Esto significa que el primer elemento del array está en la posición 0, el segundo en la posición 1, y así sucesivamente. Vamos a ver cómo funciona

//Crear un arrays
let frutas = ['Manzana', 'Banana', "Cereza"];


//Acceder a elementos del array
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

//Modificar un elemento
frutas[1] = 'Mango';
console.log(frutas[1]);

//Agregar un nuevo elemento
frutas[3] = 'Durazno';
console.log(frutas);

//Vamos a comenzar creando un array llamado frutas con tres elementos: "Manzana", "Banana" y "Cereza". Podemos acceder a estos elementos usando su índice, es decir, su posición dentro del array.

//frutas[0] nos da el primer elemento, "Manzana".
//frutas[1] nos da el segundo elemento, "Banana".
//Si queremos modificar un elemento en el array, podemos hacerlo accediendo a su índice y asignándole un nuevo valor. En el ejemplo, cambiamos "Banana" por "Mango".

//También podemos agregar nuevos elementos al array accediendo a un índice que aún no existe. En este caso, agregamos "Durazno" en la posición 3. Así de sencillo es trabajar con arrays.

//Los arrays en JavaScript tienen varios métodos que nos permiten modificar y manipular los elementos de forma sencilla. Vamos a ver cuatro de los métodos más básicos pero más útiles:


//Métodos básicos de arrays (push, pop, shift, unshift)

//push
let colores = ['rojo', 'verde', 'azul'];
colores.push('amarillo');
console.log(colores);
//push(): Nos permite agregar elementos al final del array. Por ejemplo, podemos agregar "Amarillo" a nuestro array de colores usando push. El array se actualiza inmediatamente para incluir el nuevo elemento.

//pop
let eliminado = colores.pop();
console.log(eliminado);
console.log(colores);
//pop(): Este método elimina el último elemento del array. Lo interesante de pop es que también devuelve el valor eliminado, por lo que podemos almacenarlo en una variable si lo necesitamos más adelante.

//unshift
colores.unshift('negro');
console.log(colores);
//unshift(): Si queremos agregar un elemento al principio del array, usamos unshift. En este ejemplo, agregamos "Negro" al inicio de nuestro array.

//shift
eliminado = colores.shift();
console.log(eliminado);
console.log(colores);
//shift(): Similar a pop, pero en lugar de eliminar el último elemento, shift elimina el primer elemento del array y también devuelve ese valor. Con estos métodos, podemos modificar el contenido de un array de forma dinámica, lo cual es muy útil cuando estamos trabajando con listas de datos en nuestros programas.

//Ejercicio

//Vamos a poner en práctica lo que hemos aprendido con un ejemplo. Vamos a crear una lista de tareas usando un array. Queremos poder agregar y eliminar tareas de esta lista.

//Primero, creamos el array tareas con algunas actividades.
//Usamos push para agregar una nueva tarea: "Comprar comida".

//Luego, usamos pop para eliminar la última tarea agregada, y mostramos cuál fue eliminada.

//También podemos agregar una tarea al principio de la lista usando unshift, como en el caso de "Pagar facturas".

//Finalmente, usamos shift para eliminar la primera tarea de la lista.

//Este ejercicio nos permite ver cómo gestionar una lista de forma dinámica usando arrays. Imagina que tienes una aplicación donde los usuarios pueden agregar o eliminar tareas, como un gestor de tareas o una lista de compras. Estos métodos te permiten implementar esa funcionalidad de manera eficiente.

//Ejercicio: Gestionar una lista de tareas
let tareas = ['Estudiar Javascript', 'Hacer Ejercicio', 'Llamar al trabajo'];

//Agregar una tarea nueva
tareas.push('comprar comida');
console.log('Lista de tareas', tareas);

//Eliminar la ultima tarea
let tareaEliminada = tareas.pop();
console.log('Tarea Eliminada', tareaEliminada);

//Agregar una tarea al principio
tareas.unshift('pagar facturas');
console.log('Lista de Tareas Actualizadas', tareas)

//Eliminar la primera tarea
tareaEliminada = tareas.shift();
console.log('tarea eliminada', tareaEliminada);
console.log('lista de tareas final:', tareas);

