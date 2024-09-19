//*Declaracion de Variables

var nombreVar = "Juan";

let nombreLet = "Carlos";

const nombreConst = "Ana";

//*Imprimir valores

console.log(nombreVar);
console.log(nombreLet);
console.log(nombreConst);

//? Diferencias entre var let y const

//Ejemplo de scope con var
if (true) {
    var x = 10;
}
console.log(x)


//Ejemplo de scope con let
if (true) {
    let y = 20;
    console.log(y);
}
let y = 20
console.log(y);

//Ejemplo con const
const z = 30;
//const z = 40

//? Tipos de Datos en Javascript

//Tipos Primitivos
let cadena = "Hola Mundo"; //String
let numero = 42.5; //number
let booleano = true;
let booleanoFalse = false;


console.log(cadena);
console.log(numero);
console.log(booleano);
console.log(booleanoFalse);

let indefinido;
console.log(indefinido);

let nulo = null;
console.log(nulo);

//Tipo Object

let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);


//*Operadores y Operaciones con tipos de datos

//Operaciones con numeros
let a = 10;
let b = 5;

let suma = a + b;
let resta = a - b;
let multiplicacion = a + b;
let division = a + b;
let modulo = a % b;

console.log(suma, resta, multiplicacion, division, modulo);

//Concatenacion de Strings
let saludo = "Hola";
let nombre = "Juan";
let mensaje = saludo + nombre;

console.log(mensaje)


//Conversion Implicita de tipos (ERROR)

//!Numeros y Cadenas: Si intentamos sumar un numer9o a una cadena, Javascript concatena los valores en lugar de realizar una suma numerica.

let uno = 5;
let dos = "2";

let suma2 = uno + dos;

console.log(suma2);

//!Booleanos: Los booleanos se convierten a numeros ( 1 para true 0 para false) en operaciones aritmeticas.

let resultado = 5 + false;

console.log(resultado)

//!NaN (Not a Number)
//Operaciones invalidas: Si intentamos realizar una operacion matematica con un valor que no es un numero el resultado sera NaN. 

let resultado2 = "hola" * 2;

console.log(resultado2);

//!Precision de punto flotente

let resultado3 = 0.1 + 0.2;

console.log(resultado3);


