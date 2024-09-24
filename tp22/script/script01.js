document.querySelector("#Consola").addEventListener("click",()=>{
    console.log("click en boton1")
    }) 
document.querySelector("#Alerta").addEventListener("click",()=>{
    window.alert("click en boton2")


})
document.querySelector("#Documento").addEventListener("click",()=>{
    document.querySelector("#contenedor").innerHTML += "<br>click en boton3"
    }) 
    
    document.querySelector("#haceclick").addEventListener("click",()=>{
       
        clicks++
        document.querySelector("#contenedor2 span").innerHTML =clicks
    })

    let clicks = 0;

    document.querySelector("#Validar").addEventListener("click",()=>{
       let numero = document.querySelector("#numerico").value;
       console.log(isNaN(numero))
       if(isNaN(numero)){
        document.querySelector("#contenedor3").innerHTML = "este campo no acepta numeros"
       } else {
        document.querySelector("#contenedor3").innerHTML = "validacion exitosa"
       };
    })

