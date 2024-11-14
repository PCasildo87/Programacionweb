let Tareas = [];

document.querySelector("#btnAgregar").addEventListener("click", () => {
    cargarTarea()
})

function cargarTarea() {
    if (document.querySelector("#tarea").value == "") {
        window.alert("ingresar un nombre de tarea para registrarla")
        return
    }
    let tarea = {
        id: Tareas.length,
        tarea: document.querySelector("#tarea").value,
        estado: "pendiente"

    }
    // console.log(tarea);

    Tareas.push(tarea)
    localStorage.setItem("Tareas", JSON.stringify(Tareas))

    document.querySelector("#tarea").value = ""
    mostrarDatos()
}

function mostrarDatos() {
    let Tareaslocales = localStorage.getItem("Tareas")
    //console.log(Tareaslocales)
    Tareaslocales = JSON.parse(Tareaslocales) || []
    // console.log(Tareaslocales)
    Tareas = Tareaslocales;
    //console.log(Tareaslocales)
    document.querySelector("tbody").innerHTML = ""
    Tareaslocales.forEach(tarea => {
        if (tarea.estado === "eliminada") {
            return
        }
        //console.log(Tarea)
        document.querySelector("tbody").innerHTML +=
            `<tr>
        <td>${tarea.id}</td>
        <td> ${tarea.tarea}</td>
        <td>${estado()}</td>
        <td>
        <div class="btn btnEditor" data-id="${tarea.id}">Editar</div>
        <div class="btn btnborrar" data-id="${tarea.id}">Borrar</div>
        </td>
        </tr>`

        function estado() {
            if (tarea.estado === "pendiente") {
                return `<div class="btn btnpendiente" data-id="${tarea.id}">pendiente</div>`
            }
            else {
                return `<div class="btn btncompleta" data-id="${tarea.id}">completa</div>`
            }
        }
    }
    )
    //Event listener

    document.querySelectorAll(".btnpendiente").forEach((boton) => {
        boton.addEventListener("click", (e) => {
            // console.log("botonpendiente")
            //console.log(e.target.dataset.id)
            //console.log(Tareas[e.target.dataset.id])
            Tareas[e.target.dataset.id].estado = "completa";
            localStorage.setItem("Tareas", JSON.stringify(Tareas))
            mostrarDatos();
        })
    })

    document.querySelectorAll(".btncompleta").forEach((boton) => {
        boton.addEventListener("click", (e) => {
            // console.log("botonpendiente")
            //console.log(e.target.dataset.id)
            //console.log(Tareas[e.target.dataset.id])
            Tareas[e.target.dataset.id].estado = "pendiente";
            localStorage.setItem("Tareas", JSON.stringify(Tareas))
            mostrarDatos();
        })
    })


    document.querySelectorAll(".btnborrar").forEach((boton) => {
        boton.addEventListener("click", (e) => {
            // console.log("botonpendiente")
            //console.log(e.target.dataset.id)
            //console.log(Tareas[e.target.dataset.id])
            Tareas[e.target.dataset.id].estado = "eliminada";
            localStorage.setItem("Tareas", JSON.stringify(Tareas))
            mostrarDatos();
        })
    })
    document.querySelectorAll(".btnEditor").forEach((boton) => {
        boton.addEventListener("click", (e)=>{
            modificartarea(e.target.dataset.id)

        })
    })

}
mostrarDatos();
function modificartarea(id){
    document.querySelector("#cortina").style.display="flex"
    document.querySelector("#modificarid").value =Tareas[id].id
    document.querySelector("#modificartarea").value = Tareas[id].tarea
    document.querySelector("#modificarestado").value = Tareas[id].estado
}

document.querySelector("#btncancelarmodificartarea").addEventListener("click",() =>{
    document.querySelector("#cortina").style.display ="none"
})

document.querySelector("#btnmodificar").addEventListener("click" , () =>{
    let id = document.querySelector("#modificarid").value
    Tareas[id].tarea = document.querySelector("#modificartarea").value
    Tareas[id].estado = document.querySelector("#modificarestado").value 
    localStorage.setItem("Tareas", JSON.stringify(Tareas))

    document.querySelector("#tarea").value = ""
    mostrarDatos()
document.querySelector("#cortina").style.display ="none"
})