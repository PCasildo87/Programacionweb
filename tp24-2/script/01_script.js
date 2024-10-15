let registros = [];

document.querySelector("#registrar").addEventListener("click",() =>{
    let nombre = document.querySelector("#nombre");         
    let apellido = document.querySelector("#apellido");         
    let telefono = document.querySelector("#telefono");         

  if(nombre.value == "" || apellido.value == "" ||telefono.value == ""){
mostrarErrores("debe completar los 3 campos para registrar la informacion")
  return;
  }

 

    let datos = {
  nombre:nombre.value,
    apellido:apellido.value,
    telefono: telefono.value,
}
//console.log(datos)
registros.push(datos);

//Vaciar campos
nombre.value = "";
apellido.value = "";
telefono .value = "";
})
//Manejo de errorres
function mostrarErrores(msg){
  let contError = document.querySelector("#errores");
  contError.innerHTML= msg;
  contError.style.opacity = 1;
   setTimeout (() =>{
    contError.style.opacity = 0;
    contError.innerHTML = "";
   },
   5000);

}
document.querySelector("#errores").addEventListener("click", () =>{
  document.querySelector("#errores").style.opacity = 0;
  document.querySelector("#errores").innerHTML = "";
})


document.querySelector("#mostrar").addEventListener("click", () => {
  let textodeSalida = "";
  if(registros.length === 0){
    mostrarErrores("no hay registros para mostrar")
    return
  }
  registros.forEach((registro) => {
      textodeSalida += `
      <div class="registros">
      <span>Nombre:${registro.nombre}</span>
      <span>Apellido:${registro.apellido}</span>
      <span>Telefono:${registro.telfono}</span>
      </div>`
  })
  //console.log(textodeSalida)
  document.querySelector("#salida span").innerHTML =textodeSalida
  
})  

document.querySelector("#vaciar").addEventListener("click" ,() => {
    document.querySelector("#salida span").innerHTML = "";
    registros =[]
  })