console.log("Hola Mundo");

// Tipos de datos y valores
let esActivo: boolean = true;
var esActivo2: boolean = false;
const esActivo3: boolean = true;

let entero: number = 25;
let enterolargo: bigint = 2316531513n;
let enterolargo2: number = 2316531513;
let real: number = 0; // inicializado para no causar error TS2454

// Imprimir todos los valores
console.log({
  esActivo,
  esActivo2,
  esActivo3,
  entero,
  enterolargo,
  enterolargo2,
  real,
});

// También otras formas de mostrarlo
console.log("Valores individuales:");
console.log("esActivo:", esActivo);
console.log("esActivo2:", esActivo2);
console.log("esActivo3:", esActivo3);
console.log("entero:", entero);
console.log("enterolargo:", enterolargo);
console.log("enterolargo2:", enterolargo2);
console.log("real:", real);
