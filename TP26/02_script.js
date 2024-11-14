const datos =[{
    nombre: "Pablo",
    apellido:"Lopez",
    direccion: "calle falsa123",
    mail:"Lopez@yahoo.com",
    telefono:23455783288
},{
    nombre: "Mateo",
    apellido:"Lopez",
    direccion: "calle falsa123",
    mail:"Mateo@yahoo.com",
    telefono:54638954865

},{
    nombre: "Mateo",
    apellido:"Lopez",
    direccion: "calle falsa123",
    mail:"Mateo@yahoo.com",
    telefono:54638954865
}]

//function sincronica

/* function getDatos(){
    return datos
}

console.log(getDatos) */

//function asincronica
/* 
function getDatos(){

    setTimeout(() => datos,2000)
}


console.log(getDatos()) */


//function con promise

function getDatos(){
    return new Promise((res, rej) => {
        setTimeout(() =>res(datos),2000)
        
    })
    getDatos().then((datos) =>{console,log(datos)})

}
//Solucioncon async await

async function getDatos2(){
    let info = new Promise((res, rej) => {
        setTimeout(() =>res(datos),2000)

        
    })
    console.log (await info) 
}

getDatos2()