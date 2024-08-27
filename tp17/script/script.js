if(2 == 1){
    console.log("Resultado del condicional");
}

/* let dato1 = window.prompt("ingresa elprimer dato");
let dato2 = window.prompt("ingresa el segundo dato");


if( dato1 == dato2 ){
    console.log("Comparacion verdadera");
} else{
    console.log("Comparacion falsa");
} */

// Scoope
let respuesta;
if( 2 > 3 ){
    respuesta = "Primer numero mayor al segundo";
} else{
    respuesta = "Segundo numero mayor al primero";
}
console.log(respuesta);

// if else if

/*  let semaforo = "verde";

 if(semaforo == "verde"){
     console.log("avanzar");
 } else if(semaforo == "amarillo"){
    console.log("Precaucion");
 } else if(semaforo == "rojo"){
     console.log("Detenerse");
 } else {
     console.error("Semaforo roto");
 } */

// Cargar monto de compra ("window.promt()") - si > 50000 descuento del 25% - si >20000 desuento del 10%
//  -sino ningun descuento- devolver valor por consola ("console.log()")

/* let monto = window.prompt("Monto de la compra");

if ( monto > 50000 ){
    let montoFinal = monto * 0.75;
    console.log("montoFinal:" + montoFinal );
} else if( monto > 20000 ){
    let montoFinal = monto * 0.9 ;
    console.log ("montoFinal:" + montoFinal);
}else{
    console.log ("montoFinal:" + monto);
} */

    // let edad = window.prompt("Ingrese su edad")
    /*
    let resp;
    if ( edad >= 18){
        resp = "Es mayor de edad";
    } else {
        resp = "Es menor de edad";
    }
    
    console.log(resp);
 */

    //let resp2 = edad >= 18 ? "Mayor" : "Menor";

    //console.log(resp2);


    // Operadores

   /*  let valor1 = true;
    let valor2 = false;

    console.log( valor1 && valor2 );
    console.log( valor1 || valor2 ); */

    /* if(10 == 10 && 20 == 20 ){
        console.log("los numeros coinciden");
    } else {
        console.log("los numeros no coinciden");
    } */

    //Ejercicio - llevando mas de 10 por un total superior a $20000 aplicar un descuento del 20%
    // al total

    /* let cantidad  = window.prompt("Cantidad de productos");
    let valorCompra = window.prompt("Total de la compra"); */

    /* if(cantidad >= 10 && valorCompra >= 20000 ){
        let valorFinal = valorCompra * 0.8;
        console.log("valor final con descuento: " + valorFinal);
    }else {
        console.log("valor Final sin descuento: " + valorCompra);
    }
 */
    // switch

    let colorDelSemaforo = window.prompt("color del semaforo");

    switch (colorDelSemaforo) {
        case "verde":
            console.log("avanzar");
            break;
        case "amarillo":
            console.log("precaucion");
            break;
        case "rojo":
            console.log("Detenerse");
            break;
        default:
            console.log("semaforo roto");
            break;
    }
