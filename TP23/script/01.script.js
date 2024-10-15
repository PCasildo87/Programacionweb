let datos = {
    nombre: "Pablo",
    apellido: "Casildo",
    mail: "pablo_c87@outlook.com",
    direcion: "calle siempreviva123",
    telefono: "113024776",
    registrado :"true",
};
console.log(datos);
console.log(datos.nombre);
console.log(datos["nombre"])

//Modificando propiedad
datos.nombre ="ignacio";
console.log(datos);

//añadir una propiedad
datos.edad = 37;
console.log(datos);

//Eliminar una propiedad
delete datos.direccion;
console.log(datos)

//loop for in
for(const x in datos){
    console.log(x);
    console.log(datos[x])
    

}
 
const curso = {
    nombre: "Programacion Web",
    sede: "San Martin",
    turno: "tarde",
    inscriptos: 26,
    saludar:() =>{
        console.log("hola alumnos de " + curso.nombre)
    },
    estado:() =>{
        if (curso.inscriptos >25){
        console.log("curso completo");
    } else{
        console.log("curso con vacantes");
    }

    }
}

curso.saludar();
curso.nombre ="sublimacion"
curso.saludar

curso.estado();
curso.inscriptos--;
curso.estado()