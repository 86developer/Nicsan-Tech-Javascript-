

// Definimos las constantes de precio por habitación y cochera extra

const precioHabitacionDoble = 100; // Precio por día para habitaciones dobles
const precioHabitacionCuadruple = 150; // Precio por día para habitaciones cuádruples
const precioCocheraExtra = 20; // Precio por cochera extra por día

// Definimos el hotel con 9 habitaciones y 6 cocheras extra

const hotel = {
    habitaciones: [
        { numero: 1, tipo: 'cuadruple', capacidad: 4, ocupada: false, cocheraExtra: false },
        { numero: 2, tipo: 'doble', capacidad: 2, ocupada: false, cocheraExtra: false },
        { numero: 3, tipo: 'cuadruple', capacidad: 4, ocupada: false, cocheraExtra: false },
        { numero: 4, tipo: 'doble', capacidad: 2, ocupada: false, cocheraExtra: false },
        { numero: 5, tipo: 'cuadruple', capacidad: 4, ocupada: false, cocheraExtra: false },
        { numero: 6, tipo: 'doble', capacidad: 2, ocupada: false, cocheraExtra: false },
        { numero: 7, tipo: 'cuadruple', capacidad: 4, ocupada: false, cocheraExtra: false },
        { numero: 8, tipo: 'doble', capacidad: 2, ocupada: false, cocheraExtra: false },
        { numero: 9, tipo: 'cuadruple', capacidad: 4, ocupada: false, cocheraExtra: false }
    ],
    cocherasExtras: [false, false, false, false, false, false], // 6 cocheras extra (false = libre)
    gastosDiarios: [] // Array para almacenar los gastos generados cada día
};

// Función para buscar habitación disponible según el número de acompañantes

function asignarHabitacion(huespedes) {
    const tipoHabitacion = huespedes > 2 ? 'cuadruple' : 'doble';

    // Buscar una habitación disponible del tipo requerido
    const habitacion = hotel.habitaciones.find(hab => hab.tipo === tipoHabitacion && !hab.ocupada);

    if (habitacion) {
        habitacion.ocupada = true;
        return habitacion.numero;
    } else {
        return null; // No hay habitaciones disponibles
    }
}

// Función para verificar y asignar cochera extra si es necesario

function asignarCocheraExtra() {
    const cocheraIndex = hotel.cocherasExtras.indexOf(false);
    if (cocheraIndex !== -1) {
        hotel.cocherasExtras[cocheraIndex] = true;
        return cocheraIndex; // Retorna el índice de la cochera asignada
    } else {
        // Si no hay cocheras disponibles, liberar la más antigua y reasignar
        hotel.cocherasExtras.shift();
        hotel.cocherasExtras.push(true);
        return 5; // Retorna el índice de la última cochera
    }
}

// Función para calcular el valor total a pagar por la habitación y cochera extra

function calcularValor(habitacionNumero, huespedes, dias, necesitaCocheraExtra) {
    const habitacion = hotel.habitaciones.find(hab => hab.numero === habitacionNumero);
    const precioHabitacion = habitacion.tipo === 'doble' ? precioHabitacionDoble : precioHabitacionCuadruple;
    let costoTotal = precioHabitacion * dias;

    if (necesitaCocheraExtra) {
        costoTotal += precioCocheraExtra * dias;
    }

    // Registrar gastos diarios
    for (let i = 0; i < dias; i++) {
        hotel.gastosDiarios[i] = (hotel.gastosDiarios[i] || 0) + costoTotal / dias;
    }

    return costoTotal;
}

// Ejemplo de uso:

const huespedes = 4; // Cantidad de personas
const dias = 3; // Cantidad de días
const habitacionAsignada = asignarHabitacion(huespedes);

if (habitacionAsignada !== null) {
    console.log(`Habitación ${habitacionAsignada} asignada.`);

    // Si es una habitación cuádruple, asignar cochera extra si es necesario
    const necesitaCocheraExtra = huespedes === 4 ? true : false;
    if (necesitaCocheraExtra) {
        const cocheraAsignada = asignarCocheraExtra();
        console.log(`Cochera extra asignada en el espacio ${cocheraAsignada}.`);
    }

    // Calcular valor total a pagar
    const valorTotal = calcularValor(habitacionAsignada, huespedes, dias, necesitaCocheraExtra);
    console.log(`Valor total a pagar: $${valorTotal}`);
} else {
    console.log('No hay habitaciones disponibles.');
}

// Mostrar habitaciones disponibles y la cantidad de días
const habitacionesDisponibles = hotel.habitaciones.filter(hab => !hab.ocupada);
console.log(`Habitaciones disponibles: ${habitacionesDisponibles.length}`);
console.log(`Gastos diarios registrados: `, hotel.gastosDiarios);
