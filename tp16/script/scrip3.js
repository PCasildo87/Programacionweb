//TIPO de datos

let numero = 23;
let texto = "Texto de ejemplo";
let logicas = false; //boolean
let indefinido; //undefined
let array = ["dato", 358, false, 23,"Quiniela"];
let objeto = {
    Nombre:"Pablo",
    Apellido:"Casildo",
    Telefono:1130204776,
    Edad:37,
};
console.log(numero);
console.log(texto);
console.log(logicas);
console.log(indefinido);
console.log(array);
console.log(objeto);

//typeof()
console.log (typeof(numero));
console.log(typeof(texto));
console.log(typeof(logicas));
console.log(typeof(indefinido));
console.log(typeof(array));
console.log(typeof(objeto));


//sumar

let num1 ="15";
num1 = Number(num1);
let num2 =30;
let suma = num1+ num2;
console.log (suma);

/* let datoUser1 = window.prompt("Ingrese el primer numero");
datoUser1 = Number(datoUser1);
let datoUser2 = window.prompt("Ingrese el segundo numero");
datoUser2 = Number(datoUser2);

let sumaDeDatos = datoUser1 + datoUser2;
console.log(sumaDeDatos); */
let valor = "3.1417gvgvu"
console.log(valor, typeof(valor));
 let valorNumb = Number(valor);
 console.log(valorNumb,typeof(valorNumb));

 let  valorINT =parseInt(valor);
 console.log(valorINT, typeof(valorINT));
 let valorfloat = parseFloat(valor);
 console.log(valorfloat,typeof(valorfloat));
