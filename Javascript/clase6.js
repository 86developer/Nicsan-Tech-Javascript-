//Metodos Avanzados de Arrays

//forEach()

//El método forEach() nos permite recorrer un array y ejecutar una función en cada uno de sus elementos. A diferencia de un bucle for, forEach es más fácil de leer y está especialmente diseñado para trabajar con arrays.
//En este ejemplo, estamos usando forEach para imprimir cada número en la consola. La función que pasamos dentro de forEach se ejecuta una vez por cada elemento del array. Es importante notar que forEach no devuelve ningún valor, simplemente recorre el array y ejecuta la función para cada elemento. Esto lo hace útil cuando solo queremos realizar una operación en cada elemento sin cambiar el array original.

//let numeros= [1,2,3,4,5];

//Usando forEach para recorrer el array
//numeros.forEach(function(numero){

//console.log('Numero',numero);

//});

//map()

//A diferencia de forEach, el método map() devuelve un nuevo array transformado. Es útil cuando queremos aplicar una función a cada elemento de un array y crear un nuevo array con los resultados. El array original no se modifica.

//En este ejemplo, usamos map para multiplicar cada número del array por 2 y crear un nuevo array llamado numerosDobles. Cada elemento del nuevo array es el resultado de multiplicar el elemento correspondiente del array original por 2.

//map es muy poderoso cuando necesitamos transformar datos. Por ejemplo, podríamos usarlo para convertir una lista de precios en otra con impuestos incluidos, o para formatear datos que provienen de una API.

//let numeros = [1,2,3,4,5];

//Usando map para crear un nuevo array con el doble de cada numero

//let numerosDobles = numeros.map(function(numero){
//return numero *2;
//});

//console.log(numerosDobles);

//filter

//El método filter() nos permite filtrar un array según una condición que definamos. Crea un nuevo array con los elementos que cumplen la condición y descarta aquellos que no la cumplen.

//En este ejemplo, estamos usando filter para crear un nuevo array llamado numerosMayores, que contiene solo los números mayores que 3. Al igual que map, filter no modifica el array original, sino que devuelve uno nuevo con los resultados filtrados.

//filter es extremadamente útil cuando necesitamos extraer ciertos elementos de un array, como por ejemplo, filtrar productos en una tienda en línea según el precio, o seleccionar solo los usuarios mayores de cierta edad.

//let numeros = [1,2,3,4,5];

//Usando filter para crear un nuevo array con numeros mayores a 3
//let numerosMayores = numeros.filter(function(numero) {

//return numero > 3;

//});

//console.log(numerosMayores);

//reduce()

//El método reduce() nos permite reducir un array a un solo valor, acumulando los resultados a medida que recorre cada elemento. Es especialmente útil cuando queremos sumar, multiplicar o combinar todos los elementos de un array en un único valor.

//En este ejemplo, estamos usando reduce para sumar todos los números del array. La función toma dos parámetros: el acumulador, que guarda el valor acumulado en cada paso, y el número, que es el elemento actual del array. El segundo argumento que le pasamos a reduce (en este caso, 0) es el valor inicial del acumulador.

//reduce es muy poderoso y se puede usar para resolver problemas complejos de acumulación, como encontrar el valor máximo o mínimo en un array, o combinar datos de objetos en una sola estructura.

//let numeros = [1,2,3,4,5];

//Usando reduce para sumar todos los numeros del array

//let sumaTotal = numeros.reduce(function(acumulador,numero) {

//return acumulador + numero;

//},0);

//console.log(sumaTotal);

//Ejercicio Practico con map(), filter(), reduce()

// Imaginemos que tenemos un array de edades y queremos hacer tres cosas:

//Usar filter para obtener solo las edades de personas mayores de 18 años.
//Usar map para duplicar las edades de esas personas.
//Usar reduce para sumar todas las edades.
//Este ejercicio muestra cómo podemos combinar estos métodos avanzados para manipular arrays de manera eficiente. Estos métodos son comunes en muchas situaciones, especialmente cuando estamos trabajando con datos que necesitamos transformar, filtrar y resumir.

let edades = [18, 25, 30, 16, 21, 35, 40];

//Usando filter para obtener solo las personas mayores a 18
let mayoresDeEdad = edades.filter(function (edad) {
    return edad >= 18;
});

//Usando map para calcular el doble de las edades
let edadesDobles = mayoresDeEdad.map(function (edad) {
    return edad * 2;
});

//Usamos reduce para sumar todas las edades
let sumaEdades = mayoresDeEdad.reduce(function (acumulador, edad) {
    return acumulador + edad;
}, 0);


console.log('Edades mayores a 18:', mayoresDeEdad);
console.log('Doble de las edades:', edadesDobles);
console.log('Suma de total de las edades:', sumaEdades);