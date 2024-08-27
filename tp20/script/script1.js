const numeros = [2, 9, 12, 5, 8, 3];
console.log(numeros)

// Seleccionar un elemento

console.log(numeros[2]);

console.log(numeros.slice(2, 5));

// Agregar un elemento

numeros.push(7);
console.log(numeros);
numeros.unshift(6);
console.log(numeros);

// Quitar un elemento

numeros.pop();
console.log(numeros);

numeros.shift();
console.log(numeros);

// Splice

let letras = ["a","b","c","d"];
console.log(letras);

letras.splice(1, 2);
console.log(letras);

letras.splice(1, 0, "b", "c");
console.log(letras);

letras.splice(4, 0 ,"e", "f");
console.log(letras);

// Unir y separar cadenas

let unidos = numeros.join("-") //string
console.log(unidos); 

let reconstruida = unidos.split("-");
console.log(reconstruida);

// Ordenar Alfabeticamente

let caracteres = ["A","C","B","E","D"];
console.log(caracteres);

caracteres.sort();
console.log(caracteres);

let palabras = ["Silla", "Mesa" ,"Vaso", "Plato", "Botella"]
console.log(palabras);
let palabras2 = palabras.slice(0);
console.log(palabras2);



palabras2.sort();
console.log(palabras2); //refleja el array original
console.log(palabras); 

// Ordenar Numeros
console.log(numeros);
numeros.sort((a ,b) => a - b);
console.log(numeros);





