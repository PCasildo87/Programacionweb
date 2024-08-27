document.querySelector("#boton").addEventListener("click", (e) => {  //eventos javascript lista
    console.log("Hola mundo!!");
    console.log(e);
})  

document.querySelector("#mouse").addEventListener("click", () =>{
    console.log("mouse click")
});

document.querySelector("#mouse").addEventListener("mouseover", () =>{
    console.log("mouse sobre")
});

document.querySelector("#mouse").addEventListener("mouseout", () =>{
    console.log("mouse fuera")
});
document.querySelector("#mouse").addEventListener("mousedown", () =>{
    console.log("mouse abajo")
});
document.querySelector("#mouse").addEventListener("mouseup", () =>{
    console.log("mouse arrriba")
});

document.querySelector("#mouse").addEventListener("wheel", () =>{
    console.log("Rueda del mause")

});

document.querySelector("#mouse").addEventListener("mousemove", (e) => {
    //console.log(e.offsetY + "/" + e.offsetX)
    document.querySelector("#mouse>span").textContent = e.offsetY + "/" + e.offsetX;
});
document.querySelector("#mouse").addEventListener("contextmenu", (e) => {
    e.preventDefault();
})

//Eventos del teclado

document.querySelector("#texto1").addEventListener("keypress",() => {
    console.log("Tecla apretada");
})

document.querySelector("#texto1").addEventListener("keyup",() => {
    console.log("Tecla soltada");
})

document.querySelector("#texto2").addEventListener("keypress",(e) => {
    console.log(e.key);
})



let registro = "";

document.querySelector("#password").addEventListener("keypress",(e) => {
    registro +=e.key;

})

// Eventos de foco

document.querySelector("#foco"). addEventListener("focus",()=>{
    console.log("Enfocado")
    document.querySelector("#foco").style.
    background ="cyan";
})

document.querySelector("#foco"). addEventListener("blur",()=>{
    console.log("desenfocado")
    document.querySelector("#foco").style.
    background ="white";

})

document.querySelector("#parrafo").addEventListener("scroll",(e)=>{
    console.log("scroll")
    console.log(e.target.scrollTop);
    console.log(e.target.scrollHeight);
    console.log(e.target.clientHeight);
    let ubicacionscrroll =e.target.scrollHeight -(e.target.scrollTop + e.target.scrollHeight - e.target)
    let alturaScroll = e.target.scrollHeight - e.target.clientHeight
    let porcentualScroll = ubicacionScrroll/alturaScroll;
    console.log(porcentualScroll);
})
 