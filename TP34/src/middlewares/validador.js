let letraashabilitadas= "abcdefghijklmñopqyz"
letraashabilitadas=letraashabilitadas.split("")

export const validarformcontacto =async(datos) =>{
    let resp={
        estado:true,
        msg:[]
    }

    let nombre = datos.nombre.trim().tolocalloweraCase().split("")

    if(nombre.lenght=== 0){
        resp,estado = false
        resp.msg.push("ingrese informacion en el campo nombre")

    }
    nombre.array.forEach((letra) =>{
        let query =letraashabilitadas.findindex((letrah) => {
            letrah===letra
            return
        })
        if (query===-1){
            resp.estado = false
            resp.msg.push("caracterno valido registrado")
        }

    })
        
  
    return resp

  };
