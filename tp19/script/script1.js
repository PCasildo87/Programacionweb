let letras = "ABCDEFGHIJKLMNÑOPQRSTUVW";

// Largo
let largo = letras.length;
console.log(largo);

// Extraer letra

let letraN = letras.charAt(2);
console.log(letraN);
letraN = letras.at(3);
console.log(letraN);
letraN = letras[4]; //desectructuracion
console.log(letraN);

// Extraer seccion

let frase = "Vive como si fueras a morir mañana. Aprende como si fuera a durar para siempre."


let seccion = frase.slice(0, 9);
console.log(seccion);
seccion = frase.substring(0, 3);
console.log(seccion);

let nombre =  "Nombre: Diego Alvarez"

seccion = nombre.slice(8, nombre.length);
console.log(seccion);

// Conversion de caja

let mayusculas = nombre.toUpperCase();
console.log(mayusculas)
let minusculas = nombre.toLowerCase();
console.log(minusculas);

// Trim

let espaciado = "  texto con espacio extra alrrededor               ";
let ajustado = espaciado.trim();
console.log(espaciado);
console.log(ajustado);

// Reemplazar

let saludo = "Hola Pablo";
console.log(saludo);
saludo = saludo.replace("Pablo", "Diego");
console.log(saludo);

// Split

let colores = "Rojo, verde, azul";
//colores = colores.split(",");
console.log(colores);

// Includes

let busqueda = colores.includes("verde");
console.log(busqueda);

// Comillado

let dobles = "Comillas Dobles permiten comillas 'simples' dentros";
let simples= 'Comillas simples permiten "comillas" dobles';
let grave = `el batik permite 'Simples' y "Dobles"`;

let localidad = "San Martin";
console.log("Localidad " + localidad + ", Bs. As.");

console.log( `Localidad: ${localidad}, Bs As`);
