console.log("Hola mundo (Global)");

// Funcion declarada

function holaMundoDec(){
    console.log("Hola mundo (Local/declarada)");
}

holaMundoDec();

// Funcion de expresion

const holaMundoExp = function(){
    console.log("Hola mundo (Local/declarada/expresion)");
}

holaMundoExp();

// Return

function calculo(){
    let suma = 3 + 3;
    return suma;

}

console.log(calculo())

//Parametros

function saludar(nombre){
    return "Hola" + nombre;
}
let texto = saludar("Pablo");
console.log(texto);

texto = saludar("Tomas");
console.log(texto);

// Calculadora

function suma( numero1,numero2){
    let suma = numero1 + numero2;
    return suma;
}

let suma1 =  suma(5, 7);
console.log(suma1);

// console.log(5+7)
let suma2 = suma(2334, 3433);
console.log(suma2);

function resta( numero1,numero2){
    let resta = numero1 - numero2;
    return resta;
}
let resta1 = resta(334,33);
console.log(resta1);

// funcion flecha

// const sumador = (a, b) => { return a + b;}
const sumador = (a, b) =>  a + b;

console.log(sumador(5,6));

// callback

const sumar = (a,b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

const calculadora = (a , b, cb) => cb(a, b);

console.log(calculadora(21, 7, sumar));
console.log(calculadora(14, 9, restar));
console.log(calculadora(2, 52, multiplicar));



