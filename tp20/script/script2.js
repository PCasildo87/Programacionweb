// Metodo forEach

let items = ["Rojos", "naranja", "amarillo", "verde", "azul" , "violeta"];

items.forEach((item, i) => {
    console.log("Color: " + item + " - Repeticion:" + i);
});

const numeros = [2, 9, 12 ,5 , 8, 3]

numeros.forEach((numero) => {
    console.log(numero * 10);
});

numeros.forEach((numero, i ) => {
    numeros[i] += 100;
})
console.log(numeros);

let unir = numeros.join();
let separar = unir.split(",");
console.log(separar);

separar.forEach((dato, i) => {
    separar[i] = Number(dato);
    //separar[i] = Number(separar[i]);
})

console.log(separar);

//Metodo find

let buscar =items.find((dato) => {return dato ==="verde"});

console.log(buscar);

let buscari =items.findIndex(dato => dato === "verde");
console.log(buscari);

// Metodo reduce
let total = numeros.reduce((acumulador, numero) =>{return acumulador + numero});
console.log  (total);

//Vaciar

console.log(items);
items = [];
console.log(items);

//Arrays de Arrays

let datos =[["pablo",32936514],["tomas",42977425], ["carlos", 17542985]]

console.log(datos);
