//*Estructuras de Control (if, else, switch)

//? 1 Condicional if else
//Es la estructura de control mas basica y permite que el programa ejecute un bloque de codigo si se cumple una condicion y otro bloque si no se cumple.

let edad = 18;

if (edad >= 18) {
    //console.log("Eres mayor de edad");
} else {
    //console.log("Eres menor de edad");
}

//? 2 Condicional if else if
//Esta estructura es util cuando tenemos multiples condiciones a evaluar. Por ejemplo la nota de un examen

let nota = 89;

if (nota >= 90) {

    //console.log("Exelente");
}

else if (nota >= 70) {

    //console.log("Aprovado");
}

else {
    //console.log("Desaprovado");
}

// Aca el programa evalua, cada condicion en orden. Primero verifica si la nota es mayor o igual a 90. Si no es asi verifica si es mayor o igual a 70, y si ninguna de las dos condiciones es verdadera imprime Desaprovado.

//? 3 Condicional switch

//

let dia = 3;

switch (dia) {
    case 1:
        //console.log("Lunes");
        break;
    case 2:
        //console.log("Martes");
        break;
    case 3:
        //console.log("Miercoles");
        break;
    default:
    //console.log("Dia no valido");
}

//*Bucles en Javascript (for, while, do while)

//? 1 Bucle for

//El for es ideal cuando sabemos exactamente cuantas veces queremos ejecutar el codigo.
//Tiene 3 partes, la inicializacion de la variable, la condicionde finalizacion y como cambia la variable en cada iteracion

for (let i = 0; i < 5; i++) {
    //console.log("Numero:", i);
}

//? 2 Bucle While

// Usamos while cuando no sabemos cuantas veces se ejecutara el bucle, pero tenemos una condicion que queremos que se cumpla para continuar

let p = 0;

while (p < 5) {

    //console.log("Numero:", j);
    p++;
}

//? 3 Bucle do-while

// El do-while es similar a while, pero con una diferencia importante: siempre ejecuta el bloque de codigo al menos una vez, sin importar si la condicion es verdadera.

let k = 0;

do {
    //console.log("Numero:", k);
    k++;

} while (k < 5);

// Incluso si k fuera 5 al comienzo, el do-while ejecutaria el codigo una vez antes de verificar la condicion. En este caso, imprime del 0 al 4.

//? Los bucles son poderosos por que nos permiten automatizar tareas repetitivas. 

//*Ejercicio prectico con bucles y condicionales

let numeros = [1, 2, 3, 4, 5, 6, 7, 9, 10];

let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 === 0) {

        pares++;

    } else {

        impares++;
    }
}

//console.log("Numeros Pares", pares);
//console.log("Numeros Impares", impares);

//? Concepto de scope en bucles y condicionales

// Cuando declaramos una variable con let o const dentro de un if, for o while, esa variable solo existe dentro de ese bloque, fuera del bloque la variable deja de existir

if (true) {

    let mensaje = "Hola, bloque!";
    //console.log(mensaje);
}

//console.log(mensaje);

// Lo mismo ocurre en un bucle

for (let i = 0; i < 3; i++) {

    let y = i * 2;

    //console.log('Dentro del bucle', y);
}

//console.log('Fuera del bucle', y);

// 

for (var j = 0; j < 3; j++) {

    var z = j * 2;

}
//console.log('fuera del bucle', z);

//? Hoisting con var

// En javascript, las declaraciones de variables y funciones se elevaran al inicio de su contexto. Esto significa que podemos usar una variable antes de declararla

//console.log(nombre3);
var nombre3 = 'Juan';

//? Scope en funciones

//Las funciones tambien crean su propio scope, esto significa que las variables declaradas dentro de una funcion no son accesibles desde fuera de ella

function saludo() {
    var mensaje3 = 'hola desde la funcion';
    //console.log(mensaje3);
}
saludo();
//console.log(mensaje3);

//? Entonces cuando debemnos usar var, let y const?

//var: Solo lo usamos cuando necesitemos que la variable este disponible en un scope mas amplio (como en un contexto global o de funcion), aunque generalmentese recomienda evitarlo para prevenir errores.

//let: Lo usamos cuando necesitamos cambiar el valor de la variable y queremos limitar su alcance al bloque donde se declara

//const: Lo usamos ciempre que la variable no necesite cambiar, ya que nos proteje de reasignaciones accidentales.

//? Ejercicio de contenido de clase

//vamos a crear un array con varias notas de examen. queremos contar cuantas de esas notas con exelentes (mayores o iguales 90) y cuantas son aprovadas (70 y 89), y cuantas son desaprovadas (menores a 70)

let notas = [95, 82, 75, 63, 88, 92];

let exelente = 0;
let aprovado = 0;
let desaprovado = 0;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 90) {
        exelente++;
    } else if (notas[i] >= 70) {
        aprovado++;
    } else {
        desaprovado++
    }
}

console.log('numero de notas exelentes', exelente);
console.log('numero de aprovados', aprovado);
console.log('numero de desaprovados', desaprovado);