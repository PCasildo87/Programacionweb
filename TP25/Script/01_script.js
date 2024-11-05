localStorage.setItem("curso", "programacion web");

let cursolocal = localStorage.getItem("curso")

document.querySelector("#caja1").innerHTML = cursolocal

//-----------------

const datospersonales = {
    nombre: "Pablo",
    apellido: "Casildo",
    mail: "Pablo_c87@outlook",
    telefono: 1130204776
}

document.querySelector("#grabar").addEventListener("click", () => {
    localStorage.setItem("datospersonales", JSON.stringify(datospersonales))
})
document.querySelector("#obtener").addEventListener("click", () => {
    let datoslocales = localStorage.getItem("datospersonales")

    document.querySelector("#caja2").innerHTML = datoslocales
    console.log(datoslocales)
    datoslocales = JSON.parse(datoslocales)
    console.log(datoslocales)

    document.querySelector("#caja2").innerHTML = `nombre: ${datoslocales.nombre} <br> apellido`
        ${datoslocales.apellido}




})

document.querySelector("#limpiar").addEventListener("click",() => {
    document.querySelector("#caja2").innerHTML = "";
    localStorage.clear();
})