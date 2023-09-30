//Interfaz del tripulante
interface Tripulante {
    nombre: string;
    estaInfectado?: boolean;
}

/*
Más tarde la tripulación del Enterprise se encuentra en una misión de socorro hacia una colonia espacial de terraformación
 que ha sido infectada por las esporas de la flora local. El mismísimo Spock se ha enamorado por sus efectos y ha formado un
  motín para abandonar la nave y venir a vivir a la colonia. Kirk como capitán y último tripulante de la nave espacial debe de
   obtener un listado rápido impreso en pantalla de los nombres de todos los tripulantes sanos de la tripulación. Podría crear
    un nuevo tipo para los tripulantes, pero también puede aprovechar el ya existente creado en su enfrentamiento contra Khan
    extendiéndolo solo un campo indicando la infección, método mucho mejor debido a la rapidez requerida en la situación.
(Foreach)
 */
const tripulacion: Tripulante[] = [
    { nombre: "Kirk", estaInfectado: false },
    { nombre: "Spock", estaInfectado: true },
    { nombre: "McCoy", estaInfectado: false },
    { nombre: "Uhura", estaInfectado: true },
    { nombre: "Scott", estaInfectado: false },
];

console.log("Tripulantes sanos:");
tripulacion.forEach((tripulante) => {
    if (!tripulante.estaInfectado) {
        console.log(tripulante.nombre);
    }
});
/*
Kirk encuentra esperanza al ver que todavía queda tripulación sana en el planeta, para ayudarle en su búsqueda a la hora de bajar a tierra,
 debe programar en su tricorder las siguiente lista de funcionalidades:
.Comprobar si todavía hay alguien infectado entre toda la tripulación
.Comprobar si toda la tripulación está sana y curada
.Encontrar solo el próximo tripulante infectado de la lista aunque haya varios
(Some, every, find)
 */
function comprobarInfeccion(tripulacion: Tripulante[]): boolean {
    return tripulacion.some((tripulante) => tripulante.estaInfectado);
}

function comprobarSanaYCurada(tripulacion: Tripulante[]): boolean {
    return tripulacion.every((tripulante) => !tripulante.estaInfectado);
}

function encontrarSiguienteInfectado(tripulacion: Tripulante[]): Tripulante | undefined {
    return tripulacion.find((tripulante) => tripulante.estaInfectado);
}
console.log("¿Hay personas infectadas? ", comprobarInfeccion(tripulacion));
console.log("¿Todos sanos? ", comprobarSanaYCurada(tripulacion));

const siguienteInfectado = encontrarSiguienteInfectado(tripulacion);
if (siguienteInfectado) {
    console.log("El proximo tripulante infectado es:", siguienteInfectado.nombre);
} else {
    console.log("No hay mas tripulantes infectados en la lista.");
}
