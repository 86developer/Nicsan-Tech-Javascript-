class Tarea {
    #fechaCreacion; // Propiedad privada

    constructor(id, descripcion) {
        this.id = id;
        this.descripcion = descripcion;
        this.completada = false; // Por defecto la tarea no está completada
        this.#fechaCreacion = new Date(); // Fecha de creación al momento de instanciar
    }

    // Método para marcar como completada
    completar() {
        this.completada = true;
    }

    // Método para marcar como pendiente
    descompletar() {
        this.completada = false;
    }

    // Método para obtener la información de la tarea
    obtenerInformacion() {
        return `${this.descripcion} - ${this.completada ? 'Completada' : 'Pendiente'} (Creada: ${this.#fechaCreacion.toLocaleString()})`;
    }
}
class TareaPrioritaria extends Tarea {
    constructor(id, descripcion, prioridad) {
        super(id, descripcion); // Llamar al constructor de la clase base
        this.prioridad = prioridad; // Nueva propiedad específica de TareaPrioritaria
    }

    // Sobreescribir el método para incluir la prioridad en la información
    obtenerInformacion() {
        return `${super.obtenerInformacion()} - Prioridad: ${this.prioridad}`;
    }
}
class AdministradorTareas {
    constructor() {
        this.tareas = []; // Lista de tareas
    }

    // Método para agregar una tarea
    agregarTarea(tarea) {
        this.tareas.push(tarea);
    }

    // Método para eliminar tareas completadas
    eliminarCompletadas() {
        this.tareas = this.tareas.filter(tarea => !tarea.completada);
    }

    // Método para listar todas las tareas
    listarTareas() {
        return this.tareas.map(tarea => tarea.obtenerInformacion()).join('\n');
    }

    // Método para filtrar tareas por estado
    filtrarPorEstado(completadas = true) {
        return this.tareas
            .filter(tarea => tarea.completada === completadas)
            .map(tarea => tarea.obtenerInformacion())
            .join('\n');
    }
}

//Ejemplo de Iteraccion Completa
// Crear tareas normales y prioritarias
let tarea1 = new Tarea(1, "Comprar comida");
let tarea2 = new Tarea(2, "Pagar facturas");
let tarea3 = new TareaPrioritaria(3, "Presentar el informe", "Alta");
let tarea4 = new TareaPrioritaria(4, "Limpiar el coche", "Baja");

// Crear un administrador de tareas
let admin = new AdministradorTareas();

// Agregar tareas al administrador
admin.agregarTarea(tarea1);
admin.agregarTarea(tarea2);
admin.agregarTarea(tarea3);
admin.agregarTarea(tarea4);

// Completar algunas tareas
tarea1.completar();
tarea3.completar();

// Listar todas las tareas
console.log("Todas las tareas:");
console.log(admin.listarTareas());

// Filtrar tareas completadas
console.log("\nTareas completadas:");
console.log(admin.filtrarPorEstado(true));

// Eliminar tareas completadas
admin.eliminarCompletadas();

// Listar las tareas después de eliminar las completadas
console.log("\nTareas después de eliminar las completadas:");
console.log(admin.listarTareas());
