document.querySelector("#btnEj1").addEventListener( "click" , () => {
    let nombre= document.querySelector("#nombre").value;
    //console.log(nombre)
    if(nombre === ""){
        document.querySelector("#salidaEj1").innerHTML = "error ingrese un nombre en el campo";
        return;
    }
    document.querySelector("#salidaEj1").innerHTML = "Hola "+ nombre
});

document.querySelector("#btnEj2").addEventListener( "click" , () => {
    let comensales = document.querySelector("#comensales").value;
    
    if(comensales === "" || isNaN(comensales)){
        document.querySelector("#salidaEj2").innerHTML = "error ingrese un numero en el campo";
    return;
    }

    document.querySelector("#salidaEj2").innerHTML = 
    `*Papas: ${0.5*comensales} Kilos <br> 
     *Leche: ${100*comensales} ml <br>
     *Manteca: ${30*comensales} gr <br>
     *Huevos: ${1*comensales} unidades <br>`
})
document.querySelector("#btnej3-1").addEventListener("click",()=>{
    
    let asistente = document.querySelector("#asistencia").value;
    if(asistente == ""){
        document.querySelector("#salidaej3").innerHTML = "error - ingresar un nombre en el input;"
        return
    }
    console.log(asistente);
    asistentes.push(asistente);
    console.log(asistentes);
    document.querySelector("#asistencia").value =""
})

let asistentes = [];

document.querySelector("#btnej3-2").addEventListener("click" , () =>{
    document.querySelector ("#salidaej3").innerHTML = ""
    if(asistentes.length == 0){
        document.querySelector("#salidaej3").innerHTML = "error no hay datos guardados"
        return
    }
    asistentes.forEach((nombre, i) => {
        i++;
        console.log(nombre);
        document.querySelector("#salidaej3").innerHTML += i + " -" + nombre + "<br>"
        nombre + "<br>"
    });
});

let carrito = [0, 0 , 0];
document.querySelector("#sumarprod0").addEventListener("click", () =>{
    carrito [0]++;
    actualizarcontador()
})
document.querySelector("#sumarprod1").addEventListener("click", () =>{
    carrito [1]++;
    actualizarcontador()
})
document.querySelector("#sumarprod2").addEventListener("click", () =>{
    carrito [2]++;
    actualizarcontador()
})

function actualizarcontador(){
    let acumulador = 0;
    carrito.forEach((cantidad) => {
        acumulador += cantidad;
    });
    document.querySelector("#contador").innerHTML = acumulador;
}
document.querySelector("#btnej4-1").addEventListener("click" ,() =>{
    document.querySelector("#salidaej4").innerHTML= `Remera roja: ${carrito[0]} <br> 
    Remera verde:${carrito[1]} <br>
    Remera azul ${carrito[2]}`

});
document.querySelector("#btnej4-2").addEventListener("click", () =>{
    carrito [0,0, 0];
    actualizarcontador();
    document.querySelector("#btnej4-1").addEventListener
        document.querySelector("#salidaej4").innerHTML= "";
    
})