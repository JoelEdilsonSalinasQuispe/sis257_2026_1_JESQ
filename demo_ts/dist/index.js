"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Esto es un comentario de una sola línea
/* Esto es un comentario
   de varias líneas*/
// Tipos de datos
//boolean
let esActivo = true; //let: El ambito es local, funciona dentro del scropt (funcion, ciclo, if, {})
var esActivo2 = false; //var: El ambito es global, funciona en todo el programa
const esActivo3 = true; //const: Para constantes, no se puede reasignar el valor
//Number
let entero = 25;
let enterolargo = 2316531513n;
let enterolargo2 = 2316531513;
let real = 3.1416;
let binario = 0b101;
let octal = 0o011;
let hexadecimal = 0xA;
//string
let sigla = "SIS257";
let materia = "Desarrollo de Aplicaciones Int/Internet II";
let concatenar = sigla + ' - ' + materia;
let concatenar2 = `${sigla} - ${materia}`; //Template String
let mayuscula = materia.toUpperCase();
let minuscula = materia.toLowerCase();
let reemplazo = materia.replace(/i/g, '1').replace(/ /g, '_');
let repetir = sigla.repeat(3);
let sinEspaciosExtremos = ('     ' + materia + '     ').trim();
let subcadena = materia.substring(7, 20);
let longitud = materia.length;
let contiene = materia.includes('II');
let caracter = materia.charAt(5);
let separar = materia.split(' ');
//Array
let numeros = [1, 2, 3, 4, 5];
let palabras = ['uno', 'dos', 'tres'];
let longitudArray = palabras.length;
let doble = numeros.map(num => num * 2);
let revertir = numeros.reverse();
let factorial = numeros.reduce((prev, curr) => prev * curr, 1);
let impares = numeros.reverse().filter(num => num % 2 !== 0);
let ordenar = [2, 5, 3, 1, 4].sort((a, b) => a - b);
palabras.shift(); // Elimina el primer elemento del array
palabras.pop(); // Elimina el ultimo elemento del array
palabras.unshift('cero'); // Agrega un elemento al inicio del array
palabras.push('cuatro'); // Agrega un elemento al final del array
//tuple
let tuple = [1, 'uno', true];
//enum
var sexo;
(function (sexo) {
    sexo["M"] = "Masculino";
    sexo["F"] = "Femenino";
})(sexo || (sexo = {}));
;
var color;
(function (color) {
    color["Red"] = "Rojo";
    color["Green"] = "Verde";
    color["Blue"] = "Azul";
})(color || (color = {}));
;
//any
let cualquiera = 'Cualquier valor';
cualquiera = 123;
cualquiera = true;
//Object
let objeto = { nombre: 'Juan', edad: 20 };
//Estructuras de control
let incluye;
if (palabras.includes('dos'))
    incluye = true;
else
    incluye = false;
incluye = palabras.includes('dos') ? true : false; //Operador ternario
incluye = palabras.includes('dos'); //Directamente asignamos el resultado de includes
//swithc, while, do while, for clasico, for of, for in, forEach
for (let i = 0; i < numeros.length; i++)
    console.log(`for clasico: ${palabras[i]}`);
for (const letra of palabras)
    console.log(`for of: ${letra}`); //obtiene valores
for (const indice in palabras)
    console.log(`for in: ${indice}`); //obtiene posiciones
palabras.forEach(letra => console.log(`forEach: ${letra}`));
let automovil = { placa: 'ABC123', chasis: 'XYZ987654321' };
//funciones
function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}
saludar('Juan Perez');
function sumar(a, b) {
    return a + b;
}
const sumar2 = (a, b) => a + b; //Funcion flecha
console.log(sumar(5, 6));
console.log(sumar2(5, 7));
//# sourceMappingURL=index.js.map