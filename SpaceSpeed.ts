/*1.La nave Enterprise NCC-1701 ha encontrado una cápsula de escape datada hace mas de un siglo en los confines mas profundos del espacio.
Dentro de esta se han encontrado unos pocos supervivientes criogenizados desde su fecha de lanzamiento. Antes de teleportarlos a bordo,
Scotty tendrá que crear un  nuevo tipo dentro del ordenador para guardar los datos de estos. Los ordenadores de la cápsula están dañados
por antigüedad, por lo que los datos solo encontrados en el mismo, como el lugar de origen o nombre de los pasajeros  no siempre existirán,
sin embargo, otros como la altura, edad, peso y género podrán ser definidos por los sensores del enterprise, por lo que  siempre van a existir.
(Objeto type)
*/

type Persona = {
    nombre?: string,
    altura: number,
    edad: number,
    peso: number,
    genero: string,
    origen?: string,

}

/*2.Tras haber teleportado con seguridad a los pasajeros de la cápsula, poniendo siempre primero la vida, según las leyes de la federación estelar;
 Scotty pasa a tomar los datos de la cápsula. Solo  guardará datos esenciales como peso, dimensiones y capacidad de velocidad de curvatura, también
  guardará dentro del mismo el listado de pasajeros obtenidos en el anterior escaneo. Recordar que el banco de datos de la federación estelar está hecho con
  interfaces, se puede hacer con tipos, pero Scotty recibirá una paga de navidad mayor si respeta el estándar existente.
(Objeto interface)*/
interface DatosCapsula {
    peso: number,
    dimensiones: string,
    velCurv: number,
    pasajeros: Persona[],
}
/*
Khan el Conquistador, líder de los tripulantes de la cápsula ha tomado el control del enterprise y borrado los bancos de memoria.
Para poder volver a operar la nave Scotty tiene que volver a  definir los datos del propio Enterprise.
Este dato será solo para salir del paso en una situación de pánico por lo que quiere que sea  modificable.
(Variable let)
 */
let datosEnterprise: DatosCapsula = {
    peso: 300,
    dimensiones: '5x5x5',
    velCurv: 8000,
    pasajeros: []
}
/*
En el plan de rescate de su nave, Kirk necesita saber en su tricorder, de cuantos de los tripulantes de
la cápsula se sabe su  nombre. En estos casos también deberá saber que  datos se conocen del tripulante,
para poder comprobarlos después y pensar en su estrategia para recuperar su nave.
(Object.keys y Object.values)
 */
export function contarPasajeros(datos: DatosCapsula):void{
   let contadorPersonas = 0;
   datos.pasajeros.forEach((personas) => {
       if (personas.nombre){
           contadorPersonas++;
           const keys = Object.keys(personas);
           const values = Object.values(personas);
           console.log(`Datos de ${personas.nombre}:`);
           keys.forEach((key,index) => {
               console.log(`${key}: ${values[index]}`);
           });
       }
   });
   console.log(`Numero de tripulantes con nombre: ${contadorPersonas}`);
}

datosEnterprise.pasajeros.push({ altura: 180, edad: 23, peso: 60, genero: 'M', nombre: 'Spok'});
datosEnterprise.pasajeros.push({ altura: 110, edad: 23, peso: 60, genero: 'F'});
datosEnterprise.pasajeros.push({ altura: 210, edad: 23, peso: 60, genero: 'M'});
datosEnterprise.pasajeros.push({ altura: 150, edad: 23, peso: 60, genero: 'F', nombre: 'Tristana'});

contarPasajeros(datosEnterprise);

