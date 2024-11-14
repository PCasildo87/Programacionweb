fetch("./data/data.json")
.then((res) => res.json())
.then((res)=> {console.log(res)
    mostrardatos(res)
})
.catch((err) => {console.log(err)})

function mostrardatos(datos) {
    let vista =  `<table>
    <thead>
        <tr>
        <th>nombre</th>
        <th>apellido</th>
        <th>mail</th>
        <th>direccion</th>
        <th>telefono</th>
        <tr>
        </thead>
        <tbody>`

        datos.forEach((datos) => {
            vista += `<tr>
            <td>${datos.nombre}</td>
            <td>${datos.apellido}</td>
            <td>${datos.mail}</td>
            <td>${datos.direccion}</td>
            <td>${datos.telefono}</td>
            
             </tr>`
        });
        vista +=`</tbody></table>`
            
    document.querySelector("#txt").innerHTML = datos = vista

}