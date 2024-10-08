//Objetos en Javascript POO

//En JavaScript, además de trabajar con arrays, que son listas de valores, tenemos otra estructura de datos muy poderosa llamada objetos. Un objeto es una colección de propiedades y valores. Mientras que los arrays usan índices para acceder a sus elementos, los objetos usan claves o propiedades. Estas propiedades pueden ser de cualquier tipo: number, string, boolean, array, o incluso otros objetos. Los objetos nos permiten estructurar datos de manera más organizada. En lugar de trabajar con listas de valores como en los arrays, con los objetos podemos almacenar datos que están relacionados entre sí

//Creacion de Objeto

let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    profesion: "Desarrollador"
};

//Acceder a propiedades usando la notacion de punto
console.log(persona.nombre);
console.log(persona.edad);

//Acceder a propiedades usando corchetes
console.log(persona['ciudad']);

//? Hay dos formas principales de acceder a las propiedades de un objeto en JavaScript:

//? Notación de punto (.):

// Es la forma más común de acceder a las propiedades.
// Usamos el nombre del objeto seguido de un punto y el nombre de la propiedad.
// Ejemplo: persona.nombre nos da el valor de la propiedad nombre.

//? Notación de corchetes ([]):

// Funciona como si estuviéramos accediendo a un array.
// Usamos el nombre de la propiedad como una cadena de texto entre corchetes.
// Es útil cuando no conocemos el nombre de la propiedad de antemano o cuando el nombre de la propiedad tiene caracteres especiales.
// Ejemplo: persona['ciudad'] nos devuelve "Madrid".
// Ambas notaciones son válidas, pero la notación de punto es más legible y se utiliza con mayor frecuencia.

//Modificar y agregar nuevas propiedades

//Modificar propiedades existentes
//modificarel valor de una propiedad
persona.edad = 31;
console.log(persona.edad);

//Agregar nuevas propiedades
//Agregar una nueva propiedad al objeto
persona.pais = "España";
console.log(persona);

//? Una de las grandes ventajas de los objetos en JavaScript es que podemos modificar las propiedades existentes y también agregar nuevas propiedades en cualquier momento.

//? Modificar propiedades:

// Para cambiar el valor de una propiedad, simplemente accedemos a ella con la notación de punto o corchetes y le asignamos un nuevo valor.
// Ejemplo: Cambiamos la propiedad edad de 30 a 31 usando persona.edad = 31;.

//? Agregar nuevas propiedades:

// Si queremos añadir una propiedad que no existía en el objeto, simplemente la creamos asignándole un valor.
// Ejemplo: Agregamos la propiedad pais con el valor "España" usando persona.pais = "España";.
// Después de hacer esto, el objeto persona ahora tendrá una nueva propiedad pais.
// Estos cambios son dinámicos y reflejan directamente en el objeto, permitiéndonos mantener y actualizar nuestros datos de manera eficiente.

//Metodos dentro de objetos

//Agregar un metodo a un objeto
//Agregar un metodo al objeto

persona.saludar = function () {

    return "Hola, mi nombre es " + this.nombre;

};

console.log(persona.saludar());

//? Definicion del Metodo Saludar

// persona.saludar: Estamos creando una nueva propiedad llamada saludar en el objeto persona.
// function() { ... }: Asignamos una función anónima como valor de la propiedad saludar.
// return "Hola, mi nombre es " + this.nombre;: La función devuelve una cadena que incluye el valor de la propiedad nombre del objeto.

//? Uso de this:

// this: Es una palabra clave que hace referencia al contexto del objeto donde se está ejecutando la función.
// En este caso, dentro del método saludar, this se refiere al objeto persona, permitiéndonos acceder a sus propiedades (this.nombre).



//Objetos anidados
//Objeto con otra estructura de objeto dentro

let estudiante = {
    nombre: "Ana",
    edad: 22,
    cursos: {
        programacion: "Javascript",
        diseño: "Photoshop",
        matematica: "Calculo"
    }
};

//Acceder a propiedades de un objeto anidado
//console.log(estudiante.cursos.programacion);
//console.log(estudiante.cursos.diseño);

// En ocasiones, puede que tengamos objetos dentro de otros objetos, lo que se llama un objeto anidado. Esto es útil para representar estructuras de datos más complejas.

// En el ejemplo, el objeto estudiante tiene una propiedad cursos, que a su vez es otro objeto. Este objeto cursos contiene tres materias: programacion, diseño y matematicas.

// Ventajas de los objetos anidados:

// Organización: Permiten agrupar datos relacionados en estructuras lógicas.
// Escalabilidad: Facilitan la expansión de estructuras de datos complejas sin desordenar el código.
// Claridad: Hacen que el código sea más legible al representar relaciones jerárquicas entre los datos.



//Ejercicio Practico con objetos

//Crear un objeto "auto" con propiedades y metodos

let auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2021,
    encendido: false,

    encender: function () {
        this.encendido = true;
        console.log('El auto esta encendido');
    },
    apagar: function () {
        this.encendido = false;
        console.log('El auto esta apagado');
    },
    estado: function () {
        return this.encendido ? 'Encendido' : 'Apagado';
    }
};

//Usar el objeto

console.log(auto.marca);
auto.encender();
console.log(auto.estado());
auto.apagar();
console.log(auto.estado());