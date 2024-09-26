//? Funciones en JavaScript

//Una función es un bloque de código que está diseñado para realizar una tarea específica. Cada vez que llamamos a la función, ese bloque de código se ejecuta.

// Las funciones son fundamentales porque nos permiten reutilizar código, hacer que nuestro código sea más organizado, y mejorar la legibilidad. En lugar de escribir el mismo bloque de código varias veces, podemos simplemente llamar a la función cada vez que necesitemos ejecutar esa tarea.

// Un ejemplo sencillo sería una función que sume dos números. En lugar de escribir el código de suma cada vez, creamos una función que lo haga por nosotros y la llamamos cuando la necesitemos.

//? Declaracion de Funciones ( declarativas y expresivas )

// Funcion Declarativa

//Estas funciones se declaran usando la palabra clave function seguida del nombre de la función y los parámetros entre paréntesis. 

//El bloque de código dentro de las llaves {} es lo que se ejecuta cuando llamamos a la función.Como vemos en el ejemplo, creamos una función llamada sumar que toma dos parámetros a y b, y devuelve la suma de ambos. 

//Las funciones declarativas pueden ser llamadas antes de ser definidas en el código, gracias a un comportamiento llamado hoisting.

function sumar(a, b) {
    return a + b;
}

//console.log(sumar(5, 3));


// Funcion Expresiva 

//También conocidas como funciones anónimas, estas funciones se asignan a una variable. No tienen un nombre propio, sino que la referencia es la variable a la que están asignadas.

//En el ejemplo, la función restar se asigna a la variable restar, y podemos usarla igual que una función declarativa.

//La diferencia aquí es que, a diferencia de las funciones declarativas, las funciones expresivas no pueden ser llamadas antes de ser definidas en el código.”

let restar = function (a, b) {
    return a - b;
}

//console.log(restar(10, 4));

//? Parametros argumentos y return

// Funcion con parametros

function multiplicar(a, b) {
    return a * b;
}
let resultado = multiplicar(4, 5);
//console.log(resultado);


// Funcion sin return

function saludar(nombre) {
    //console.log('hola' + nombre);
}

saludar('juan');

//Las funciones pueden recibir datos a través de parámetros. Los parámetros son como variables que le pasamos a la función para que realice su tarea. En el primer ejemplo, la función multiplicar recibe dos parámetros a y b, y devuelve (return) el resultado de multiplicarlos.

//return: Cuando usamos return, la función devuelve un valor y sale de la función. Ese valor puede ser almacenado en una variable o usado en otras partes del programa.

//Por otro lado, si no usamos return, la función simplemente ejecuta el código dentro de ella, pero no devuelve nada. En el segundo ejemplo, la función saludar toma un parámetro nombre, imprime un saludo, pero no devuelve ningún valor.

//Es importante entender que los parámetros son las variables que definimos cuando creamos la función, y los argumentos son los valores que pasamos cuando llamamos a la función.

//? Funciones con multiples parametros y valores predeterminados

// Funcion con multiples parametros

function dividir(a, b) {

    if (b === 0) {
        console.log('No se puede dividir por cero');
        return;
    }

    return a / b;
}

console.log(dividir(10, 0));
console.log(dividir(10, 2));


// Parametros con valor predeterminado

function
    saludarConPredeterminado(nombre = "Usuario") {

    //console.log("Hola, " + nombre);
}

saludarConPredeterminado();

saludarConPredeterminado("Maria");

//Podemos tener funciones con múltiples parámetros, como en el ejemplo de la función dividir, donde pasamos dos números. Pero hay un detalle importante: ¿qué pasa si alguien intenta dividir por cero? En este caso, podemos usar una condición if dentro de la función para manejar ese caso especial y evitar errores.

//Otro concepto interesante es el uso de valores predeterminados en los parámetros, introducido en ECMAScript 2015. A veces no queremos forzar al usuario a proporcionar todos los argumentos. En el segundo ejemplo, la función saludarConPredeterminado usa el valor "Usuario" si no se pasa ningún argumento. Si pasamos un nombre, la función lo usa, pero si no, usa el valor por defecto.

//? Scope en funciones

function miFuncion() {

    let mensaje = "Hola, desde dentro de la funcion";

    console.log(mensaje);
}

miFuncion();

console.log(mensaje);


//? Scope global y local 


let nombre = "Juan"; //variable global


function cambiarNombre() {

    let nombre = "Carlos"; //variable local

    console.log("Dentro de la funcion", nombre);

}

cambiarNombre();

console.log("Fuera de la funcion", nombre);

//En JavaScript, las variables tienen lo que llamamos scope o alcance. Las funciones crean su propio scope, lo que significa que las variables declaradas dentro de una función no son accesibles desde fuera de ella.

//En el primer ejemplo, la variable mensaje está dentro de la función miFuncion. Si tratamos de acceder a mensaje fuera de la función, obtendremos un error, porque su scope es local a la función.

//Sin embargo, si tenemos una variable global (como nombre en el segundo ejemplo), esa variable está disponible fuera de cualquier función. Pero si declaramos una variable con el mismo nombre dentro de una función, JavaScript usará la variable local dentro de la función. Esto es lo que ocurre con nombre: dentro de la función se usa Carlos, y fuera de la función se sigue usando Juan.

//Entender el scope es crucial para evitar errores y asegurarnos de que las variables no interfieran entre sí.