let amigos = ['Carlos', 'Nahuel', 'Juan'];

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

//push
let colores = ['rojo', 'verde', 'azul'];
colores.push('amarillo');
console.log(colores);

//pop
let eliminado = colores.pop();

console.log(eliminado);
console.log(colores);

//unshift
colores.unshift('negro');
console.log(colores);

//shift
eliminado = colores.shift();
console.log(eliminado);
console.log(colores);

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

