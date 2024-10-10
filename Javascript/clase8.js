//?Clases y Programacion Orientada a Objetos (POO)

//La Programación Orientada a Objetos (POO) es un paradigma de programación que se basa en la creación de clases y objetos. Los objetos son instancias de las clases y representan entidades del mundo real con características (llamadas propiedades) y comportamientos (llamados métodos). JavaScript soporta la programación orientada a objetos a través de clases. Una clase es un plano (o plantilla) para crear objetos. Nos permite crear múltiples objetos con las mismas propiedades y métodos, pero con valores diferentes.

//Creacion de una clase en Javascript
//Definir un clase basica

class Persona {

    constructor(nombre, edad, ciudad) {

        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;

    }
}

//Crear un objeto (instancia) de la clase "Persona"

let p1 = new Persona("Juan", 30, "Madrid");
let p2 = new Persona("Pedro", 22, "MDP");

console.log(p2.nombre);
console.log(p2.edad);
console.log(p2.ciudad);

console.log(p1.edad);
console.log(p1.ciudad);
console.log(p1.nombre);

//En JavaScript, las clases se crean utilizando la palabra clave class. Para crear una clase, definimos un constructor, que es un método especial que se ejecuta cuando creamos un nuevo objeto (instancia) de esa clase.

//class Persona { ... }: Aquí estamos definiendo una clase llamada Persona.

//Constructor (constructor(nombre, edad, ciudad)): Este método recibe los parámetros nombre, edad y ciudad, que se asignan a las propiedades del objeto usando this.

//this.nombre: Hace referencia a la propiedad nombre del objeto que estamos creando.
//this.edad: Hace referencia a la propiedad edad.
//this.ciudad: Hace referencia a la propiedad ciudad.
//Instanciación (new Persona(...)): Para crear un nuevo objeto a partir de la clase Persona, usamos la palabra clave new, seguida del nombre de la clase y pasamos los valores para las propiedades del objeto.

//let persona1 = new Persona("Juan", 30, "Madrid");: Aquí estamos creando un objeto persona1 de la clase Persona, y le estamos asignando los valores "Juan", 30, y "Madrid" para las propiedades nombre, edad, y ciudad respectivamente.

//?Metodos dentro de una clase

//Definir la clase con un metodo
class Persona {
    constructor(nombre, edad, ciudad) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    //Metodo saludar
    saludar() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
}

// Crear un objeto e invocar el metodo

let persona2 = new Persona("Zapato", 30, "Flor");

console.log(persona2.saludar());

//Las clases no solo definen propiedades, sino que también pueden incluir métodos. Un método es una función que realiza una acción relacionada con los datos del objeto.

//Método saludar(): En este ejemplo, hemos agregado un método llamado saludar dentro de la clase Persona. Este método utiliza interpolación de cadenas (usando las comillas invertidas ``) para devolver un mensaje que incluye el nombre y la edad del objeto.

//Llamar al método: Después de crear un nuevo objeto persona2, podemos invocar el método saludar() para obtener el mensaje de saludo.


//?Herencia en Javascript
//?Crear una clase que hereda de otra

class Persona {

    constructor(nombre, edad, ciudad) {

        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    saludar() {

        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;

    }
}

//Clase estudiante que hereda a persona
class Estudiante extends Persona {

    constructor(nombre, edad, ciudad, carrera) {

        super(nombre, edad, ciudad);//Llamando al constructor de la clase padre

        this.carrera = carrera;

    }
    //Metodo propio de la clase Estudiante
    estudiar() {

        return `Estoy estudiando ${this.carrera}`;

    }
}

let estudiante1 = new Estudiante("Carlos", 22, "Mar del Plata", "Javascript");

console.log(estudiante1.saludar());
console.log(estudiante1.estudiar());

//Uno de los conceptos más importantes en la Programación Orientada a Objetos es la herencia. En JavaScript, podemos crear una clase que hereda de otra clase utilizando la palabra clave extends.

//Clase base Persona: Esta es la clase que definimos anteriormente, con sus propiedades nombre, edad, y ciudad, y el método saludar().

//Clase Estudiante que hereda de Persona: Hemos creado una nueva clase llamada Estudiante que extiende la clase Persona. Esto significa que Estudiante hereda todas las propiedades y métodos de Persona.

//Uso de super(): Dentro del constructor de la clase Estudiante, llamamos a super() para ejecutar el constructor de la clase Persona y asignar los valores de nombre, edad y ciudad. Luego, agregamos una nueva propiedad carrera, que es específica de la clase Estudiante.

//Método estudiar(): Además de heredar el método saludar() de Persona, Estudiante tiene su propio método estudiar(), que devuelve un mensaje indicando lo que está estudiando.

//Instanciación de Estudiante: Al crear un objeto estudiante1, pasamos los valores "Carlos", 22, "Valencia", y "Ingeniería Informática". El objeto estudiante1 puede utilizar tanto el método saludar() heredado de Persona como el método estudiar() que es propio de Estudiante.

//?Encapsulacion y modificadores de acceso
//?Propiedades privadas con # (Introducido en ECMAScript 2022)

//Clase con propiedad privada
class Coche {
    #velocidad; //Propiedad privada

    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.#velocidad = 0; //Inicializamos la propiedad privada
    }

    //Metodo para acelerar
    acelerar() {
        this.#velocidad += 10;
        return `La velocidad del ${this.marca} es ${this.#velocidad} km/h`;
    }

    //Metodo para frenar
    frenar() {
        this.#velocidad -= 10;
        return `La velocidad del ${this.marca} es ${this.#velocidad} km/h`;
    }
}

let miCoche = new Coche("Toyota", "Corola");

console.log(miCoche.acelerar());
console.log(miCoche.frenar());
//console.log(miCoche.#velocidad);

// Propiedades privadas con #:
// A partir de ECMAScript 2022, JavaScript introdujo el uso del prefijo # para definir propiedades privadas en las clases.
// Las propiedades privadas solo son accesibles dentro de la clase en la que se definen y no pueden ser accedidas o modificadas directamente desde fuera de la clase.

// En este ejemplo, la propiedad #velocidad es privada. Esto significa que no podemos acceder a ella directamente desde fuera de la clase, lo que asegura que los datos solo puedan ser manipulados a través de los métodos que definimos.

// Constructor y métodos públicos:
// El constructor inicializa las propiedades marca y modelo, que son públicas (pueden ser accedidas desde fuera de la clase), y también la propiedad privada #velocidad, que empieza en 0.
// Los métodos acelerar() y frenar() permiten modificar la propiedad #velocidad de manera controlada. Estos métodos actúan como una "interfaz" para interactuar con los datos privados del objeto.