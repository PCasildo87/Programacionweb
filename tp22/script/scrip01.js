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

    document.querySelector("#Validarinputnumerico").addEventListener("click",()=>{
        let numero = document.querySelector("#numerico").value
    })
