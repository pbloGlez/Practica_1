const senalDelPortal: string[] = ["2023", "abcd", "1990", "xyz", "2005"];
/*
Ante los efectos de una sustancia ingerida accidentalmente McCoy ha entrado en un portal espacio-temporal cambiando el presente tal y como la tripulación
 lo conoce. Ahora el Enterprise no se encuentra en los radares y tampoco la Tierra. Para solucionarlo Kirk y Spock tendrán que entrar en el portal y detener
 a McCoy antes de que produzca el cambio que destruirá el presente. La consciencia del portal envía a los tricorders una señal de la cual Spock deduce que se
 trata de un listado de fechas, concretamente años, pero muchos de los datos son incomprensibles, probablemente pertenecen a otras culturas desconocidas.
 Spock debe filtrar en su tricorder los valores de la señal obteniendo solo los comprensibles para la tripulación.
(filter)
 */
const fechasFiltradas: string[] = senalDelPortal.filter(fecha => fecha.length === 4 && !isNaN(Number(fecha)));
console.log("Fechas comprensibles:", fechasFiltradas);

/*
Habiendo obtenido las posibles fechas, Spock tendrá que transformarlas en una serie de datos, los cuales no solo indiquen el año, si no también con exactitud mes,
 día, hora, minuto y segundo del mismo, ya que si no, sus cuerpos quedarán esparcidos por toda la longitud de un año creando una paradoja.
(Map)
 */
const fechasTransformadas: Date[] = fechasFiltradas.map(fecha => {
    // Suponiendo que el mes, día, hora, minuto y segundo son arbitrarios para el ejemplo
    const ano: number = parseInt(fecha);
    return new Date(ano, 0, 1, 12, 0, 0);
});

console.log("Fechas transformadas en datos precisos:", fechasTransformadas);