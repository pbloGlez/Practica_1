interface DatosTurboConductor {
    numero: number;
    danios: number;
    tribbles: number;
}

const datos: DatosTurboConductor[][] = [
    [{ numero: 1, danios: 30, tribbles: 25 }, { numero: 2, danios: 15, tribbles: 10 }],
    [{ numero: 3, danios: 25, tribbles: 30 }, { numero: 4, danios: 10, tribbles: 8 }],
    [{ numero: 5, danios: 14, tribbles: 23 }, { numero: 6, danios: 80, tribbles: 12 }],
    [{ numero: 7, danios: 60, tribbles: 10 }, { numero: 8, danios: 10, tribbles: 34 }],

];

/*
El Enterprise ha sufrido una infección de criaturas Tribble debido al malhechor comerciante Mudd. Los sensores han captado un listado de los imperfectos
en los turbo conductos junto al número de tribbles en los mismos. Estos datos se envían juntos y todos estos conjuntos, se mandan en una lista.
Para responde a los daños, Scotty necesita hacer tres cosas. Primero, obtener el número total de tribbles en todos los turbo conductores con más de 20 daños.
 */
const totalTribbles: number = datos
    .flat() // Aplanar el array de arrays
    .filter(turbo => turbo.danios > 20)
    .reduce((total, turbo) => total + turbo.tribbles, 0);

console.log("Numero total de tribbles en turbo conductores con mas de 20 danios:", totalTribbles);

/*
Segundo, una señal lisa de un nivel que pase en serie el número del turbo conductor, sus daños y el número de tribbles, uno tras otro, sin diferenciarlos, para poder
ser mandados por un canal en una frecuencia especialmente baja.
 */
const senalLisa: string = datos
    .flatMap(turbos =>
        turbos.map(turbo => `${turbo.numero}${turbo.danios}${turbo.tribbles}`)
    )
    .join("");

console.log("Senial lisa para ser mandada por un canal en frecuencia baja:", senalLisa);

// Y por último, hacer esto, mandando solo datos de peligro o no, si el número de tribbles supera en un 50% al de los daños.
const datosDePeligro: DatosTurboConductor[] = datos
    .flat()
    .filter(turbo => turbo.tribbles > turbo.danios * 1.5);

console.log("Datos de peligro:", datosDePeligro);