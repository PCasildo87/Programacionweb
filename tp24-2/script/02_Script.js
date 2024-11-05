let cursos = [
    {
        id: 1,
        nombre: "Programacion Web",
        calificacion: false,
        notas: [],
        alumnos:[1, 2, 3, 4]

    },
    {
        id: 2,
        nombre: "Pensamiento computacional",
        calificacion: true,
        notas: [10, 9],
        alumnos:[ 2,  4]
    },
    {
        id: 3,
        nombre: "sublimacion",
        calificacion: false,
        notas: [],
        alumnos:[1 , 2]

    },
    {
        id: 4,
        nombre: "impresion 3D",
        calificacion: true,
        notas: [10 , 9 , 5],
        alumnos:[ 2, 3, 4]
    }
]
cursos.forEach((curso) =>{
    document.querySelector("#cursos").innerHTML += `
    <div class= "curso">
    <h1>${curso.nombre}</h1>
    <span>Alumnos: ${curso.alumnos.length}</span>
    <span>Calificado: ${curso.calificacion}</span>
    <span>
    <div class="btn">Abrir</div>
    </span>
    </div>`
})