document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();
   let validacion = validaForm();
    if(validacion){
        console.log ("enviar formulario") }
        else{
            console.log("validación rechazada")
    }
   
});
function validaForm(){
    //console.log("validarForm");

    //validar campos vacios
    let nombre = document.querySelector ("#nombre");
    let apellido = document.querySelector ("#apellido");
    let dni = document.querySelector ("#dni");
    if(nombre.value ===""||apellido.value === ""||dni.value === ""){
        window. alert("debe completar todos los campos");
        return false;
    }

    if(dni.value.length !== 8){
        window.alert("el dnidebe tener 8 digitos")
        return false
    }
    // verificar tipo de dato
    if(isNaN(dni.value)){
        windows.alert ("el campo dni solo acepta numeros");
        return false;
    }
    
   let letrasaprobradas = "abcdefghijklmñopqrstuvwyzàéióúáèiò ú".split("")
    let arraynombre = nombre.value.split("");
    arraynombre.forEach((letra)=>{
        //console.log(letra)
        let resultado = letrasaprobradas.indexOf(letra.toLowerCase());
        
        if(resultado === -1){
           //window.alert("el campo nombre solo acepta letras"):
            resp = false;



        }})   
        let arrayapellido = apellido.value.split("");
        arrayapellido.forEach((letra)=>{
            resp = false
            let resultado = letrasaprobradas.indexOf(letra.toLowerCase());
            if(resultado === -1){
            
                resp = false;
    
    
    
            }   

    });
    if(resp){
        window.alert("el campoapellidosolo acepta letras")
        return false;

    }
       document.querySelector("#resultados").innerHTML += `"nombre recibido" ${nombre.value}<br>apellidorecibido ${apellido.value}<br>DNIrecibido${dni.value}`;

        
return true;
    
}