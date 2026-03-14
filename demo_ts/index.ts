// Esto es un comentario de una sola línea
/* Esto es un comentario 
   de varias líneas*/
// Tipos de datos
//boolean
let esActivo: boolean = true; //let: El ambito es local, funciona dentro del scropt (funcion, ciclo, if, {})
var esActivo2: boolean = false; //var: El ambito es global, funciona en todo el programa
const esActivo3: boolean = true; //const: Para constantes, no se puede reasignar el valor

//Number
let entero: number = 25;
let enterolargo: bigint = 2316531513n;
let enterolargo2: number = 2316531513;
let real: number = 3.1416;
let binario: number = 0b101;
let octal: number = 0o011;
let hexadecimal: number = 0xA;

//string
let sigla: string = "SIS257";
let materia: string ="Desarrollo de Aplicaciones Int/Internet II";
let concatenar: string = sigla + ' - ' + materia;
let concatenar2: string = `${sigla} - ${materia}`; //Template String
let mayuscula: string = materia.toUpperCase();
let minuscula: string = materia.toLowerCase();
let reemplazo: string = materia.replace(/i/g, '1').replace(/ /g, '_');
let repetir: string = sigla.repeat(3);
let sinEspaciosExtremos: string = ('     ' + materia + '     ').trim();
let subcadena: string = materia.substring(7, 20);
let longitud: number = materia.length;
let contiene: boolean = materia.includes('II');
let caracter: string = materia.charAt(5);
let separar: string[] = materia .split(' ');

//Array

let numeros: number[] = [1,2,3,4,5];
let palabras: string[] = ['uno', 'dos', 'tres'];
let longitudArray: number = palabras.length;
let doble: number[] = numeros.map(num => num * 2);
let revertir: number[] = numeros.reverse();
let factorial: number = numeros.reduce((prev, curr)=> prev * curr, 1);
let impares: number[] = numeros.reverse().filter(num => num % 2 !== 0);
let ordenar: number[] = [2,5,3,1,4].sort((a,b) => a - b);
palabras.shift(); // Elimina el primer elemento del array
palabras.pop(); // Elimina el ultimo elemento del array
palabras.unshift('cero'); // Agrega un elemento al inicio del array
palabras.push('cuatro'); // Agrega un elemento al final del array

//tuple

let tuple= [1, 'uno', true] as [number, string, boolean];

//enum

enum sexo { M = 'Masculino', F = 'Femenino'};
enum color { Red = 'Rojo', Green = 'Verde', Blue = 'Azul'};

//any

let cualquiera: any = 'Cualquier valor';
cualquiera = 123;
cualquiera = true;

//Object

let objeto: object =  {nombre: 'Juan', edad: 20};

//Estructuras de control

let incluye: boolean;
if(palabras.includes('dos')) incluye = true;
else incluye = false;
incluye = palabras.includes('dos') ? true : false; //Operador ternario
incluye = palabras.includes('dos'); //Directamente asignamos el resultado de includes

//swithc, while, do while, for clasico, for of, for in, forEach

for(let i = 0; i < numeros.length; i++) console.log(`for clasico: ${palabras[i]}`);
for(const letra of palabras) console.log(`for of: ${letra}`); //obtiene valores
for(const indice in palabras) console.log(`for in: ${indice}`); //obtiene posiciones
palabras.forEach(letra => console.log(`forEach: ${letra}`));


//Interfaces

interface IVehiculo {
  placa: string;
  chasis: string;
}

let automovil: IVehiculo = {placa: 'ABC123', chasis: 'XYZ987654321'};

//funciones

function saludar (nombre: string){
  console.log(`Hola, ${nombre}`);
}
saludar('Juan Perez');

function sumar(a: number, b: number): number {
  return a + b;
}
const sumar2 = (a: number, b: number): number => a + b; //Funcion flecha

console.log(sumar(5,6));
console.log(sumar2(5,7));